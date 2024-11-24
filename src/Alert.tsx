import { createContext, useContext, ReactNode, useCallback } from 'react';
import { Modal } from 'react-bootstrap4-modal';

import useModal from './useModal';

export type AlertState = {
  message?: ReactNode | ReactNode[];
};

export type AlertFunction = (message?: ReactNode | ReactNode[]) => void;

export type AlertContextValue = { alert: AlertFunction };

const AlertContext = createContext<AlertContextValue>({
  alert: () => {
    /* empty default function */
  },
});

export type AlertProviderProps = {
  children: ReactNode | ReactNode[];
  okText: string;
};

export function AlertProvider({ children, okText }: AlertProviderProps): JSX.Element {
  const modal = useModal<AlertState>();
  const alert = useCallback(
    (message?: ReactNode | ReactNode[]) => modal.open({ message }),
    [modal],
  );

  return (
    <AlertContext.Provider value={{ alert }}>
      {children}
      <Modal visible={modal.visible}>
        <div className="modal-body">{modal.state?.message ?? <div />}</div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={modal.close}>
            {okText}
          </button>
        </div>
      </Modal>
    </AlertContext.Provider>
  );
}

export function useAlert(): AlertFunction {
  const { alert } = useContext(AlertContext);
  return alert;
}
