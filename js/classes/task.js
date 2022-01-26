import { draggedTask } from "../variables/index.js";

class Task extends HTMLElement {
  constructor() {
    super();
    this.heading = "";
    this.description = "";
    this.avatar = "";
    this.dueDate = "";
  }

  // static get observedAttributes() {
  //   return ["title", "description", "avatar", "dueDate"];
  // }

  // attributeChangedCallback(props, oldValue, newValue) {
  //   this[props] = newValue;
  //   this.render();
  // }

  connectedCallback() {
    this.classList.add("task-wrapper");
    this.setAttribute("draggable", true);

    this.heading = this.getAttribute("heading");
    this.description = this.getAttribute("description");
    this.avatar = this.getAttribute("avatar");
    this.dueDate = this.getAttribute("due-date");

    this.render();

    //add drag start and end events
    this.addEventListener("dragstart", (e) => {
      this.html.classList.add("dragging");
      draggedTask.setTask(this.html);
    });

    this.addEventListener("dragend", (e) => {
      this.html.classList.remove("dragging");
      draggedTask.removeTask();
    });
  }

  render() {
    this.innerHTML = `
      <div class='task-content'>
                  <div class="task-title">
                    <h4>${this.heading}</h4>
                    <div class="task-icon">
                      <img src="https://img.icons8.com/material-outlined/18/000000/filled-trash.png"/>
                    </div>
                  </div>
                  <div class="task-description">
                    <p>
                      ${this.description}
                    </p>
                  </div>
                </div>
                <div class="task-footer">
                  <div class="task-footer-item">
                    <p>
                      <span>
                        <time datetime="${this.dueDate}">${this.dueDate}</time>
                      </span>
                    </p>
                  </div>
                  <div class="task-footer-item">
                    <img
                      draggable="false"
                      class="avatar"
                      src="${this.avatar}"
                      alt=""
                    />
                  </div>
                </div>
                `;
  }
}

customElements.define("task-component", Task);
export default Task;
