
export interface Task {
    id: number;
    title: string;
    subtasks: string;
    totalSubtasks: string;
  }
  
export interface Column {
    id: number;
    title: string;
    tasks: Task[];
  }
  