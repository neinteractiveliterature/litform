import React, { ReactNode } from 'react';

import useUniqueId from './useUniqueId';
import HelpText from './HelpText';

export type FormGroupWithLabelProps = {
  /** a render function that takes a generated input ID, which you should use as the id of
   * the input you render in this function
   */
  children: (id: string) => ReactNode;
  /** the content of the label that will appear with the element */
  label: ReactNode;
  /** the name of the input (also used for generating an id) */
  name?: string;
  /** if present, this content will appear below the input */
  helpText?: ReactNode;
  /** the class name to apply to the wrapper div; will use 'mb-3' if not specified */
  wrapperDivClassName?: string;
  /** the class name to apply to the label element; will use 'form-label' if not specified */
  labelClassName?: string;
  /** if present, the invalid field feedback that will render with the element.  Typically
   * for Bootstrap form controls, the form element must have 'is-invalid' in its class name
   * for this to appear.
   */
  invalidFeedback?: ReactNode;
};

export function extractFormGroupWithLabelProps<T extends Omit<FormGroupWithLabelProps, 'children'>>(
  props: T,
): [
  Omit<FormGroupWithLabelProps, 'children'>,
  Omit<T, keyof Omit<FormGroupWithLabelProps, 'children'>>,
] {
  const {
    label,
    name,
    helpText,
    wrapperDivClassName,
    labelClassName,
    invalidFeedback,
    ...otherProps
  } = props;

  return [
    { label, name, helpText, wrapperDivClassName, labelClassName, invalidFeedback },
    otherProps,
  ];
}

function FormGroupWithLabel({
  children,
  label,
  name,
  helpText,
  wrapperDivClassName,
  labelClassName,
  invalidFeedback,
}: FormGroupWithLabelProps): JSX.Element {
  const id = useUniqueId(`${name || 'input'}-`);

  return (
    <div className={wrapperDivClassName ?? 'mb-3'}>
      <label htmlFor={id} className={labelClassName ?? 'form-label'}>
        {label}
      </label>
      {children(id)}
      <HelpText>{helpText}</HelpText>
      {invalidFeedback && <div className="invalid-feedback">{invalidFeedback}</div>}
    </div>
  );
}

export default FormGroupWithLabel;

export type FormGroupWithLabelWrapperProps<P extends { id?: string }> = Omit<
  FormGroupWithLabelProps,
  'children'
> &
  Omit<P, 'id'>;

export function FormGroupWithLabelWrapper<P extends { id?: string }>(
  WrappedComponent: React.ComponentType<P>,
): React.FunctionComponent<FormGroupWithLabelWrapperProps<P>> {
  const Wrapper = (props: FormGroupWithLabelWrapperProps<P>) => {
    const [formGroupWithLabelProps, wrappedComponentProps] = extractFormGroupWithLabelProps(props);
    return (
      <FormGroupWithLabel {...formGroupWithLabelProps}>
        {(id) => <WrappedComponent {...({ ...wrappedComponentProps, id } as unknown as P)} />}
      </FormGroupWithLabel>
    );
  };

  Wrapper.displayName = `FormGroupWithLabelWrapper<${
    WrappedComponent.displayName ?? 'UnknownInputComponent'
  }>`;
  return Wrapper;
}
