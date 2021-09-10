import { render } from '@testing-library/react';
import MultipleChoiceInput from '../MultipleChoiceInput';

describe('MultipleChoiceInput', () => {
  const renderMultipleChoiceInput = () =>
    render(
      <MultipleChoiceInput
        name="pickSomething"
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
        choices={[
          { label: 'a', value: '1' },
          { label: 'b', value: '2' },
          { label: 'c', value: '3' },
        ]}
        caption="Hello there"
      />,
    );

  test('it renders the caption', async () => {
    const { getByText } = await renderMultipleChoiceInput();
    expect(getByText('Hello there').tagName.toUpperCase()).toEqual('LEGEND');
  });

  test('it renders the choices', async () => {
    const { getAllByRole } = await renderMultipleChoiceInput();
    expect(getAllByRole('radio')).toHaveLength(3);
  });

  // detailed testing for choice behavior is done in ChoiceSet.test.jsx
});
