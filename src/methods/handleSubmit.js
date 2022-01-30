import { myApp } from "../variables/index.js";
import createElement from "./createElement.js";
import getFormData from "./getFormData.js";
import updateStorage from "./updateStorage.js";

const handleSubmit = async (e) => {
  e.preventDefault();
  const todoBoard = document.querySelector(".todo .inner");
  const formData = await getFormData(e.target);

  // Create elements
  const task = createElement("task-component", {
    draggable: true,
    uid: formData.uid,
    heading: formData.heading,
    description: formData.description,
    priority: formData.priority,
    avatar: formData.avatar,
    "account-name": formData.accountName,
    "account-url": formData.accountUrl,
    status: "todo",
  });

  const toast = createElement("toast-component", {
    message: "Task added successfully",
    type: "success",
    seconds: 3,
  });

  updateStorage({
    type: "add",
    payload: formData,
  });

  todoBoard.appendChild(task);
  myApp.appendChild(toast);

  e.target.reset();
};

export default handleSubmit;
