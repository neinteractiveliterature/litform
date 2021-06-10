import { Meta, Story } from '@storybook/react';
import CodeInput, { CodeInputProps } from '../CodeInput';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { useMemo } from 'react';

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

const Template: Story<CodeInputProps> = (args, context) => {
  const extensions = useMemo(
    () => [javascript(), ...(context.parameters.darkTheme ? [oneDark] : [])],
    [context.parameters.darkTheme],
  );
  return (
    <CodeInput
      {...args}
      extensions={extensions}
      getPreviewContent={async (text) => text}
      onChange={(newValue) => {
        console.log(`Value changed to: ${newValue}`);
      }}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  value: `function addNumbers(a, b) {
  return a + b;
}`,
  lines: 10,
  // text: 'This is the text copied to the clipboard by the button.',
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
  value: `function addNumbers(a, b) {
  return a + b;
}`,
  lines: 10,
  // text: 'This is the text copied to the clipboard by the button.',
};

DarkTheme.parameters = {
  darkTheme: true,
  docs: {
    source: {
      type: 'code',
    },
  },
};
