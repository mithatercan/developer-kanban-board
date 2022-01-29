import { tasks } from "../variables/index.js";

const updateStorage = (action) => {
  switch (action.type) {
    case "edit":
      const updatedData = tasks.map((task) =>
        task.uid === action.payload.uid ? action.payload : task
      );
      localStorage.setItem("data", JSON.stringify(updatedData));
      break;
    case "delete":
      const filteredData = tasks.filter((task) => task.uid !== action.payload.uid);
      localStorage.setItem("data", JSON.stringify(filteredData));
      break;
    case "add":
      tasks.push(action.payload);
      localStorage.setItem("data", JSON.stringify(tasks));
      break;
    case "change-status":
      const updatedTasks = tasks.map((task) =>
        task.uid === action.payload.uid ? { ...task, status: action.payload.status } : task
      );
      localStorage.setItem("data", JSON.stringify(updatedTasks));
  }
};

export default updateStorage;
