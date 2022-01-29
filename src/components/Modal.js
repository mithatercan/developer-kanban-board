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

    const closeBtn = this.querySelector("i");
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
      <div class="header">
       <h1>Add todo</h1>
       <i class="material-icons">close</i>
      </div>
      <input type="text" name="heading" placeholder="Heading" required /> 
      <textarea name="description" placeholder="Description" required></textarea>
      <input type="text" name="account" placeholder="Github account" required />
      <select name="priority">
        <option value="low">Low</option>
        <option value="hold">Hold</option>
      </select>
      <input type="submit" value="Create" />
    </form>
`;
  }
}

customElements.define("modal-component", Modal);

export default Modal;
