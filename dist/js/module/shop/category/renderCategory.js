import {createFooter, createHeader, createMain, iterateOverCards} from "../../base/baseElems.js";
import {getSearchParams} from "../../base/tools.js";
import {getGoodsByCategory} from "../fetch.js";
import {createBCCategory} from "./createCategory.js";


export const renderCategory = ($) => {
    $.categoryPage.forEach(({type, name}) => {
        if (type === $.types.header) {
            createHeader(name, $);
            return;
        }
        
        if (type === $.types.main) {
            createMain(name, $);
            const breadCrumbs = createBCCategory($.breadCrumbs.categoryInfo);
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

// items.forEach((item, index) => {
//     if (item.discount > 0) {
//         cardAfterStyle.innerHTML +=
//             `.card-category:nth-child(${index + 1}) .card-category__figure:after {
//                 content: '-${item.discount}%';
//
//             }`;
//         document.body.append(cardAfterStyle);
//     }
//
//     const li = document.createElement('li');
//     li.className = 'card-category';
//
//     const a = document.createElement('a');
//     a.className = 'card-category__link';
//     a.title = `${item.title}`;
//     a.href = `card.html?id=${item.id}`;
//     const newPrice = Math.ceil(item.price - ((item.price * item.discount) / 100));
//     a.insertAdjacentHTML('beforeend',
//         `
//                     <picture class="card-category__figure">
//                     <img loading="lazy" class="card-category__image" src="${$.URL}/${item.image}"
//                               alt="${item.title}" width="420" height="295">
//                     </picture>
//                     <div class="card-category__price-block">
//                     <span class="card-category__new-price">${newPrice} ₽</span>
//
//                     </div>
//                     <p class="card-category__item-text">${item.title}</p>
//                 `);
//
//     const cardPriceBlock = a.querySelector('.card-category__price-block');
//     if (item.discount > 0) {
//         cardPriceBlock.insertAdjacentHTML('beforeend',
//             `<span class="card-category__old-price">${item.price} ₽</span>`
//         );
//     }
//     li.append(a);
//
//     cards.append(li);
// });