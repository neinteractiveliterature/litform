import { useState, ReactNode } from 'react';
import * as ReactClipboardJS from 'react-clipboard.js';

const ClipboardButton = ReactClipboardJS.default;

export type CopyToClipboardButtonProps = ReactClipboardJS.default['props'] & {
  copiedProps?: ReactClipboardJS.default['props'];
  defaultText?: ReactNode;
  copiedText?: ReactNode;
};

function CopyToClipboardButton({
  copiedProps,
  defaultText,
  copiedText,
  ...otherProps
}: CopyToClipboardButtonProps) {
  const [copied, setCopied] = useState(false);

  const onSuccess = () => {
    if (copied) {
      return;
    }

    setCopied(true);
    window.setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <ClipboardButton {...otherProps} {...(copied ? copiedProps || {} : {})} onSuccess={onSuccess}>
      <i className="fa fa-copy" />{' '}
      {copied ? copiedText || 'Copied!' : defaultText || 'Copy to clipboard'}
    </ClipboardButton>
  );
}

export default CopyToClipboardButton;
