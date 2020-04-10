import { URL } from '../constants/url.js';
import { drawColumnSection } from '../../templates/column.js'
import { drawNoteSection } from '../../templates/note.js';

export const todoListRender = async () => {
  const columnState = await fetchJSON_GET(URL.DEV.GET_COLUMNS_API);
  drawColumnSection(columnState);

  columnState.contents.columns.forEach(async (column) => {
    const noteState = await fetchJSON_GET(URL.DEV.GET_SPECIFIC_COLUMN_NOTES_API + column);
    drawNoteSection(noteState, column);
  });
}

// export const todoListRender = async () => {
//   const columnState = columnRender();
//   noteRender(columnState);
// }

// const columnRender = async () => {
//   const columnState = await fetchJSON_GET(URL.DEV.GET_COLUMNS_API);
//   drawColumnSection(columnState);
//   return columnState;
// }

// const noteRender = async (columnState) => {
//   columnState.contents.columns.forEach(async (column) => {
//     const noteState = await fetchJSON_GET(URL.DEV.GET_SPECIFIC_COLUMN_NOTES_API + column);
//     drawNoteSection(noteState, column);
//   });
// }

// export const addNote = async (noteContent) => {
//   await fetchJSON_POST(URL.DEV.CREATE_NOTE_API, noteContent);
// }

// export const removeNote = async (noteIndex) => {
//   await fetchJSON_DELETE(URL.DEV.DELETE_NOTE_API + noteIndex);
// }

const fetchJSON_GET = (url) => {
  return fetch(url, {
    method: 'GET',
    headers: { "Accept": "*/*" }
  }).then(response => {
    return response.json();
  });
}

const fetchJSON_POST = (url, noteContent) => {
  return fetch(url, {
    method: 'POST',
    headers: { "Accept": "*/*" },
    body: noteContent
  }).then(response => {
    return response.json();
  });
}

const fetchJSON_DELETE = (url) => {
  return fetch(url, {
    method: 'DELETE',
    headers: { "Accept": "*/*" },
  }).then(response => {
    return response.json();
  });
}