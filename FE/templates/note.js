import { getElement } from '../src/util/dom.js'

const stateRender = (noteState) => {
    let noteHTML = '';

    noteState.contents.notes.forEach((note, column) => {
        getElement(`.${column} > .column-menu_count`).innerHTML++;
        noteHTML += `
            <div class="note" value="${note.id}">
                <span class="note-icon"><i class="far fa-comment-alt"></i></span>
                <span class="note-main">
                    <div class="note-title">${note.content}</div>
                    <div class="note-content"></div>
                    <div class="note-author">
                        <span class="note-author_msg">Added by</span>
                        <span class="note-author_name">${note.userId}</span>
                    </div>
                </span>
                <button class="note-removeBtn">X</button>
            </div>
        `
    })

    return noteHTML;
}

export const drawNoteSection = (noteState, column) => {
    getElement(`.${column} > .note-wrap`).innerHTML = stateRender(noteState, column);
    // getElement(`.column-menu_count`).innerHTML = noteState.contents.notes.length;
}