const boards = document.querySelectorAll(".board .board-items");
const cards = document.querySelectorAll(".card");

let draggedElement = null;

cards.forEach((card) => {
  card.addEventListener("dragstart", handleDragStart);
  card.addEventListener("dragenter", handleDragEnter);
  card.addEventListener("dragover", handleDragOver);
  card.addEventListener("dragleave", handleDragLeave);
  card.addEventListener("drop", handleDrop);
  card.addEventListener("dragend", handleDragEnd);
});

const handleDragStart = (e) => {
  draggedElement = e.target;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", e.target.innerHTML);
};

const handleDragEnter = (e) => {
  e.preventDefault();
  e.target.classList.add("over");
};

const handleDragOver = (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  return false;
};

const handleDragLeave = (e) => {
  e.preventDefault();

  e.target.classList.remove("over");
};

const handleDrop = (e) => {
  e.preventDefault();
  if (draggedElement !== e.target) {
    dragSrcEl.innerHTML = e.target.innerHTML;
    e.target.innerHTML = e.dataTransfer.getData("text/html");
  }

  return false;
};

const handleDragEnd = (e) => {
  e.preventDefault();
  e.target.classList.remove("dragged");
};

boards.forEach((board) => {
  board.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  board.addEventListener("drop", (e) => {
    e.target.append(draggedElement);
  });
});
