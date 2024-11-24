import { default as React, ReactNode } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
export type FormGroupWithLabelProps = {
    /** a render function that takes a generated input ID, which you should use as the id of
     * the input you render in this function
     */
    children: (id: string) => ReactNode;
    /** the content of the label that will appear with the element */
    label: ReactNode | ReactNode[];
    /** if present, this content will appear below the input */
    helpText?: ReactNode | ReactNode[];
    /** the class name to apply to the wrapper div; will use 'mb-3' if not specified */
    wrapperDivClassName?: string;
    /** the class name to apply to the label element; will use 'form-label' if not specified */
    labelClassName?: string;
    /** if present, the invalid field feedback that will render with the element.  Typically
     * for Bootstrap form controls, the form element must have 'is-invalid' in its class name
     * for this to appear.
     */
    invalidFeedback?: ReactNode | ReactNode[];
};
export declare function extractFormGroupWithLabelProps<T extends Omit<FormGroupWithLabelProps, 'children'>>(props: T): [
    Omit<FormGroupWithLabelProps, 'children'>,
    Omit<T, keyof Omit<FormGroupWithLabelProps, 'children'>>
];
declare function FormGroupWithLabel({ children, label, helpText, wrapperDivClassName, labelClassName, invalidFeedback, }: FormGroupWithLabelProps): JSX.Element;
export default FormGroupWithLabel;
export type FormGroupWithLabelWrapperProps<P extends {
    id?: string;
}> = Omit<FormGroupWithLabelProps, 'children'> & Omit<P, 'id'>;
export declare function FormGroupWithLabelWrapper<P extends {
    id?: string;
}>(WrappedComponent: React.ComponentType<P>): React.FunctionComponent<FormGroupWithLabelWrapperProps<P>>;
