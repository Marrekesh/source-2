import modals from './modules/modals';
import slider from './modules/slider';
import forms from './modules/forms';
import cards from './modules/cards';


document.addEventListener('DOMContentLoaded', () => {

    modals();
    slider('.main-slider-item','vertical');
    slider('.feedback-slider-item','horizontal', '.main-prev-btn', '.main-next-btn');
    forms();
    cards('.button-styles', '#styles .row');
})