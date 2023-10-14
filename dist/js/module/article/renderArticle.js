import {createHeader, createFooter} from '../base/baseElems.js';
import {createArticle} from './createArticle.js';


export const renderArticle = ($) => {
    $.article.forEach(({type, name}) => {
        
        if (type === $.types.header) {
            createHeader(name, $);
            return;
        }
        
        if (type === $.types.article) {
            createArticle($);
            return;
        }
        
        if (type === $.types.footer) {
            createFooter(name, $);
            return;
        }
    });
};

