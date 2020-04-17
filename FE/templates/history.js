import { getElement } from '../src/util/dom.js';
import { timeSince } from '../src/util/time.js'

export const drawHistory = (historys) => {
    getElement('.histoty-contents').innerHTML = renderState(historys);
}

const renderState = (historys) => {
    let historyHTML = ''
    historys.contents.history.forEach(element => {
        historyHTML += `
            <li class="history-content">@${element.user}
            <br>
            ${timeSince(new Date(element.createdAt))}
            </li>
        `
    });

    return `
        <li class="histoty-menu">MENU</li>
        <li class="histoty-menu">Acitivity</li>
        ${historyHTML}
    `;

}
