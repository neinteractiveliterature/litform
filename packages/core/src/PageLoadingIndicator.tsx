import { JSX, useEffect, useState } from 'react';
import { LitformIconSetIdentifier } from './IconSets';

export type PageLoadingIndicatorProps = {
  visible: boolean;
  /**
   * Milliseconds to wait before showing the indicator, so that it doesn't flash on quick loads. With 0 it is visible from
   * the first render, including in server-rendered or prerendered HTML, where effects don't run.
   */
  delay?: number;
  /** @deprecated */
  iconSet?: LitformIconSetIdentifier;
};

function PageLoadingIndicator({ visible, delay = 250 }: PageLoadingIndicatorProps): JSX.Element {
  const [delayedVisible, setDelayedVisible] = useState(false);

  useEffect(() => {
    if (!visible) {
      setDelayedVisible(false);
    }
    const timeoutId = setTimeout(() => setDelayedVisible(visible), delay);
    return () => clearTimeout(timeoutId);
  }, [visible, delay]);

  // With no delay, don't wait for the effect
  const showLoadingIndicator = delay === 0 ? visible : delayedVisible;

  return (
    <div
      className="text-center mt-5 custom-loading-indicator"
      style={{
        opacity: showLoadingIndicator ? 1.0 : 0.0,
        visibility: showLoadingIndicator ? 'visible' : 'hidden',
      }}
    >
      <div className="spinner-border" role="status" />
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default PageLoadingIndicator;
