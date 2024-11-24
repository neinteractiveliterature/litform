export interface ModalData<StateType> {
    open: (newModalState?: StateType) => void;
    close: () => void;
    state?: StateType;
    setState: (newState?: StateType) => void;
    visible: boolean;
}
export default function useModal<StateType>(initiallyOpen?: boolean): ModalData<StateType>;
