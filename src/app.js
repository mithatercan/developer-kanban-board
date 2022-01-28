import { myApp } from "./variables/index.js";

// components
import Board from "./components/Board.js";
import Sidebar from "./components/Sidebar.js";
import Modal from "./components/Modal.js";
import Task from "./components/Task.js";
import Footer from "./components/Footer.js";

myApp.innerHTML = `
    <sidebar-component></sidebar-component>
    <board-component></board-component>
    <modal-component></modal-component>
    <footer-component></footer-component>
`;
