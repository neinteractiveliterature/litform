import { SelectHTMLAttributes, ReactNode } from 'react';
import * as React from 'react';
import { FormGroupWithLabelWrapper } from './FormGroupWithLabel';

type BootstrapFormSelectPropsCommon = SelectHTMLAttributes<HTMLSelectElement>;

type BootstrapFormSelectPropsWithHTMLChange = BootstrapFormSelectPropsCommon;
type BootstrapFormSelectPropsWithTextChange = Omit<BootstrapFormSelectPropsCommon, 'onChange'> & {
  onValueChange: (value: string) => void;
};

export type BootstrapFormSelectProps =
  | BootstrapFormSelectPropsWithHTMLChange
  | BootstrapFormSelectPropsWithTextChange;

function isHTMLChangeProps(
  props: BootstrapFormSelectProps,
): props is BootstrapFormSelectPropsWithHTMLChange {
  return !Object.prototype.hasOwnProperty.call(props, 'onValueChange');
}

function extractSelectElementAttributes(
  props: BootstrapFormSelectProps,
): SelectHTMLAttributes<HTMLSelectElement> {
  if (isHTMLChangeProps(props)) {
    const { onChange, ...otherProps } = props;
    return otherProps;
  }

  const { onValueChange, ...otherProps } = props;
  return otherProps;
}

function BootstrapFormSelect(props: BootstrapFormSelectProps) {
  const onChangeProp = isHTMLChangeProps(props)
    ? props.onChange
    : (event: React.ChangeEvent<HTMLSelectElement>) => props.onValueChange(event.target.value);

  return (
    <select
      {...extractSelectElementAttributes(props)}
      className={props.className ?? 'form-select'}
      onChange={onChangeProp}
    />
  );
}

export default FormGroupWithLabelWrapper(BootstrapFormSelect);
