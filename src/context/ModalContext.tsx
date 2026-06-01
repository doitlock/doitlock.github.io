import { createContext, useContext } from 'react';

interface ModalContextValue {
  activeId: string | null;
  openModal: (id: string) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextValue>({
  activeId: null,
  openModal: () => {},
  closeModal: () => {},
});

export const useModal = () => useContext(ModalContext);
