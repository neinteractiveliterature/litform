import { ReactNode } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
export type ConfirmModalState = {
    action: () => any;
    prompt: ReactNode | ReactNode[];
    error?: any;
    onCancel?: () => void;
    onError?: (error: any) => void;
    renderError?: (error: any) => ReactNode;
};
export type ConfirmFunction = {
    (state?: ConfirmModalState): void;
    visible: boolean;
};
export type ConfirmProps = {
    children: ReactNode | ReactNode[];
};
declare function Confirm({ children }: ConfirmProps): JSX.Element;
declare namespace Confirm {
    var Trigger: typeof ConfirmTrigger;
}
export declare function useConfirm(): ConfirmFunction;
export declare function useGraphQLConfirm(): ConfirmFunction;
export type ConfirmTriggerProps = {
    children: (confirm: ConfirmFunction) => ReactNode;
};
declare function ConfirmTrigger({ children }: ConfirmTriggerProps): ReactNode;
export default Confirm;
