import { RefCallback } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
import { Extension } from '@codemirror/state';
import { EditorView } from 'codemirror';
import { HighlightStyle } from '@codemirror/language';
export declare const bootstrapLightEditorViewTheme: Extension;
export declare const bootstrapLightHighlightStyle: HighlightStyle;
export declare const bootstrapLightTheme: Extension;
export declare function getStyleForLines(lines: number | undefined): {
    minHeight: string;
};
export declare function buildHeightTheme(lines: number | undefined): Extension;
export declare function useCodeMirrorOnChangeExtension(value: string, onChange: React.Dispatch<string>): Extension;
export declare function useControlledCodeMirror(editorView: EditorView, value: string): void;
export type UseStandardCodeMirrorExtensionsOptions = {
    enableIndentWithTab?: boolean;
    lines?: number;
    theme?: Extension;
    value: string;
    onChange: React.Dispatch<string>;
};
export declare function useStandardCodeMirrorExtensions({ lines, enableIndentWithTab, theme, value, onChange, }: UseStandardCodeMirrorExtensionsOptions): Extension[];
export type UseCodeMirrorResult<ElementType extends HTMLElement> = [
    RefCallback<ElementType>,
    EditorView
];
export declare function useCodeMirror<ElementType extends HTMLElement>(extensions: Extension[], initialDoc?: string): UseCodeMirrorResult<ElementType>;
export declare function useStandardCodeMirror<ElementType extends HTMLElement = HTMLDivElement>(options: UseStandardCodeMirrorExtensionsOptions & {
    extensions: Extension[];
}): UseCodeMirrorResult<ElementType>;
