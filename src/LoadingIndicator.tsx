import { LitformIconSetIdentifier } from './IconSets';

export type LoadingIndicatorProps = {
  size?: number;
  /** @deprecated */
  iconSet?: LitformIconSetIdentifier;
};

function LoadingIndicator({ size = 5 }: LoadingIndicatorProps): JSX.Element {
  const remSize = `${2.5 + (6 - size) * 0.5}rem`;
  return (
    <div className="spinner-border" style={{ width: remSize, height: remSize }} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default LoadingIndicator;
