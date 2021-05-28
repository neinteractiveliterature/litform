import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';
import * as React from 'react';
import useUniqueId from './useUniqueId';
import { FormGroupWithLabelWrapper, FormGroupWithLabelWrapperProps } from './FormGroupWithLabel';

type BootstrapFormTextareaOwnProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'onChange'
> & {
  onTextChange: (text: string) => void;
};

export type BootstrapFormTextareaProps =
  FormGroupWithLabelWrapperProps<BootstrapFormTextareaOwnProps>;

function extractTextareaElementAttributes(
  props: BootstrapFormTextareaOwnProps,
): InputHTMLAttributes<HTMLTextAreaElement> {
  const { onTextChange, ...otherProps } = props;
  return otherProps;
}

function BootstrapFormTextarea(props: BootstrapFormTextareaOwnProps) {
  const { name } = props;
  const inputId = useUniqueId(`${name}-`);
  const onChangeProp = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    props.onTextChange(event.target.value);

  return (
    <textarea
      className="form-control"
      id={inputId}
      name={name}
      onChange={onChangeProp}
      {...extractTextareaElementAttributes(props)}
    />
  );
}

const WrappedBootstrapFormTextarea: React.FunctionComponent<BootstrapFormTextareaProps> =
  FormGroupWithLabelWrapper(BootstrapFormTextarea);

export default WrappedBootstrapFormTextarea;
