import { Meta, StoryFn } from '@storybook/react';
import { ChoiceSet } from '@neinteractiveliterature/litform';
import { ComponentProps } from 'react';

export default {
  title: 'Forms/ChoiceSet',
  component: ChoiceSet,
  argTypes: {
    // label: { control: 'text' },
    // hideLabel: { control: 'boolean' },
    // helpText: { control: 'text' },
    // invalidFeedback: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `An array of checkboxes or radio buttons representing a choice.  Choices are passed
        via the \`choices\` prop, which is an array of objects containing at least a \`value\` and a \`label\`,
        and optionally a \`disabled\` boolean.  If the \`multiple\` prop is true, the value of this
        ChoiceSet is an array of strings; otherwise it is a single string (or undefined).`,
      },
    },
  },
} as Meta;

const Template: StoryFn<ComponentProps<typeof ChoiceSet>> = (args) => <ChoiceSet {...args} />;

export const SingleChoice = Template.bind({});
SingleChoice.args = {
  choices: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'strawberry', label: 'Strawberry' },
  ],
  value: 'strawberry',
};

export const MultipleChoice = Template.bind({});
MultipleChoice.args = {
  multiple: true,
  choices: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'strawberry', label: 'Strawberry' },
  ],
  value: ['chocolate', 'strawberry'],
};
