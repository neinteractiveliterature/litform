import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';
import * as React from 'react';
import useUniqueId from './useUniqueId';
import { FormGroupWithLabelWrapper, FormGroupWithLabelWrapperProps } from './FormGroupWithLabel';

type BootstrapFormTextareaPropsCommon = TextareaHTMLAttributes<HTMLTextAreaElement>;

type BootstrapFormTextareaPropsWithHTMLChange = BootstrapFormTextareaPropsCommon;
type BootstrapFormTextareaPropsWithTextChange = Omit<
  BootstrapFormTextareaPropsCommon,
  'onChange'
> & {
  onTextChange: (text: string) => void;
};

type BootstrapFormTextareaOwnProps =
  | BootstrapFormTextareaPropsWithHTMLChange
  | BootstrapFormTextareaPropsWithTextChange;

export type BootstrapFormTextareaProps =
  FormGroupWithLabelWrapperProps<BootstrapFormTextareaOwnProps>;

function isHTMLChangeProps(
  props: BootstrapFormTextareaOwnProps,
): props is BootstrapFormTextareaPropsWithHTMLChange {
  return !Object.prototype.hasOwnProperty.call(props, 'onTextChange');
}

function extractTextareaElementAttributes(
  props: BootstrapFormTextareaOwnProps,
): InputHTMLAttributes<HTMLTextAreaElement> {
  if (isHTMLChangeProps(props)) {
    const { onChange, ...otherProps } = props;
    return otherProps;
  }

  const { onTextChange, ...otherProps } = props;
  return otherProps;
}

function BootstrapFormTextarea(props: BootstrapFormTextareaOwnProps) {
  const { name } = props;
  const inputId = useUniqueId(`${name}-`);
  const onChangeProp = isHTMLChangeProps(props)
    ? props.onChange
    : (event: React.ChangeEvent<HTMLTextAreaElement>) => props.onTextChange(event.target.value);

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
