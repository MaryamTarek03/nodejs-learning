import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "todos.json");

export const readData = () => {
  const data = fs.readFileSync(dataFilePath, "utf-8");
  const objectData = JSON.parse(data);
  return objectData || [];
};

export const writeData = (data) => {
  const jsonData = JSON.stringify(data);
  fs.writeFileSync(dataFilePath, jsonData, "utf-8");
}
