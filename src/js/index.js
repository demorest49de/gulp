import {renderElements} from './module/shopOnline/createElement.js';
import {$} from '../js/module/constants.js';
import {blogInit} from "./blog.js";
import {articleInit} from "./article.js";
import {handlers} from "./module/shopOnline/handlers.js";

{
    const constsInit = (selector) => {
        const app = document.querySelector(selector);
        $.app = app;
        $.selector = selector;
    };
    const indexInit = ($) => {
        renderElements($);
        handlers();
    };
    const init = (selector) => {
            constsInit(selector);
            indexInit($);
            blogInit($);
            // articleInit();
        }
    ;
    
    window.init = init;
}
