import { Meta, StoryFn } from '@storybook/react';
import { CopyToClipboardButton } from '@neinteractiveliterature/litform';
import { ComponentProps } from 'react';

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
        component: `A \`<button>\` tag which, when clicked, will copy some specified text to the
        user's clipboard, and then display a message (by default, "Copied!").`,
      },
    },
  },
} as Meta;

const Template: StoryFn<ComponentProps<typeof CopyToClipboardButton>> = (args) => (
  <CopyToClipboardButton {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  text: 'This is the text copied to the clipboard by the button.',
  className: 'btn btn-secondary',
};
