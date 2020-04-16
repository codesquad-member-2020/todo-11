import { getElement } from '../src/util/dom.js'

const stateRender = (categoryState) => {
    let categoryHTML = '';

    categoryState.contents.category.forEach((category) => {
        categoryHTML += `
            <div class="category ${category.name}">
                <div class="category-menu">
                    <div class="category-menu_left">
                        <span class="category-menu_count"></span>
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
                <div class="note-wrap"></div>
            </div>
        `
    })

    return categoryHTML + '<button class="add-category">+Add category</button>';
}

export const drawCategorySection = (categoryState) => {
    getElement('.category-wrap').innerHTML = stateRender(categoryState);
}