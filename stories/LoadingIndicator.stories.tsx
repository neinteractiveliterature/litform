import { Meta, StoryFn } from '@storybook/react';
import { LoadingIndicator } from '@neinteractiveliterature/litform';
import { ComponentProps } from 'react';

export default {
  title: 'Loading/LoadingIndicator',
  component: LoadingIndicator,
  argTypes: {
    size: { control: 'number', min: 1, max: 6 },
    iconSet: { control: 'radio', options: ['bootstrap-icons'] },
    // label: { control: 'text' },
    // hideLabel: { control: 'boolean' },
    // helpText: { control: 'text' },
    // invalidFeedback: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `A spinner.`,
      },
    },
  },
} as Meta;

const Template: StoryFn<ComponentProps<typeof LoadingIndicator>> = (args) => (
  <LoadingIndicator {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  size: 5,
};
