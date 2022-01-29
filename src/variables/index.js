const myApp = document.querySelector("#app");

let draggedTask = {
  html: null,
};

let tasks = [];

if (localStorage.getItem("data")) {
  tasks = JSON.parse(localStorage.getItem("data"));
}

export { myApp, tasks, draggedTask };
