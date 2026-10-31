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

export function useAutoClosingPopper(
  setVisible: React.Dispatch<boolean>,
  referenceElement: HTMLElement | undefined | null,
  popperElement: HTMLElement | undefined | null,
): void {
  const hide = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onClickOutsideRef = useOnclickOutside(hide);
  useEffect(() => {
    if (referenceElement) {
      onClickOutsideRef(referenceElement);
    }
    if (popperElement) {
      onClickOutsideRef(popperElement);
    }
  }, [onClickOutsideRef, referenceElement, popperElement]);
}

export type LitformPopperOptions = {
  /** Where to put the popper relative to its reference element.  Defaults to "bottom". */
  placement?: Placement;
  /** CSS positioning strategy.  Defaults to "fixed". */
  strategy?: Strategy;
  /** Distance between the reference and the popper (a number), or a Floating UI offset object */
  offset?: OffsetOptions;
  /** Padding between the arrow and the edges of the popper, if there is an arrow */
  arrowPadding?: number;
  /**
   * Extra Floating UI middleware.  These run after the built-in offset, flip and shift, and before the arrow.
   * (See https://floating-ui.com/docs/middleware, e.g. `size` for matching the reference's width.)
   */
  middleware?: Middleware[];
};

export type LitformPopperResult = {
  styles: {
    /** Apply to the popper element */
    popper: CSSProperties;
    /** Apply to the arrow element, if there is one */
    arrow: CSSProperties;
  };
  attributes: {
    /**
     * Spread onto the popper element.  Holds `data-popper-placement` (which Bootstrap's CSS uses) once the popper has
     * been positioned, and nothing before then.
     */
    popper: Record<string, string>;
  };
  /** The popper's placement once it has been positioned (it may differ from the requested one if it had to flip) */
  state: { placement: Placement } | null;
  /** Recompute the position now */
  update: () => void;
};

/**
 * Positions `popperElement` next to `referenceElement` using Floating UI, and keeps it positioned as the page scrolls
 * and resizes.  Nothing is set up (no listeners, no position computation) until both elements are present, so callers
 * can pass `null` for the popper element while it's hidden.
 *
 * (The name and the shape of the result are a holdover from when this was built on Popper.)
 */
export function useLitformPopper(
  popperElement: HTMLElement | undefined | null,
  referenceElement: HTMLElement | undefined | null,
  arrowElement: HTMLElement | undefined | null,
  options?: LitformPopperOptions,
): LitformPopperResult {
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
    elements: { reference: referenceElement ?? null, floating: popperElement ?? null },
    // lets Floating UI forget the old position when the popper goes away, so a popper that's shown again doesn't flash
    // at its previous position before it has been measured
    open: popperElement != null && referenceElement != null,
    whileElementsMounted: autoUpdate,
  });

  const arrowData = middlewareData.arrow;

  return {
    styles: {
      popper: floatingStyles,
      arrow: {
        position: 'absolute',
        left: arrowData?.x != null ? `${arrowData.x}px` : undefined,
        top: arrowData?.y != null ? `${arrowData.y}px` : undefined,
      },
    },
    attributes: { popper: isPositioned ? { 'data-popper-placement': placement } : {} },
    state: isPositioned ? { placement } : null,
    update,
  };
}

export function useLitformPopperWithAutoClosing(
  popperElement: HTMLElement | undefined | null,
  referenceElement: HTMLElement | undefined | null,
  arrowElement: HTMLElement | undefined | null,
  setVisible: React.Dispatch<boolean>,
  options?: LitformPopperOptions,
): LitformPopperResult {
  useAutoClosingPopper(setVisible, referenceElement, popperElement);
  return useLitformPopper(popperElement, referenceElement, arrowElement, options);
}

export function useToggleOpen(
  setDropdownOpen: (updater: (prev: boolean) => boolean) => void,
  update: LitformPopperResult['update'] | null | undefined,
): () => void {
  const toggleOpen = useCallback(() => {
    setDropdownOpen((prev) => !prev);
    if (update) {
      update();
    }
  }, [update, setDropdownOpen]);

  return toggleOpen;
}
