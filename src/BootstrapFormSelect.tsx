import { SelectHTMLAttributes, ReactNode } from 'react';
import * as React from 'react';
import FormGroupWithLabel from './FormGroupWithLabel';

type BootstrapFormSelectPropsCommon = SelectHTMLAttributes<HTMLSelectElement> & {
  label: ReactNode;
};

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
    const { label, onChange, ...otherProps } = props;
    return otherProps;
  }

  const { label, onValueChange, ...otherProps } = props;
  return otherProps;
}

function BootstrapFormSelect(props: BootstrapFormSelectProps) {
  const onChangeProp = isHTMLChangeProps(props)
    ? props.onChange
    : (event: React.ChangeEvent<HTMLSelectElement>) => props.onValueChange(event.target.value);

  return (
    <FormGroupWithLabel label={props.label}>
      {(id) => (
        <select
          className="form-select"
          id={id}
          onChange={onChangeProp}
          {...extractSelectElementAttributes(props)}
        />
      )}
    </FormGroupWithLabel>
  );
}

export default BootstrapFormSelect;
