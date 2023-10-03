import {getItemById} from "../fetch.js";
import {getSearchParams} from "../../base/tools.js";

const calculateDepth = (priceValue) => {
    
    let firstPart = NaN;
    let lastPart = NaN;
    const depth = Math.floor(priceValue.length - 3);
    
    if (depth > 0) {
        firstPart = priceValue.slice(0, depth);
        lastPart = priceValue.slice(depth, priceValue.length);
    } else {
        firstPart = priceValue;
        lastPart = '';
    }
    
    return {firstPart, lastPart};
};

export const createSectionCard = (name, $, paramsObject) => {
    
    const cardId = paramsObject.id;
    getItemById($, cardId).then((data) => {
        console.log(' : ', data.data);
        const item = data.data;
        
        const newPrice = item.price.toString();
        let oldPrice = NaN;
        if (item.discount === 0) {
            oldPrice = (Math.ceil(item.price * 1.2)).toString();
        } else {
            oldPrice = (Math.ceil(item.price - ((item.price * item.discount) / 100))).toString();
            
        }
        console.log(' : ', oldPrice);
        const {firstPart: firstNew, lastPart: lastNew} = calculateDepth(newPrice);
        const {firstPart: firstOld, lastPart: lastOld} = calculateDepth(oldPrice);
        
        const creditfrom = Math.ceil(item.price - (item.price / 1.2));
        console.log(' : ',creditfrom);
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
                            <div class="details__price">
                                <span class="details__new-price">${firstNew} </span>
                                <span class="details__new-price">${lastNew} ₽</span>
                            </div>
                            <div class="details__price">
                                <span class="details__old-price">${firstOld} </span>
                                <span class="details__old-price">${lastOld} ₽</span>
                            </div>
                        </div>
                        <p class="details__credit-from">В кредит от ${creditfrom} ₽</p>
                        <div class="details__add-block">
                            <button class="details__add-to-card">Добавить в корзину</button>
                            <button class="details__add-to-favorite">
                                    <svg class="details__add-to-favorite-icon" xmlns="http://www.w3.org/2000/svg"
                                     width="33" height="33" viewBox="0 0 33 33" >
                                        <path d="M22.6875 4.125C20.295 4.125 17.9987
                                        5.23875 16.5 6.99875C15.0012 5.23875 12.705 4.125
                                        10.3125 4.125C6.0775 4.125 2.75 7.4525 2.75 11.6875C2.75
                                        16.885 7.425 21.12 14.5062 27.555L16.5 29.3563L18.4937
                                         27.5413C25.575 21.12 30.25 16.885 30.25
                                         11.6875C30.25 7.4525 26.9225 4.125 22.6875
                                          4.125ZM16.6375 25.5062L16.5 25.6437L16.3625
                                          25.5062C9.8175 19.58 5.5 15.6613 5.5 11.6875C5.5
                                          8.9375 7.5625 6.875 10.3125 6.875C12.43 6.875 14.4925
                                          8.23625 15.2212 10.12H17.7925C18.5075 8.23625 20.57
                                          6.875 22.6875 6.875C25.4375 6.875 27.5 8.9375 27.5
                                           11.6875C27.5 15.6613 23.1825 19.58 16.6375 25.5062Z"/>
                                    </svg>

                            </button>
                        </div>
                        <div class="details__info-block">
                            <p class="details__text-info">Доставка</p>
                            <p class="details__text-details">1-3 января</p>
                            <p class="details__text-info">Продавец</p>
                            <p class="details__text-details">ShopOnline</p>
                        </div>
                            <button class="details__warn-about-price-reduction">Узнать о снижении цены</button>
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
    
    
    const paramsURL = getSearchParams();
    
    getItemById($, paramsURL.id).then((data) => {
        
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