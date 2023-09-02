import {createHeader, createFooter} from '../base/baseElems.js';
import {createArticle} from './createArticle.js';


export const renderArticle = ($) => {
    $.blog.forEach(({type, name}) => {
        
        if (type === $.types.header) {
            createHeader(name, $);
            return;
        }
        
        if (type === $.types.blog) {
            createArticle(name, $);
            return;
        }
        
        if (type === $.types.footer) {
            createFooter(name, $);
            return;
        }
    });
};

