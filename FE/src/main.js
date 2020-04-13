import { css } from '../css/style.css';
import { getElement, show, hide } from './util/dom.js';
import { todoListRender } from './server/todoListState.js'
// import { addBtnEventHandler, addContent } from './eventController/addEvent.js'

window.addEventListener('DOMContentLoaded', async () => {
  await todoListRender();

  // addBtnEventHandler();
  // addContent();

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

  // eventListner를 forEach로 돌면서 column 마다 달아줘야지
  let inputBox = getElement('.add-note_input');
  inputBox.addEventListener('keydown', () => {
    if (inputBox.innerHTML) inputBox.closest('.add-note_addBtn').disabled = "false";
    else inputBox.closest('.add-note_addBtn').disabled = "disabled";
  })


  getElement('.add-note_addBtn').addEventListener('click', () => {

  })


});