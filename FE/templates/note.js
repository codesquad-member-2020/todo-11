import { getElement } from '../src/util/dom.js'

const stateRender = (noteState) => {
    let noteHTML = '';

    noteState.contents.notes.forEach((note, category) => {
        // getElement(`.${category} > .category-menu_count`).innerHTML++;

        const noteContents = note.content.split('\n');
        const noteTitle = noteContents[0];
        noteContents.splice(0, 1);
        //const noteContent = noteContents.join('');
        let noteContentsHTML = '';
        noteContents.forEach((content) => {
            noteContentsHTML += `${content}<br>`;
        })

        noteHTML += `
            <div class="note" value="${note.id}">
                <span class="note-icon"><i class="far fa-comment-alt"></i></span>
                <span class="note-main">
                    <div class="note-title">${noteTitle}</div>
                    <div class="note-content">${noteContentsHTML}</div>
                    <div class="note-author">
                        <span class="note-author_msg">Added by</span>
                        <span class="note-author_name">${note.user}</span>
                    </div>
                </span>
                <button class="note-removeBtn">X</button>
            </div>
        `
    })

    return noteHTML;
}

export const drawNoteSection = (noteState, category) => {
    getElement(`.${category.name} > .note-wrap`).innerHTML = stateRender(noteState, category);
    // getElement(`.${category.name} > .category-menu_count`).innerText = noteState.contents.notes.length;
}