import { Task } from "./models/Task";

export const tasks: Task[] = [
  {
    id: 0,
    label: "Display all tasks",
    checked: false,
  },
  {
    id: 1,
    label: "Fix layout, checkboxes should be listed in a column",
    checked: false,
  },
  {
    id: 2,
    label: "Fix ability to add a new task",
    checked: false,
  },
  {
    id: 3,
    label: "Fix ability to toggle a task as checked or unchecked",
    checked: false,
  },
  {
    id: 4,
    label: "Fix ability to delete a task",
    checked: false,
  },
  {
    id: 5,
    label: "Fix ability to count completed tasks",
    checked: false,
  },
  // TIME PERMITTING
  {
    id: 6,
    label:
      "Add ability to click on a tasks link and navigate to a page with the task",
    checked: true,
  },
  {
    id: 7,
    label: "add ability to add notes for a specific task on the tasks page",
    checked: false,
  },
  // SUPER TIME PERMITTING
  {
    id: 8,
    label: "save the info in an SQL database",
    checked: false,
  },
];

export default tasks;
