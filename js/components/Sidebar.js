class Sidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.classList.add("sidebar");
  }

  render() {
    this.innerHTML = `
     <div class="logo">
          <img src="https://img.icons8.com/color-glass/48/000000/icons8-logo.png" />
        </div>
        <div class="sidebar-inner">
          <img src="https://img.icons8.com/color/32/000000/home.png" />
          <img src="https://img.icons8.com/color/32/000000/search--v4.png" />
          <img src="https://img.icons8.com/color/32/000000/settings--v1.png" />
          <img src="https://img.icons8.com/color/32/000000/share-2.png" />
          <img src="https://img.icons8.com/color/32/000000/folder-invoices--v1.png" />
          <img src="https://img.icons8.com/color/32/000000/info--v1.png" />
        </div>

        <footer class="sidebar-footer">
          <img src="https://img.icons8.com/color/38/000000/user-location.png" />
        </footer>
    `;
  }
}

customElements.define("sidebar-component", Sidebar);
export default Sidebar;
