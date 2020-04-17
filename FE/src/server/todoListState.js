import { URL } from '../constants/url.js';
import { drawCategorySection } from '../../templates/category.js';
import { drawHistory } from '../../templates/history.js';
import { getElement, hasClass, addClass, removeClass } from '../util/dom.js';
// import { drawNoteSection } from '../../templates/note.js';
// import { getElement } from '../util/dom.js';

// export const todoListRender = async () => {
//   const categoryState = await fetchJSON_GET(URL.PROD.GET_CATEGORY_API);
//   drawCategorySection(categoryState);

//   categoryState.contents.category.forEach(async (category) => {
//     const noteState = await fetchJSON_GET(URL.PROD.GET_SPECIFIC_CATEGORY_NOTE_API + category.id);
//     drawNoteSection(noteState, category);
//   });
// }

// export const todoListRender = async () => {
//   await fetchJSON_GET(URL.PROD.GET_CATEGORY_API).then((categoryState) => { 
//     drawCategorySection(categoryState);
//     categoryState.contents.category.forEach(async (category) => {
//       await fetchJSON_GET(URL.PROD.GET_SPECIFIC_CATEGORY_NOTE_API + category.id).then((noteState) => drawNoteSection(noteState, category));
//       await inputBoxEventHandle(category);
//     });
//   })
// }

// export const todoListRender = async () => {
//   await fetchJSON_GET(URL.PROD.GET_CATEGORY_API).then((categoryState) => { 
//     categoryState.contents.category.forEach(async (category) => {
//       await fetchJSON_GET(URL.PROD.GET_SPECIFIC_CATEGORY_NOTE_API + category.id).then((noteState) => drawCategorySection(category, noteState, inputBoxEventHandle));
//     });
//   })
// }

let JWT_TOKEN = '';

export const todoListRender = async () => {
  getElement('.category-wrap').innerHTML = '';
  const categoryState = await fetchJSON_GET(URL.PROD.GET_CATEGORY_API)
  await categoryState.contents.category.forEach(async (category) => {
    const noteState = await fetchJSON_GET(URL.PROD.GET_SPECIFIC_CATEGORY_NOTE_API + category.id);
    await drawCategorySection(category, noteState);
  })
}

export const login = () => {
  getElement('.login').addEventListener('click', async () => {
    const userId = getElement('.login-id').value;
    if (userId === "") return;
    let res = await fetchJSON_GET(URL.PROD.GET_JWT_TOKEN + userId);
    JWT_TOKEN = await res.contents.loginToken;
    await todoListRender();
  })
}

export const history = () => {
  getElement('.menu').addEventListener('click', async () => {
    const historyMenu = getElement('.history');
    if (hasClass(historyMenu, 'visible')) removeClass(historyMenu, 'visible');
    else addClass(historyMenu, 'visible');
    const history = await fetchJSON_GET(URL.PROD.GET_HISTORY);
    await drawHistory(history);
  })
}

// export const removeNote = async (noteIndex) => {
//   await fetchJSON_DELETE(URL.DEV.DELETE_NOTE_API + noteIndex);
// }

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


const fetchJSON_GET = (url) => {
  return fetch(url, {
    method: 'GET',
    headers: {
      "Accept": "*/*",
      "Authorization": JWT_TOKEN
    }
  }).then(response => {
    return response.json();
  });
}

const fetchJSON_POST = (url, noteContent) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      "Accept": "*/*",
      "Authorization": JWT_TOKEN
    },
    body: noteContent
  }).then(response => {
    return response.json();
  });
}

const fetchJSON_DELETE = (url) => {
  return fetch(url, {
    method: 'DELETE',
    headers: {
      "Accept": "*/*",
      "Authorization": JWT_TOKEN
    },
  }).then(response => {
    return response.json();
  });
}
