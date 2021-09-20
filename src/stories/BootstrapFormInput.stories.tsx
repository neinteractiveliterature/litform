import { Meta, Story } from '@storybook/react';
import BootstrapFormInput, { BootstrapFormInputProps } from '../BootstrapFormInput';

export default {
  title: 'Forms/BootstrapFormInput',
  component: BootstrapFormInput,
  argTypes: {
    label: { control: 'text' },
    hideLabel: { control: 'boolean' },
    helpText: { control: 'text' },
    invalidFeedback: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `An \`<input>\` tag and a matching \`<label>\`, styled for Bootstrap.  All normal
          properties of \`<input>\` except \`onChange\` are supported, so you can pass \`value={...}\`,
          \`className={...}\`, etc.  To listen for changes, use \`onTextChange\`.`,
      },
    },
  },
} as Meta;

const Template: Story<BootstrapFormInputProps> = (args) => <BootstrapFormInput {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'First name',
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: 'Email address',
  type: 'email',
  value: 'not-valid@@gmail.com',
  className: 'form-control is-invalid',
  invalidFeedback: 'Please enter a valid email address.',
};
