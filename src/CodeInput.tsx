import { useState, useCallback, ReactNode } from 'react';
import * as React from 'react';
import { Controlled as CodeMirror, IControlledCodeMirror, DomEvent } from 'react-codemirror2';
import classNames from 'classnames';
import { ApolloError } from '@apollo/client';

import { EditorConfiguration } from 'codemirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/mode/multiplex';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/matchtags';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/markdown-fold';
import 'codemirror/addon/fold/xml-fold';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/foldgutter.css';

import defaultCodeMirrorOptions from './defaultCodeMirrorOptions';
import ErrorDisplay from './ErrorDisplay';
import LoadingIndicator from './LoadingIndicator';

import '../Codemirror/LiquidMultiplexModes';

export type CodeInputProps = Omit<IControlledCodeMirror, 'onChange' | 'onBeforeChange'> & {
  onChange: (value: string) => void;
  getPreviewContent?: (value: string) => Promise<ReactNode>;
  mode: string;
  editButtonText?: string;
  previewButtonText?: string;
  disabled?: boolean;
  codeMirrorOptions?: EditorConfiguration;
  extraNavControls?: ReactNode;
  lines?: number;
  formControlClassName?: string;
  editorWrapperClassName?: string;
  children?: ReactNode;
  renderPreview?: (previewContent: ReactNode) => ReactNode;
};

function CodeInput({
  onBlur,
  onChange,
  value,
  getPreviewContent,
  mode,
  disabled,
  codeMirrorOptions,
  extraNavControls,
  className,
  lines,
  formControlClassName,
  editorWrapperClassName,
  children,
  renderPreview,
  editButtonText,
  previewButtonText,
  ...props
}: CodeInputProps) {
  const [previewing, setPreviewing] = useState(false);
  const [previewContent, setPreviewContent] = useState<ReactNode | null>(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [previewError, setPreviewError] = useState<ApolloError | null>(null);

  const onBeforeChange = useCallback(
    (editor, data, newValue) => {
      onChange(newValue);
      setPreviewContent(null);
    },
    [onChange],
  );

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

    return <div className="markdown-preview">{previewContent ?? ''}</div>;
  };

  const renderContent = () => {
    if (previewing) {
      return renderPreviewContent();
    }

    // react-codemirror2 doesn't want event handlers to be passed undefined
    const eventHandlers: { onBlur?: DomEvent } = {};
    if (onBlur) {
      eventHandlers.onBlur = onBlur;
    }

    return (
      <CodeMirror
        value={value}
        options={{
          ...defaultCodeMirrorOptions,
          lineNumbers: false,
          foldGutter: false,
          gutters: [],
          mode,
          readOnly: disabled ? 'nocursor' : false,
          ...(codeMirrorOptions || {}),
        }}
        {...eventHandlers}
        onBeforeChange={onBeforeChange}
        {...props}
      />
    );
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
        className={classNames(
          `form-control p-0 intercode-code-input codemirror-height-${lines || 10}`,
          formControlClassName,
        )}
        style={{ overflow: 'hidden' }}
      >
        {renderNav()}
        <div
          className={classNames('form-control border-0', editorWrapperClassName, {
            'bg-disabled': disabled,
          })}
        >
          {renderContent()}
        </div>
      </div>
      {children}
    </div>
  );
}

export default CodeInput;
