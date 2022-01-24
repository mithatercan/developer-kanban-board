const boards = document.querySelectorAll(".board .board-items");
const tasks = document.querySelectorAll(".task");

let draggedElement = null;

const dragStart = (e) => {
  draggedElement = e.target;
  e.target.classList.add("dragged");
};

const dragEnd = (e) => {
  e.preventDefault();
  e.target.classList.remove("dragged");
};

const drop = (e) => {
  e.preventDefault();
  e.target.append(draggedElement);
};

tasks.forEach((task) => {
  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragend", dragEnd);
});

boards.forEach((board) => {
  board.addEventListener("dragover", dragOver);
  board.addEventListener("drop", drop);
});
