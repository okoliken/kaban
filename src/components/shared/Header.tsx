import { Button } from "../ui/button";
import { MenuIcon } from "../ui/MenuIcon";
import { useModalStore } from "@/store/useModal";
import { ModalConstants } from "@/utils/constants";
import { ThemeContext } from "@/themeContext";
import { useContext } from "react";
import { useSideBarToggle } from "@/store/useSideBarToggle";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { generateRandomId } from "@/utils/helpers";
import { Logo } from "./Logo";

export const Header = () => {
  const openModal = useModalStore((state) => state.openModal);
  const themeToggler = useContext(ThemeContext);
  const sideBarToggler = useSideBarToggle();

  const PopOverMenuAction = [
    {
      title: 'Edit Board',
      className: 'text-dark-gray',
      action: () => openModal(ModalConstants.EIDTBOARD),
      id: generateRandomId()
    },
    {
      title: 'Delete Board',
      className: 'text-destructive-1',
      action: () => openModal(ModalConstants.DELETEBOARD),
      id: generateRandomId()
    },
  ]

  return (
    <header className="h-24 flex items-center bg-white dark:bg-[#2B2C37] border-b border-soft-gray dark:border-[#3E3F4E]">
      <div className="flex items-center justify-between w-full px-6">
        <div className="flex items-center gap-x-8 h-full">
          {!sideBarToggler.sideBarToggleState && (
            <>
            <div>
              <Logo isLightOrDark={themeToggler.isToggled} />
            </div>
            <div className="h-24 w-[1px] bg-soft-gray dark:bg-[#3E3F4E]"></div>
            </>
          )}
          <h2 className="font-bold text-xl lg:text-2xl leading-[1.89rem] dark:text-white">
            Platform Launch
          </h2>
        </div>

        <div className="flex items-center gap-x-[1.5rem]">
          <Button
            onClick={() => openModal(ModalConstants.ADDNEWTASK)}
            aria-label="Add New Task"
          >
            + Add New Task
          </Button>
          <Popover>
            <PopoverTrigger>
              <MenuIcon />
            </PopoverTrigger>
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
