import { ReactNode } from 'react';

import ChoiceSet, { ChoiceSetProps } from './ChoiceSet';
import HelpText from './HelpText';

export type MultipleChoiceInputProps = ChoiceSetProps & {
  caption: ReactNode;
  helpText?: ReactNode;
};

function MultipleChoiceInput({
  caption,
  helpText,
  ...choiceSetProps
}: MultipleChoiceInputProps): JSX.Element {
  return (
    <fieldset className="mb-3">
      <legend className="col-form-label">{caption}</legend>
      <ChoiceSet {...choiceSetProps} />
      <HelpText>{helpText}</HelpText>
    </fieldset>
  );
}

export default MultipleChoiceInput;
