import { ReactNode } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
import { MultipleChoiceInputProps } from './MultipleChoiceInput';
import * as React from 'react';
export type BooleanInputProps = Omit<MultipleChoiceInputProps, 'multiple' | 'value' | 'onChange' | 'choices'> & {
    onChange: React.Dispatch<boolean>;
    value?: boolean;
    trueLabel?: ReactNode | ReactNode[];
    falseLabel?: ReactNode | ReactNode[];
    falseBeforeTrue?: boolean;
};
declare function BooleanInput({ value, onChange, trueLabel, falseLabel, falseBeforeTrue, ...otherProps }: BooleanInputProps): JSX.Element;
export default BooleanInput;
