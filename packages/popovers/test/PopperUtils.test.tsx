import { act, fireEvent, render, renderHook, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import {
  Tooltip,
  useAutoClosingPopper,
  useLitformPopper,
  useLitformPopperWithAutoClosing,
  useToggleOpen,
} from '../src';

type Box = { left: number; top: number; width: number; height: number };

// jsdom does no layout, so give elements the size and position Floating UI would read from a browser
function box(element: HTMLElement, { left, top, width, height }: Box) {
  Object.defineProperty(element, 'offsetWidth', { configurable: true, value: width });
  Object.defineProperty(element, 'offsetHeight', { configurable: true, value: height });
  element.getBoundingClientRect = () => ({
    x: left,
    y: top,
    left,
    top,
    width,
    height,
    right: left + width,
    bottom: top + height,
    toJSON: () => ({}),
  });
  document.body.appendChild(element);
  return element;
}

const reference = (overrides: Partial<Box> = {}) =>
  box(document.createElement('button'), {
    left: 200,
    top: 200,
    width: 100,
    height: 30,
    ...overrides,
  });
const popper = (overrides: Partial<Box> = {}) =>
  box(document.createElement('div'), { left: 0, top: 0, width: 100, height: 50, ...overrides });

// jsdom's viewport has no size, which makes Floating UI think everything overflows it and flip around; give it a screen
beforeEach(() => {
  Object.defineProperty(document.documentElement, 'clientWidth', {
    configurable: true,
    value: 1000,
  });
  Object.defineProperty(document.documentElement, 'clientHeight', {
    configurable: true,
    value: 800,
  });
});

afterEach(() => {
  document.body.innerHTML = '';
  // drop the overrides, falling back to jsdom's own
  Reflect.deleteProperty(document.documentElement, 'clientWidth');
  Reflect.deleteProperty(document.documentElement, 'clientHeight');
});

describe('useLitformPopper', () => {
  test('it does nothing until it has both a reference and a popper element', async () => {
    const referenceElement = reference();
    const onlyReference = renderHook(() => useLitformPopper(null, referenceElement, null));
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 20));
    });
    expect(onlyReference.result.current.state).toBeNull();
    expect(onlyReference.result.current.attributes.popper).toEqual({});

    const popperElement = popper();
    const onlyPopper = renderHook(() => useLitformPopper(popperElement, null, null));
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 20));
    });
    expect(onlyPopper.result.current.state).toBeNull();
  });

  test('it puts the popper below the reference by default, as a fixed-position element', async () => {
    const referenceElement = reference();
    const popperElement = popper();
    const { result } = renderHook(() => useLitformPopper(popperElement, referenceElement, null));

    await waitFor(() => expect(result.current.state).not.toBeNull());

    expect(result.current.state).toEqual({ placement: 'bottom' });
    expect(result.current.attributes.popper).toEqual({ 'data-popper-placement': 'bottom' });
    expect(result.current.styles.popper).toMatchObject({
      position: 'fixed',
      transform: 'translate(200px, 230px)', // centered under the reference, whose bottom edge is at y=230
    });
  });

  test('it honors the placement, strategy and offset options', async () => {
    const referenceElement = reference({ top: 300 });
    const popperElement = popper();
    const { result } = renderHook(() =>
      useLitformPopper(popperElement, referenceElement, null, {
        placement: 'top',
        strategy: 'absolute',
        offset: 10,
      }),
    );

    await waitFor(() => expect(result.current.state).not.toBeNull());

    expect(result.current.state).toEqual({ placement: 'top' });
    expect(result.current.styles.popper).toMatchObject({
      position: 'absolute',
      transform: 'translate(200px, 240px)', // 50px tall popper, 10px gap above the reference's top edge at y=300
    });
  });

  test('it supports a skidding offset along the reference', async () => {
    const referenceElement = reference();
    const popperElement = popper();
    const { result } = renderHook(() =>
      useLitformPopper(popperElement, referenceElement, null, {
        offset: { mainAxis: 4, crossAxis: 15 },
      }),
    );

    await waitFor(() => expect(result.current.state).not.toBeNull());

    expect(result.current.styles.popper).toMatchObject({ transform: 'translate(215px, 234px)' });
  });

  test('it flips to the other side when there is no room for the requested placement', async () => {
    // only 10px above the reference, but the popper is 50px tall
    const referenceElement = reference({ top: 10 });
    const popperElement = popper();
    const { result } = renderHook(() =>
      useLitformPopper(popperElement, referenceElement, null, { placement: 'top' }),
    );

    await waitFor(() => expect(result.current.state).not.toBeNull());

    expect(result.current.state).toEqual({ placement: 'bottom' });
    expect(result.current.attributes.popper).toEqual({ 'data-popper-placement': 'bottom' });
  });

  test('it positions the arrow at the center of the reference', async () => {
    const referenceElement = reference();
    const popperElement = popper();
    const arrowElement = box(document.createElement('span'), {
      left: 0,
      top: 0,
      width: 20,
      height: 10,
    });
    const { result } = renderHook(() =>
      useLitformPopper(popperElement, referenceElement, arrowElement),
    );

    await waitFor(() => expect(result.current.styles.arrow.left).toBeDefined());

    // the popper starts at x=200 and the reference's center is at x=250, so the arrow's left edge goes at 50-10
    expect(result.current.styles.arrow).toMatchObject({ position: 'absolute', left: '40px' });
    expect(result.current.styles.arrow.top).toBeUndefined();
  });

  test('it has no arrow position without an arrow element', async () => {
    const referenceElement = reference();
    const popperElement = popper();
    const { result } = renderHook(() => useLitformPopper(popperElement, referenceElement, null));

    await waitFor(() => expect(result.current.state).not.toBeNull());

    expect(result.current.styles.arrow).toEqual({
      position: 'absolute',
      left: undefined,
      top: undefined,
    });
  });

  test('it runs extra middleware', async () => {
    const referenceElement = reference();
    const popperElement = popper();
    const fn = vi.fn(() => ({ x: 7, y: 9 }));
    const { result } = renderHook(() =>
      useLitformPopper(popperElement, referenceElement, null, {
        middleware: [{ name: 'custom', fn }],
      }),
    );

    await waitFor(() => expect(result.current.state).not.toBeNull());

    expect(fn).toHaveBeenCalled();
    expect(result.current.styles.popper).toMatchObject({ transform: 'translate(7px, 9px)' });
  });

  test('it repositions when asked to', async () => {
    const referenceElement = reference();
    const popperElement = popper();
    const { result } = renderHook(() => useLitformPopper(popperElement, referenceElement, null));
    await waitFor(() => expect(result.current.state).not.toBeNull());

    // the reference moves; nothing tells Floating UI, so it's still where it was until update() is called
    referenceElement.getBoundingClientRect = () => ({
      x: 400,
      y: 200,
      left: 400,
      top: 200,
      width: 100,
      height: 30,
      right: 500,
      bottom: 230,
      toJSON: () => ({}),
    });
    await act(async () => {
      result.current.update();
    });

    await waitFor(() =>
      expect(result.current.styles.popper).toMatchObject({ transform: 'translate(400px, 230px)' }),
    );
  });

  test('it stops tracking when the popper element goes away', async () => {
    const referenceElement = reference();
    const popperElement = popper();
    const { result, rerender } = renderHook(
      ({ popperEl }: { popperEl: HTMLElement | null }) =>
        useLitformPopper(popperEl, referenceElement, null),
      { initialProps: { popperEl: popperElement as HTMLElement | null } },
    );
    await waitFor(() => expect(result.current.state).not.toBeNull());

    rerender({ popperEl: null });

    await waitFor(() => expect(result.current.attributes.popper).toEqual({}));
  });
});

