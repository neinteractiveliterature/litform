import { InputHTMLAttributes } from 'react';
import * as React from 'react';
import { FormGroupWithLabelWrapper } from './FormGroupWithLabel';

type BootstrapFormInputPropsCommon = InputHTMLAttributes<HTMLInputElement>;

type BootstrapFormInputPropsWithHTMLChange = BootstrapFormInputPropsCommon;
type BootstrapFormInputPropsWithTextChange = Omit<BootstrapFormInputPropsCommon, 'onChange'> & {
  /**
   * if present, this will be called each time the text content of the input changes.  It's an
   * easier alternative to onChange that avoids having to deal with DOM events.
   */
  onTextChange: (text: string) => void;
};

export type BootstrapFormInputProps =
  | BootstrapFormInputPropsWithHTMLChange
  | BootstrapFormInputPropsWithTextChange;

function isHTMLChangeProps(
  props: BootstrapFormInputProps,
): props is BootstrapFormInputPropsWithHTMLChange {
  return !Object.prototype.hasOwnProperty.call(props, 'onTextChange');
}

function extractInputElementAttributes(
  props: BootstrapFormInputProps,
): InputHTMLAttributes<HTMLInputElement> {
  if (isHTMLChangeProps(props)) {
    return props;
  }

  const { onTextChange, ...otherProps } = props as BootstrapFormInputPropsWithTextChange;
  return otherProps;
}

function BootstrapFormInput(props: BootstrapFormInputProps) {
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

export default FormGroupWithLabelWrapper(BootstrapFormInput);
