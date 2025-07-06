import { askQuestion } from "./utils/readline-utils.js";
import { formatQuestion } from "./utils/format-utils.js";
import * as answers from "./query-answers.js";

const question = `${formatQuestion("What do you want to do?")}
1. Add a new task
2. List all tasks
3. Toggle task completion
4. Delete a task
5. Exit ${formatQuestion("")}
Please enter the number corresponding to your choice: `;

console.log("Welcome to the To-Do CLI App!");

let query;

while (true) {
  query = await askQuestion(question);
  if (query === "5") {
    await answers.closeApp();
    break;
  }
  switch (query) {
    case "1":
      await answers.addTask();
      break;
    case "2":
      await answers.listTasks();
      break;
    case "3":
      await answers.toggleTaskCompletion();
      break;
    case "4":
      await answers.deleteTask();
      break;
    default:
      console.log("Invalid option. Please try a number from 1 to 5.");
      break;
  }
}
