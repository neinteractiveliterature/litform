import { SelectHTMLAttributes } from 'react';
import * as React from 'react';
import { FormGroupWithLabelWrapper, FormGroupWithLabelWrapperProps } from './FormGroupWithLabel';

type BootstrapFormSelectOwnProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> & {
  onValueChange: (value: string) => void;
};

export type BootstrapFormSelectProps = FormGroupWithLabelWrapperProps<BootstrapFormSelectOwnProps>;

function extractSelectElementAttributes(
  props: BootstrapFormSelectOwnProps,
): SelectHTMLAttributes<HTMLSelectElement> {
  const { onValueChange, ...otherProps } = props;
  return otherProps;
}

function BootstrapFormSelect(props: BootstrapFormSelectOwnProps) {
  const onChangeProp = (event: React.ChangeEvent<HTMLSelectElement>) =>
    props.onValueChange(event.target.value);

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
