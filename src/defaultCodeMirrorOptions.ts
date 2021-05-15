import { EditorConfiguration } from 'codemirror';

const DefaultCodeMirrorOptions: EditorConfiguration = {
  lineNumbers: true,
  foldGutter: true,
  lineWrapping: true,
  matchBrackets: true,
  tabSize: 2,
  indentWithTabs: false,
  gutters: ['CodeMirror-foldgutter', 'CodeMirror-linenumbers'],
  extraKeys: {
    Tab: (cm) => {
      // always use spaces, not tabs
      const spaces = Array((cm.getOption('indentUnit') ?? 2) + 1).join(' ');
      cm.replaceSelection(spaces);
    },
  },
};

export default DefaultCodeMirrorOptions;
