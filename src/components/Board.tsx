import { useDroppable } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { Task } from "../utils/types";

export const Board = ({ children, className, id, tasks }:React.PropsWithChildren<{className:string, id: number, tasks: Task[]}>) => {
    const { setNodeRef } = useDroppable({
        id: id,
      });

    return  (
        <SortableContext id={String(id)} items={tasks} strategy={rectSortingStrategy}>
            <div className={className} ref={setNodeRef}>
                {children}
            </div>
        </SortableContext>
    )
}