import {createMarkup} from './module/article/createArticle.js';
import {loadItemsHandler} from './module/article/loadArticle.js';



export const articleInit = (selectorApp) => {
        const vars = createMarkup();
        loadItemsHandler(vars);
    };


