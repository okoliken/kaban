import { Header } from "@/components/shared/Header";
import { Sidebar } from "@/components/shared/SideBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useModalStore } from "@/store/useModal";
import { AddNewTask } from "@/components/actions/AddNewTask";
import { ModalConstants } from "@/utils/constants";
import Modal from "react-modal";
import { useMemo } from "react";


Modal.setAppElement("#root");

export const AppLayout = (props: React.PropsWithChildren) => {
  const isOpened = useModalStore((state) => state.isOpen);
  const modalType = useModalStore((state) => state.modalType);
  const closeModal = useModalStore((state) => state.closeModal);


  const modalContentMap: Record<ModalConstants, JSX.Element> = {
    [ModalConstants.ADDNEWTASK]: <AddNewTask />,
    [ModalConstants.ADDNEWBOARD]: <></>,
    [ModalConstants.DELETEBOARD]: <></>,
    [ModalConstants.EDITTASK]: <></>,
  };

  const modalContent = useMemo(() => {
    return modalType ? modalContentMap[modalType] || <p>Hello world</p> : <p>Hello world</p>;
  }, [modalType]);


  const modalStyles = {
    overlayClassName:
      'fixed inset-0 z-50 bg-black bg-opacity-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    className:
      "fixed left-[50%] bg-white dark:bg-[#2B2C37] dark:text-white top-[50%] z-50 grid w-full max-w-[30rem] translate-x-[-50%] translate-y-[-50%] gap-4 p-8 bg-background  shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-6",
  };

  return (
    <ThemeProvider>
      <div className="flex h-screen bg-light-gray dark:bg-[#20212C]">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <div className="flex-1 overflow-x-auto pt-[0.5rem] pb-[3.125rem] px-6">
            {props.children}
          </div>
        </main>
      </div>


      <Modal
        isOpen={isOpened}
        onRequestClose={closeModal}
        className={modalStyles.className}
        overlayClassName={modalStyles.overlayClassName} 
      >
       {modalContent}
      </Modal>
    </ThemeProvider>
  );
};
