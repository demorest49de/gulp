import {loadItemsHandler, paginationClickHandler, paginationHandler} from "./module/blog/load.js";
import {renderBlog} from './module/blog/render.js';

const handleBlog = () => {

};

export const blogInit = ($) => {
    const blog = renderBlog();
    $.blog = blog;
    paginationClickHandler($);
    paginationHandler($);
    loadItemsHandler($);
};
    
