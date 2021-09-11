import { ReactNode, ChangeEvent, InputHTMLAttributes } from 'react';
import classnames from 'classnames';

import useUniqueId from './useUniqueId';

export type BootstrapFormCheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  /** the content of the label that will appear beside the element */
  label: ReactNode;
  /** whether or not the element is checked */
  checked: boolean;
  /**
   * if present, this will be called each time this input is checked or unchecked.  It's an
   * easier alternative to onChange that avoids having to deal with DOM events.
   */
  onCheckedChange?: (value: boolean) => void;
  /**
   * is this input a radio button or a checkbox?
   */
  type: 'radio' | 'checkbox';
  /**
   * the className that will be applied to the wrapper <div> around the input and its label
   */
  className?: string;
  /**
   * the className that will be applied to the input itself
   */
  inputClassName?: string;
};

function BootstrapFormCheckbox(props: BootstrapFormCheckboxProps): JSX.Element {
  const { className, inputClassName, label, onChange, onCheckedChange, type, ...otherProps } =
    props;

  const inputId = useUniqueId(otherProps.name ? `${otherProps.name}-` : 'checkbox-');
  const onChangeProp =
    onChange ||
    (onCheckedChange
      ? (event: ChangeEvent<HTMLInputElement>) => {
          onCheckedChange(event.target.checked);
        }
      : // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => {});

  return (
    <div className={classnames('form-check', className)}>
      <label className="form-check-label" htmlFor={inputId}>
        <input
          className={classnames('form-check-input', inputClassName)}
          id={inputId}
          onChange={onChangeProp}
          type={type ?? 'checkbox'}
          {...otherProps}
        />{' '}
        {label}
      </label>
    </div>
  );
}

export default BootstrapFormCheckbox;
