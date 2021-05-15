import { defineMode, multiplexingMode, getMode, EditorConfiguration } from 'codemirror';

// Adapted from https://github.com/CristinaSolana/codemirror-liquid-multiplex

const defineMultiplexingMode =
  (...modeNames: string[]) =>
  (config: EditorConfiguration) =>
    multiplexingMode(
      ...modeNames.map((modeName) => getMode(config, modeName)),
      {
        open: '{{',
        close: '}}',
        mode: getMode(config, 'text/x-liquid'),
        delimStyle: 'liquid variable variable-2',
        innerStyle: 'liquid variable variable-2',
      },
      // @ts-expect-error
      {
        open: '{%',
        close: '%}',
        mode: getMode(config, 'text/x-liquid'),
        delimStyle: 'liquid variable-2 special keyword',
        innerStyle: 'liquid variable-2 special keyword',
      },
    );

defineMode('liquid-html', defineMultiplexingMode('text/html'));
defineMode('liquid-markdown', defineMultiplexingMode('markdown'));
