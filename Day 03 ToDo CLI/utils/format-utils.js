export const printTasks = (tasks) => {
  tasks.forEach((task, index) => {
    const status = task.completed ? "✅" : "❌";
    console.log(`${index + 1}. ${task.title} ${status}`);
  });
};

export const formatQuestion = (question) => {
  return `\n${question}\n${"-".repeat(50)}\n`;
};
