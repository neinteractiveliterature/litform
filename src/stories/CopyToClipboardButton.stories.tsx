import { Meta, Story } from '@storybook/react';
import CopyToClipboardButton, { CopyToClipboardButtonProps } from '../CopyToClipboardButton';

export default {
  title: 'Buttons/CopyToClipboardButton',
  component: CopyToClipboardButton,
  argTypes: {
    // label: { control: 'text' },
    // hideLabel: { control: 'boolean' },
    // helpText: { control: 'text' },
    // invalidFeedback: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `A <button> tag which, when clicked, will copy some specified text to the
        user's clipboard, and then display a message (by default, "Copied!").`,
      },
    },
  },
} as Meta;

const Template: Story<CopyToClipboardButtonProps> = (args) => <CopyToClipboardButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  text: 'This is the text copied to the clipboard by the button.',
};
