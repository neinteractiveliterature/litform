import { getIconClassName, LitformIconSetIdentifier } from './IconSets';

export type LoadingIndicatorProps = { size?: number; iconSet?: LitformIconSetIdentifier };

function LoadingIndicator({ size = 5, iconSet }: LoadingIndicatorProps): JSX.Element {
  if (iconSet === 'font-awesome-4') {
    return (
      <div className={`d-inline-block display-${size ?? 5}`} aria-label="Loading...">
        <i className={getIconClassName('spinner', iconSet)} aria-hidden="true" />
      </div>
    );
  } else {
    const remSize = `${2.5 + (6 - size) * 0.5}rem`;
    return (
      <div className="spinner-border" style={{ width: remSize, height: remSize }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
}

export default LoadingIndicator;
