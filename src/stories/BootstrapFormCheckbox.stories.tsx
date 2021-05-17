import { Meta, Story } from '@storybook/react';
import BootstrapFormCheckbox, { BootstrapFormCheckboxProps } from '../BootstrapFormCheckbox';

export default {
  title: 'Forms/BootstrapFormCheckbox',
  component: BootstrapFormCheckbox,
  argTypes: {
    label: { control: 'text' },
    hideLabel: { control: 'boolean' },
    helpText: { control: 'text' },
    invalidFeedback: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `An checkbox or radio button, and a matching \`<label>\`, styled for Bootstrap.
          All normal properties of \`<input>\` are supported, so you can pass \`checked={...}\`,
          \`onChange={...}\`, etc.`,
      },
    },
  },
} as Meta;

const Template: Story<BootstrapFormCheckboxProps> = (args) => <BootstrapFormCheckbox {...args} />;

export const BasicCheckbox = Template.bind({});
BasicCheckbox.args = {
  label: 'Unsubscribe?',
};

export const BasicRadio = Template.bind({});
BasicRadio.args = {
  label: 'Blue',
  type: 'radio',
};
