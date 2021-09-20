import { Meta, Story } from '@storybook/react';
import MultipleChoiceInput, { MultipleChoiceInputProps } from '../MultipleChoiceInput';

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

const Template: Story<MultipleChoiceInputProps> = (args) => <MultipleChoiceInput {...args} />;

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
