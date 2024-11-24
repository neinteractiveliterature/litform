import { ReactNode } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
export type ChoiceSetChoice = {
    label: ReactNode | ReactNode[];
    value: string;
    disabled?: boolean;
};
export interface ChoiceSetBaseProps {
    name?: string;
    choices: readonly ChoiceSetChoice[];
    value?: string | string[] | null;
    multiple?: boolean;
    containerClassName?: string;
    choiceClassName?: string;
    inputClassName?: string;
    disabled?: boolean;
    readOnly?: boolean;
}
export interface ChoiceSetSingleChoiceProps extends ChoiceSetBaseProps {
    value?: string | null;
    onChange(value: string | null): unknown;
    multiple?: false;
}
export interface ChoiceSetMultipleChoiceProps extends ChoiceSetBaseProps {
    value?: string[] | null;
    onChange(value: string[] | null): unknown;
    multiple: true;
}
export type ChoiceSetProps = ChoiceSetSingleChoiceProps | ChoiceSetMultipleChoiceProps;
declare function ChoiceSet(props: ChoiceSetProps): JSX.Element;
export default ChoiceSet;
