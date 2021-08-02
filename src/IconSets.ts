export type LitformIconName = 'copy' | 'question-circle' | 'spinner' | 'search';

export type LitformIconSet = Record<LitformIconName, string>;

export type LitformIconSetIdentifier = 'font-awesome-4' | 'bootstrap-icons';

export const FontAwesome4Icons: LitformIconSet = {
  copy: 'fa fa-copy',
  'question-circle': 'fa fa-question-circle',
  spinner: 'fa fa-circle-o-notch fa-spin fa-fw',
  search: 'fa fa-search',
};

export const BootstrapIcons: LitformIconSet = {
  copy: 'bi-clipboard',
  'question-circle': 'bi-question-circle-fill',
  spinner: 'spinner-border', // native bootstrap spinner component
  search: 'bi-search',
};

export const LitformIconSets: Record<LitformIconSetIdentifier, LitformIconSet> = {
  'font-awesome-4': FontAwesome4Icons,
  'bootstrap-icons': BootstrapIcons,
};

export function getIconClassName(
  iconName: LitformIconName,
  iconSetIdentifier?: LitformIconSetIdentifier,
): string {
  return LitformIconSets[iconSetIdentifier ?? 'font-awesome-4'][iconName];
}
