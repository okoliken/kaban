
export interface Task {
    id: string | number;
    title: string;
    subtasks: string;
    totalSubtasks: string;
  }
  
 export interface Column {
    id: string | number;
    title: string;
    tasks: Task[];
  }
  