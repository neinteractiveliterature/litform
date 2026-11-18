import { render } from '@testing-library/react';
import { GraphQLError } from 'graphql';
import { ErrorDisplay } from '../src';
import { ApolloError } from '@apollo/client';

test('it renders a string error', () => {
  const { container } = render(<ErrorDisplay stringError="everything is borked" />);

  expect(container.innerHTML).toMatch(/everything is borked/);
});

test('it renders a graphql error', () => {
  const error = new ApolloError({
    graphQLErrors: [new GraphQLError('everything ', {}), new GraphQLError('is borked', {})],
    extraInfo: undefined,
    networkError: null,
    clientErrors: [],
  });
  const { getAllByText } = render(<ErrorDisplay graphQLError={error} />);

  expect(getAllByText('everything')).toHaveLength(1);
  expect(getAllByText('is borked')).toHaveLength(1);
});

// Apollo Client 4's CombinedGraphQLErrors keeps its GraphQL errors in `errors` rather than `graphQLErrors`
class CombinedGraphQLErrorsLike extends Error {
  errors: { message: string }[];

  constructor(errors: { message: string }[]) {
    super(errors.map((error) => error.message).join('\n'));
    this.errors = errors;
  }
}

test('it renders each error of an Apollo Client 4 combined GraphQL error as a list item', () => {
  const error = new CombinedGraphQLErrorsLike([{ message: 'everything ' }, { message: 'is borked' }]);
  const { getAllByRole, container } = render(<ErrorDisplay graphQLError={error} />);

  expect(getAllByRole('listitem').map((item) => item.textContent)).toEqual(['everything ', 'is borked']);
  expect(container.querySelector('pre')).toBeNull();
});

test('it falls back to the message for an error with no GraphQL errors', () => {
  const { getByText } = render(<ErrorDisplay graphQLError={new Error('plain old error')} />);

  expect(getByText('plain old error').tagName).toEqual('PRE');
});

test('it renders nothing by default', () => {
  const { getByTestId } = render(<ErrorDisplay />, {
    wrapper: () => <div data-testid="wrapper" />,
  });
  const wrapper: HTMLDivElement = getByTestId('wrapper') as HTMLDivElement;
  expect(wrapper.children.length).toEqual(0);
});
