import { Meta, StoryFn } from '@storybook/react';
import { CodeInput, useStandardCodeMirror, liquid } from '@neinteractiveliterature/litform';
import { markdown } from '@codemirror/lang-markdown';
import { oneDark } from '@codemirror/theme-one-dark';
import ReactMarkdown from 'react-markdown';
import { useCallback, useMemo } from 'react';
import { useArgs } from '@storybook/preview-api';

export default {
  title: 'Forms/CodeInput',
  component: CodeInput,
  argTypes: {
    value: { control: 'text' },
    lines: { control: 'number' },
  },
  parameters: {
    docs: {
      description: {
        component: `An editor for code, based on CodeMirror.`,
      },
    },
  },
} as Meta;

type CodeInputStoryArgs = {
  value: string;
  lines: number;
};

const Template: StoryFn<CodeInputStoryArgs> = (args, context) => {
  const [, updateArgs] = useArgs();
  const onChange = useCallback(
    (value: string) => {
      updateArgs({ value });
    },
    [updateArgs],
  );
  const extensions = useMemo(
    () => [context.parameters.languageExtension ?? markdown()],
    [context.parameters.languageExtension],
  );
  const [editorRef] = useStandardCodeMirror({
    extensions,
    lines: args.lines,
    value: args.value,
    onChange,
    theme: context.parameters.darkTheme ? oneDark : undefined,
  });

  return (
    <CodeInput
      {...args}
      value={args.value}
      editorRef={editorRef}
      getPreviewContent={async (markdownContent) => (
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      )}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  value: `This is a **Markdown** editor with preview capabilities.  Neat, right?`,
  lines: 10,
};

Basic.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  value: `This is a **Markdown** editor with preview capabilities.  Neat, right?`,
  lines: 10,
};

DarkTheme.parameters = {
  darkTheme: true,
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const Liquid = Template.bind({});
Liquid.args = {
  value: `<p>This is a Liquid editor showing off the mixed HTML/Markdown mode.</p>

<p>This is a Liquid variable substitution with a filter: {{ x | downcase }}</p>

<ul>
  {% for value in array %}
  <li>{{ value }}</li>
  {% endfor %}
</ul>`,
  lines: 10,
};
Liquid.parameters = {
  languageExtension: liquid(),
  docs: {
    source: {
      type: 'code',
    },
  },
};
