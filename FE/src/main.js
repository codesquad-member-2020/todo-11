import { css } from '../css/style.css';

window.addEventListener('DOMContentLoaded', () => {
    const result = document.querySelector('.result');
    const plusButton = document.querySelector('.plus-button');
    const minusButton = document.querySelector('.minus-button');
    
    plusButton.addEventListener('click', () => {
        result.innerHTML++;
    });

    minusButton.addEventListener('click', () => {
        result.innerHTML--;
    });
});