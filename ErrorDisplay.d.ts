export type ErrorDisplayProps = {
    stringError?: string | null;
    graphQLError?: Error | null;
};
declare function ErrorDisplay({ stringError, graphQLError }: ErrorDisplayProps): JSX.Element;
export default ErrorDisplay;