describe('useAutoClosingPopper', () => {
  test('it calls setVisible(false) when something outside the reference and popper is clicked', () => {
    const setVisible = vi.fn();
    const referenceElement = reference();
    const popperElement = popper();
    renderHook(() => useAutoClosingPopper(setVisible, referenceElement, popperElement));

    fireEvent.mouseDown(document.body);

    expect(setVisible).toHaveBeenCalledWith(false);
  });

  test('it does nothing when the reference or the popper is clicked', () => {
    const setVisible = vi.fn();
    const referenceElement = reference();
    const popperElement = popper();
    renderHook(() => useAutoClosingPopper(setVisible, referenceElement, popperElement));

    fireEvent.mouseDown(referenceElement);
    fireEvent.mouseDown(popperElement);

    expect(setVisible).not.toHaveBeenCalled();
  });
});

describe('useLitformPopperWithAutoClosing', () => {
  test('it positions the popper and also closes it on outside clicks', async () => {
    const setVisible = vi.fn();
    const referenceElement = reference();
    const popperElement = popper();
    const { result } = renderHook(() =>
      useLitformPopperWithAutoClosing(popperElement, referenceElement, null, setVisible, {
        placement: 'bottom-start',
      }),
    );

    await waitFor(() => expect(result.current.state).toEqual({ placement: 'bottom-start' }));
    fireEvent.mouseDown(document.body);

    expect(setVisible).toHaveBeenCalledWith(false);
  });
});

