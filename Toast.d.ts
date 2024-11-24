import { ReactNode } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
export declare const TOAST_FADE_DURATION = 350;
export type ToastProps = {
    title: ReactNode | ReactNode[];
    children: ReactNode | ReactNode[];
    visible: boolean;
    close: () => void;
    autoCloseAfter?: number;
    justNowText?: string;
};
export default function Toast({ title, children, visible, close, autoCloseAfter, justNowText, }: ToastProps): JSX.Element;
