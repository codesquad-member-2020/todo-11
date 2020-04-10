import { URL } from '../constants/url.js';
import { drawColumnSection } from '../../templates/column.js'
import { drawNoteSection } from '../../templates/note.js';

export const requestTodoListState = async () => {
  const columnState = await fetchJSON(URL.DEV.GET_COLUMNS_API);
  drawColumnSection(columnState);

  columnState.contents.columns.forEach(async (column) => {
    const noteState = await fetchJSON(URL.DEV.GET_SPECIFIC_COLUMN_NOTES_API + column)
    drawNoteSection(noteState, column);
  })
  // const noteState = await fetchJSON(URL.DEV.GET_SPECIFIC_COLUMN_NOTES_API + columnState.contents.columns[0])
  // const noteState = await fetchJSON(URL.MOCKUP.GET_ALL_NOTES_API);
  // // drawNoteSection(noteState);
  // console.log(noteState);


}

const fetchJSON = (url) => {
  return fetch(url).then((response) => response.json());
}
