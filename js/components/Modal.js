import handleSubmit from "../methods/handleSubmit.js";

class Modal extends HTMLElement {
  constructor() {
    super();
  }

  closeModal() {
    this.classList.remove("opened");
  }

  connectedCallback() {
    this.render();
    this.classList.add("new-task-modal");

    const closeBtn = this.querySelector("img");
    const form = this.querySelector("form");

    closeBtn.addEventListener("click", this.closeModal.bind(this));

    //handle form submit
    form.addEventListener("submit", (e) => {
      handleSubmit(e);
      this.closeModal();
    });
  }

  render() {
    this.innerHTML = `  
            <form>
              <img src="https://img.icons8.com/material-outlined/20/000000/delete-sign.png" />
              <input type="text" name="heading" placeholder="Heading" required />
              <input type="text" name="description" placeholder="Description" required/>
              <input type="text" name="account" placeholder="Github account" required />
              <input type="date" name="due-date" required/>
              <input type="submit" value="Create" />
            </form>
          `;
  }
}

customElements.define("modal-component", Modal);

export default Modal;
