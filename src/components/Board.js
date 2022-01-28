import boardDragover from "../methods/boardDragover.js";

class Board extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.classList.add("section");

    //events
    let newTaskBtn = this.querySelector(".new-task-btn");
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
          <h3>No stage</h3>
          <div class="board-header-icons">
            <i class="material-icons">more_horiz</i>
            <button class='new-task-btn'>
              <i class="material-icons">add</i>
            </button>
          </div>
        </div>
        <div class="inner"></div>
      </div>
      <div class="board in-progress">
        <div class="board-header">
          <h3>In progress</h3>
           <div class="board-header-icons">
            <i class="material-icons">more_horiz</i>
          </div>
        </div>
        <div class="inner"></div>
      </div>
      <div class="board done">
        <div class="board-header">
          <h3>Done</h3>
           <div class="board-header-icons">
            <i class="material-icons">more_horiz</i>
          </div>
        </div>
        <div class="inner"></div>
      </div>
    </div>
`;
  }
}

customElements.define("board-component", Board);

export default Board;
