import { MenuIcon } from "../ui/MenuIcon";
import { SubTask } from "../SubTask";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
//   } from "@/components/ui/popover"

export const TaskDetails = () => {
  const subtasks = [
    { id: "subtask1", text: "Research competitor pricing" },
    { id: "subtask2", text: "Analyze different business models" },
    { id: "subtask3", text: "Propose initial pricing strategy" },
  ];

  return(
    <section className="grid gap-y-6" aria-labelledby="task-details-title">
        <header id="task-details-title" className="text-lg text-[#000112] dark:text-white font-bold flex items-center gap-x-6 justify-between">
            <p className="flex-1 text-black dark:text-white text-lg leading-[1.418rem]">Research pricing points of various competitors and trial different business models</p>
            <MenuIcon />
        </header>

        <div>
            <p className="text-[0.813rem] leading-[1.438rem] font-medium text-dark-gray mb-6">We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.</p>
             <div className="grid gap-y-4">
                <p className="text-xs font-bold">Subtasks ({subtasks.length} of {subtasks.length})</p>

                <div className="grid gap-y-2">
                    {subtasks.map((subtask) => (
                        <SubTask key={subtask.id} id={subtask.id} text={subtask.text} />
                    ))}
                </div>
             </div>

             <div className="flex items-center flex-col gap-x-4 mt-6">
                <fieldset className="w-full">
                    <label className="text-dark-gray font-bold text-sm dark:text-white mb-2" htmlFor="current-status">Current Status</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                        <SelectContent position="item-aligned">
                            <SelectGroup>
                                <SelectItem value="todo">Todo</SelectItem>
                                <SelectItem value="doing">Doing</SelectItem>
                                <SelectItem value="done">Done</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
               </fieldset>
             </div>
        </div>
    </section>
  )
}
