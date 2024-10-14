import { Button } from "../ui/button";
import { MenuIcon } from "../ui/MenuIcon";
import { useModalStore } from "@/store/useModal";
import { ModalConstants } from "@/utils/constants";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { generateRandomId } from "@/utils/helpers";

export const Header = () => {
  const openModal = useModalStore((state) => state.openModal);

  const PopOverMenuAction = [
    {
      title:'Edit Board',
      className:'text-dark-gray',
      action: () => openModal(ModalConstants.EIDTBOARD),
      id:generateRandomId()
    },
    {
      title:'Delete Board',
      className:'text-destructive-1',
      action: () => openModal(ModalConstants.DELETEBOARD),
      id:generateRandomId()
    },
  ]

  return (
    <header className="h-24 border-b border-soft-gray dark:border-[#3E3F4E] flex items-center bg-white dark:bg-[#2B2C37]">
      <div className="flex items-center justify-between w-full px-6">
        <h2 className="font-bold text-2xl leading-[1.89rem] dark:text-white">
          Platform Launch
        </h2>

        <div className="flex items-center gap-x-[1.5rem]">
          <Button
            onClick={() => openModal(ModalConstants.ADDNEWTASK)}
            aria-label="Add New Task"
          >
            + Add New Task
          </Button>
          <Popover>
            <PopoverTrigger> <MenuIcon /></PopoverTrigger>
            <PopoverContent className="p-4">
              <ul className="flex flex-col gap-y-4">
                {PopOverMenuAction.map((menu) => (
                <li onClick={() => menu.action()} key={menu.id} className="text-[0.813rem] p-1">
                  <button className={`${menu.className} font-medium`}>{menu.title}</button>
                </li>
                ))}
              </ul>
            </PopoverContent>
          </Popover>

        </div>
      </div>
    </header>
  );
};
