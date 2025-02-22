import { Meta, StoryFn } from '@storybook/react';
import { PageLoadingIndicator, PageLoadingIndicatorProps } from '@neinteractiveliterature/litform';

export default {
  title: 'Loading/PageLoadingIndicator',
  component: PageLoadingIndicator,
  argTypes: {
    visible: { control: 'boolean' },
    iconSet: { control: 'radio', options: ['bootstrap-icons'] },
    // label: { control: 'text' },
    // hideLabel: { control: 'boolean' },
    // helpText: { control: 'text' },
    // invalidFeedback: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `A larger loading indicator that can fade in and out.`,
      },
    },
  },
} as Meta;

const Template: StoryFn<PageLoadingIndicatorProps> = (args) => <PageLoadingIndicator {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  visible: true,
};
