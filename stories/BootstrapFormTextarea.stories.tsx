import { Meta, StoryFn } from '@storybook/react';
import { BootstrapFormTextarea } from '@neinteractiveliterature/litform';
import { ComponentProps } from 'react';

export default {
  title: 'Forms/BootstrapFormTextarea',
  component: BootstrapFormTextarea,
  argTypes: {
    label: { control: 'text' },
    hideLabel: { control: 'boolean' },
    helpText: { control: 'text' },
    invalidFeedback: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `A \`<textarea>\` tag and a matching \`<label>\`, styled for Bootstrap.  All normal
          properties of \`<textarea>\` except \`onChange\` are supported, so you can pass \`value={...}\`,
          \`className={...}\`, etc.  To listen for changes, use \`onTextChange\`.`,
      },
    },
  },
} as Meta;

const Template: StoryFn<ComponentProps<typeof BootstrapFormTextarea>> = (args) => (
  <BootstrapFormTextarea {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  label: 'Enter your life story here:',
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: 'Enter your life story here:',
  className: 'form-control is-invalid',
  invalidFeedback: 'Invalid life story.',
};
