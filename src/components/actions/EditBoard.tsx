import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Close } from "../icons/Close";

export const EditBoard = () => {
    return (
        <section>
            <div className="flex flex-col gap-y-6">
                <header id="delete-board" className="text-lg text-[#000112] dark:text-white font-bold">
                    Edit Board
                </header>

                <form className="grid gap-y-6">
                    <fieldset>
                        <legend className="sr-only">Board Name</legend>
                        <label
                            htmlFor="title"
                            className="text-dark-gray font-bold text-sm dark:text-white"
                        >
                            Board Name
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
                    <legend className="sr-only">Board Columns</legend>
                    <label
                        className="text-dark-gray font-bold text-sm dark:text-white"
                        htmlFor="subtask"
                    >
                        Board Columns
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
                </form>
                <div>
                    <Button fullWidth className="flex-1 h-10">Save Changes</Button>
                </div>
            </div>
        </section>
    )
}