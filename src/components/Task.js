import { draggedTask } from "../variables/index.js";
import fetchAccount from "../methods/fetchAccount.js";
import updateStorage from "../methods/updateStorage.js";
class Task extends HTMLElement {
  constructor() {
    super();
    this.state = {};
  }

  setState(attributeName) {
    const properties = {
      heading: "heading",
      description: "description",
      avatar: "avatar",
      "account-url": "accountUrl",
      "account-name": "accountName",
      status: "status",
      priority: "priority",
      uid: "uid",
    };

    this.state = {
      ...this.state,
      [properties[attributeName]]: this.getAttribute(attributeName),
    };
  }

  static get observedAttributes() {
    return ["heading", "description", "status", "priority"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.setState(name);

    if (oldValue && oldValue !== newValue) {
      updateStorage({
        type: "edit",
        payload: this.state,
      });
    }
  }

  connectedCallback() {
    this.classList.add("task-wrapper");
    this.setAttribute("draggable", true);
    this.setState("heading");
    this.setState("description");
    this.setState("avatar");
    this.setState("account-url");
    this.setState("account-name");
    this.setState("status");
    this.setState("priority");
    this.setState("uid");

    this.render();

    // Add events
    const p = this.querySelector("p");
    const h4 = this.querySelector("h4");
    const taskIcon = this.querySelector(".task-icon");

    // remove task

    taskIcon.addEventListener("click", () => {
      this.classList.add("hide");
      setTimeout(() => {
        this.remove();
      }, 400);

      updateStorage({
        type: "delete",
        payload: {
          uid: this.state.uid,
        },
      });
    });

    // edit contents
    p.addEventListener("input", (e) => {
      this.setAttribute("description", e.target.innerText);
    });

    h4.addEventListener("input", (e) => {
      this.setAttribute("heading", e.target.innerText);
    });

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
     <div class="task-content">
      <div class="task-title">
        <h4 contenteditable="true">${this.state.heading}</h4>
        <div class="task-icon">
          <i class="material-icons">remove</i>
        </div>
      </div>
      <div class="task-description">
        <p contenteditable="true">${this.state.description}</p>
      </div>
    </div>
    <div class="task-footer">
      <div class="task-footer-item">
        <abbr title="${this.state.accountName}">
          <a href="${this.state.accountUrl}">
            <img draggable="false" class="avatar" src="${this.state.avatar}" alt="avatar" /> 
          </a
        >
        </abbr>
        <small>@${this.state.accountName}</small>
      </div>
      <div class="task-footer-item">
        ${
          this.state.priority &&
          `<div class="priority ${this.state.priority}">${this.state.priority}</div>`
        }
      </div>
     </div>
 `;
  }
}

customElements.define("task-component", Task);
export default Task;
