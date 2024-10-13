import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
// import { Select } from "../ui/select"

export const AddNewTask = () => {
    return (
        <section>
            <div className="grid gap-y-6">
                <header className="text-lg text-[#000112] dark:text-white font-bold">
                    Add New Task
                </header>
                <form className="grid gap-y-6">
                    <fieldset>
                        <label className="text-dark-gray font-bold text-sm dark:text-white">Title</label>
                        <Input placeholder="e.g. Take coffee break" className="mt-2 placeholder:text-[0.813rem]" type="text" />
                    </fieldset>
                    <fieldset>
                        <label className="text-dark-gray font-bold text-sm dark:text-white">Description</label>
                        <Textarea placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little." className="mt-2 leading-[1.438rem] placeholder:text-[0.813rem]" />
                    </fieldset>

                    <fieldset>

                    </fieldset>
                </form>

            </div>
        </section>
    )
}