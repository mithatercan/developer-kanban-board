class Task {
  constructor(name, description, priority, createdDate) {
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.createdDate = createdDate;
  }

  create() {
    //create a new task
    const task = document.createElement("div");
    task.classList.add("task");
    task.setAttribute("draggable", "true");
    task.innerHTML = `
      <div class="task-header">
        <h3 class="task-name">${this.name}</h3>
        <p class="task-description">${this.description}</p>
      </div>
      <div class="task-footer">
        <p class="task-priority">Priority: ${this.priority}</p>
        <p class="task-created-date">Created: ${this.createdDate}</p>
      </div>
    `;
    this.appendToBoard(task);
  }

  appendToBoard(task) {
    //append the task to the board
    const boards = document.querySelectorAll(".board .board-items");
    boards.forEach((board) => {
      board.append(task);
    });
  }
}