describe('useToggleOpen', () => {
  test('it toggles the open state and repositions', () => {
    const setOpen = vi.fn();
    const update = vi.fn();
    const { result } = renderHook(() => useToggleOpen(setOpen, update));

    result.current();

    expect(update).toHaveBeenCalledTimes(1);
    const updater = setOpen.mock.calls[0][0] as (prev: boolean) => boolean;
    expect(updater(false)).toBe(true);
    expect(updater(true)).toBe(false);
  });

  test('it still toggles when there is nothing to reposition', () => {
    const setOpen = vi.fn();
    const { result } = renderHook(() => useToggleOpen(setOpen, undefined));

    result.current();

    expect(setOpen).toHaveBeenCalledTimes(1);
  });
});

describe('Tooltip', () => {
  const styles = {
    popper: { position: 'fixed' as const },
    arrow: { position: 'absolute' as const, left: '5px' },
  };

  test('it renders visible, with the placement as a Bootstrap class and the arrow positioned', () => {
    const { getByRole, getByText, container } = render(
      <Tooltip
        popperRef={() => {}}
        arrowRef={() => {}}
        styles={styles}
        attributes={{ popper: { 'data-popper-placement': 'top-start' } }}
        state={{ placement: 'top-start' }}
        visible
      >
        words
      </Tooltip>,
    );

    expect(getByRole('tooltip')).toHaveClass('tooltip', 'bs-tooltip-top', 'show');
    expect(getByRole('tooltip')).not.toHaveClass('d-none');
    expect(getByRole('tooltip')).toHaveAttribute('data-popper-placement', 'top-start');
    expect(getByText('words')).toHaveClass('tooltip-inner');
    expect(container.querySelector('.tooltip-arrow')).toHaveStyle({ left: '5px' });
  });

  test('it renders hidden, out of the way, before it has been positioned', () => {
    const { getByRole } = render(
      <Tooltip
        popperRef={() => {}}
        arrowRef={() => {}}
        styles={styles}
        attributes={{ popper: {} }}
        state={null}
      >
        words
      </Tooltip>,
    );

    expect(getByRole('tooltip', { hidden: true })).toHaveClass('d-none');
    expect(getByRole('tooltip', { hidden: true })).not.toHaveClass('show');
    expect(getByRole('tooltip', { hidden: true })).toHaveStyle({ zIndex: '-9999' });
  });
});
