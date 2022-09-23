import { ReactNode } from 'react';

import ChoiceSet, { ChoiceSetProps } from './ChoiceSet';
import HelpText from './HelpText';

export type MultipleChoiceInputProps = ChoiceSetProps & {
  caption: ReactNode | ReactNode[];
  helpText?: ReactNode | ReactNode[];
  /** if present, the invalid field feedback that will render with the element.  Typically
   * for Bootstrap form controls, the form element must have 'is-invalid' in its class name
   * for this to appear.
   */
  invalidFeedback?: ReactNode | ReactNode[];
};

function MultipleChoiceInput({
  caption,
  helpText,
  invalidFeedback,
  ...choiceSetProps
}: MultipleChoiceInputProps): JSX.Element {
  return (
    <fieldset className="mb-3">
      <legend className="col-form-label">{caption}</legend>
      <ChoiceSet {...choiceSetProps} />
      <HelpText>{helpText}</HelpText>
      {invalidFeedback && <div className="invalid-feedback">{invalidFeedback}</div>}
    </fieldset>
  );
}

export default MultipleChoiceInput;
