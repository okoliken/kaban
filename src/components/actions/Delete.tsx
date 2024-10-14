import { Button } from "../ui/button"

export const DeleteBoard = ({ closeDeleteBoardModal }: { closeDeleteBoardModal: () => void }) => {
    return (
        <section>
            <div className="flex flex-col gap-y-6">
                <header id="delete-board" className="text-lg text-destructive-1 font-bold">
                  Delete this board?
                </header>

                <div>
                    <p className="text-dark-gray leading-[1.438rem] text-[0.813rem] font-medium">Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.</p>
                </div>

                <div className="flex items-center gap-x-4" aria-describedby="delete board actions">
                    <Button className="flex-1 h-10" variant={'destructive'}>Delete</Button>
                    <Button onClick={() => closeDeleteBoardModal()} className="flex-1 h-10" variant={'secondary'}>Cancel</Button>
                </div>
            </div>
        </section>
    )
}