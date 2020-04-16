import { URL } from '../constants/url.js';
import { drawCategorySection } from '../../templates/category.js'
import { drawNoteSection } from '../../templates/note.js';

export const todoListRender = async () => {
  const categoryState = await fetchJSON_GET(URL.PROD.GET_CATEGORY_API);
  drawCategorySection(categoryState);

  categoryState.contents.category.forEach(async (category) => {
    const noteState = await fetchJSON_GET(URL.PROD.GET_SPECIFIC_CATEGORY_NOTE_API + category.id);
    drawNoteSection(noteState, category);
  });
}

// export const todoListRender = async () => {
//   const categoryState = categoryRender();
//   noteRender(categoryState);
// }

// const categoryRender = async () => {
//   const categoryState = await fetchJSON_GET(URL.DEV.GET_COLUMNS_API);
//   drawCategorySection(categoryState);
//   return categoryState;
// }

// const noteRender = async (categoryState) => {
//   categoryState.contents.categorys.forEach(async (category) => {
//     const noteState = await fetchJSON_GET(URL.DEV.GET_SPECIFIC_COLUMN_NOTES_API + category);
//     drawNoteSection(noteState, category);
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