import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { ButtonWithTooltip } from '../src';

// Popper marks an element it has positioned with data-popper-placement, so that attribute shows whether popper is
// doing any work for the tooltip.
const POSITIONED = 'data-popper-placement';

describe('ButtonWithTooltip', () => {
  const renderButton = () =>
    render(
      <ButtonWithTooltip
        buttonProps={{ className: 'btn btn-primary' }}
        tooltipContent="tooltip words"
      >
        Hover me
      </ButtonWithTooltip>,
    );

  test('it renders the button and its hidden tooltip', () => {
    const { getByRole, getByText } = renderButton();

    expect(getByRole('button', { name: 'Hover me' })).toHaveClass('btn', 'btn-primary');
    expect(getByRole('tooltip', { hidden: true })).toHaveClass('d-none');
    expect(getByText('tooltip words')).toBeTruthy();
  });

  test('it shows the tooltip on mouse over and focus, and hides it on mouse out and blur', () => {
    const { getByRole } = renderButton();
    const button = getByRole('button', { name: 'Hover me' });
    const tooltip = () => getByRole('tooltip', { hidden: true });

    fireEvent.mouseOver(button);
    expect(tooltip()).toHaveClass('show');
    expect(tooltip()).not.toHaveClass('d-none');
    fireEvent.mouseOut(button);
    expect(tooltip()).toHaveClass('d-none');

    fireEvent.focus(button);
    expect(tooltip()).toHaveClass('show');
    fireEvent.blur(button);
    expect(tooltip()).toHaveClass('d-none');
  });

  test('it does not position the tooltip until it is shown', async () => {
    const { getByRole } = renderButton();
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 20));
    });
    expect(getByRole('tooltip', { hidden: true })).not.toHaveAttribute(POSITIONED);

    fireEvent.mouseOver(getByRole('button', { name: 'Hover me' }));

    await waitFor(() => expect(getByRole('tooltip', { hidden: true })).toHaveAttribute(POSITIONED));
  });
});
