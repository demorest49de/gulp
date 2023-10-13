import {createFooter, createHeader, createMain, iterateOverCards} from "../base/baseElems.js";
import {getSearchParams} from "../base/tools.js";
import {getGoods} from "../shop/fetch.js";
import {createBCSearch} from "./createSearch.js";


export const renderSearch = ($) => {
    $.searchPage.forEach(({type, name}) => {
        if (type === $.types.header) {
            createHeader(name, $);
            return;
        }
        
        if (type === $.types.main) {
            createMain(name, $);
            const breadCrumbs = createBCSearch($.breadCrumbs.searchInfo);
            $.main.append(breadCrumbs);
            return;
        }
        
        if (type === $.types.section) {
            const paramsObject = getSearchParams();
            createSectionSearch(name, $, paramsObject);
            return;
        }
        
        if (type === $.types.footer) {
            createFooter(name, $);
            return;
        }
    });
};

export const cbRenderCatalog = (error, data, $) => {
    if (error) {
        handleErrorMessage(error, data, $);
        return;
    }
    
    return {data};
};


const handleErrorMessage = (error, data, $) => {
    
    
    if (!data) data = error.message;
    console.warn(error, data);
};


const renderCardsByCategory = ($, items) => {
    
    const cards = document.querySelector('.category__cards');
    const cardAfterStyle = document.createElement("style");
    
    iterateOverCards(cards, $, cardAfterStyle, items);
};


const createSectionSearch = (name, $, paramsObject) => {
    const itemName = paramsObject.search;
    getGoods($).then((data) => {
        const returnedData = data.data;
        const items = returnedData.filter(elem => elem.title.includes(itemName));
        console.log(items);
        const resultMessage = items && items.length > 0 ? 'Вот что мы нашли...' :
            'По вашему запросу ничего не нашлось...';
        if (items && items.length > 0) {
            $.main.insertAdjacentHTML('beforeend',
                `
            <section class="${name}" aria-label="Поиск">
            <h2 class="visually-hidden">${resultMessage}</h2>
            <div class="container">
                <h3 class="category__title">${resultMessage}</h3>
                <ul class="category__cards">
                </ul>
            </div>
        </section>
            `);

            renderCardsByCategory($, items);
        }
    });
};