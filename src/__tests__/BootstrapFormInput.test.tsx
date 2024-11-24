import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import BootstrapFormInput from '../BootstrapFormInput';

describe('BootstrapFormInput', () => {
  const renderComponent = (overrideProps = {}) =>
    render(
      <BootstrapFormInput
        name="my_input"
        label="type in me"
        value=""
        onTextChange={() => {}}
        {...overrideProps}
      />,
    );

  test('it passes change events', async () => {
    const onChange = vi.fn();
    const { getByLabelText } = await renderComponent({ onChange });
    fireEvent.change(getByLabelText('type in me'), { target: { value: 'asdf' } });
    expect(onChange.mock.calls).toHaveLength(1);
  });

  test('it calls onTextChange', async () => {
    const onTextChange = vi.fn();
    const { getByLabelText } = await renderComponent({ onTextChange });
    fireEvent.change(getByLabelText('type in me'), { target: { value: 'asdf' } });
    expect(onTextChange.mock.calls[0][0]).toEqual('asdf');
  });
});
