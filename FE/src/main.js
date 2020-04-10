import { css } from '../css/style.css';
import { getElement, show, hide } from './util/dom.js';
import { requestTodoListState } from './server/todoListState.js'

window.addEventListener('DOMContentLoaded', () => {
  requestTodoListState();

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