import { Button } from "../ui/button"
import { MenuIcon } from "../ui/MenuIcon"
export const Header = () => {
    return (
       <div className="h-24 border-b border-soft-gray flex items-center bg-white ">
          <div className="flex items-center justify-between w-full px-6">
             <h2 className="font-bold text-2xl">Platform Launch</h2>

            <div className="flex items-center gap-x-[1.5rem]">
              <Button>+ Add New Task</Button>
              <MenuIcon />
            </div>
          </div>
       </div>
    )
}


