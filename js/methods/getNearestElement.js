const getNearestElement = (container, y) => {
  return [...container.querySelectorAll(".task-wrapper:not(.dragging)")].reduce(
    (closest, draggable) => {
      const box = draggable.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: draggable };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
};

export default getNearestElement;
