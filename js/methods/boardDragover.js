import getNearestElement from "./getNearestElement.js";
import { draggedTask } from "../variables/index.js";

const boardDragover = (board) => {
  board.addEventListener("dragover", (e) => {
    e.preventDefault();
    const nearestElement = getNearestElement(board, e.clientY);
    if (nearestElement) {
      nearestElement.parentNode.insertBefore(draggedTask.getTask(), nearestElement);
    } else {
      board.append(draggedTask.getTask());
    }
  });
};

export default boardDragover;
