import handleSubmit from "../methods/handleSubmit.js";

class Modal extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();

    this.classList.add("new-task-modal");
    //close modal
    const closeBtn = this.querySelector("img");
    closeBtn.addEventListener("click", (e) => {
      this.classList.remove("opened");
    });

    //handle form submit
    const form = this.querySelector("form");
    form.addEventListener("submit", handleSubmit);
  }

  render() {
    this.innerHTML = `  
            <form>
              <img src="https://img.icons8.com/material-outlined/20/000000/delete-sign.png" />
              <input type="text" name="title" placeholder="Title" />
              <input type="text" name="description" placeholder="Description" />
              <input type="text" name="account" placeholder="Github account" />
              <input type="date" name="due-date" name="" id="" />
              <input type="submit" value="Create" />
            </form>
          `;
  }
}

customElements.define("modal-component", Modal);

export default Modal;
