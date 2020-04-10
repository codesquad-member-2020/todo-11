import { getElement } from '../src/util/dom.js'

const stateRender = (columnState) => {
    let columnHTML = '';

    columnState.contents.columns.forEach((column) => {
        columnHTML += `
            <div class="column ${column}">
                <div class="column-menu">
                    <div class="column-menu_left">
                        <span class="column-menu_count"></span>
                        <span class="column-menu_title">${column}</span>
                    </div>
                    <div class="column-menu_right">
                        <button class="column-menu_addBtn">+</button>
                        <button class="column-menu_menu">&hellip;</button>
                    </div>
                </div>
                <div class="add-note">
                    <input class="add-note_input" type="text" placeholder="Enter a note">
                    <button class="add-note_addBtn">Add</button>
                    <button class="add-note_cancleBtn">Cancle</button>
                </div>
                <div class="note-wrap"></div>
            </div>
        `
    })

    return columnHTML + '<button class="add-column">+Add column</button>';
}

export const drawColumnSection = (columnState) => {
    getElement('.column-wrap').innerHTML = stateRender(columnState);
}