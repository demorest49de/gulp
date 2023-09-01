import {loadItemsHandler, paginationClickHandler, paginationHandler} from "./module/blog/load.js";
import {renderBlog} from './module/blog/render.js';

const handleBlogLink = ($) => {
    const link = document.querySelector('.footer__elem a[href="/blog"]');
    link.addEventListener('click', (e) => {
        e.preventDefault();
        $.app.querySelector("main").remove();
        $.app.querySelector('.header').after($.blog.main);
        window.document.head.querySelector("title").textContent = 'Блог';
    });
};

export const blogInit = ($) => {
    const blog = renderBlog();
    $.blog = blog;
    paginationClickHandler($);
    paginationHandler($);
    loadItemsHandler($);
    
    handleBlogLink($);
};
    
