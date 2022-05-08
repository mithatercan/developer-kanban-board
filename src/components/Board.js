import boardDragover from '../lib/boardDragover.js';

class Board extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add('section');
    this.render();

    //events
    let newTaskBtn = this.querySelector('.new-task-btn');
    let boards = this.querySelectorAll('.board .inner');

    newTaskBtn.addEventListener('click', (e) => {
      let modal = document.querySelector('.new-task-modal');
      modal.classList.toggle('opened');
    });

    boards.forEach(boardDragover);
  }

  render() {
    this.innerHTML = `
   <div class="boards-container">
    <div class="board todo">
    <div class="board-header">
      <h3>To do</h3>
      <div class="board-header-icons">
        <i class="material-icons">more_horiz</i>
        <button class="new-task-btn">
          <i class="material-icons">add</i>
        </button>
      </div>
    </div>
    <div data-status="todo" class="inner"></div>
  </div>
  <div class="board in-progress">
    <div class="board-header">
      <h3>In progress</h3>
      <div class="board-header-icons">
        <i class="material-icons">more_horiz</i>
      </div>
    </div>
    <div data-status="in-progress" class="inner"></div>
  </div>
  <div class="board done">
    <div class="board-header">
      <h3>Done</h3>
      <div class="board-header-icons">
        <i class="material-icons">more_horiz</i>
      </div>
    </div>
    <div data-status="done" class="inner"></div>
  </div>
</div> 
`;
  }
}

customElements.define('board-component', Board);
export default Board;
