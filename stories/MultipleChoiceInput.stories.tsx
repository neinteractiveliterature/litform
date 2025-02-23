import { Meta, StoryFn } from '@storybook/react';
import { MultipleChoiceInput } from '@neinteractiveliterature/litform';
import { ComponentProps } from 'react';

export default {
  title: 'Forms/MultipleChoiceInput',
  component: MultipleChoiceInput,
  argTypes: {
    // label: { control: 'text' },
    // hideLabel: { control: 'boolean' },
    // helpText: { control: 'text' },
    // invalidFeedback: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `A \`<ChoiceSet>\` wrapped in a \`<fieldset>\` tag with a legend.`,
      },
    },
  },
} as Meta;

const Template: StoryFn<ComponentProps<typeof MultipleChoiceInput>> = (args) => (
  <MultipleChoiceInput {...args} />
);

export const SingleChoice = Template.bind({});
SingleChoice.args = {
  caption: 'Pick an ice cream flavor',
  choices: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'strawberry', label: 'Strawberry' },
  ],
  value: 'strawberry',
};

export const MultipleChoice = Template.bind({});
MultipleChoice.args = {
  caption: 'Pick as many ice cream flavors as you like',
  multiple: true,
  choices: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'strawberry', label: 'Strawberry' },
  ],
  value: ['chocolate', 'strawberry'],
};
