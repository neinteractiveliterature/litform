export type LitformIconName = 'copy' | 'question-circle' | 'spinner' | 'search';
export type LitformIconSet = Record<LitformIconName, string>;
export type LitformIconSetIdentifier = 'bootstrap-icons';
export declare const BootstrapIcons: LitformIconSet;
export declare const LitformIconSets: Record<LitformIconSetIdentifier, LitformIconSet>;
export declare function getIconClassName(iconName: LitformIconName, iconSetIdentifier?: LitformIconSetIdentifier): string;
