class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add("page-footer");
    this.render();
  }

  render() {
    this.innerHTML = `
    Developed by <a target="_blank" href="https://github.com/mithatercann">Mithat Ercan</a>
    `;
  }
}

customElements.define("footer-component", Footer);

export default Footer;
