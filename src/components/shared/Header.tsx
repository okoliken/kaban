import { Button } from "../ui/button";
import { MenuIcon } from "../ui/MenuIcon";
import { useModalStore } from "@/store/useModal";
import { ModalContants } from "@/utils/constants";

export const Header = () => {
  const triggerModal = useModalStore((state) => state.openModal);

  return (
    <header className="h-24 border-b border-soft-gray dark:border-[#3E3F4E] flex items-center bg-white dark:bg-[#2B2C37]">
      <div className="flex items-center justify-between w-full px-6">
        <h2 className="font-bold text-2xl leading-[1.89rem] dark:text-white">
          Platform Launch
        </h2>

        <div className="flex items-center gap-x-[1.5rem]">
          <Button
            onClick={() => triggerModal(ModalContants.ADDNEWTASK)}
            aria-label="Add New Task"
          >
            + Add New Task
          </Button>
          <MenuIcon />
        </div>
      </div>
    </header>
  );
};
