export type LitformIconName = 'copy' | 'question-circle' | 'spinner' | 'search';

export type LitformIconSet = Record<LitformIconName, string>;

export type LitformIconSetIdentifier = 'bootstrap-icons';

export const BootstrapIcons: LitformIconSet = {
  copy: 'bi-clipboard',
  'question-circle': 'bi-question-circle-fill',
  spinner: 'spinner-border', // native bootstrap spinner component
  search: 'bi-search',
};

export const LitformIconSets: Record<LitformIconSetIdentifier, LitformIconSet> = {
  'bootstrap-icons': BootstrapIcons,
};

export function getIconClassName(
  iconName: LitformIconName,
  iconSetIdentifier?: LitformIconSetIdentifier,
): string {
  return LitformIconSets[iconSetIdentifier ?? 'bootstrap-icons'][iconName];
}
