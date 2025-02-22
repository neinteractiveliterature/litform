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

test('it renders nothing by default', () => {
  const { getByTestId } = render(<ErrorDisplay />, {
    wrapper: () => <div data-testid="wrapper" />,
  });
  const wrapper: HTMLDivElement = getByTestId('wrapper') as HTMLDivElement;
  expect(wrapper.children.length).toEqual(0);
});
