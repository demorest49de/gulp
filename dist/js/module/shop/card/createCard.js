import {getGoodsByCategory, getItemById} from "../fetch.js";
import {getSearchParams} from "../../base/tools.js";
import {basketUserId} from '../../constants.js';
import {getStorage, setStorage} from "../localStorage.js";
import {setBasketQuantity} from "../basket/renderBasket.js";


export const calculateDepth = (priceValue) => {
    
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

const cardAfterStyle = document.createElement("style");

export const createSectionCard = (name, $, paramsObject) => {
    
    const cardId = paramsObject.id;
    getItemById($, cardId).then((data) => {
        
        const item = data.data;
        
        const oldPrice = item.price.toString();
        
        let newPrice = NaN;
        if (item.discount === 0) {
            newPrice = (Math.ceil(item.price / 1.2)).toString();
        } else {
            newPrice = (Math.ceil(item.price - ((item.price * item.discount) / 100))).toString();
        }
        
        const {firstPart: firstNew, lastPart: lastNew} = calculateDepth(newPrice);
        const {firstPart: firstOld, lastPart: lastOld} = calculateDepth(oldPrice);
        
        const creditfrom = Math.ceil(item.price - (item.price / 1.2));
        
        $.main.insertAdjacentHTML('beforeend',
            `
            <section class="details" aria-label="${item.title}">
            <h2 class="visually-hidden">${item.title}</h2>
            <div class="container">
                <h3 class="details__title">${item.title}</h3>
                <div class="details__underline"></div>
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
                       
                        <button class="details__price-reduction-btn">
                            <svg class="details__price-reduction-bell-svg" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24">
                                <path d="M19 13.586V10C19 6.783 16.815 4.073
                                 13.855 3.258C13.562 2.52 12.846 2 12 2C11.154
                                 2 10.438 2.52 10.145 3.258C7.185 4.074 5 6.783
                                  5 10V13.586L3.293 15.293C3.19996 15.3857
                                  3.12617 15.4959 3.07589 15.6172C3.0256 15.7386
                                   2.99981 15.8687 3 16V18C3 18.2652 3.10536 18.5196
                                   3.29289 18.7071C3.48043 18.8946 3.73478 19 4
                                   19H20C20.2652 19 20.5196 18.8946 20.7071
                                   18.7071C20.8946 18.5196 21 18.2652 21
                                   18V16C21.0002 15.8687 20.9744 15.7386 20.9241
                                   15.6172C20.8738 15.4959 20.8 15.3857 20.707
                                   15.293L19 13.586ZM19 17H5V16.414L6.707 14.707C6.80004
                                   14.6143 6.87383 14.5041 6.92412 14.3828C6.9744
                                    14.2614 7.00019 14.1313 7 14V10C7 7.243 9.243
                                     5 12 5C14.757 5 17 7.243 17 10V14C17 14.266
                                     17.105 14.52 17.293 14.707L19 16.414V17ZM12
                                      22C12.6193 22.0008 13.2235 21.8086 13.7285
                                      21.4502C14.2335 21.0917 14.6143 20.5849 14.818
                                       20H9.182C9.38566 20.5849 9.76648 21.0917
                                        10.2715 21.4502C10.7765 21.8086 11.3807 22.0008 12 22Z"/>
                            </svg>
                            <span class="details__price-reduction-text">Узнать о снижении цены</span>
                        </button>
                    </div>
                </div>
                <div class="details__description">
                    <h4 class="details__subtitle">Описание:</h4>
                    <p class="details__descr-text">${item.description}</p>
                </div>
            </div>
        </section>
            `);
        
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
        
        
        const addBtn = $.main.querySelector('.details__add-to-card');
        addBtn.addEventListener('click', ({target}) => {
            
            const basketArray = getStorage(basketUserId);
            
            let index = NaN;
            const elem = basketArray.find((elem, index) => {
                if (elem.item.id === item.id) {
                    index = index;
                    return elem;
                }
            });
            
            if (elem) {
                
                elem.qty += 1;
            } else {
                basketArray.push({item: item, qty: 1});
            }
            setStorage(basketUserId, basketArray);
            setBasketQuantity();
        });
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


export const createSectionRecommended = (name, $, paramsObject) => {
    
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

export const renderCardsByCategory = ($, source, itemId) => {
    
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
        
        const cardPriceBlock = a.querySelector('.card-category__price-block');
        if (item.discount > 0) {
            cardPriceBlock.insertAdjacentHTML('beforeend',
                `<span class="card-category__old-price">${oldPrice} ₽</span>`
            );
        }
        li.append(a);
        
        cards.append(li);
    });
};