import { default as React } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
export declare const TOAST_ON_NEXT_PAGE_LOAD_STORAGE_KEY = "toastOnNextPageLoad";
export type ToastMessage = {
    uuid: string;
    title: React.ReactNode;
    body: React.ReactNode;
    visible: boolean;
    dismiss: () => void;
    autoDismissAfter?: number;
};
export type ToastMessageConstructorParams = Pick<ToastMessage, 'body' | 'title' | 'autoDismissAfter'>;
export type DelayedToastConstructorParams = {
    title: string;
    body: string;
    autoDismissAfter?: number;
};
export type ToastContextValue = {
    toastMessages: ToastMessage[];
    addMessage: (message: ToastMessageConstructorParams) => string;
    dismissMessage: (uuid: string) => void;
};
export declare function ToastContainer(): JSX.Element;
export declare function ToastProvider({ children }: {
    children: React.ReactNode;
}): JSX.Element;
export declare function useToast(): ToastContextValue['addMessage'];
export declare function useToastOnNextPageLoad(): (message: DelayedToastConstructorParams) => void;
