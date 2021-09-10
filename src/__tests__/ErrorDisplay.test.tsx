import { render } from '@testing-library/react';
import ErrorDisplay from '../ErrorDisplay';

test('it renders a string error', () => {
  const { container } = render(<ErrorDisplay stringError="everything is borked" />);

  expect(container.innerHTML).toMatch(/everything is borked/);
});

const APOLLO_ERROR_FIELDS = {
  extensions: undefined,
  locations: [],
  name: '',
  nodes: undefined,
  originalError: null,
  path: undefined,
  positions: undefined,
  source: undefined,
};
test('it renders a graphql error', () => {
  const { getAllByText } = render(
    <ErrorDisplay
      graphQLError={{
        graphQLErrors: [
          {
            ...APOLLO_ERROR_FIELDS,
            message: 'everything ',
          },
          { ...APOLLO_ERROR_FIELDS, message: 'is borked' },
        ],
        extraInfo: undefined,
        message: 'everything is fine',
        name: '',
        networkError: null,
        clientErrors: [],
      }}
    />,
  );

  expect(getAllByText('everything')).toHaveLength(1);
  expect(getAllByText('is borked')).toHaveLength(1);
});

test('it renders nothing by default', () => {
  const { getByTestId } = render(<ErrorDisplay />, {
    // eslint-disable-next-line react/display-name
    wrapper: () => <div data-testid="wrapper" />,
  });
  const wrapper: HTMLDivElement = getByTestId('wrapper') as HTMLDivElement;
  expect(wrapper.children.length).toEqual(0);
});
