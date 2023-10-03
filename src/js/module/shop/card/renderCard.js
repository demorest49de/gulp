import {createFooter, createHeader, createMain} from "../../base/baseElems.js";
import {getSearchParams} from "../../base/tools.js";
import {createBCCard, createSectionCard} from "./createCard.js";
import {getGoodsByCategory, getItemById} from "../fetch.js";


export const renderCard = ($) => {
    const paramsObject = getSearchParams();
    $.card.forEach(({type, name}) => {
        if (type === $.types.header) {
            createHeader(name, $);
            return;
        }
        
        if (type === $.types.main) {
            const bc = createBCCard($, $.breadCrumbs.cardInfo);
            createMain(name, $);
            $.main.append(bc);
            return;
        }
        
        if (type === $.types.section) {
            createSectionCard(name, $, paramsObject);
            return;
        }
        
        if (type === $.types.category) {
            createSectionRecommended(name, $, paramsObject);
            return;
        }
        
        if (type === $.types.footer) {
            createFooter(name, $);
            return;
        }
    });
};


const createSectionRecommended = (name, $, paramsObject) => {
    console.log(name, ' : ', paramsObject);
    const itemId = paramsObject.id;
    getItemById($, itemId).then((data) => {
        const item = data.data;
        getGoodsByCategory($, item.category).then((data) => {
            const items = data.data;
            
            if (items && items.length > 0) {
                $.main.insertAdjacentHTML('beforeend',
                    `
            <section class="${name}" aria-label="Рекомендуем также">
            <h2 class="visually-hidden">Рекомендуем также</h2>
            <div class="container">
                <h3 class="category__title">Рекомендуем также</h3>
                <ul class="category__cards">
                </ul>
            </div>
        </section>
            `);
                const title = $.main.querySelector('.category__title');
                title.style.cssText = `
                    margin-bottom: 60px;
                `;
                renderCardsByCategory($, items, itemId);
            }
        });
    });
};
const renderCardsByCategory = ($, source, itemId) => {
    
    const cards = document.querySelector('.category__cards');
    const cardAfterStyle = document.createElement("style");
    
    let temp = source.filter(x => x.id !== itemId);
    const items = temp.slice(0, 6);
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