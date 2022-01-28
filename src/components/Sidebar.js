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
           <i class="material-icons">assessment</i>
 
    </div>
    <div class="sidebar-inner">
      <i class="material-icons">dashboard</i>
      <i class="material-icons">people</i>
      <i class="material-icons">timeline</i>
      <i class="material-icons">event</i>
      <i class="material-icons">mms</i>
    </div>

    <footer class="sidebar-footer">
      <img src="https://avatars.githubusercontent.com/u/71825314?v=4" alt="avatar"/>
    </footer>
    `;
  }
}

customElements.define("sidebar-component", Sidebar);
export default Sidebar;
