import { render } from '@testing-library/react';
import LoadingIndicator from '../LoadingIndicator';

test('it renders with a given size', async () => {
  const { getByRole } = await render(<LoadingIndicator size={2} />);
  expect(getByRole('status')).toHaveStyle({ width: '4.5rem', height: '4.5rem' });
});

test('it renders with size 5 by default', async () => {
  const { getByRole } = await render(<LoadingIndicator />);
  expect(getByRole('status')).toHaveStyle({ width: '3rem', height: '3rem' });
});
