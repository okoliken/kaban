import { create } from "zustand";
import { ModalContants } from "@/utils/constants";
type modalState = {
  isOpen: boolean;
  modalType: ModalContants | null;
};

type modalActions = {
  openModal: (type: ModalContants) => void;
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
