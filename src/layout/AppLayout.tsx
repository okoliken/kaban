import { Header } from "@/components/shared/Header";
import { Sidebar } from "@/components/shared/SideBar";
import { ThemeProvider } from "@/components/ThemeProvider";

export const AppLayout = (props: React.PropsWithChildren) => {
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
    </ThemeProvider>
  );
};
