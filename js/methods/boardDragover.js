import getNearestElement from "./getNearestElement.js";
import { draggedTask, tasks } from "../variables/index.js";

const boardDragover = (board) => {
  board.addEventListener("dragover", (e) => {
    e.preventDefault();
    const nearestElement = getNearestElement(board, e.clientY);
    if (nearestElement) {
      nearestElement.parentNode.insertBefore(draggedTask.html, nearestElement);
    } else {
      const id = draggedTask.html.id;

      board.append(draggedTask.html);
    }
  });

  board.addEventListener("dragend", (e) => {
    // tasks.map(task => task.id === draggedTask.html.id ? task.status =);
    // console.log(id);
    // console.log(board.parentNode.classList.contains("todo"));
  });
};

export default boardDragover;
