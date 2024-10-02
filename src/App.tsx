import  { useState } from "react";
import { AppLayout } from "./layout/AppLayout";
import { DraggableCard } from "./components/DraggableCard";
import { Column, Task } from "./utils/types";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
  DragOverEvent,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { Board } from "./components/Board";
import { initialData } from "./utils/helpers";




function App() {
  const [columns, setColumns] = useState<Column[]>(initialData);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const task = findTaskById(Number(active.id));
    setActiveTask(task);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = Number(active.id);
    const overId = Number(over.id);

    const activeColumn = findColumnByTaskId(activeId);
    const overColumn = findColumnById(overId);

    if (!activeColumn || !overColumn || activeColumn === overColumn) return;

    setColumns((prevColumns) => {
      const activeColumnIndex = prevColumns.findIndex((col) => col.id === activeColumn.id);
      const overColumnIndex = prevColumns.findIndex((col) => col.id === overColumn.id);

      const newColumns = [...prevColumns];
      const [movedTask] = newColumns[activeColumnIndex].tasks.splice(
        newColumns[activeColumnIndex].tasks.findIndex((task) => task.id === activeId),
        1
      );

      newColumns[overColumnIndex].tasks.push(movedTask);

      return newColumns;
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = Number(active.id);
    const overId = Number(over.id);

    const activeColumn = findColumnByTaskId(activeId);
    const overColumn = findColumnById(overId);

    if (!activeColumn || !overColumn) return;

    if (activeColumn !== overColumn) {
      setColumns((prevColumns) => {
        const activeColumnIndex = prevColumns.findIndex((col) => col.id === activeColumn.id);
        const overColumnIndex = prevColumns.findIndex((col) => col.id === overColumn.id);

        const newColumns = [...prevColumns];
        const [movedTask] = newColumns[activeColumnIndex].tasks.splice(
          newColumns[activeColumnIndex].tasks.findIndex((task) => task.id === activeId),
          1
        );

        newColumns[overColumnIndex].tasks.push(movedTask);

        return newColumns;
      });
    } else {
      setColumns((prevColumns) => {
        const columnIndex = prevColumns.findIndex((col) => col.id === activeColumn.id);
        const newColumns = [...prevColumns];
        const column = newColumns[columnIndex];
        const oldIndex = column.tasks.findIndex((task) => task.id === activeId);
        const newIndex = column.tasks.findIndex((task) => task.id === overId);

        newColumns[columnIndex] = {
          ...column,
          tasks: arrayMove(column.tasks, oldIndex, newIndex),
        };

        return newColumns;
      });
    }

    setActiveTask(null);
  };

  const findTaskById = (id: number): Task | null => {
    for (const column of columns) {
      const task = column.tasks.find((t) => t.id === id);
      if (task) return task;
    }
    return null;
  };

  const findColumnByTaskId = (taskId: number): Column | null => {
    return columns.find((column) => column.tasks.some((task) => task.id === taskId)) || null;
  };

  const findColumnById = (columnId: number): Column | null => {
    return columns.find((column) => column.id === columnId) || null;
  };

  return (
    <AppLayout>
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-x-4 pt-[1.5rem] m-auto">
          {columns.map((column) => (
            <Board
              key={column.id}
              id={column.id}
              title={column.title}
              tasks={column.tasks}
              className="flex-shrink-0 w-72"
            />
          ))}
          <div className="flex-shrink-0 w-72 h-screen flex items-center justify-center bg-add-column-gradient dark:bg-none dark:bg-[#2B2C37] rounded-lg transition-all duration-200 ease-in-out active:scale-[0.98]">
            <button className="text-dark-gray text-[1.5rem] font-bold select-none">
              + New Column
            </button>
          </div>
        </div>
        <DragOverlay>
          {activeTask ? (
            <DraggableCard tasks={activeTask} id={activeTask.id} className="mb-[1.25rem] w-[17.5rem]">
              <h4 className="font-bold text-[0.938rem] mb-[0.5rem]">{activeTask.title}</h4>
              <p className="text-sm text-gray-500 font-bold">
                {activeTask.subtasks} of {activeTask.totalSubtasks} subtasks
              </p>
            </DraggableCard>
          ) : null}
        </DragOverlay>
      </DndContext>
    </AppLayout>
  );
}

export default App;