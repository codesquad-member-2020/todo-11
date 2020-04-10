import { URL } from '../constants/url.js';

export const requestTodoListState = async () => {
    // const columns = await fetchJSON(``);
    const notes = await fetchJSON(URL.MOCKUP.GET_ALL_NOTES_API);
    

  }
  
  const fetchJSON = (url) => {
    return fetch(url).then((response) => response.json());
  }
  