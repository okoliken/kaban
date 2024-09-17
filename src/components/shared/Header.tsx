import { Button } from "../ui/button"
import { MenuIcon } from "../ui/MenuIcon"
export const Header = () => {
    return (
       <header className="h-24 border-b border-soft-gray flex items-center bg-white ">
          <div className="flex items-center justify-between w-full px-6">
             <h2 className="font-bold text-2xl leading-[1.89rem]">Platform Launch</h2>

            <div className="flex items-center gap-x-[1.5rem]">
              <Button aria-label="Add New Task">+ Add New Task</Button>
              <MenuIcon />
            </div>
          </div>
       </header>
    )
}


