import {
  useState,
  useCallback,
  ReactNode,
  useRef,
  useEffect,
  useMemo,
  useLayoutEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';
import * as React from 'react';
import classNames from 'classnames';
import { ApolloError } from '@apollo/client';

import { EditorState } from '@codemirror/state';
import { EditorView, basicSetup } from '@codemirror/basic-setup';
import { indentWithTab } from '@codemirror/commands';
import { keymap } from '@codemirror/view';
import type { Extension } from '@codemirror/state';
import type { ViewUpdate } from '@codemirror/view';

import ErrorDisplay from './ErrorDisplay';
import LoadingIndicator from './LoadingIndicator';

function getStyleForLines(lines: number | undefined) {
  const height = `${(lines ?? 6) * 1.4}rem`;
  return { minHeight: height };
}

function buildHeightTheme(lines: number | undefined) {
  return EditorView.theme({
    '.cm-content, .cm-gutter': getStyleForLines(lines),
  });
}

export type CodeInputProps = {
  className?: string;
  onChange: (value: string) => void;
  getPreviewContent?: (value: string) => Promise<ReactNode>;
  value: string;
  editButtonText?: string;
  previewButtonText?: string;
  disabled?: boolean;
  extensions?: Extension[];
  extraNavControls?: ReactNode;
  lines?: number;
  formControlClassName?: string;
  editorWrapperClassName?: string;
  children?: ReactNode;
  renderPreview?: (previewContent: ReactNode) => ReactNode;
};

function useCodeMirror(extensions: Extension[]) {
  const editorView = useMemo<EditorView>(() => {
    const initialState = EditorState.create({
      extensions: [basicSetup, ...extensions],
    });

    return new EditorView({ state: initialState });
  }, [extensions]);

  useLayoutEffect(() => {
    return () => {
      editorView.dom.parentElement?.removeChild(editorView.dom);
    };
  }, [editorView]);

  const editorRef = useCallback<React.RefCallback<HTMLElement>>(
    (element) => {
      element?.appendChild(editorView.dom);
    },
    [editorView],
  );

  return [editorRef, editorView] as const;
}

export default forwardRef(function CodeInput(
  {
    onChange,
    value,
    getPreviewContent,
    disabled,
    extraNavControls,
    extensions,
    className,
    lines,
    formControlClassName,
    editorWrapperClassName,
    children,
    renderPreview,
    editButtonText,
    previewButtonText,
  }: CodeInputProps,
  ref: React.ForwardedRef<EditorView>,
): JSX.Element {
  const [previewing, setPreviewing] = useState(false);
  const [previewContent, setPreviewContent] = useState<ReactNode | null>(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [previewError, setPreviewError] = useState<ApolloError | null>(null);
  const valueRef = useRef<string>(value);
  const onChangeRef = useRef<typeof onChange>(onChange);

  const fullExtensions = useMemo(
    () => [
      keymap.of([indentWithTab]),
      buildHeightTheme(lines),
      ...(extensions ?? []),
      EditorView.updateListener.of((update: ViewUpdate) => {
        if (update.docChanged) {
          const newDoc = update.state.doc.toString();
          if (newDoc !== valueRef.current) {
            onChangeRef.current(update.state.doc.toString());
          }
          setPreviewContent(null);
        }
      }),
    ],
    [extensions, lines],
  );

  const [editorRef, editorView] = useCodeMirror(fullExtensions);
  useImperativeHandle(ref, () => editorView);

  useEffect(() => {
    valueRef.current = value;
    if (editorView && value !== editorView.state.doc.toString()) {
      editorView.dispatch({
        changes: [
          { from: 0, to: editorView.state.doc.length },
          { from: 0, insert: value },
        ],
      });
    }
  }, [value, editorView]);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  const editTabClicked = useCallback((event) => {
    event.preventDefault();
    setPreviewing(false);
  }, []);

  const previewTabClicked = async (event: React.MouseEvent) => {
    event.preventDefault();

    if (!getPreviewContent) {
      return;
    }

    setPreviewing(true);

    if (previewContent == null) {
      setPreviewLoading(true);

      try {
        const content = await getPreviewContent(value);
        setPreviewContent(content);
        setPreviewLoading(false);
      } catch (error) {
        setPreviewLoading(false);
        setPreviewError(error);
      }
    }
  };

  const renderPreviewContent = () => {
    if (previewLoading) {
      return <LoadingIndicator />;
    }

    if (previewError) {
      return <ErrorDisplay graphQLError={previewError} />;
    }

    if (renderPreview) {
      return renderPreview(previewContent ?? '');
    }

    return (
      <div className="p-2" style={getStyleForLines(lines)}>
        {previewContent ?? ''}
      </div>
    );
  };

  const renderContent = () => {
    if (previewing) {
      return renderPreviewContent();
    }

    return <div ref={editorRef} />;
  };

  const renderNav = () => {
    if (!getPreviewContent && !extraNavControls) {
      return null;
    }

    return (
      <ul className="nav nav-pills bg-light p-1">
        <li className="nav-item">
          <button
            type="button"
            className={classNames('btn btn-link nav-link py-0 px-2', { active: !previewing })}
            onClick={editTabClicked}
          >
            {editButtonText ?? 'Edit'}
          </button>
        </li>
        {getPreviewContent && (
          <li className="nav-item">
            <button
              type="button"
              className={classNames('btn btn-link nav-link py-0 px-2', { active: previewing })}
              onClick={previewTabClicked}
            >
              {previewButtonText ?? 'Preview'}
            </button>
          </li>
        )}
        {extraNavControls}
      </ul>
    );
  };

  return (
    <div className={className}>
      <div
        className={classNames(`form-control p-0 litform-code-input`, formControlClassName)}
        style={{ overflow: 'hidden' }}
      >
        {renderNav()}
        <div
          className={classNames(editorWrapperClassName, {
            'bg-disabled': disabled,
          })}
        >
          {renderContent()}
        </div>
      </div>
      {children}
    </div>
  );
});
