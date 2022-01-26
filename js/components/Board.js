import boardDragover from "../methods/boardDragover.js";

class Board extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.classList.add("section");

    //events
    let newTaskBtn = this.querySelector(".todo-btn");
    let boards = this.querySelectorAll(".board .inner");

    newTaskBtn.addEventListener("click", (e) => {
      let modal = document.querySelector(".new-task-modal");
      modal.classList.toggle("opened");
    });

    boards.forEach(boardDragover);
  }

  render() {
    this.innerHTML = `
     <div class="boards-container">
          <div class="board todo">
            <div class="board-header">
              <h3>To do 🚀</h3>
              <button class="todo-btn">New Task +</button>
            </div>
            <div class="inner">
            </div>
          </div>
          <div class="board in-progress">
            <div class="board-header">
              <h3>In Progress 🔧</h3>
            </div>
            <div class="inner"></div>
          </div>
          <div class="board done">
            <div class="board-header">
              <h3>Done 💪</h3>
            </div>
            <div class="inner"></div>
          </div>
        </div>
`;
  }
}

customElements.define("board-component", Board);

export default Board;
