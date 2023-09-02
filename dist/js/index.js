import {renderElement} from './module/shop/createShop.js';
import {$} from '../js/module/constants.js';
import {handlers} from "./module/shop/handlers.js";

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
