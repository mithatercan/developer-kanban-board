import { myApp } from './variables/index.js';
import initData from './lib/initData.js';

// components
import './components/Board.js';
import './components/Sidebar.js';
import './components/Modal.js';
import './components/Task.js';
import './components/Footer.js';
import './components/Toast.js';

myApp.innerHTML = `
    <sidebar-component></sidebar-component>
    <board-component></board-component>
    <modal-component></modal-component>
    <footer-component></footer-component>
`;

initData();
