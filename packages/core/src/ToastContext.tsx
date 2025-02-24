import React, { JSX, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Toast, { TOAST_FADE_DURATION } from './Toast';
import { Temporal } from 'temporal-polyfill';

export const TOAST_ON_NEXT_PAGE_LOAD_STORAGE_KEY = 'toastOnNextPageLoad';

export type ToastMessage = {
  uuid: string;
  title: React.ReactNode;
  body: React.ReactNode;
  visible: boolean;
  dismiss: () => void;
  autoDismissAfter?: number;
};

export type ToastMessageConstructorParams = Pick<
  ToastMessage,
  'body' | 'title' | 'autoDismissAfter'
>;

export type DelayedToastConstructorParams = {
  title: string;
  body: string;
  autoDismissAfter?: number;
};

export type ToastContextValue = {
  toastMessages: ToastMessage[];
  addMessage: (message: ToastMessageConstructorParams) => string;
  dismissMessage: (uuid: string) => void;
};

const ToastContext = React.createContext<ToastContextValue>({
  toastMessages: [],
  addMessage: () => '',
  dismissMessage: () => {},
});

export type ToastContainerProps = {
  formatTimeAgo: (timeAgo: Temporal.Duration) => string;
};

export function ToastContainer({ formatTimeAgo }: ToastContainerProps): JSX.Element {
  const { toastMessages } = useContext(ToastContext);

  return (
    <div className="toast-container" aria-live="polite" aria-atomic="true">
      {toastMessages.map((toastMessage) => (
        <Toast
          title={toastMessage.title}
          visible={toastMessage.visible}
          close={toastMessage.dismiss}
          formatTimeAgo={formatTimeAgo}
          key={toastMessage.uuid}
          autoCloseAfter={toastMessage.autoDismissAfter}
        >
          {toastMessage.body}
        </Toast>
      ))}
    </div>
  );
}

export type ToastProviderProps = {
  children: React.ReactNode;
  formatTimeAgo: ToastContainerProps['formatTimeAgo'];
};

export function ToastProvider({ children, formatTimeAgo }: ToastProviderProps): JSX.Element {
  const [toastMessages, setToastMessages] = useState<ToastMessage[]>([]);

  const dismissMessage = useCallback((uuid: string) => {
    setToastMessages((prevToastMessages) =>
      prevToastMessages.map((msg) => {
        if (msg.uuid === uuid) {
          return { ...msg, visible: false };
        }

        return msg;
      }),
    );

    setTimeout(() => {
      setToastMessages((prevToastMessages) => {
        return prevToastMessages.filter((msg) => msg.uuid !== uuid);
      });
    }, TOAST_FADE_DURATION);
  }, []);

  const addMessage = useCallback(
    (message: ToastMessageConstructorParams) => {
      const uuid = uuidv4();
      setToastMessages((prevToastMessages) => [
        ...prevToastMessages,
        { ...message, uuid, visible: true, dismiss: () => dismissMessage(uuid) },
      ]);
      return uuid;
    },
    [dismissMessage],
  );

  const contextValue = useMemo<ToastContextValue>(
    () => ({ toastMessages, addMessage, dismissMessage }),
    [toastMessages, addMessage, dismissMessage],
  );

  useEffect(() => {
    const storedToast = window.sessionStorage.getItem(TOAST_ON_NEXT_PAGE_LOAD_STORAGE_KEY);
    if (storedToast) {
      try {
        const toastParams = JSON.parse(storedToast);
        addMessage({
          title: <strong>{toastParams.title}</strong>,
          body: toastParams.body,
          autoDismissAfter: toastParams.autoDismissAfter,
        });
      } catch (error) {
        Rollbar?.warn(error);
      }
      window.sessionStorage.removeItem(TOAST_ON_NEXT_PAGE_LOAD_STORAGE_KEY);
    }
  }, [addMessage]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToastContainer formatTimeAgo={formatTimeAgo} />
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue['addMessage'] {
  const { addMessage } = useContext(ToastContext);
  return addMessage;
}

export function useToastOnNextPageLoad(): (message: DelayedToastConstructorParams) => void {
  const toastOnNextPageLoad = useCallback((message: DelayedToastConstructorParams) => {
    window.sessionStorage.setItem(TOAST_ON_NEXT_PAGE_LOAD_STORAGE_KEY, JSON.stringify(message));
  }, []);

  return toastOnNextPageLoad;
}
