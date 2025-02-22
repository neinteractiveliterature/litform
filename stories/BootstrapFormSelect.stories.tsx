import { Meta, StoryFn } from '@storybook/react';
import { BootstrapFormSelect, BootstrapFormSelectProps } from '@neinteractiveliterature/litform';

export default {
  title: 'Forms/BootstrapFormSelect',
  component: BootstrapFormSelect,
  argTypes: {
    label: { control: 'text' },
    hideLabel: { control: 'boolean' },
    helpText: { control: 'text' },
    invalidFeedback: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `A \`<select>\` tag and a matching \`<label>\`, styled for Bootstrap.  All normal
          properties of \`<select>\` except \`onChange\` are supported, so you can pass \`value={...}\`,
          \`className={...}\`, etc.  To listen for changes, use \`onValueChange\`.`,
      },
    },
  },
} as Meta;

const Template: StoryFn<BootstrapFormSelectProps> = (args) => (
  <BootstrapFormSelect {...args}>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
  </BootstrapFormSelect>
);

export const Basic = Template.bind({});
Basic.args = {
  label: 'Bubblegum, bubblegum, in a dish.  How many pieces do you wish?',
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: 'Please do NOT pick a number.',
  className: 'form-control is-invalid',
  invalidFeedback: "I said don't pick a number!  What is so hard about this.",
};
