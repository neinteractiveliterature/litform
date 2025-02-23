import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import BooleanInput from '../src/BooleanInput';

describe('BooleanInput', () => {
  const onChange = vi.fn();
  const renderInput = (overrideProps = {}) =>
    render(
      <BooleanInput
        caption="Is this a test?"
        onChange={onChange}
        value={false}
        {...overrideProps}
      />,
    );

  beforeEach(onChange.mockReset);

  test('it renders', async () => {
    const { getByText } = await renderInput();
    expect(getByText('Is this a test?')).toBeTruthy();
  });

  test('it calls onChange for true boolean value', async () => {
    const { getByLabelText } = await renderInput();
    const yesInput = getByLabelText('Yes');
    fireEvent.click(yesInput);
    expect(onChange.mock.calls[0][0]).toBeTruthy();
  });

  test('it calls onChange for false boolean value', async () => {
    const { getByLabelText } = await renderInput({ value: true });
    const noInput = getByLabelText('No');
    fireEvent.click(noInput);
    expect(onChange.mock.calls[0][0]).toBeFalsy();
  });
});
