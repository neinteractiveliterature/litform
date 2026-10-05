import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { HelpPopover } from '../src';

// Popper marks an element it has positioned with data-popper-placement, so that attribute shows whether popper is
// doing any work for the popover.
const POSITIONED = 'data-popper-placement';

describe('HelpPopover', () => {
  // Popper computes positions asynchronously, so let those state updates land inside act before the test ends
  const settle = () =>
    act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
  afterEach(settle);

  const renderPopover = (props = {}) =>
    render(<HelpPopover {...props}>some help text</HelpPopover>);
  const popoverElement = (container: HTMLElement) =>
    container.querySelector<HTMLElement>('.popover');

  test('it starts out hidden, with its help text in the page', () => {
    const { container, getByText } = renderPopover();

    expect(getByText('some help text')).toBeTruthy();
    expect(popoverElement(container)).toHaveClass('d-none');
  });

  test('it starts out visible if asked to', async () => {
    const { container } = renderPopover({ initialVisible: true });
    await settle();

    expect(popoverElement(container)).not.toHaveClass('d-none');
  });

  test('it toggles when the help button is clicked', () => {
    const { container, getByRole } = renderPopover();

    fireEvent.click(getByRole('button'));
    expect(popoverElement(container)).not.toHaveClass('d-none');

    fireEvent.click(getByRole('button'));
    expect(popoverElement(container)).toHaveClass('d-none');
  });

  test('it toggles from the keyboard with enter and space', () => {
    const { container, getByRole } = renderPopover();

    fireEvent.keyDown(getByRole('button'), { keyCode: 13 });
    expect(popoverElement(container)).not.toHaveClass('d-none');

    fireEvent.keyDown(getByRole('button'), { keyCode: 32 });
    expect(popoverElement(container)).toHaveClass('d-none');

    fireEvent.keyDown(getByRole('button'), { keyCode: 65 });
    expect(popoverElement(container)).toHaveClass('d-none');
  });

  test('it tells its parent when its visibility changes', () => {
    const visibleChanged = vi.fn();
    const { getByRole } = renderPopover({ visibleChanged });

    fireEvent.click(getByRole('button'));
    fireEvent.click(getByRole('button'));

    expect(visibleChanged.mock.calls).toEqual([[true], [false]]);
  });

  test('it closes when something outside it is clicked', () => {
    const visibleChanged = vi.fn();
    const { container } = renderPopover({ initialVisible: true, visibleChanged });
    expect(popoverElement(container)).not.toHaveClass('d-none');

    // (the click-outside hook listens for mousedown)
    fireEvent.mouseDown(document.body);

    expect(popoverElement(container)).toHaveClass('d-none');
    expect(visibleChanged).toHaveBeenCalledWith(false);
  });

  test('it stays open when its own help text is clicked', async () => {
    const { container, getByText } = renderPopover({ initialVisible: true });
    await settle();

    fireEvent.mouseDown(getByText('some help text'));

    expect(popoverElement(container)).not.toHaveClass('d-none');
  });

  test('it still closes when something outside it is clicked after being closed and reopened', () => {
    const { container, getByRole } = renderPopover({ initialVisible: true });

    fireEvent.click(getByRole('button'));
    fireEvent.click(getByRole('button'));
    expect(popoverElement(container)).not.toHaveClass('d-none');
    fireEvent.mouseDown(document.body);

    expect(popoverElement(container)).toHaveClass('d-none');
  });

  test('it does not position itself until it is shown', async () => {
    const { container, getByRole } = renderPopover();
    // give anything that was going to happen a chance to
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 20));
    });
    expect(popoverElement(container)).not.toHaveAttribute(POSITIONED);

    fireEvent.click(getByRole('button'));

    await waitFor(() => expect(popoverElement(container)).toHaveAttribute(POSITIONED));
  });

  test('it positions itself straight away if it starts out visible', async () => {
    const { container } = renderPopover({ initialVisible: true });

    await waitFor(() => expect(popoverElement(container)).toHaveAttribute(POSITIONED));
  });
});
