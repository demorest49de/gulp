import {createBlog} from './createBlog.js';
import {createHeader, createFooter} from '../base/baseElems.js';

export const renderBlog = ($) => {
        $.blog.forEach(({type, name}) => {
            
            if (type === $.types.header) {
                createHeader(name, $);
                return;
            }
        
            if (type === $.types.blog) {
                createBlog(name, $);
                return;
            }
            
            if (type === $.types.footer) {
                createFooter(name, $);
                return;
            }
        });
    };

