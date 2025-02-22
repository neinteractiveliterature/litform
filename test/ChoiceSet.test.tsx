import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import ChoiceSet, { ChoiceSetMultipleChoiceProps, ChoiceSetSingleChoiceProps } from '../ChoiceSet';

describe('ChoiceSet', () => {
  const onChange = vi.fn();
  beforeEach(onChange.mockReset);

  const renderChoiceSet = (
    props?:
      | Partial<ChoiceSetSingleChoiceProps>
      | ({ multiple: true } & Partial<ChoiceSetMultipleChoiceProps>),
  ) =>
    render(
      <ChoiceSet
        name="pickSomething"
        onChange={onChange}
        choices={[
          { label: 'a', value: '1' },
          { label: 'b', value: '2' },
          { label: 'c', value: '3' },
        ]}
        {...props}
      />,
    );

  test('by default it renders radio buttons', async () => {
    const { getAllByRole } = await renderChoiceSet();
    expect(getAllByRole('radio')).toHaveLength(3);
  });

  test('the value is selected', async () => {
    const { getByLabelText } = await renderChoiceSet({ value: '2' });
    expect(getByLabelText('a')).not.toBeChecked();
    expect(getByLabelText('b')).toBeChecked();
    expect(getByLabelText('c')).not.toBeChecked();
  });

  test('it calls onChange when a new value is selected', async () => {
    const { getByLabelText } = await renderChoiceSet();
    fireEvent.click(getByLabelText('c'));
    expect(onChange.mock.calls[0][0]).toEqual('3');
  });

  describe('multiple', () => {
    test('it renders checkboxes', async () => {
      const { getAllByRole } = await renderChoiceSet({ multiple: true });
      expect(getAllByRole('checkbox')).toHaveLength(3);
    });

    test('the values are selected', async () => {
      const { getByLabelText } = await renderChoiceSet({ multiple: true, value: ['2', '3'] });
      expect(getByLabelText('a')).not.toBeChecked();
      expect(getByLabelText('b')).toBeChecked();
      expect(getByLabelText('c')).toBeChecked();
    });

    test('it calls onChange when a new value is selected', async () => {
      const { getByLabelText } = await renderChoiceSet({ multiple: true, value: ['1'] });
      fireEvent.click(getByLabelText('c'));
      expect(onChange.mock.calls[0][0]).toEqual(['1', '3']);
    });

    test('it calls onChange when an old value is deselected', async () => {
      const { getByLabelText } = await renderChoiceSet({ multiple: true, value: ['1'] });
      fireEvent.click(getByLabelText('a'));
      expect(onChange.mock.calls[0][0]).toEqual([]);
    });
  });
});
