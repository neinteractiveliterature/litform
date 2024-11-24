import { SelectHTMLAttributes } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
import { FormGroupWithLabelWrapperProps } from './FormGroupWithLabel';
import * as React from 'react';
type BootstrapFormSelectOwnProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> & {
    onValueChange: (value: string) => void;
};
export type BootstrapFormSelectProps = FormGroupWithLabelWrapperProps<BootstrapFormSelectOwnProps>;
declare const WrappedBootstrapFormSelect: React.FunctionComponent<BootstrapFormSelectProps>;
export default WrappedBootstrapFormSelect;
