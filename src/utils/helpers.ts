import { Column } from "./types";
export const generateRandomId = () => Math.floor(Math.random() * 1000000);

export const initialData: Column[] = [
  {
    title: "TODO",
    id: generateRandomId(),
    tasks: [
      {
        title: "Build dashboard UI",
        subtasks: "0",
        totalSubtasks: "4",
        id: generateRandomId(),
      },
      {
        title: "Implement user authentication",
        subtasks: "0",
        totalSubtasks: '8',
        id: generateRandomId(),
      },
      {
        title: "Create database schema",
        subtasks: "0",
        totalSubtasks: "2",
        id: generateRandomId(),
      },
      {
        title: "Research competitor apps",
        subtasks: "0",
        totalSubtasks: "1",
        id: generateRandomId(),
      },
    ],
  },
  {
    title: "DOING",
    id: generateRandomId(),
    tasks: [
      {
        title: "Design homepage",
        subtasks: "2",
        totalSubtasks: "3",
        id: generateRandomId(),
      },
      {
        title: "Integrate Stripe payments",
        subtasks: "1",
        totalSubtasks: "3",
        id: generateRandomId(),
      },
      {
        title: "Develop user profile page",
        subtasks: "1",
        totalSubtasks: "2",
        id: generateRandomId(),
      },
      {
        title: "Fix login bug",
        subtasks: "1",
        totalSubtasks: "1",
        id: generateRandomId(),
      },
      {
        title: "Set up AWS infrastructure",
        subtasks: "2",
        totalSubtasks: "3",
        id: generateRandomId(),
      },
    ],
  },
  {
    title: "DONE",
    id: generateRandomId(),
    tasks: [
      {
        title: "Deploy MVP to staging",
        subtasks: "3",
        totalSubtasks: "3",
        id: generateRandomId(),
      },
      {
        title: "Conduct user testing",
        subtasks: "1",
        totalSubtasks: "1",
        id: generateRandomId(),
      },
      {
        title: "Complete project documentation",
        subtasks: "2",
        totalSubtasks: "2",
        id: generateRandomId(),
      },
      {
        title: "Set up CI/CD pipeline",
        subtasks: "3",
        totalSubtasks: "3",
        id: generateRandomId(),
      },
    ],
  },
];
