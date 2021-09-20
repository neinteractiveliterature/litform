import { Meta, Story } from '@storybook/react';
import ButtonWithTooltip, { ButtonWithTooltipProps } from '../ButtonWithTooltip';

export default {
  title: 'Buttons/ButtonWithTooltip',
  component: ButtonWithTooltip,
  argTypes: {
    // label: { control: 'text' },
    // hideLabel: { control: 'boolean' },
    // helpText: { control: 'text' },
    // invalidFeedback: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `A \`<button>\` tag which, when hovered over or focused, will display a tooltip.  You can
        pass props to the button itself using the \`buttonProps\` prop, and the content for the tooltip itself
        using the \`tooltipContent\` prop.`,
      },
    },
  },
} as Meta;

const Template: Story<ButtonWithTooltipProps> = (args) => (
  <ButtonWithTooltip
    tooltipContent={
      <>
        You can put <strong>any content you want</strong> in the tooltip.
      </>
    }
    {...args}
  >
    Button text
  </ButtonWithTooltip>
);

export const Basic = Template.bind({});
Basic.args = {
  buttonProps: {
    className: 'btn btn-primary',
  },
};
