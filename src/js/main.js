import modals from './modules/modals';
import slider from './modules/slider';
import forms from './modules/forms';
import cards from './modules/cards';
import calc from './modules/calc';
import tabs from './modules/tabs';


document.addEventListener('DOMContentLoaded', () => {
    let resultCalc = {};
    modals();
    slider('.main-slider-item','vertical');
    slider('.feedback-slider-item','horizontal', '.main-prev-btn', '.main-next-btn');
    forms(resultCalc);
    cards('.button-styles', '#styles .row');
    calc('#size', '#material', '#options','.calc-price', '.promocode', resultCalc);
    tabs('.portfolio-menu', '.portfolio-menu li', '.portfolio-block');
})