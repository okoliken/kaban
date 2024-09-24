
import { Card } from "./ui/card"
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from "@dnd-kit/sortable";


export const DraggableCard = ({ children, id, className }: React.PropsWithChildren<{ id: number, className: string }>) => {

    const {attributes, listeners, setNodeRef, transform, isDragging} = useSortable({
        id: id,
      });

      const style = {
        transform: CSS.Translate.toString(transform),
        cursor: `${isDragging ? 'grabbing' : ''}`,
        zIndex: '99999',
      }

    return (
        <Card ref={setNodeRef} className={className} {...attributes} {...listeners} style={style}>
            {children}
        </Card>
    )
}