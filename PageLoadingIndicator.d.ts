import { LitformIconSetIdentifier } from './IconSets';
export type PageLoadingIndicatorProps = {
    visible: boolean;
    /** @deprecated */
    iconSet?: LitformIconSetIdentifier;
};
declare function PageLoadingIndicator({ visible }: PageLoadingIndicatorProps): JSX.Element;
export default PageLoadingIndicator;
