import { SelectHTMLAttributes } from 'react';
import * as React from 'react';
import { FormGroupWithLabelWrapper, FormGroupWithLabelWrapperProps } from './FormGroupWithLabel';

type BootstrapFormSelectOwnProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> & {
  onValueChange: (value: string) => void;
};

export type BootstrapFormSelectProps = FormGroupWithLabelWrapperProps<BootstrapFormSelectOwnProps>;

function partitionSelectElementAttributes(props: BootstrapFormSelectOwnProps) {
  const { onValueChange, ...selectAttributes } = props;
  return { onValueChange, selectAttributes };
}

function BootstrapFormSelect(props: BootstrapFormSelectOwnProps) {
  const { onValueChange, selectAttributes } = partitionSelectElementAttributes(props);
  const onChangeProp = (event: React.ChangeEvent<HTMLSelectElement>) =>
    onValueChange(event.target.value);

  return (
    <select
      {...selectAttributes}
      className={props.className ?? 'form-select'}
      onChange={onChangeProp}
    />
  );
}

const WrappedBootstrapFormSelect: React.FunctionComponent<BootstrapFormSelectProps> =
  FormGroupWithLabelWrapper(BootstrapFormSelect);

export default WrappedBootstrapFormSelect;
