import { useEffect, useState } from 'react';
import { getIconClassName, LitformIconSetIdentifier } from './IconSets';

export type PageLoadingIndicatorProps = {
  visible: boolean;
  iconSet?: LitformIconSetIdentifier;
};

function PageLoadingIndicator({ visible, iconSet }: PageLoadingIndicatorProps): JSX.Element {
  const [showLoadingIndicator, setShowLoadingIndicator] = useState(false);

  useEffect(() => {
    if (!visible) {
      setShowLoadingIndicator(false);
    }
    const timeoutId = setTimeout(() => setShowLoadingIndicator(visible), 250);
    return () => clearTimeout(timeoutId);
  }, [visible]);

  return (
    <div
      className="text-center mt-5 custom-loading-indicator"
      style={{
        opacity: showLoadingIndicator ? 1.0 : 0.0,
        visibility: showLoadingIndicator ? 'visible' : 'hidden',
      }}
    >
      {iconSet === 'font-awesome-4' ? (
        <i className={getIconClassName('spinner', iconSet)} />
      ) : (
        <div className="spinner-border" role="status" />
      )}
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default PageLoadingIndicator;
