import { useState, useCallback, ReactNode, useEffect } from 'react';
import * as React from 'react';
import classNames from 'classnames';

import { getStyleForLines } from './useCodeMirror';
import { ErrorDisplay, LoadingIndicator } from '@neinteractiveliterature/litform-core';

export type CodeInputProps = {
  editorRef: React.Ref<HTMLDivElement>;
  value: string;
  className?: string;
  getPreviewContent?: (value: string) => Promise<ReactNode>;
  editButtonText?: string;
  previewButtonText?: string;
  disabled?: boolean;
  extraNavControls?: ReactNode | ReactNode[];
  lines?: number;
  formControlClassName?: string;
  editorWrapperClassName?: string;
  children?: ReactNode | ReactNode[];
  renderPreview?: (previewContent: ReactNode | ReactNode[]) => ReactNode;
};

export default function CodeInput({
  editorRef,
  value,
  getPreviewContent,
  disabled,
  extraNavControls,
  className,
  lines,
  formControlClassName,
  editorWrapperClassName,
  children,
  renderPreview,
  editButtonText,
  previewButtonText,
}: CodeInputProps): React.JSX.Element {
  const [previewing, setPreviewing] = useState(false);
  const [previewContent, setPreviewContent] = useState<ReactNode | null>(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [previewError, setPreviewError] = useState<Error | null>(null);

  useEffect(() => {
    setPreviewContent(null);
  }, [value]);

  const editTabClicked = useCallback((event: React.MouseEvent) => {
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
}
