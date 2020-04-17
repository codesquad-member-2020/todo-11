import { URL } from '../constants/url.js';
import { getElements } from "../util/dom.js"

export const deleteEventHandle = () => {
    getElements(`.note-wrap`).forEach(noteWrap => {
        noteWrap.addEventListener('click', (e) => {
            if (e.target.className !== 'note-removeBtn') return;
            const noteIndex = e.target.closest('.note').id;
            // removeNote(noteIndex);
            console.log(noteIndex);
        });

    })
}

const removeNote = (noteIndex) => {
    fetchJSON_DELETE(URL.DEV.DELETE_NOTE_API + noteIndex);
}

const fetchJSON_DELETE = (url) => {
    return fetch(url, {
        method: 'DELETE',
        headers: { "Accept": "*/*" },
    });
}