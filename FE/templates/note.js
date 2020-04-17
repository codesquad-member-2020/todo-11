export const drawNoteSection = (noteState) => {
    let noteHTML = '';

    noteState.contents.notes.forEach((note) => {
        const noteContents = note.content.split('\n');
        const noteTitle = noteContents[0];
        if (noteContents[1] === '') noteContents.splice(0, 1);
        noteContents.splice(0, 1);
        let noteContentsHTML = '';
        noteContents.forEach((content) => {
            noteContentsHTML += `${content}<br>`;
        })

        noteHTML += `
            <div class="note" id="${note.id}">
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