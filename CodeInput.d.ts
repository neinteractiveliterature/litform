import { ReactNode } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
import * as React from 'react';
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
export default function CodeInput({ editorRef, value, getPreviewContent, disabled, extraNavControls, className, lines, formControlClassName, editorWrapperClassName, children, renderPreview, editButtonText, previewButtonText, }: CodeInputProps): JSX.Element;
