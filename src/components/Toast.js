class Toast extends HTMLElement {
  constructor() {
    super();
    this.state = {};
  }

  setState(stateName, attributeName) {
    this.state = {
      ...this.state,
      [stateName]: this.getAttribute(attributeName),
    };
  }

  static get observedAttributes() {
    return ["message", "type", "seconds"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "message":
        this.setState("message", name);
        break;
      case "type":
        this.setState("type", name);
        break;
      case "seconds":
        this.setState("seconds", name);
        break;
    }
  }

  disappear() {
    setTimeout(() => {
      this.classList.add("disappear");
    }, +this.state.seconds * 1000);

    setTimeout(() => {
      this.remove();
    }, +this.state.seconds * 2000);
  }

  connectedCallback() {
    this.classList.add("toast");
    this.classList.add(this.state.type);
    this.setState("message", "message");
    this.setState("type", "type");
    this.setState("seconds", "seconds");

    this.render();
    this.disappear();
  }

  render() {
    this.innerHTML = `
    <div class="toast-content">
      <div class="toast-icon">
        <i class="material-icons">${this.state.type === "success" ? "done" : "error"}</i>
      </div>
      <div class="toast-message">
        <p>${this.state.message}</p>
      </div>
    </div>
    `;
  }
}

customElements.define("toast-component", Toast);

export default Toast;
