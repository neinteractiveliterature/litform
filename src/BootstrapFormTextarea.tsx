import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';
import * as React from 'react';
import useUniqueId from './useUniqueId';
import { FormGroupWithLabelWrapper } from './FormGroupWithLabel';

type BootstrapFormTextareaPropsCommon = TextareaHTMLAttributes<HTMLTextAreaElement>;

type BootstrapFormTextareaPropsWithHTMLChange = BootstrapFormTextareaPropsCommon;
type BootstrapFormTextareaPropsWithTextChange = Omit<
  BootstrapFormTextareaPropsCommon,
  'onChange'
> & {
  onTextChange: (text: string) => void;
};

export type BootstrapFormTextareaProps =
  | BootstrapFormTextareaPropsWithHTMLChange
  | BootstrapFormTextareaPropsWithTextChange;

function isHTMLChangeProps(
  props: BootstrapFormTextareaProps,
): props is BootstrapFormTextareaPropsWithHTMLChange {
  return !Object.prototype.hasOwnProperty.call(props, 'onTextChange');
}

function extractTextareaElementAttributes(
  props: BootstrapFormTextareaProps,
): InputHTMLAttributes<HTMLTextAreaElement> {
  if (isHTMLChangeProps(props)) {
    const { onChange, ...otherProps } = props;
    return otherProps;
  }

  const { onTextChange, ...otherProps } = props;
  return otherProps;
}

function BootstrapFormTextarea(props: BootstrapFormTextareaProps) {
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

export default FormGroupWithLabelWrapper(BootstrapFormTextarea);
