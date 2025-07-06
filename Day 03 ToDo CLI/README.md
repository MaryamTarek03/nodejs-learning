# ToDo CLI Project

A simple and interactive command-line ToDo application built with Node.js. This project helps users manage their daily tasks efficiently from the terminal.

---

## Features

- **Add new tasks:** Quickly add tasks with a description.
- **List all tasks:** View all your tasks, with completion status.
- **Mark tasks as completed:** Toggle the completion status of any task.
- **Delete tasks:** Remove tasks you no longer need.
- **Interactive prompts:** User-friendly menu and prompts for all actions.
- **Persistent storage:** Tasks are saved in a JSON file for future sessions.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd Day-03-ToDo-CLI
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   node index.js
   ```

---

## Usage

When you run the app, you'll see a menu:

```
Welcome to the To-Do CLI App!

What do you want to do?
1. Add a new task
2. List all tasks
3. Toggle task completion
4. Delete a task
5. Exit
Please enter the number corresponding to your choice:
```

Follow the prompts to add, list, complete, or delete tasks. Tasks are saved between sessions.

---

## Example Commands

```bash
node index.js
```

**Sample session:**

```
Welcome to the To-Do CLI App!

What do you want to do?
1. Add a new task
2. List all tasks
3. Toggle task completion
4. Delete a task
5. Exit
Please enter the number corresponding to your choice: 1

Enter the task description: Buy groceries
Task "Buy groceries" was added successfully!
Press Enter to continue...
```

---

## Project Structure

```
Day-03-ToDo-CLI/
├── data/
│   └── todos.json         # Stores your tasks
├── utils/
│   ├── fs-utils.js        # File read/write helpers
│   ├── format-utils.js    # Formatting helpers
│   ├── readline-utils.js  # CLI input helpers
│   └── utils.js           # Task search helpers
├── index.js               # Main entry point
├── query-answers.js       # Task actions
├── README.md
```

---

## Improvements & Suggestions for the future ان شاء الله

- **Input validation:** Prevent empty or duplicate tasks.
- **Edit tasks:** Allow editing existing tasks.
- **Command-line arguments:** Support direct commands (e.g., `node index.js add "Task"`).
- **Colored output:** Use colors for better readability (e.g., with `chalk`).
- **Unit tests:** Add tests for reliability.
- **Help command:** Add a `--help` flag for usage info.

---

## License

MIT
