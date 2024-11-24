import { usePopper } from 'react-popper';
export declare function useAutoClosingPopper(setVisible: React.Dispatch<boolean>, referenceElement: HTMLElement | undefined | null, popperElement: HTMLElement | undefined | null): void;
export declare function useLitformPopper(popperElement: HTMLElement | undefined | null, referenceElement: HTMLElement | undefined | null, arrowElement: HTMLElement | undefined | null, options?: Parameters<typeof usePopper>[2]): ReturnType<typeof usePopper>;
export declare function useLitformPopperWithAutoClosing(popperElement: HTMLElement | undefined | null, referenceElement: HTMLElement | undefined | null, arrowElement: HTMLElement | undefined | null, setVisible: React.Dispatch<boolean>, options?: Parameters<typeof usePopper>[2]): ReturnType<typeof usePopper>;
export declare function useToggleOpen(setDropdownOpen: (updater: (prev: boolean) => boolean) => void, update: ReturnType<typeof usePopper>['update']): () => void;
