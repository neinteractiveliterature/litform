import { useMemo, ReactNode } from 'react';
import * as React from 'react';
import MultipleChoiceInput, { MultipleChoiceInputProps } from './MultipleChoiceInput';

export type BooleanInputProps = Omit<
  MultipleChoiceInputProps,
  'multiple' | 'value' | 'onChange' | 'choices'
> & {
  onChange?: React.Dispatch<boolean>;
  value?: boolean;
  trueLabel?: ReactNode | ReactNode[];
  falseLabel?: ReactNode | ReactNode[];
  falseBeforeTrue?: boolean;
};

function BooleanInput({
  value,
  onChange,
  trueLabel,
  falseLabel,
  falseBeforeTrue,
  ...otherProps
}: BooleanInputProps): React.JSX.Element {
  const choices = useMemo(() => {
    const workingChoices = [
      { label: trueLabel || 'Yes', value: 'true' },
      { label: falseLabel || 'No', value: 'false' },
    ];

    if (falseBeforeTrue) {
      workingChoices.reverse();
    }

    return workingChoices;
  }, [falseBeforeTrue, falseLabel, trueLabel]);

  return (
    <MultipleChoiceInput
      {...otherProps}
      choices={choices}
      choiceClassName="form-check-inline"
      value={value != null ? value.toString() : null}
      onChange={(newValue: string) => {
        if (onChange) {
          onChange(newValue === 'true');
        }
      }}
    />
  );
}

export default BooleanInput;
