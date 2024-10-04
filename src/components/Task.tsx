import { Task } from "@/utils/types";
import { Card } from "./ui/card";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const DraggableCard = ({
  children,
  id,
  className,
  tasks
}: React.PropsWithChildren<{ id: number | string; className: string, tasks: Task }>) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: Number(id),
    data: {
      type: "task",
      tasks
    }
  });

  const tiltDegree = 2; // Adjust the tilt degree as needed

  const style: React.CSSProperties = {
    transform: isDragging
      ? CSS.Transform.toString(transform) + ` rotate(${tiltDegree}deg)`
      : CSS.Transform.toString(transform),
    transition: `transform ${transition}, opacity ${transition}`,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={`${className} ${isDragging ? 'z-10 cursor-grabbing' : ''}`}
      {...attributes}
      {...listeners}
    >
      {children}
    </Card>
  );
};
