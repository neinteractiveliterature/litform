import { Component, ReactNode, ErrorInfo } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
export type ErrorBoundaryProps = {
    errorType?: 'graphql' | 'plain';
    placement?: 'before' | 'after' | 'replace';
    children?: ReactNode | ReactNode[];
};
type ErrorBoundaryState = {
    error: Error | null;
};
declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    static getDerivedStateFromError(error: Error | null): ErrorBoundaryState;
    constructor(props: ErrorBoundaryProps);
    componentDidCatch(error: Error, info: ErrorInfo): void;
    render(): ReactNode | ReactNode[];
}
export default ErrorBoundary;
