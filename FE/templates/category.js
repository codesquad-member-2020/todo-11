import { getElement } from '../src/util/dom.js';
import { drawNoteSection } from '../templates/note.js';
import { inputBoxEventHandle } from '../src/eventController/inputBoxEvent.js';
import { deleteEventHandle } from '../src/eventController/deleteEvent.js';


export const drawCategorySection = (category, noteState) => {
    getElement('.category-wrap').insertAdjacentHTML('beforeend', renderState(category, noteState));
    inputBoxEventHandle(category);
    deleteEventHandle(category);
}

const renderState = (category, noteState) => {
    let categoryHTML = `
        <div class="category ${category.name}">
            <div class="category-menu">
                <div class="category-menu_left">
                    <span class="category-menu_count">${noteState.contents.notes.length}</span>
                    <span class="category-menu_title">${category.name}</span>
                </div>
                <div class="category-menu_right">
                    <button class="category-menu_addBtn">+</button>
                    <button class="category-menu_menu">&hellip;</button>
                </div>
            </div>
            <div class="add-note">
                <input class="add-note_input" type="text" placeholder="Enter a note">
                <button class="add-note_addBtn disable">Add</button>
                <button class="add-note_cancleBtn">Cancle</button>
            </div>
            <div class="note-wrap">${drawNoteSection(noteState)}</div>
        </div>
    `

    return categoryHTML; //+ '<button class="add-category">+Add category</button>';
}
