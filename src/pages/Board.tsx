import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import { Column } from "../components/Column";
import { useKanbanStore } from '../store/useKanban';

export const Board = () => {
  const columns = useKanbanStore((state) => state.columns);
  const handleDragStart = useKanbanStore((state) => state.handleDragStart);
  const handleDragOver = useKanbanStore((state) => state.handleDragOver);
  const handleDragEnd = useKanbanStore((state) => state.handleDragEnd);


  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 350,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  
  return (
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-x-6 pt-[1.5rem] m-auto">
          {columns.map((column) => (
            <Column
              key={column.id}
              id={column.id}
              title={column.title}
              tasks={column.tasks}
              className="flex-shrink-0 w-72"
            />
          ))}
          <div className="flex-shrink-0 w-72 h-screen flex items-center justify-center bg-add-column-gradient dark:bg-none 
          dark:bg-[#2B2C37] rounded-lg transition-all duration-200 ease-in-out active:scale-[0.98]">
            <button className="text-dark-gray text-[1.5rem] font-bold select-none">
              + New Column
            </button>
          </div>
        </div>
      </DndContext>
  );
}

