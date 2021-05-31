import { render } from '@testing-library/react';
import LoadingIndicator from '../LoadingIndicator';

test('it renders with a given size', async () => {
  const { getByLabelText } = await render(<LoadingIndicator size={2} />);
  expect(getByLabelText('Loading...')).toHaveClass('display-2');
});

test('it renders with size 5 by default', async () => {
  const { getByLabelText } = await render(<LoadingIndicator />);
  expect(getByLabelText('Loading...')).toHaveClass('display-5');
});
