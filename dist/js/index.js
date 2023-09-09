import {renderElement} from './module/shop/createShop.js';
import {$} from '../js/module/constants.js';

{
    const constsInit = (selector) => {
        const app = document.querySelector(selector);
        $.app = app;
        $.selector = selector;
    };
    
    const init = (selector, page) => {
        constsInit(selector);
        renderElement($, page);
    };
    
    window.init = init;
}
