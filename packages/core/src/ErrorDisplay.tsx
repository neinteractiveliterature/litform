import { JSX, ReactNode } from 'react';
import type { GraphQLFormattedError } from 'graphql';

// Apollo Client 3's ApolloError keeps its GraphQL errors in `graphQLErrors`...
interface ApolloClient3GraphQLError extends Error {
  graphQLErrors: readonly GraphQLFormattedError[];
}

// ...while Apollo Client 4's CombinedGraphQLErrors keeps them in `errors`. These are checked by shape rather than by
// importing from @apollo/client, so that this works with either major version.
interface ApolloClient4GraphQLError extends Error {
  errors: readonly GraphQLFormattedError[];
}

function getGraphQLErrors(error: Error): readonly GraphQLFormattedError[] | undefined {
  if ('graphQLErrors' in error && Array.isArray((error as ApolloClient3GraphQLError).graphQLErrors)) {
    return (error as ApolloClient3GraphQLError).graphQLErrors;
  }

  if ('errors' in error && Array.isArray((error as ApolloClient4GraphQLError).errors)) {
    return (error as ApolloClient4GraphQLError).errors;
  }

  return undefined;
}

export type ErrorDisplayProps = {
  stringError?: string | null;
  graphQLError?: Error | null;
};

function ErrorDisplay({ stringError, graphQLError }: ErrorDisplayProps): JSX.Element {
  let displayContents: ReactNode | ReactNode[] = null;

  if (graphQLError) {
    try {
      const graphQLErrors = getGraphQLErrors(graphQLError);
      if (!graphQLErrors) {
        throw new Error('Bailing and falling back to displaying message');
      }

      if (graphQLErrors.length > 0) {
        const errorMessages = graphQLErrors.map((error, i) => (
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
