import { Column } from "./types";

export const initialData: Column[] = [
  {
    title: "TODO",
    id: 14,
    tasks: [
      { title: "Build dashboard UI", subtasks: "0", totalSubtasks: "4", id: 1 },
      { title: "Implement user authentication", subtasks: "0", totalSubtasks: "3", id: 2 },
      { title: "Create database schema", subtasks: "0", totalSubtasks: "2", id: 3 },
      { title: "Research competitor apps", subtasks: "0", totalSubtasks: "1", id: 4 },
    ],
  },
  {
    title: "DOING",
    id: 245,
    tasks: [
      { title: "Design homepage", subtasks: "2", totalSubtasks: "3", id: 5 },
      { title: "Integrate Stripe payments", subtasks: "1", totalSubtasks: "3", id: 6 },
      { title: "Develop user profile page", subtasks: "1", totalSubtasks: "2", id: 7 },
      { title: "Fix login bug", subtasks: "1", totalSubtasks: "1", id: 8 },
      { title: "Set up AWS infrastructure", subtasks: "2", totalSubtasks: "3", id: 9 },
    ],
  },
  {
    title: "DONE",
    id: 443,
    tasks: [
      { title: "Deploy MVP to staging", subtasks: "3", totalSubtasks: "3", id: 10 },
      { title: "Conduct user testing", subtasks: "1", totalSubtasks: "1", id: 11 },
      { title: "Complete project documentation", subtasks: "2", totalSubtasks: "2", id: 12 },
      { title: "Set up CI/CD pipeline", subtasks: "3", totalSubtasks: "3", id: 13 },
    ],
  },
];
