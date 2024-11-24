import { ReactNode } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
export type AlertState = {
    message?: ReactNode | ReactNode[];
};
export type AlertFunction = (message?: ReactNode | ReactNode[]) => void;
export type AlertContextValue = {
    alert: AlertFunction;
};
export type AlertProviderProps = {
    children: ReactNode | ReactNode[];
    okText: string;
};
export declare function AlertProvider({ children, okText }: AlertProviderProps): JSX.Element;
export declare function useAlert(): AlertFunction;
