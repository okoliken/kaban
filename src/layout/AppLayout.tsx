import { Header } from "@/components/shared/Header"
import { Sidebar } from "@/components/shared/SideBar"


export const AppLayout = (props: React.PropsWithChildren) =>  {
    return (
        <div className="flex w-full max-w-8xl bg-white">
            <Sidebar />

            <main className="w-full flex-1">
                <Header />

                <div className="md:pt-[0.5rem] px-6 ">
                  {props.children}
                </div>
            </main>
        </div>
    )
}