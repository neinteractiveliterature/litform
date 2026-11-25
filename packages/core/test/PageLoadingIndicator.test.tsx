import { act, render } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';
import { vi } from 'vitest';
import PageLoadingIndicator from '../src/PageLoadingIndicator';

describe('PageLoadingIndicator', () => {
  const indicator = (container: HTMLElement) =>
    container.querySelector<HTMLElement>('.custom-loading-indicator')!;

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('it waits 250ms before showing by default', () => {
    const { container } = render(<PageLoadingIndicator visible />);
    expect(indicator(container).style.visibility).toEqual('hidden');

    act(() => vi.advanceTimersByTime(249));
    expect(indicator(container).style.visibility).toEqual('hidden');

    act(() => vi.advanceTimersByTime(1));
    expect(indicator(container).style.visibility).toEqual('visible');
  });

  test('it waits as long as the delay says', () => {
    const { container } = render(<PageLoadingIndicator visible delay={1000} />);

    act(() => vi.advanceTimersByTime(999));
    expect(indicator(container).style.visibility).toEqual('hidden');

    act(() => vi.advanceTimersByTime(1));
    expect(indicator(container).style.visibility).toEqual('visible');
  });

  test('with no delay, it is visible in server-rendered markup', () => {
    const html = renderToStaticMarkup(<PageLoadingIndicator visible delay={0} />);

    expect(html).toContain('visibility:visible');
  });

  test('with no delay, it follows the visible prop immediately', () => {
    const { container, rerender } = render(<PageLoadingIndicator visible delay={0} />);
    expect(indicator(container).style.visibility).toEqual('visible');

    rerender(<PageLoadingIndicator visible={false} delay={0} />);
    expect(indicator(container).style.visibility).toEqual('hidden');
  });
});
