import { Switch } from "@/components/ui/switch";
import { ThemeContext } from "@/themeContext";
import { useContext, SetStateAction } from "react";
import { Logo } from "./Logo";
import { SunIcon } from "../icons/SunIcon";
import { MoonIcon } from "../icons/MoonIcon";
import { BoardIcon } from "../icons/BoardIcon";
import { EyeClose } from "../icons/EyeClose";
import { useSideBarToggle } from "@/store/useSideBarToggle";

export const ThemeToggle = () => {
  const themeToggler = useContext(ThemeContext);

  return (
    <div className="w-full max-w-[14.688rem] lg:max-w-[15.688rem] h-12 bg-light-gray dark:bg-[#20212C] rounded-[0.375rem] mb-[0.5rem] flex items-center justify-center gap-x-[1.479rem]">
      <SunIcon />
      <Switch
        checked={themeToggler.isToggled}
        onCheckedChange={() => themeToggler.toggleTheme()}
        id="theme-toggle"
      />
      <MoonIcon />
    </div>
  );
};

export const BoardList = () => {
  return (
    <ul className="pt-[1.188rem] pr-6">
      <li>
        <button className="w-full bg-primary-1 hover:bg-primary-1/10 dark:hover:bg-white group px-6 lg:pl-[2rem] h-12 lg:pr-[2rem] rounded-tr-[6.25rem] rounded-br-[6.25rem] flex items-center gap-x-4">
          <BoardIcon />
          <p className="text-white group-hover:text-primary-1 dark:group-hover:text-primary-1 font-bold leading-[1.181rem] text-[0.938rem]">
            Platform Launch
          </p>
        </button>
      </li>
      <div className="w-full cursor-pointer px-6 lg:pl-[2rem] hover:opacity-70 transition-opacity duration-75 ease-in-out h-12 lg:pr-[2rem] rounded-tr-[6.25rem] rounded-br-[6.25rem] flex items-center gap-x-4">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="fill-primary-1"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.846133 0.846133C0.304363 1.3879 0 2.12271 0 2.88889V13.1111C0 13.8773 0.304363 14.6121 0.846133 15.1538C1.3879 15.6957 2.12271 16 2.88889 16H13.1111C13.8773 16 14.6121 15.6957 15.1538 15.1538C15.6957 14.6121 16 13.8773 16 13.1111V2.88889C16 2.12271 15.6957 1.3879 15.1538 0.846133C14.6121 0.304363 13.8773 0 13.1111 0H2.88889C2.12271 0 1.3879 0.304363 0.846133 0.846133ZM1.33333 13.1111V8.44448H9.77781V14.6667H2.88889C2.03022 14.6667 1.33333 13.9698 1.33333 13.1111ZM9.77781 7.11111V1.33333H2.88889C2.47633 1.33333 2.08067 1.49723 1.78895 1.78895C1.49723 2.08067 1.33333 2.47633 1.33333 2.88889V7.11111H9.77781ZM11.1111 5.77778H14.6667V10.2222H11.1111V5.77778ZM14.6667 11.5555H11.1111V14.6667H13.1111C13.5236 14.6667 13.9194 14.5028 14.2111 14.2111C14.5028 13.9194 14.6667 13.5236 14.6667 13.1111V11.5555ZM14.6667 2.88889V4.44445H11.1111V1.33333H13.1111C13.5236 1.33333 13.9194 1.49723 14.2111 1.78895C14.5028 2.08067 14.6667 2.47633 14.6667 2.88889Z"
          />
        </svg>
        <p className="text-primary font-bold leading-[1.181rem] text-[0.938rem] dark:text-primary-1">
          + Create New Board
        </p>
      </div>
    </ul>
  );
};

export const HideSidebarButton = ({
  toggleSideBar,
}: {
  toggleSideBar: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => toggleSideBar(false)}
      className="flex items-center gap-x-[0.938rem] hover:bg-primary-1/10 dark:hover:bg-white pl-[2rem] h-12 pr-[2rem] rounded-tr-[6.25rem] rounded-br-[6.25rem] w-full group"
      aria-label="Hide Sidebar"
    >
      <EyeClose />
      <p className="text-[0.938rem] text-dark-gray font-bold group-hover:text-primary-1">
        Hide Sidebar
      </p>
    </button>
  );
};

export const Sidebar = () => {
  const sideBarToggler = useSideBarToggle();
  const themeToggler = useContext(ThemeContext);

  return (
    <>
      {sideBarToggler.sideBarToggleState && (
        <aside className="bg-white dark:bg-[#2B2C37] w-full max-w-[16.25rem] lg:max-w-[18.75rem] border-r border-soft-gray dark:border-[#3E3F4E] pt-[2.049rem] flex flex-col justify-between">
          <div>
            <div className="pl-6 lg:pl-[2.125rem]">
              <Logo isLightOrDark={themeToggler.isToggled} />
            </div>

            <div className="mt-[3.375rem]">
              <h3 className="pl-[2.125rem] text-dark-gray text-xs font-bold tracking-[0.15rem]">
                ALL BOARDS (3)
              </h3>
            </div>

            <BoardList />
          </div>

          <div className="w-full flex items-center justify-center flex-col mb-[2rem]">
            <ThemeToggle />

            <div className="self-start pr-6 w-full">
              <HideSidebarButton
                toggleSideBar={sideBarToggler.setSideBarToggleState}
              />
            </div>
          </div>
        </aside>
      )}
    </>
  );
};
