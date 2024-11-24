import { ReactNode } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
import { ChoiceSetProps } from './ChoiceSet';
export type MultipleChoiceInputProps = ChoiceSetProps & {
    caption: ReactNode | ReactNode[];
    helpText?: ReactNode | ReactNode[];
    /** if present, the invalid field feedback that will render with the element.  Typically
     * for Bootstrap form controls, the form element must have 'is-invalid' in its class name
     * for this to appear.
     */
    invalidFeedback?: ReactNode | ReactNode[];
};
declare function MultipleChoiceInput({ caption, helpText, invalidFeedback, ...choiceSetProps }: MultipleChoiceInputProps): JSX.Element;
export default MultipleChoiceInput;
