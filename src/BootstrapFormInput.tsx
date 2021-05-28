import { InputHTMLAttributes } from 'react';
import * as React from 'react';
import { FormGroupWithLabelWrapper, FormGroupWithLabelWrapperProps } from './FormGroupWithLabel';

type BootstrapFormInputOwnProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  /**
   * if present, this will be called each time the text content of the input changes.  It's an
   * easier alternative to onChange that avoids having to deal with DOM events.
   */
  onTextChange: (text: string) => void;
};

export type BootstrapFormInputProps = FormGroupWithLabelWrapperProps<BootstrapFormInputOwnProps>;

function extractInputElementAttributes(
  props: BootstrapFormInputOwnProps,
): InputHTMLAttributes<HTMLInputElement> {
  const { onTextChange, ...otherProps } = props;
  return otherProps;
}

function BootstrapFormInput(props: BootstrapFormInputOwnProps) {
  const inputAttributes = extractInputElementAttributes(props);

  const onChangeProp = (event: React.ChangeEvent<HTMLInputElement>) => {
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
