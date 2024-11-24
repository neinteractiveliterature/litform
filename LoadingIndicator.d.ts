import { LitformIconSetIdentifier } from './IconSets';
export type LoadingIndicatorProps = {
    size?: number;
    /** @deprecated */
    iconSet?: LitformIconSetIdentifier;
};
declare function LoadingIndicator({ size }: LoadingIndicatorProps): JSX.Element;
export default LoadingIndicator;
