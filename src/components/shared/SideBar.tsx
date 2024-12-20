import { Switch } from "@/components/ui/switch";
import { ThemeContext } from "@/themeContext";
import { useContext, SetStateAction, useEffect } from "react";
import { Logo } from "./Logo";
import { SunIcon } from "../icons/SunIcon";
import { MoonIcon } from "../icons/MoonIcon";
import { BoardIcon } from "../icons/BoardIcon";
import { EyeClose } from "../icons/EyeClose";
import { EyeOpen } from "../icons/EyeOpen";
import { useSideBarToggle } from "@/store/useSideBarToggle";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery"; // You'll need to create this hook

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

export const ShowSideBarButton = ({
  toggleSideBar,
}: {
  toggleSideBar: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button
      className="absolute left-0 bottom-8 bg-primary-1 w-14 h-12  flex items-center justify-center 
    rounded-tr-[6.25rem] rounded-br-[6.25rem] pl-[1.125rem] pr-[1.375rem]"
      onClick={() => toggleSideBar(true)}
    >
      <EyeOpen />
    </button>
  );
};

export const Sidebar = () => {
  const { sideBarToggleState, setSideBarToggleState } = useSideBarToggle();
  const themeToggler = useContext(ThemeContext);
  const isMediumScreen = useMediaQuery("(max-width: 768px)"); // Adjust the breakpoint as needed

  useEffect(() => {
    if (isMediumScreen) {
      setSideBarToggleState(false);
    } else {
      setSideBarToggleState(true);
    }
  }, [isMediumScreen, setSideBarToggleState]);

  const sidebarVariants = {
    open: {
      width: "18.75rem",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: { width: "0rem", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const contentVariants = {
    open: { opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.2 } },
    closed: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  };

  const isSidebarVisible =
    (sideBarToggleState === null || sideBarToggleState) && !isMediumScreen;

  return (
    <>
      <motion.aside
        initial={false}
        animate={isSidebarVisible ? "open" : "closed"}
        variants={sidebarVariants}
        className="h-screen flex-shrink-0 overflow-hidden bg-white dark:bg-[#2B2C37] border-r border-soft-gray dark:border-[#3E3F4E]"
      >
        <AnimatePresence mode="wait">
          {isSidebarVisible && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={contentVariants}
              className="h-full w-full flex flex-col pt-8"
            >
              <div className="pl-6 lg:pl-8">
                <Logo isLightOrDark={themeToggler.isToggled} />
              </div>

              <div className="mt-14">
                <h3 className="pl-8 text-dark-gray text-xs font-bold tracking-[0.15rem]">
                  ALL BOARDS (3)
                </h3>
              </div>

              <BoardList />

              <div className="mt-auto w-full flex items-center justify-center flex-col mb-8">
                <ThemeToggle />

                <div className="self-start pr-6 w-full">
                  <HideSidebarButton
                    toggleSideBar={() => setSideBarToggleState(false)}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.aside>

      {!isSidebarVisible && (
        <div className="flex-shrink-0">
          <ShowSideBarButton
            toggleSideBar={() => setSideBarToggleState(true)}
          />
        </div>
      )}
    </>
  );
};
