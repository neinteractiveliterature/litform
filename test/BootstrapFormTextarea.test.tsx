import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { BootstrapFormTextarea } from '@neinteractiveliterature/litform';

describe('BootstrapFormTextarea', () => {
  const renderComponent = (overrideProps = {}) =>
    render(
      <BootstrapFormTextarea
        name="my_textarea"
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
