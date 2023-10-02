import {createFooter, createHeader, createMain} from "../../base/baseElems.js";
import {getSearchParams} from "../../base/tools.js";
import {getGoodsByCategory} from "../fetch.js";


export const renderCategory = ($) => {
    $.categoryPage.forEach(({type, name}) => {
        if (type === $.types.header) {
            createHeader(name, $);
            return;
        }
        
        if (type === $.types.main) {
            createMain(name, $);
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
                `.card:nth-child(${index + 1}) .card__figure:after {
                content: '-${item.discount}%';

            }`;
            document.body.append(cardAfterStyle);
        }
        // console.log(cardAfterStyle);
        // console.log(item, ' : ', index);
        
        const li = document.createElement('li');
        li.className = 'card';
        
        const a = document.createElement('a');
        a.className = 'card__link';
        a.title = `${item.title}`;
        a.href = `card.html?id=${item.id}`;
        const oldPrice = Math.ceil(item.price - ((item.price * item.discount) / 100));
        a.insertAdjacentHTML('beforeend',
            `
                    <picture class="card__figure">
                    <img loading="lazy" class="card__image" src="${$.URL}/${item.image}"
                              alt="${item.title}" width="420" height="295">
                    </picture>
                    <div class="card__price-block">
                    <span class="card__new-price">${item.price} ₽</span>
                    
                    </div>
                    <p class="card__item-text">${item.title}</p>
                `);
        //
        const cardPriceBlock = a.querySelector('.card__price-block');
        if (item.discount > 0) {
            cardPriceBlock.insertAdjacentHTML('beforeend',
                `<span class="card__old-price">${oldPrice} ₽</span>`
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