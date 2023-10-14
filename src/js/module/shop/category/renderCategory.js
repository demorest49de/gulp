import {createFooter, createHeader, createMain, iterateOverCards} from "../../base/baseElems.js";
import {getSearchParams} from "../../base/tools.js";
import {getGoodsByCategory} from "../fetch.js";
import {createBreadCrumbs} from "../../base/breadcrumbs.js";


export const renderCategory = ($) => {
    $.categoryPage.forEach(({type, name}) => {
        if (type === $.types.header) {
            createHeader(name, $);
            return;
        }
        
        if (type === $.types.main) {
            createMain(name, $);
            const breadCrumbs = createBreadCrumbs($.breadCrumbs.categoryInfo);
            const link = breadCrumbs.querySelector('.bc__item:nth-last-child(1) .bc__link');
            const paramsObject = getSearchParams();
            
            link.href += `?name=${paramsObject.name}`;
            link.textContent = paramsObject.name;
            link.ariaLabel = paramsObject.name;
            $.main.append(breadCrumbs);
            return;
        }
        
        if (type === $.types.section) {
            const paramsObject = getSearchParams();
            createSectionCategory(name, $, paramsObject);
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


const createSectionCategory = (name, $, paramsObject) => {
    const categoryName = paramsObject.name;
    getGoodsByCategory($, categoryName).then((data) => {
        const items = data.data;
        
        if (items && items.length > 0) {
            $.main.insertAdjacentHTML('beforeend',
                `
            <section class="${name}" aria-label="${categoryName}">
            <h2 class="visually-hidden">${categoryName}</h2>
            <div class="container">
                <h3 class="category__title">${categoryName}</h3>
                <ul class="category__cards">
                </ul>
            </div>
        </section>
            `);
            
            renderCardsByCategory($, items);
        }
    });
};