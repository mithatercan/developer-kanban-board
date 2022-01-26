import { draggedTask } from "../variables/index.js";

class Task extends HTMLElement {
  constructor() {
    super();

    this.state = {
      heading: "",
      description: "",
      avatar: "",
      accountUrl: "",
      dueDate: "",
    };
  }

  setState(stateName, attributeName) {
    this.state = {
      ...this.state,
      [stateName]: this.getAttribute(attributeName),
    };
  }

  connectedCallback() {
    this.classList.add("task-wrapper");
    this.setAttribute("draggable", true);

    this.setState("heading", "heading");
    this.setState("description", "description");
    this.setState("avatar", "avatar");
    this.setState("dueDate", "due-date");
    this.setState("accountUrl", "account-url");
    this.setState("accountName", "account-name");

    this.render();

    //add drag start and end events
    this.addEventListener("dragstart", (e) => {
      this.classList.add("dragging");
      draggedTask.html = this;
    });

    this.addEventListener("dragend", (e) => {
      this.classList.remove("dragging");
      draggedTask.html = null;
    });
  }

  render() {
    this.innerHTML = `
      <div class='task-content'>
                  <div class="task-title">
                    <h4>${this.state.heading}</h4>
                    <div class="task-icon">
                      <img src="https://img.icons8.com/material-outlined/18/000000/filled-trash.png"/>
                    </div>
                  </div>
                  <div class="task-description">
                    <p>
                      ${this.state.description}
                    </p>
                  </div>
                </div>
                <div class="task-footer">
                  <div class="task-footer-item">
                    <p>
                      <span>
                        <time datetime="${this.state.dueDate}">${this.state.dueDate}</time>
                      </span>
                    </p>
                  </div>
                  <div class="task-footer-item">
                  <abbr title="${this.state.accountName}">
                    <a href='${this.state.accountUrl}'>
                     <img
                      draggable="false"
                      class="avatar"
                      src="${this.state.avatar}"
                      alt="avatar"
                    /> 
                   </a></abbr> 
                

                  </div>
                </div>
                `;
  }
}

customElements.define("task-component", Task);
export default Task;
