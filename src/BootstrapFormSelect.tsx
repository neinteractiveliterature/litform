import { SelectHTMLAttributes } from 'react';
import * as React from 'react';
import { FormGroupWithLabelProps, FormGroupWithLabelWrapper } from './FormGroupWithLabel';

type BootstrapFormSelectPropsCommon = SelectHTMLAttributes<HTMLSelectElement>;

type BootstrapFormSelectPropsWithHTMLChange = BootstrapFormSelectPropsCommon;
type BootstrapFormSelectPropsWithTextChange = Omit<BootstrapFormSelectPropsCommon, 'onChange'> & {
  onValueChange: (value: string) => void;
};

type BootstrapFormSelectOwnProps =
  | BootstrapFormSelectPropsWithHTMLChange
  | BootstrapFormSelectPropsWithTextChange;

export type BootstrapFormSelectProps = BootstrapFormSelectOwnProps & FormGroupWithLabelProps;

function isHTMLChangeProps(
  props: BootstrapFormSelectOwnProps,
): props is BootstrapFormSelectPropsWithHTMLChange {
  return !Object.prototype.hasOwnProperty.call(props, 'onValueChange');
}

function extractSelectElementAttributes(
  props: BootstrapFormSelectOwnProps,
): SelectHTMLAttributes<HTMLSelectElement> {
  if (isHTMLChangeProps(props)) {
    const { onChange, ...otherProps } = props;
    return otherProps;
  }

  const { onValueChange, ...otherProps } = props;
  return otherProps;
}

function BootstrapFormSelect(props: BootstrapFormSelectOwnProps) {
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

const WrappedBootstrapFormSelect: React.FunctionComponent<BootstrapFormSelectProps> =
  FormGroupWithLabelWrapper(BootstrapFormSelect);

export default WrappedBootstrapFormSelect;
