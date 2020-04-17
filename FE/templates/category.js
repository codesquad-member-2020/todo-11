import { getElement, show, hide } from '../src/util/dom.js'


export const drawCategorySection = (category, noteState, callback) => {
    getElement('.category-wrap').insertAdjacentHTML('beforeend', renderState(category, noteState));
    callback(category);
}

const renderState = (category, noteState) => {
    let categoryHTML = `
        <div class="category ${category.name}">
            <div class="category-menu">
                <div class="category-menu_left">
                    <span class="category-menu_count">${noteState.contents.notes.length}</span>
                    <span class="category-menu_title">${category.name}</span>
                </div>
                <div class="category-menu_right">
                    <button class="category-menu_addBtn">+</button>
                    <button class="category-menu_menu">&hellip;</button>
                </div>
            </div>
            <div class="add-note">
                <input class="add-note_input" type="text" placeholder="Enter a note">
                <button class="add-note_addBtn" disabled="disabled">Add</button>
                <button class="add-note_cancleBtn">Cancle</button>
            </div>
            <div class="note-wrap">${drawNoteSection(noteState)}</div>
        </div>
    `

    return categoryHTML; //+ '<button class="add-category">+Add category</button>';
}

const drawNoteSection = (noteState) => {
    let noteHTML = '';

    noteState.contents.notes.forEach((note) => {
        const noteContents = note.content.split('\n');
        const noteTitle = noteContents[0];
        if(noteContents[1] === '') noteContents.splice(0, 1);
        noteContents.splice(0, 1);
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


///////////////////////

export const inputBoxEventHandle = (category) => {
    console.log(`.category.${category.name} .category-menu_addBtn`);
    getElement(`.category.${category.name} .category-menu_addBtn`).addEventListener('click', () => {
      const addNote = getElement(`${category.name} .add-note`);
      const addNoteDisplay = addNote.style.display;
      switch (addNoteDisplay) {
        case 'block': hide(addNote);
          break;
        case "": show(addNote);
          break;
        case 'none': show(addNote);
          break;
      }
    })
  
    // eventListner를 forEach로 돌면서 category 마다 달아줘야지
    let inputBox = getElement(`${category.name} .add-note_input`);
    inputBox.addEventListener('keydown', () => {
      if (inputBox.innerHTML != null) {
        console.log('here!');
        inputBox.closest(`${category.name} .add-note_addBtn`).disabled = "false";
      }
      else {
        console.log('nooo');
        inputBox.closest(`${category.name} .add-note_addBtn`).disabled = "disabled";
      }
    })
  
  
    getElement(`${category.name} > .add-note_addBtn`).addEventListener('click', () => {
  
    })
  
  }
  