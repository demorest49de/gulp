import {renderElement} from '../js/module/shop/createShop.js';
import {global} from '../js/module/constants.js';
import {setCustomPaddings, customPaddingHandler} from "../js/module/base/customPaddings.js";
import {burgerHandler} from "../js/module/shop/burger/burgerHandler.js";

{
    const constsInit = (selector, page, $) => {
        const app = document.querySelector(selector);
        $.app = app;
        $.selector = selector;
        $.page = page;
        console.log($);
    };
    
    const handlersInit = ($) => {
        setCustomPaddings($);
        customPaddingHandler($);
        burgerHandler($);
    };
    
    const init = (selector, page) => {
        constsInit(selector, page, global);
        renderElement(global);
        handlersInit(global);
    };
    
    window.init = init;
}
