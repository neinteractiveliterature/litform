import { ReactNode, useEffect, useState } from 'react';
import { DateTime } from 'luxon';

export const TOAST_FADE_DURATION = 350;

export type ToastProps = {
  title: ReactNode | ReactNode[];
  children: ReactNode | ReactNode[];
  visible: boolean;
  close: () => void;
  autoCloseAfter?: number;
  justNowText?: string;
};

export default function Toast({
  title,
  children,
  visible,
  close,
  autoCloseAfter,
  justNowText,
}: ToastProps): JSX.Element {
  const [timestamp, setTimestamp] = useState(() => DateTime.now());
  const [formattedTimeAgo, setFormattedTimeAgo] = useState<string | null>(null);
  const justNow = justNowText || 'just now';
  const [visibilityClass, setVisibilityClass] = useState(justNow);

  useEffect(() => {
    let timeout: number | undefined;
    if (visible) {
      setTimestamp(DateTime.now());
      setVisibilityClass('fade showing');
      timeout = window.setTimeout(() => {
        setVisibilityClass('fade show');
      }, TOAST_FADE_DURATION);
    } else {
      setVisibilityClass('fade');
      timeout = window.setTimeout(() => {
        setVisibilityClass('fade hide');
      }, TOAST_FADE_DURATION);
    }

    return () => {
      window.clearTimeout(timeout);
    };
  }, [visible]);

  useEffect(() => {
    if (visible) {
      const handle = window.setInterval(() => {
        if (autoCloseAfter && timestamp.diffNow('milliseconds').milliseconds >= autoCloseAfter) {
          close();
        }

        if (timestamp.diffNow('minutes').minutes < 1) {
          setFormattedTimeAgo(justNow);
        } else {
          setFormattedTimeAgo(timestamp.toRelative());
        }
      }, 1000 * 15);
      return () => {
        window.clearInterval(handle);
      };
    }
  }, [timestamp, visible, close, autoCloseAfter, justNow]);

  return (
    <div
      className={`toast ${visibilityClass}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <span className="mr-auto flex-grow-1">{title}</span>
        <small className="text-muted">{formattedTimeAgo}</small>
        <button
          type="button"
          className="ms-2 mb-1 btn-close"
          data-dismiss="toast"
          aria-label="Close"
          onClick={close}
        />
      </div>
      <div className="toast-body">{children}</div>
    </div>
  );
}
