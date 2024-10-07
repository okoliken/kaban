import { create } from "zustand";
import { ModalConstants } from "@/utils/constants";
type modalState = {
  isOpen: boolean;
  modalType: ModalConstants | null;
};

type modalActions = {
  openModal: (type: ModalConstants) => void;
  closeModal: () => void;
};

export const useModalStore = create<modalState & modalActions>((set) => ({
  isOpen: false,
  modalType: null,
  openModal: (type) =>
    set(() => ({
      isOpen: true,
      modalType: type,
    })),
  closeModal: () =>
    set(() => ({
      isOpen: false,
      modalType: null,
    })),
}));
