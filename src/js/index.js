import {renderElement} from '../js/module/shop/createShop.js';
import {global} from '../js/module/constants.js';
import {setCustomPaddings, customPaddingHandler} from "../js/module/base/customPaddings.js";
import {burgerHandler} from "../js/module/shop/burger/burgerHandler.js";
import {basketHandlers} from "./module/shop/basket/renderBasket.js";
import {searchHandlers} from "./module/base/search.js";

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
        burgerHandler($);
        basketHandlers();
        searchHandlers();
    };
    
    const init = (selector, page) => {
        constsInit(selector, page, global);
        renderElement(global);
        handlersInit(global);
    };
    
    window.init = init;
}
