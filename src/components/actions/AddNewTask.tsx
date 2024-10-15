import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Close } from "../icons/Close";
import { Button } from "../ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export const AddNewTask = () => {
    return (
        <section className="grid gap-y-6" aria-labelledby="add-task-title">
            <header id="add-task-title" className="text-lg text-[#000112] dark:text-white font-bold">
                Add New Task
            </header>
            <form className="grid gap-y-6" aria-describedby="task-details-description">
                <fieldset>
                    <legend className="sr-only">Task Title</legend>
                    <label
                        htmlFor="title"
                        className="text-dark-gray font-bold text-sm dark:text-white"
                    >
                        Title
                    </label>
                    <Input
                        id="title"
                        placeholder="e.g. Take coffee break"
                        className="mt-2 placeholder:text-[0.813rem]"
                        type="text"
                        aria-required="true"
                    />
                </fieldset>

                <fieldset>
                    <legend className="sr-only">Task Description</legend>
                    <label
                        htmlFor="description"
                        className="text-dark-gray font-bold text-sm dark:text-white"
                    >
                        Description
                    </label>
                    <Textarea
                        id="description"
                        placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
                        className="mt-2 leading-[1.438rem] placeholder:text-[0.813rem]"
                        aria-describedby="task-details-description"
                    />
                </fieldset>

                <fieldset>
                    <legend className="sr-only">Subtasks</legend>
                    <label
                        className="text-dark-gray font-bold text-sm dark:text-white"
                        htmlFor="subtask"
                    >
                        Subtasks
                    </label>
                    {Array.from({ length: 2 }).map((_, index) => (
                        <div key={index} className="flex items-center gap-x-4 mb-3 mt-2">
                            <Input
                                id="subtask"
                                placeholder="e.g. Make coffee"
                                className="placeholder:text-[0.813rem]"
                                type="text"
                                aria-label="Subtask input"
                            />
                            <button
                                type="button"
                                aria-label="Remove subtask"
                                className="flex items-center"
                            >
                                <Close />
                            </button>
                        </div>
                    ))}
                    <Button
                        fullWidth
                        type="button"
                        variant={"secondary"}
                        className="h-10 text-[0.813rem]"
                        title="+ Add New Subtask"
                        aria-label="Add new subtask"
                    >
                        + Add New Subtask
                    </Button>
                </fieldset>
                <fieldset>
                    <legend className="sr-only">Status</legend>
                    <label
                        className="text-dark-gray font-bold text-sm dark:text-white mb-2"
                        htmlFor="subtask"
                    >
                        Status
                    </label>

                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                        <SelectContent position="item-aligned">
                            <SelectGroup>
                                {/* <SelectLabel>Fruits</SelectLabel> */}
                                <SelectItem value="todo">Todo</SelectItem>
                                <SelectItem value="doing">Doing</SelectItem>
                                <SelectItem value="done">Done</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </fieldset>

                   <Button
                        fullWidth
                        type="button"
                        className="h-10 text-[0.813rem]"
                        title="+ Add New Subtask"
                        aria-label="Add new subtask"
                    >
                        + Add New Subtask
                    </Button>
            </form>
        </section>
    );
};
