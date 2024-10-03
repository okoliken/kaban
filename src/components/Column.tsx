import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Task } from "../utils/types";
import { DraggableCard } from "./Task";
import { useMemo } from "react";

export const Column = ({
  id,
  title,
  tasks,
  className,
}: {
  id: number;
  title: string;
  tasks: Task[];
  className: string;
}) => {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  const taskIds = useMemo(() => tasks.map((task) => task.id), [tasks]);

  return (
    <div ref={setNodeRef} className={className}>
      <div className="flex items-center gap-x-[0.75rem] mb-[1.5rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <circle cx="7.5" cy="7.5" r="7.5" fill="#49C4E5" />
        </svg>
        <h3 className="font-semibold text-xs tracking-[0.15rem] uppercase text-gray-500">
          {title} ({tasks.length})
        </h3>
      </div>
      <SortableContext id={String(id)} items={taskIds} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <DraggableCard
            tasks={task}
            key={task.id}
            id={task.id}
            className="mb-[1.25rem] w-[17.5rem]"
          >
            <h4 className="font-bold text-[0.938rem] mb-[0.5rem]">
              {task.title}
            </h4>
            <p className="text-sm text-gray-500 font-bold">
              {task.subtasks} of {task.totalSubtasks} subtasks
            </p>
          </DraggableCard>
        ))}
      </SortableContext>
    </div>
  );
};
