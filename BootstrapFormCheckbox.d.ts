import { ReactNode, InputHTMLAttributes } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
export type BootstrapFormCheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
    /** the content of the label that will appear beside the element */
    label: ReactNode | ReactNode[];
    /** whether or not the element is checked */
    checked: boolean;
    /**
     * if present, this will be called each time this input is checked or unchecked.  It's an
     * easier alternative to onChange that avoids having to deal with DOM events.
     */
    onCheckedChange?: (value: boolean) => void;
    /**
     * is this input a radio button or a checkbox?
     */
    type: 'radio' | 'checkbox';
    /**
     * the className that will be applied to the wrapper <div> around the input and its label
     */
    className?: string;
    /**
     * the className that will be applied to the input itself
     */
    inputClassName?: string;
};
declare function BootstrapFormCheckbox(props: BootstrapFormCheckboxProps): JSX.Element;
export default BootstrapFormCheckbox;
