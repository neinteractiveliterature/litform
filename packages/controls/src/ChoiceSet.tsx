import { ReactNode, ChangeEvent, JSX } from 'react';
import BootstrapFormCheckbox from './BootstrapFormCheckbox';

export type ChoiceSetChoice = {
  label: ReactNode | ReactNode[];
  value: string;
  disabled?: boolean;
};

export interface ChoiceSetBaseProps {
  name?: string;
  choices: readonly ChoiceSetChoice[];
  value?: string | string[] | null;
  multiple?: boolean;
  containerClassName?: string;
  choiceClassName?: string;
  inputClassName?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

export interface ChoiceSetSingleChoiceProps extends ChoiceSetBaseProps {
  value?: string | null;
  onChange?(value: string | null): unknown;
  multiple?: false;
}

export interface ChoiceSetMultipleChoiceProps extends ChoiceSetBaseProps {
  value?: string[] | null;
  onChange?(value: string[] | null): unknown;
  multiple: true;
}

export type ChoiceSetProps = ChoiceSetSingleChoiceProps | ChoiceSetMultipleChoiceProps;

function ChoiceSet(props: ChoiceSetProps): JSX.Element {
  const choiceType = props.multiple ? 'checkbox' : 'radio';

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!props.onChange) {
      return;
    }

    if (props.multiple) {
      if (event.target.checked) {
        props.onChange([...(props.value || []), event.target.value]);
      } else {
        props.onChange((props.value || []).filter((value) => value !== event.target.value));
      }
    } else {
      props.onChange(event.target.value);
    }
  };

  const options = props.choices.map(({ label, value, disabled = false }, index) => (
    <BootstrapFormCheckbox
      key={index}
      name={props.name || ''}
      type={choiceType}
      className={props.choiceClassName}
      inputClassName={props.inputClassName}
      label={label}
      value={value}
      checked={props.multiple ? (props.value || []).includes(value) : props.value === value}
      onChange={onChange}
      disabled={props.disabled || disabled}
    />
  ));

  return <div className={props.containerClassName}>{options}</div>;
}

export default ChoiceSet;
