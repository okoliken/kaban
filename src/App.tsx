import { AppLayout } from "./layout/AppLayout";
import { DraggableCard } from "./components/DraggableCard";
import { Column } from "./utils/types";
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Board } from "./components/Board";
import { useState } from "react";


function App() {
  const [isDropped, setIsDropped] = useState(false);



  const [columns] = useState<Column[]>([
    {
      title: "TODO",
      id: 1,
      tasks: [
        {
          title: "Build UI for onboarding flow",
          subtasks: "0",
          totalSubtasks: "3",
          id: 1
        },
        { title: "Build UI for search", subtasks: "0", totalSubtasks: "1", id: 2 },
        { title: "Build settings UI", subtasks: "0", totalSubtasks: "2", id: 3 },
        {
          title: "QA and test all major user journeys",
          subtasks: "0",
          totalSubtasks: "2",
          id: 4
        },
      ],
    },
    {
      title: "DOING",
      id: 2,
      tasks: [
        {
          title: "Design settings and search pages",
          subtasks: "1",
          totalSubtasks: "3",
          id: 5
        },
        {
          title: "Add account management endpoints",
          subtasks: "2",
          totalSubtasks: "3",
          id: 6
        },
        {
          title: "Design onboarding flow",
          subtasks: "1",
          totalSubtasks: "3",
          id: 7
        },
        {
          title: "Add search endpoints",
          subtasks: "1",
          totalSubtasks: "2",
          id: 8
        },
        {
          title: "Add authentication endpoints",
          subtasks: "1",
          totalSubtasks: "2",
          id: 9
        },
        {
          title:
            "Research pricing points for various competitors and trial different business models",
          subtasks: "1",
          totalSubtasks: "3",
          id: 10
        },
      ],
    },
    {
      title: "DONE",
      id: 3,
      tasks: [
        {
          title: "Conduct 5 wireframe tests",
          subtasks: "1",
          totalSubtasks: "1",
          id: 11
        },
        {
          title: "Create wireframe prototype",
          subtasks: "1",
          totalSubtasks: "1",
          id: 12
        },
        {
          title: "Review results of usability tests and iterate",
          subtasks: "3",
          totalSubtasks: "3",
          id: 13
        },
        {
          title:
            "Create paper prototypes and conduct 10 usability tests with potential customers",
          subtasks: "2",
          totalSubtasks: "2",
          id: 14
        },
        { title: "Market discovery", subtasks: "1", totalSubtasks: "1", id: 15 },
        { title: "Competitor analysis", subtasks: "2", totalSubtasks: "2", id: 16 },
        { title: "Research the market", subtasks: "2", totalSubtasks: "2", id: 17 },
      ],
    },
  ]);

  
  // const findColumn = (unique: string | null) => {
  //   if (!unique) {
  //     return null;
  //   }
  //   // overの対象がcolumnの場合があるためそのままidを返す
  //   if (columns.some((c) => c.id === unique)) {
  //     return columns.find((c) => c.id === unique) ?? null;
  //   }
  //   const id = String(unique);
  //   const itemWithColumnId = columns.flatMap((c) => {
  //     const columnId = c.id;
  //     return c.cards.map((i) => ({ itemId: i.id, columnId: columnId }));
  //   });
  //   const columnId = itemWithColumnId.find((i) => i.itemId === id)?.columnId;
  //   return columns.find((c) => c.id === columnId) ?? null;
  // };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  return (
    <AppLayout>
      <div className="flex gap-x-4 pt-[1.5rem]">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          {columns.map((column, index) => (
            <Board tasks={column.tasks} id={column.id} key={index} className="flex-shrink-0 w-72">
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
                  {column.title} ({column.tasks.length})
                </h3>
              </div>
              {column.tasks.map((task, index) => (
                <DraggableCard id={task.id as number} className="mb-[1.25rem] w-[17.5rem]" key={index}>
                  <h4 className="font-bold text-[0.938rem] mb-[0.5rem]">
                    {task.title}
                  </h4>
                  <p className="text-sm text-gray-500 font-bold">
                    {task.subtasks} of {task.totalSubtasks} subtasks
                  </p>
                </DraggableCard>
              ))}
            </Board>
          ))}
        </DndContext>
        <div className="flex-shrink-0 w-72 h-screen flex items-center justify-center bg-add-column-gradient dark:bg-none dark:bg-[#2B2C37] rounded-lg transition-all duration-200 ease-in-out active:scale-[0.98]">
          <button className="text-dark-gray text-[1.5rem] font-bold select-none">
            + New Column
          </button>
        </div>
      </div>
    </AppLayout>
  );

  function handleDragEnd(event: DragEndEvent) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }

}

export default App;
