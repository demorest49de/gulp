import {getItemById} from "../fetch.js";
import {getSearchParams} from "../../base/tools.js";

export const createSectionCard = (name, $, paramsObject) => {
    console.log(' : ', paramsObject);
    const cardId = paramsObject.id;
    getItemById($, cardId).then((data) => {
        console.log(' : ', data.data);
        const item = data.data;
        const newPrice = item.price.toString();
        
        let priceFirstPart;
        let priceLastPart;
        const depth = newPrice.length / 2;
        console.log(' : ', newPrice.length);
        
        if (depth > 0) {
            
        }
        
        
        $.main.insertAdjacentHTML('beforeend',
            `
            <section class="details" aria-label="${item.title}">
            <h2 class="visually-hidden">${item.title}</h2>
            <div class="container">
                <h3 class="details__title">${item.title}</h3>
                <div class="details__block">
                    <picture class="details__figure">
                    <img loading="lazy" class="details__image"
                     src="${$.URL}/${item.image}"
                     alt="${item.title}" width="757" height="427">
                    </picture>
                    <div class="details__cart-info">
                        <div class="details__price-block">
                            <span class="details__new-price">${item.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            `);
        
        const cardAfterStyle = document.createElement("style");
        if (item.discount > 0) {
            cardAfterStyle.innerHTML +=
                `.details__figure:after {
                content: '-${item.discount}%';
                top: 20px;
                right: 20px;
                bottom: unset;
                left: unset;
            }`;
            document.body.append(cardAfterStyle);
        }
    });
};


export const createBCCard = ($, bc) => {
    
    const breadCrumbs = document.createElement('div');
    breadCrumbs.classList.add('breadcrumbs', 'bc');
    
    breadCrumbs.insertAdjacentHTML('beforeend', `
        <div class="container bc__container">
            <nav class="bc__navigation">
                <ul class="bc__bread-crumbs">
                </ul>
            </nav>
        </div>
    `);
    
    const ul = breadCrumbs.querySelector('.bc__bread-crumbs');
    
    const home = bc.home;
    const category = bc.category;
    const card = bc.card;
    console.log(' : ', category);
    
    const paramsURL = getSearchParams();
    console.log(' : ', paramsURL);
    getItemById($, paramsURL.id).then((data) => {
        console.log(' : ', data.data);
        const item = data.data;
        ul.insertAdjacentHTML('beforeend',
            `
            <li class="bc__item">
            <a class="bc__link" href="${home.url}" aria-label="${home.ariaLabel}">${home.name}</a>
                <div class="bc__arrow-block">
                    <svg class="bc__nav-arrow">
                        <use href="./svg/article/nav-arrow.svg#nav-arrow"></use>
                    </svg>
                </div>
            </li>
            <li class="bc__item">
            <a class="bc__link" href="${category.url}?name=${item.category}"
            aria-label="${item.category}">${item.category}</a>
                <div class="bc__arrow-block">
                    <svg class="bc__nav-arrow">
                        <use href="./svg/article/nav-arrow.svg#nav-arrow"></use>
                    </svg>
                </div>
            </li>
            <li class="bc__item">
            <a class="bc__link" href="${card.url}?id=${item.id}"
            aria-label="${item.title}">${item.title}</a>
                <div class="bc__arrow-block">
                </div>
            </li>
        `);
    });
    return breadCrumbs;
};