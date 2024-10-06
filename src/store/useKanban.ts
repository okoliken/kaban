import { create } from "zustand";
import { Column as ColumnType, Task } from "../utils/types";
import { arrayMove } from "@dnd-kit/sortable";
import { DragOverEvent } from "@dnd-kit/core";
import { initialData } from "../utils/helpers";

interface KanbanState {
    columns: ColumnType[];
    activeTask: Task | null;
}

interface KanbanActions {
    setColumns: (columns: ColumnType[]) => void;
    setActiveTask: (task: Task | null) => void;
    handleDragStart: (event: DragOverEvent) => void;
    handleDragOver: (event: DragOverEvent) => void;
    handleDragEnd: (event: DragOverEvent) => void;
    findTaskById: (id: number) => Task | null
    findColumnByTaskId: (id: number) => ColumnType | null
    findColumnById: (id: number) => ColumnType | null
}

export const useKanbanStore =
    create<KanbanState &
        KanbanActions>
        ((set, get) => ({
            columns: initialData,
            activeTask: null,

            setColumns: (columns: ColumnType[]) => set({ columns }),

            setActiveTask: (task: Task | null) => set({ activeTask: task }),

            handleDragStart: (event: DragOverEvent) => {
                const {active} = event
                const task = get().findTaskById(Number(active.id));
                set({ activeTask: task });
            },
            handleDragOver: (event: DragOverEvent) => {
                const { active, over } = event;

                if (!over) return; // Exit if there's no "over" task
            
                const { columns } = get(); // Get the current columns
                const activeColumn = get().findColumnByTaskId(Number(active.id)); // Find the column where the active task belongs
                const overColumn = get().findColumnByTaskId(Number(over.id)); // Find the column where the over task belongs
            
                if (!activeColumn || !overColumn) return; // Exit if either column is not found
            
                const newColumns = [...columns]; // Create a new copy of the columns for immutability
            
                // **Handling within the same column (as already working)**
                if (activeColumn.id === overColumn.id) {
                    const columnIndex = newColumns.findIndex(col => col.id === activeColumn.id);
                    const tasks = [...newColumns[columnIndex].tasks]; // Copy the tasks in the column
            
                    const activeTaskIndex = tasks.findIndex(task => task.id === Number(active.id));
                    const overTaskIndex = tasks.findIndex(task => task.id === Number(over.id));
            
                    if (activeTaskIndex === -1 || overTaskIndex === -1) return; // Ensure tasks are found
            
                    newColumns[columnIndex].tasks = arrayMove(tasks, activeTaskIndex, overTaskIndex); // Rearrange tasks
                } 
                // **Handling drag-and-drop between different columns**
                else {
                    // Find the indices of the active and over columns
                    const activeColumnIndex = newColumns.findIndex(col => col.id === activeColumn.id);
                    const overColumnIndex = newColumns.findIndex(col => col.id === overColumn.id);
            
                    // Copy the tasks from both columns
                    const activeTasks = [...newColumns[activeColumnIndex].tasks];
                    const overTasks = [...newColumns[overColumnIndex].tasks];
            
                    // Remove the task from the active column
                    const [movedTask] = activeTasks.splice(
                        activeTasks.findIndex((task) => task.id === Number(active.id)),
                        1
                    );
            
                    // Add the moved task to the over column
                    overTasks.unshift(movedTask);
            
                    // Update the tasks in the respective columns
                    newColumns[activeColumnIndex].tasks = activeTasks;
                    newColumns[overColumnIndex].tasks = overTasks;


                }
            
                // Set the updated columns array in the store
                setTimeout(() => {
                    get().setColumns(newColumns);
                }, 0)
            },

            handleDragEnd: (event: DragOverEvent) => {
                const { active, over } = event;
                if (!over) return;
                const { columns } = get();
                const activeColumn = get().findColumnByTaskId(Number(active.id));
                const overColumn = get().findColumnById(Number(over.id));

                if (!activeColumn || !overColumn) return;

                const newColumns = [...columns];

                if (activeColumn !== overColumn) {
                    const activeColumnIndex = newColumns.findIndex(
                        (col) => col.id === activeColumn.id
                    );
                    const overColumnIndex = newColumns.findIndex(
                        (col) => col.id === overColumn.id
                    );

                    const [movedTask] = newColumns[activeColumnIndex].tasks.splice(
                        newColumns[activeColumnIndex].tasks.findIndex(
                            (task) => task.id === Number(active.id)
                        ),
                        1
                    );

                    newColumns[overColumnIndex].tasks.push(movedTask);
                } else {
                    const columnIndex = newColumns.findIndex(
                        (col) => col.id === activeColumn.id
                    );
                    const column = newColumns[columnIndex];
                    const oldIndex = column.tasks.findIndex(
                        (task) => task.id === Number(active.id)
                    );
                    const newIndex = column.tasks.findIndex((task) => task.id === Number(over.id));

                    newColumns[columnIndex] = {
                        ...column,
                        tasks: arrayMove(column.tasks, oldIndex, newIndex),
                    };
                }

                setTimeout(() => {
                    set({ columns: newColumns, activeTask: null });
                }, 0)
            },

            findTaskById: (id: number): Task | null => {
                const { columns } = get();
                for (const column of columns) {
                    const task = column.tasks.find((t) => t.id === id);
                    if (task) return task;
                }
                return null;
            },

            findColumnByTaskId: (taskId: number): ColumnType | null => {
                const { columns } = get();
                return (
                    columns.find((column) =>
                        column.tasks.some((task: Task) => task.id === taskId)
                    ) || null
                );
            },

            findColumnById: (columnId: number): ColumnType | null => {
                const { columns } = get();
                return columns.find((column) => column.id === columnId) || null;
            },
        }));
