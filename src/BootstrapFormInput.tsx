import { InputHTMLAttributes } from 'react';
import * as React from 'react';
import { FormGroupWithLabelProps, FormGroupWithLabelWrapper } from './FormGroupWithLabel';

type BootstrapFormInputPropsCommon = InputHTMLAttributes<HTMLInputElement>;

type BootstrapFormInputPropsWithHTMLChange = BootstrapFormInputPropsCommon;
type BootstrapFormInputPropsWithTextChange = Omit<BootstrapFormInputPropsCommon, 'onChange'> & {
  /**
   * if present, this will be called each time the text content of the input changes.  It's an
   * easier alternative to onChange that avoids having to deal with DOM events.
   */
  onTextChange: (text: string) => void;
};

type BootstrapFormInputOwnProps =
  | BootstrapFormInputPropsWithHTMLChange
  | BootstrapFormInputPropsWithTextChange;

export type BootstrapFormInputProps =
  | (BootstrapFormInputPropsWithHTMLChange & FormGroupWithLabelProps)
  | (BootstrapFormInputPropsWithTextChange & FormGroupWithLabelProps);

function isHTMLChangeProps(
  props: BootstrapFormInputOwnProps,
): props is BootstrapFormInputPropsWithHTMLChange {
  return !Object.prototype.hasOwnProperty.call(props, 'onTextChange');
}

function extractInputElementAttributes(
  props: BootstrapFormInputOwnProps,
): InputHTMLAttributes<HTMLInputElement> {
  if (isHTMLChangeProps(props)) {
    return props;
  }

  const { onTextChange, ...otherProps } = props as BootstrapFormInputPropsWithTextChange;
  return otherProps;
}

function BootstrapFormInput(props: BootstrapFormInputOwnProps) {
  const inputAttributes = extractInputElementAttributes(props);

  const onChangeProp = isHTMLChangeProps(props)
    ? props.onChange
    : (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onTextChange(event.target.value);
      };

  return (
    <input
      onChange={onChangeProp}
      {...inputAttributes}
      className={props.className ?? 'form-control'}
      type={props.type ?? 'text'}
    />
  );
}

const WrappedBootstrapFormInput: React.FunctionComponent<BootstrapFormInputProps> =
  FormGroupWithLabelWrapper(BootstrapFormInput);

export default WrappedBootstrapFormInput;
