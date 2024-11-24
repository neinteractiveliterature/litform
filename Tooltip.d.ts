import { Ref, ReactNode } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
import { usePopper } from 'react-popper';
export type TooltipProps = Pick<ReturnType<typeof usePopper>, 'styles' | 'attributes' | 'state'> & {
    popperRef: Ref<HTMLDivElement>;
    arrowRef: Ref<HTMLDivElement>;
    visible?: boolean;
    children: ReactNode | ReactNode[];
};
declare function Tooltip({ popperRef, arrowRef, styles, visible, attributes, state, children, }: TooltipProps): JSX.Element;
export default Tooltip;
