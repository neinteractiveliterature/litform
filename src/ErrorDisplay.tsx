import { ReactNode } from 'react';
import { GraphQLFormattedError } from 'graphql';

interface GraphQLError extends Error {
  graphQLErrors: GraphQLFormattedError[];
}

function isGraphQLError(error: Error): error is GraphQLError {
  return 'graphQLErrors' in error;
}

export type ErrorDisplayProps = {
  stringError?: string | null;
  graphQLError?: Error | null;
};

function ErrorDisplay({ stringError, graphQLError }: ErrorDisplayProps): JSX.Element {
  let displayContents: ReactNode | ReactNode[] = null;

  if (graphQLError) {
    try {
      if (!isGraphQLError(graphQLError)) {
        throw new Error('Bailing and falling back to displaying message');
      }

      if (graphQLError.graphQLErrors.length > 0) {
        const errorMessages = graphQLError.graphQLErrors.map((error, i) => (
          <li key={i}>{error.message}</li>
        ));

        displayContents = <ul className="list-unstyled m-0">{errorMessages}</ul>;
      } else {
        displayContents = <pre>{graphQLError.message}</pre>;
      }
    } catch {
      if (graphQLError.message) {
        displayContents = <pre>{graphQLError.message}</pre>;
      } else {
        displayContents = JSON.stringify(graphQLError);
      }
    }
  } else if (stringError) {
    displayContents = stringError;
  } else {
    return <></>;
  }

  return <div className="alert alert-danger">{displayContents}</div>;
}

export default ErrorDisplay;
