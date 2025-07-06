import fs from "fs";
import path from "path";

const filePath = path.join(
  process.cwd(),
  "data",
  "test.txt"
);

// Sync file operations
if (fs.existsSync(filePath)) {
  // check if the file exists
  fs.appendFileSync(filePath, " I'm a new addition!"); // append to existing content
  console.log(fs.readFileSync(filePath, 'utf8'));
  fs.unlinkSync(filePath);
  // delete the file if it exists, it will throw an error if the file does not exist
} else {
  // create the file with content, or write to it if it exist
  fs.writeFileSync(filePath, "Hello World!");
}

// Async file operations (Callback) 
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

fs.access(filePath, fs.constants.F_OK, (err) => {
  console.log(err ? 'File does not exist.' : 'File exists!');
});
// Output if file exists:
// File exists!
// File content: Hello World!

// Async file operations (Promise)
// import fs form 'fs/promises';
// await fs.readFile(filePath);
// await fs.writeFile(filePath, "Hello using promises!")