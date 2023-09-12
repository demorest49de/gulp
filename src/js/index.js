import {renderElement} from './module/shop/createShop.js';
import {global} from '../js/module/constants.js';
import {setCustomPaddings, customPaddingHandler} from "../js/module/base/customPaddings.js";

{
    const constsInit = (selector, page, $) => {
        const app = document.querySelector(selector);
        $.app = app;
        $.selector = selector;
        $.page = page;
    };
    
    const handlersInit = ($) => {
        setCustomPaddings($);
        customPaddingHandler($);
    };
    
    const init = (selector, page) => {
        constsInit(selector, page, global);
        renderElement(global);
        handlersInit(global);
    };
    
    window.init = init;
}
