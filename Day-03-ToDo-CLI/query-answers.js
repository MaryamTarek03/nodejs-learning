import { askQuestion, closeInterface } from "./utils/readline-utils.js";
import { readData, writeData } from "./utils/fs-utils.js";
import { formatQuestion, printTasks } from "./utils/format-utils.js";
import { findTask, search } from "./utils/utils.js";

const enter = async () => await askQuestion("Press Enter to continue...");

export async function closeApp() {
  console.log("Closing the application!");
  closeInterface();
}

export async function listTasks() {
  let data = readData();
  if (data.length === 0)
    console.log(formatQuestion("No tasks found. Please add a task first."));
  else printTasks(data);
  await enter();
}

export async function addTask() {
  const answer = await askQuestion(
    formatQuestion("Enter the task description: ")
  );
  const data = readData();
  const lastId = data.length > 0 ? data[data.length - 1].id : 0;
  data.push({
    id: lastId + 1,
    title: answer,
    completed: false,
  });
  writeData(data);
  console.log(`Task "${answer}" was added successfully!`);
  await enter();
}

export async function toggleTaskCompletion() {
  const data = readData();
  const task = await findTask(data, "toggle completion");
  if (!task) return;
  task.completed = !task.completed;
  writeData(data);
  console.log(
    `Task "${task.title}" marked as ${
      task.completed ? "completed" : "uncompleted"
    }!`
  );
  await enter();
}

export async function deleteTask() {
  const data = readData();
  const task = await findTask(data, "delete");
  if (!task) return;
  const newData = data.filter((t) => t.id !== task.id);
  writeData(newData);
  console.log(`Task "${task.title}" was deleted successfully!`);
  await enter();
}
