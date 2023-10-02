import {createFooter, createHeader, createMain} from "../../base/baseElems.js";
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
            const breadCrumbs = createBreadCrumbs($.breadCrumbs.articleInfo);
            $.main.append(breadCrumbs);
            return;
        }
        
        if (type === $.types.section) {
            const paramsObject = getSearchParams();
            createSection(name, $, paramsObject);
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
    // $.app.append($.addItemError);
    // setTimeout(() => {
    //     $.addItemError.classList.add('is-visible');
    // }, 300);
    
    if (!data) data = error.message;
    console.warn(error, data);
};


const renderCardsByCategory = ($, items) => {
    console.log(' : ', items);
    const cards = document.querySelector('.category__cards');
    const cardAfterStyle = document.createElement("style");
    
    items.forEach((item, index) => {
        if (item.discount > 0) {
            cardAfterStyle.innerHTML +=
                `.card-category:nth-child(${index + 1}) .card-category__figure:after {
                content: '-${item.discount}%';

            }`;
            document.body.append(cardAfterStyle);
        }
        
        const li = document.createElement('li');
        li.className = 'card-category';
        
        const a = document.createElement('a');
        a.className = 'card-category__link';
        a.title = `${item.title}`;
        a.href = `card.html?id=${item.id}`;
        const oldPrice = Math.ceil(item.price - ((item.price * item.discount) / 100));
        a.insertAdjacentHTML('beforeend',
            `
                    <picture class="card-category__figure">
                    <img loading="lazy" class="card-category__image" src="${$.URL}/${item.image}"
                              alt="${item.title}" width="420" height="295">
                    </picture>
                    <div class="card-category__price-block">
                    <span class="card-category__new-price">${item.price} ₽</span>
                    
                    </div>
                    <p class="card-category__item-text">${item.title}</p>
                `);
        //
        const cardPriceBlock = a.querySelector('.card-category__price-block');
        if (item.discount > 0) {
            cardPriceBlock.insertAdjacentHTML('beforeend',
                `<span class="card-category__old-price">${oldPrice} ₽</span>`
            );
        }
        li.append(a);
        // console.log(a);
        cards.append(li);
    });
};


const createSection = (name, $, paramsObject) => {
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