import { ReactNode, HTMLAttributes } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
import { LitformIconSetIdentifier } from './IconSets';
export type CopyToClipboardButtonProps = HTMLAttributes<HTMLButtonElement> & {
    text: string;
    format?: string;
    copiedProps?: HTMLAttributes<HTMLButtonElement>;
    defaultText?: ReactNode | ReactNode[];
    copiedText?: ReactNode | ReactNode[];
    iconSet?: LitformIconSetIdentifier;
};
declare function CopyToClipboardButton({ text, format, copiedProps, defaultText, copiedText, iconSet, ...otherProps }: CopyToClipboardButtonProps): JSX.Element;
export default CopyToClipboardButton;
