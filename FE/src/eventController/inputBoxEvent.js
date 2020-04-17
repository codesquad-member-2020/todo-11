import { getElement, show, hide, addClass, removeClass } from '../util/dom.js';

export const inputBoxEventHandle = (category) => {
    getElement(`.category.${category.name} .category-menu_addBtn`).addEventListener('click', () => {
        const addNote = getElement(`.category.${category.name} .add-note`);
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

    let inputBox = getElement(`.category.${category.name} .add-note_input`);
    inputBox.addEventListener('keyup', () => {
        const addBtn = getElement(`.category.${category.name} .add-note_addBtn`);
        if (inputBox.value != "") removeClass(addBtn, 'disable');
        else addClass(addBtn, 'disable');
    })


    // getElement(`.category.${category.name} > .add-note_addBtn`).addEventListener('click', () => {

    // })

}
