app.factory("TaskService", function () {
  let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");;

  return {
    getTasks() {
      return tasks;
    },
    addTask(taskTitle, date, dateStr) {
      tasks.push({
        id: Math.random().toString(36).substring(2, 9),
        title: taskTitle,
        date: date,
        dateStr: dateStr,
        checked: false
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },
    removeTask(taskId){
        tasks = tasks.filter((task) => task.id !== taskId);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    
    }
  };
});
