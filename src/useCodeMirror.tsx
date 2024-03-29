import { useMemo, useEffect, useRef, RefCallback, useCallback } from 'react';
import { EditorState, Extension } from '@codemirror/state';
import { EditorView, basicSetup } from 'codemirror';
import { indentWithTab } from '@codemirror/commands';
import { keymap, ViewUpdate } from '@codemirror/view';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags } from '@lezer/highlight';

export const bootstrapLightEditorViewTheme = EditorView.theme({
  '&': {
    fontSize: 'calc(var(--bs-body-font-size) * 0.875)',
    fontFamily: 'var(--bs-font-monospace)',
    lineHeight: 'auto',
    background: 'transparent',
  },
  '.cm-scroller': {
    fontFamily: 'var(--bs-font-monospace)',
  },
});

export const bootstrapLightHighlightStyle = HighlightStyle.define([
  { tag: tags.strong, fontWeight: 'bold' },
  { tag: tags.emphasis, fontStyle: 'italic' },
  { tag: tags.heading, color: 'var(--bs-blue)' },
  { tag: tags.quote, color: 'var(--bs-green)' },
  { tag: tags.keyword, color: 'var(--bs-purple)' },
  { tag: tags.atom, color: 'var(--bs-indigo)' },
  { tag: tags.number, color: 'var(--bs-teal)' },
  { tag: tags.definitionKeyword, color: 'var(--bs-blue)' },
  { tag: tags.variableName, color: 'var(--bs-indigo)' },
  { tag: tags.typeName, color: 'var(--bs-cyan)' },
  { tag: tags.comment, color: 'var(--bs-pink)' },
  { tag: tags.string, color: 'var(--bs-orange)' },
  { tag: tags.meta, color: 'var(--bs-teal)' },
  { tag: tags.modifier, color: '#6c757d', 'font-style': 'italic' },
  { tag: tags.bracket, color: 'var(--bs-green)' },
  { tag: tags.tagName, color: 'var(--bs-green)' },
  { tag: tags.propertyName, color: 'var(--bs-indigo)' },
  { tag: tags.link, color: 'var(--bs-blue)' },
  { tag: tags.invalid, backgroundColor: 'var(--bs-danger)' },
]);

export const bootstrapLightTheme: Extension = [
  bootstrapLightEditorViewTheme,
  syntaxHighlighting(bootstrapLightHighlightStyle),
];

export function getStyleForLines(lines: number | undefined): { minHeight: string } {
  const height = `${(lines ?? 6) * 1.4}rem`;
  return { minHeight: height };
}

export function buildHeightTheme(lines: number | undefined): Extension {
  return EditorView.theme({
    '.cm-content, .cm-gutter': getStyleForLines(lines),
  });
}

export function useCodeMirrorOnChangeExtension(
  value: string,
  onChange: React.Dispatch<string>,
): Extension {
  const valueRef = useRef<string>(value);
  const onChangeRef = useRef<typeof onChange>(onChange);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  const extension = useMemo(
    () =>
      EditorView.updateListener.of((update: ViewUpdate) => {
        if (update.docChanged) {
          const newDoc = update.state.doc.toString();
          if (newDoc !== valueRef.current) {
            onChangeRef.current(update.state.doc.toString());
          }
        }
      }),
    [],
  );

  return extension;
}

export function useControlledCodeMirror(editorView: EditorView, value: string): void {
  useEffect(() => {
    if (editorView && value !== editorView.state.doc.toString()) {
      editorView.dispatch({
        changes: [
          { from: 0, to: editorView.state.doc.length },
          { from: 0, insert: value },
        ],
      });
    }
  }, [editorView, value]);
}

export type UseStandardCodeMirrorExtensionsOptions = {
  enableIndentWithTab?: boolean;
  lines?: number;
  theme?: Extension;
  value: string;
  onChange: React.Dispatch<string>;
};

export function useStandardCodeMirrorExtensions({
  lines = 6,
  enableIndentWithTab = true,
  theme,
  value,
  onChange,
}: UseStandardCodeMirrorExtensionsOptions): Extension[] {
  const onChangeExtension = useCodeMirrorOnChangeExtension(value, onChange);

  return useMemo(
    () => [
      ...(enableIndentWithTab ? [keymap.of([indentWithTab])] : []),
      theme ?? bootstrapLightTheme,
      buildHeightTheme(lines),
      EditorView.lineWrapping,
      onChangeExtension,
    ],
    [enableIndentWithTab, theme, lines, onChangeExtension],
  );
}

export type UseCodeMirrorResult<ElementType extends HTMLElement> = [
  RefCallback<ElementType>,
  EditorView,
];

export function useCodeMirror<ElementType extends HTMLElement>(
  extensions: Extension[],
  initialDoc?: string,
): UseCodeMirrorResult<ElementType> {
  const initialDocRef = useRef<string | undefined>(initialDoc);
  const editorView = useMemo<EditorView>(() => {
    const initialState = EditorState.create({
      doc: initialDocRef.current,
      extensions: [basicSetup, ...extensions],
    });

    return new EditorView({ state: initialState });
  }, [extensions]);
  const editorRef: RefCallback<ElementType> = useCallback(
    (parent: ElementType) => {
      if (parent && parent !== editorView.dom.parentElement) {
        parent.appendChild(editorView.dom);
      } else if (editorView.dom.parentElement) {
        editorView.dom.parentElement.removeChild(editorView.dom);
      }
    },
    [editorView],
  );

  return [editorRef, editorView];
}

export function useStandardCodeMirror<ElementType extends HTMLElement = HTMLDivElement>(
  options: UseStandardCodeMirrorExtensionsOptions & { extensions: Extension[] },
): UseCodeMirrorResult<ElementType> {
  const standardExtensions = useStandardCodeMirrorExtensions(options);
  const fullExtensions = useMemo(
    () => [...standardExtensions, ...options.extensions],
    [standardExtensions, options.extensions],
  );

  const [editorRef, editorView] = useCodeMirror<ElementType>(fullExtensions, options.value);
  useControlledCodeMirror(editorView, options.value);
  return [editorRef, editorView];
}
