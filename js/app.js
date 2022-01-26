import { myApp } from "./variables/index.js";

// components
import Board from "./components/Board.js";
import Sidebar from "./components/Sidebar.js";
import Modal from "./components/Modal.js";
import Task from "./components/Task.js";
import Footer from "./components/Footer.js";
import initData from "./methods/initData.js";

myApp.innerHTML = `
  <sidebar-component></sidebar-component>
  <board-component></board-component>
  <modal-component is-modal-open="false"></modal-component>
  <footer-component></footer-component>
`;

initData();
