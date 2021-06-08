import { useState, ReactNode, HTMLAttributes } from 'react';
import copy from 'copy-to-clipboard';

export type CopyToClipboardButtonProps = HTMLAttributes<HTMLButtonElement> & {
  text: string;
  format?: string;
  copiedProps?: HTMLAttributes<HTMLButtonElement>;
  defaultText?: ReactNode;
  copiedText?: ReactNode;
};

function CopyToClipboardButton({
  text,
  format,
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

  const copyToClipboard = () => {
    if (copy(text, { format })) {
      onSuccess();
    }
  };

  return (
    <button {...otherProps} {...(copied ? copiedProps || {} : {})} onClick={copyToClipboard}>
      <i className="fa fa-copy" />{' '}
      {copied ? copiedText || 'Copied!' : defaultText || 'Copy to clipboard'}
    </button>
  );
}

export default CopyToClipboardButton;
