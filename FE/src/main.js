import { css } from '../css/style.css';
import { getElement, show, hide } from './util/dom.js';

window.addEventListener('DOMContentLoaded', () => {
  getElement('.column-menu_addBtn').addEventListener('click', () => {
    const addNote = getElement('.add-note');
    const addNoteDisplay = addNote.style.display;
    switch (addNoteDisplay) {
      case 'block': hide(addNote);
        break;
      case "": show(addNote);
        break;
      case 'none': show(addNote);
        break;
    }
  })
});