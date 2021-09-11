import { getIconClassName, LitformIconSetIdentifier } from './IconSets';

export type LoadingIndicatorProps = { size?: number; iconSet?: LitformIconSetIdentifier };

function LoadingIndicator({
  size = 5,
  iconSet = 'bootstrap-icons',
}: LoadingIndicatorProps): JSX.Element {
  const remSize = `${2.5 + (6 - size) * 0.5}rem`;
  return (
    <div className="spinner-border" style={{ width: remSize, height: remSize }} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default LoadingIndicator;
