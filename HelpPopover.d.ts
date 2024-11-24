import { ReactNode } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
import { LitformIconSetIdentifier } from './IconSets';
export type HelpPopoverProps = {
    children?: ReactNode | ReactNode[] | ReactNode[];
    className?: string;
    initialVisible?: boolean;
    visibleChanged?: (newVisible: boolean) => void;
    iconSet?: LitformIconSetIdentifier;
};
declare function HelpPopover({ children, className, initialVisible, visibleChanged, iconSet, }: HelpPopoverProps): JSX.Element;
export default HelpPopover;
