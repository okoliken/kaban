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
                if (!over) return;
            
                const { columns } = get();
                const activeColumn = get().findColumnByTaskId(Number(active.id));
                const overColumn = get().findColumnById(Number(over.id));
            
                if (!activeColumn || !overColumn || activeColumn === overColumn) return;
            
                // Ensure immutability here by copying tasks
                const newColumns = [...columns];
                const activeColumnIndex = newColumns.findIndex(
                    (col) => col.id === activeColumn.id
                );
                const overColumnIndex = newColumns.findIndex(
                    (col) => col.id === overColumn.id
                );
            
                const activeTasks = [...newColumns[activeColumnIndex].tasks];
                const overTasks = [...newColumns[overColumnIndex].tasks];
            
                const [movedTask] = activeTasks.splice(
                    activeTasks.findIndex((task) => task.id === Number(active.id)),
                    1
                );
            
                overTasks.push(movedTask);
            
                newColumns[activeColumnIndex].tasks = activeTasks;
                newColumns[overColumnIndex].tasks = overTasks;
            
                get().setColumns(newColumns);
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

                set({ columns: newColumns, activeTask: null });
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
