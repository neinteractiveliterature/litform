import { TextareaHTMLAttributes } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
import { FormGroupWithLabelWrapperProps } from './FormGroupWithLabel';
import * as React from 'react';
type BootstrapFormTextareaOwnProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> & {
    onTextChange: (text: string) => void;
};
export type BootstrapFormTextareaProps = FormGroupWithLabelWrapperProps<BootstrapFormTextareaOwnProps>;
declare const WrappedBootstrapFormTextarea: React.FunctionComponent<BootstrapFormTextareaProps>;
export default WrappedBootstrapFormTextarea;
