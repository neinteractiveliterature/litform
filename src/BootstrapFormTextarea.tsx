import { TextareaHTMLAttributes } from 'react';
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

function partitionTextareaElementAttributes(props: BootstrapFormTextareaOwnProps) {
  const { onTextChange, ...textareaAttributes } = props;
  return { onTextChange, textareaAttributes };
}

function BootstrapFormTextarea(props: BootstrapFormTextareaOwnProps) {
  const { name } = props;
  const inputId = useUniqueId(`${name}-`);
  const { onTextChange, textareaAttributes } = partitionTextareaElementAttributes(props);
  const onChangeProp = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    onTextChange(event.target.value);

  return (
    <textarea
      className="form-control"
      id={inputId}
      name={name}
      onChange={onChangeProp}
      {...textareaAttributes}
    />
  );
}

const WrappedBootstrapFormTextarea: React.FunctionComponent<BootstrapFormTextareaProps> =
  FormGroupWithLabelWrapper(BootstrapFormTextarea);

export default WrappedBootstrapFormTextarea;
