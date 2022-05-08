import getNearestElement from "./getNearestElement.js";
import { draggedTask } from "../variables/index.js";
import updateStorage from "./updateStorage.js";

const boardDragover = (board) => {
  board.addEventListener("dragover", (e) => {
    e.preventDefault();
    const nearestElement = getNearestElement(board, e.clientY);

    switch (board.dataset.status) {
      case "todo":
        updateStorage({
          type: "change-status",
          payload: {
            status: "todo",
            uid: draggedTask.html.getAttribute("uid"),
          },
        });
        break;

      case "in-progress":
        updateStorage({
          type: "change-status",
          payload: {
            status: "in-progress",
            uid: draggedTask.html.getAttribute("uid"),
          },
        });
        break;
      case "done":
        updateStorage({
          type: "change-status",
          payload: {
            status: "done",
            uid: draggedTask.html.getAttribute("uid"),
          },
        });
        break;
    }

    if (nearestElement) {
      nearestElement.parentNode.insertBefore(draggedTask.html, nearestElement);
    } else {
      board.append(draggedTask.html);
    }
  });
};

export default boardDragover;
