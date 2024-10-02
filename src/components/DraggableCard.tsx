import { Task } from "@/utils/types";
import { Card } from "./ui/card";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const DraggableCard = ({
  children,
  id,
  className,
  tasks
}: React.PropsWithChildren<{ id: number; className: string, tasks: Task }>) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data:{
      type:"task",
      tasks
    }
  });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={`${className} ${isDragging ? 'z-10' : ''}`}
      {...attributes}
      {...listeners}
    >
      {children}
    </Card>
  );
};
