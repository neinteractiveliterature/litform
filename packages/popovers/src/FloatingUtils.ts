import { CSSProperties, useCallback, useEffect } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import {
  arrow as arrowMiddleware,
  autoUpdate,
  flip,
  offset as offsetMiddleware,
  shift,
  useFloating,
} from '@floating-ui/react-dom';
import type { Middleware, OffsetOptions, Placement, Strategy } from '@floating-ui/react-dom';

export type { Middleware, OffsetOptions, Placement, Strategy };

export function useAutoClosingFloating(
  setVisible: React.Dispatch<boolean>,
  referenceElement: HTMLElement | undefined | null,
  floatingElement: HTMLElement | undefined | null,
): void {
  const hide = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onClickOutsideRef = useOnclickOutside(hide);
  useEffect(() => {
    if (referenceElement) {
      onClickOutsideRef(referenceElement);
    }
    if (floatingElement) {
      onClickOutsideRef(floatingElement);
    }
  }, [onClickOutsideRef, referenceElement, floatingElement]);
}

export type LitformFloatingOptions = {
  /** Where to put the floating element relative to its reference element.  Defaults to "bottom". */
  placement?: Placement;
  /** CSS positioning strategy.  Defaults to "fixed". */
  strategy?: Strategy;
  /** Distance between the reference and the floating element (a number), or a Floating UI offset object */
  offset?: OffsetOptions;
  /** Padding between the arrow and the edges of the floating element, if there is an arrow */
  arrowPadding?: number;
  /**
   * Extra Floating UI middleware.  These run after the built-in offset, flip and shift, and before the arrow.
   * (See https://floating-ui.com/docs/middleware, e.g. `size` for matching the reference's width.)
   */
  middleware?: Middleware[];
};

export type LitformFloatingResult = {
  styles: {
    /** Apply to the floating element */
    floating: CSSProperties;
    /** Apply to the arrow element, if there is one */
    arrow: CSSProperties;
  };
  attributes: {
    /**
     * Spread onto the floating element.  Holds `data-popper-placement` (which Bootstrap's CSS uses) once the popper has
     * been positioned, and nothing before then.
     */
    floating: Record<string, string>;
  };
  /** The floating element's placement once it has been positioned (it may differ from the requested one if it had to flip) */
  state: { placement: Placement } | null;
  /** Recompute the position now */
  update: () => void;
};

/**
 * Positions `floatingElement` next to `referenceElement` using Floating UI, and keeps it positioned as the page scrolls
 * and resizes.  Nothing is set up (no listeners, no position computation) until both elements are present, so callers
 * can pass `null` for the floating element while it's hidden.
 *
 * (`data-popper-placement` keeps its name from the days when this was built on Popper, because Bootstrap's CSS
 * selects on it.)
 */
export function useLitformFloating(
  floatingElement: HTMLElement | undefined | null,
  referenceElement: HTMLElement | undefined | null,
  arrowElement: HTMLElement | undefined | null,
  options?: LitformFloatingOptions,
): LitformFloatingResult {
  const {
    placement: requestedPlacement = 'bottom',
    strategy = 'fixed',
    offset,
    arrowPadding,
    middleware,
  } = options ?? {};

  const { floatingStyles, placement, middlewareData, isPositioned, update } = useFloating({
    placement: requestedPlacement,
    strategy,
    middleware: [
      ...(offset != null ? [offsetMiddleware(offset)] : []),
      flip(),
      shift(),
      ...(middleware ?? []),
      ...(arrowElement ? [arrowMiddleware({ element: arrowElement, padding: arrowPadding })] : []),
    ],
    elements: { reference: referenceElement ?? null, floating: floatingElement ?? null },
    // lets Floating UI forget the old position when the floating element goes away, so one that's shown again doesn't flash
    // at its previous position before it has been measured
    open: floatingElement != null && referenceElement != null,
    whileElementsMounted: autoUpdate,
  });

  const arrowData = middlewareData.arrow;

  return {
    styles: {
      floating: floatingStyles,
      arrow: {
        position: 'absolute',
        left: arrowData?.x != null ? `${arrowData.x}px` : undefined,
        top: arrowData?.y != null ? `${arrowData.y}px` : undefined,
      },
    },
    attributes: { floating: isPositioned ? { 'data-popper-placement': placement } : {} },
    state: isPositioned ? { placement } : null,
    update,
  };
}

export function useLitformFloatingWithAutoClosing(
  floatingElement: HTMLElement | undefined | null,
  referenceElement: HTMLElement | undefined | null,
  arrowElement: HTMLElement | undefined | null,
  setVisible: React.Dispatch<boolean>,
  options?: LitformFloatingOptions,
): LitformFloatingResult {
  useAutoClosingFloating(setVisible, referenceElement, floatingElement);
  return useLitformFloating(floatingElement, referenceElement, arrowElement, options);
}

export function useToggleOpen(
  setDropdownOpen: (updater: (prev: boolean) => boolean) => void,
  update: LitformFloatingResult['update'] | null | undefined,
): () => void {
  const toggleOpen = useCallback(() => {
    setDropdownOpen((prev) => !prev);
    if (update) {
      update();
    }
  }, [update, setDropdownOpen]);

  return toggleOpen;
}
