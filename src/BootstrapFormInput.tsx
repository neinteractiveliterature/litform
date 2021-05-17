import { InputHTMLAttributes, ReactNode } from 'react';
import * as React from 'react';
import useUniqueId from './useUniqueId';
import HelpText from './HelpText';

type BootstrapFormInputPropsCommon = InputHTMLAttributes<HTMLInputElement> & {
  /** the content of the label that will appear above the input */
  label: ReactNode;
  /** if true, the label will be hidden visually (but still present for screenreaders) */
  hideLabel?: boolean;
  /** if present, this content will appear below the input */
  helpText?: ReactNode;
  /** if present, this content will appear as validation feedback.  This will appear only if
   * the className includes is-invalid. */
  invalidFeedback?: ReactNode;
};

type BootstrapFormInputPropsWithHTMLChange = BootstrapFormInputPropsCommon;
type BootstrapFormInputPropsWithTextChange = Omit<BootstrapFormInputPropsCommon, 'onChange'> & {
  /**
   * if present, this will be called each time the text content of the input changes.  It's an
   * easier alternative to onChange that avoids having to deal with DOM events.
   */
  onTextChange: (text: string) => void;
};

export type BootstrapFormInputProps =
  | BootstrapFormInputPropsWithHTMLChange
  | BootstrapFormInputPropsWithTextChange;

function isHTMLChangeProps(
  props: BootstrapFormInputProps,
): props is BootstrapFormInputPropsWithHTMLChange {
  return !Object.prototype.hasOwnProperty.call(props, 'onTextChange');
}

function extractInputElementAttributes(
  props: BootstrapFormInputProps,
): InputHTMLAttributes<HTMLInputElement> {
  if (isHTMLChangeProps(props)) {
    const { helpText, label, hideLabel, invalidFeedback, type, onChange, ...otherProps } = props;
    return otherProps;
  }

  const { helpText, label, hideLabel, invalidFeedback, type, onTextChange, ...otherProps } = props;
  return otherProps;
}

function BootstrapFormInput(props: BootstrapFormInputProps) {
  const inputId = useUniqueId(`${props.name || 'input'}-`);
  const inputAttributes = extractInputElementAttributes(props);

  const onChangeProp = isHTMLChangeProps(props)
    ? props.onChange
    : (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onTextChange(event.target.value);
      };

  return (
    <div className="mb-3">
      <label htmlFor={inputId} className={props.hideLabel ? 'visually-hidden' : undefined}>
        {props.label}
      </label>
      <input
        className="form-control"
        id={inputId}
        onChange={onChangeProp}
        type={props.type ?? 'text'}
        {...inputAttributes}
      />
      <HelpText>{props.helpText}</HelpText>
      {props.invalidFeedback && <div className="invalid-feedback">{props.invalidFeedback}</div>}
    </div>
  );
}

export default BootstrapFormInput;
