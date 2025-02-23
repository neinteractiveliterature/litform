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

function partitionInputElementAttributes(props: BootstrapFormInputOwnProps) {
  const { onTextChange, ...inputAttributes } = props;
  return { onTextChange, inputAttributes };
}

function BootstrapFormInput(props: BootstrapFormInputOwnProps) {
  const { onTextChange, inputAttributes } = partitionInputElementAttributes(props);

  const onChangeProp = (event: React.ChangeEvent<HTMLInputElement>) => {
    onTextChange(event.target.value);
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
