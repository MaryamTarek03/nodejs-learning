import { askQuestion } from "./readline-utils.js";
import { formatQuestion } from "./format-utils.js";
import { printTasks } from "./format-utils.js";

export const search = (data, value) => {
  let newData = [];
  data.forEach((task, index) => {
    if (task.title.toLowerCase().includes(value.toLowerCase())) {
      newData.push({
        id: task.id,
        title: task.title,
        completed: task.completed,
      });
    }
  });
  return newData;
};

export const findTask = async (data, str) => {
  const searchFilter = await askQuestion(
    formatQuestion(`Enter the task title to ${str} (Press enter to view all): `)
  );
  const tasks = search(data, searchFilter);
  console.log(`Found ${tasks.length} tasks with title "${searchFilter}":`);
  printTasks(tasks);
  let answer = await askQuestion(`Confirm which one to ${str} (enter ID): `);
  answer = parseInt(answer);
  if (answer < 1 || answer > tasks.length || isNaN(answer)) {
    console.log("Invalid task ID. Please try again.");
    return;
  }
  return data.find((task) => task.id === tasks[answer - 1].id);
};
