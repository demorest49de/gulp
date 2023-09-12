import {renderElement} from './module/shop/createShop.js';
import {vars} from '../js/module/constants.js';
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
        constsInit(selector, page, vars);
        renderElement(vars);
        handlersInit(vars);
    };
    
    window.init = init;
}
