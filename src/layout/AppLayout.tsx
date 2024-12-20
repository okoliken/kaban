import { Header } from "@/components/shared/Header";
import { Sidebar } from "@/components/shared/SideBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useModalStore } from "@/store/useModal";
import {
  TaskModification,
  AddNewBoard,
  DeleteBoard,
  EditBoard,
  TaskDetails
} from "@/components/actions";
import { ModalConstants } from "@/utils/constants";
import Modal from "react-modal";
import { useMemo, useRef, useEffect } from "react";

Modal.setAppElement("#root");

import { useCallback } from 'react';

export const AppLayout = (props: React.PropsWithChildren) => {
  const isOpened = useModalStore((state) => state.isOpen);
  const modalType = useModalStore((state) => state.modalType);
  const closeModal = useModalStore((state) => state.closeModal);
  const modalRef = useRef(null);

  const modalContentMap: Record<ModalConstants, JSX.Element> = {
    [ModalConstants.TASKMODIFICATION]: <TaskModification />,
    [ModalConstants.ADDNEWBOARD]: <AddNewBoard />,
    [ModalConstants.DELETEBOARD]: (
      <DeleteBoard closeDeleteBoardModal={() => closeModal()} />
    ),
    [ModalConstants.EIDTBOARD]: <EditBoard />,
    [ModalConstants.TASKDETAILS]: <TaskDetails />,
  };

  const modalContent = useMemo(() => {
    return modalType ? (
      modalContentMap[modalType] || <p>Hello world</p>
    ) : (
      <p>Hello world</p>
    );
  }, [modalType]);


  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = 'hidden'
    }
  },[isOpened])

  const modalStyles = {
    overlayClassName: "fixed inset-0 top-0 left-0 right-0 bottom-0 overflow-y-auto z-50 bg-black bg-opacity-50 flex items-center justify-center h-full",
    className:
      "bg-white dark:bg-[#2B2C37] max-h-[90vh] overflow-y-auto dark:text-white z-50 grid w-full max-w-[30rem] gap-4 p-8 bg-background  shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-6",
  };

  const handleModalClose = useCallback((event: React.MouseEvent | React.KeyboardEvent | MouseEvent) => {
    event.stopPropagation();
    closeModal();
  }, [closeModal]);

  return (
    <ThemeProvider>
      <div className="flex h-screen bg-light-gray dark:bg-[#20212C]">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <div className="flex-1 overflow-x-auto pt-[0.5rem] pb-[3.125rem] px-6 remove-scroll-bar">
            {props.children}
          </div>
        </main>
      </div>

      <Modal
        isOpen={isOpened}
        onRequestClose={handleModalClose}
        className={modalStyles.className}
        overlayClassName={modalStyles.overlayClassName}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <div ref={modalRef}>{modalContent}</div>
      </Modal>


    </ThemeProvider>
  );
};
