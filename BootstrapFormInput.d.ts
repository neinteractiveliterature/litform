import { InputHTMLAttributes } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
import { FormGroupWithLabelWrapperProps } from './FormGroupWithLabel';
import * as React from 'react';
type BootstrapFormInputOwnProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    /**
     * if present, this will be called each time the text content of the input changes.  It's an
     * easier alternative to onChange that avoids having to deal with DOM events.
     */
    onTextChange: (text: string) => void;
};
export type BootstrapFormInputProps = FormGroupWithLabelWrapperProps<BootstrapFormInputOwnProps>;
declare const WrappedBootstrapFormInput: React.FunctionComponent<BootstrapFormInputProps>;
export default WrappedBootstrapFormInput;
