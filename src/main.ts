// import './style.css'
import { fetchQuotes } from './services/welcomeHomeService.js';
import { initTheme, toggleTheme, initToggleBtn } from './services/themeService.js';
import {headerFunction} from "./services/header.js"
fetchQuotes('h1');
console.log('Hello wold');

headerFunction();
initTheme();
toggleTheme();

document.addEventListener('DOMContentLoaded', () => {
    initToggleBtn();
});
