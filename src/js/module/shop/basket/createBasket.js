import {basketUserId} from '../../constants.js';
import {getStorage} from "../localStorage.js";
import {calculateDepth} from "../card/createCard.js";

export const createBCCart = ($, bc) => {
    
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
    const cart = bc.cart;
    
    ul.insertAdjacentHTML('beforeend',
        `
            <li class="bc__item">
            <a class="bc__link" href="./${home.url}" aria-label="${home.ariaLabel}">${home.name}</a>
                <div class="bc__arrow-block">
                    <svg class="bc__nav-arrow">
                        <use href="./svg/article/nav-arrow.svg#nav-arrow"></use>
                    </svg>
                </div>
            </li>
            <li class="bc__item">
            <a class="bc__link" href="./${cart.url}"
            aria-label="${cart.ariaLabel}">${cart.name}</a>
                <div class="bc__arrow-block">
                </div>
            </li>
        `);
    
    return breadCrumbs;
};

const renderBasketItems = ($) => {
    const list = $.main.querySelector('.basket__items-list');
    const basketArray = getStorage(basketUserId);
    
    if (basketArray.length > 0) {
        
        basketArray.forEach((elem) => {
            
            const item = elem.item;
            
            const positionTotal = elem.qty * item.price;
            
            const oldPrice = positionTotal.toString();
            
            let newPrice = NaN;
            if (item.discount === 0) {
                newPrice = (Math.ceil((positionTotal) / 1.2)).toString();
            } else {
                newPrice = (Math.ceil((positionTotal) - ((positionTotal * item.discount) / 100))).toString();
            }
            
            const {firstPart: firstNew, lastPart: lastNew} = calculateDepth(newPrice);
            const {firstPart: firstOld, lastPart: lastOld} = calculateDepth(oldPrice);
            
            const creditfrom = Math.ceil(item.price - (item.price / 1.2));
            
            list.insertAdjacentHTML('beforeend',
                `
                    
                <li class="basket__list-item" data-id="${item.id}">
                    <div class="basket__list-all-info-block">
                    <div class="basket__list-item-block">
                        
                        <label class="basket__label">
                            <input type="checkbox" class="basket__checkbox-input"
                                >
                            <span class="basket__checkbox-icon"></span>
                        </label>
                        
                        <a href="./card.html?id=${item.id}" class="basket__item-link">
                            <picture  class="basket__picture" data-id="${item.id}">
                                <source srcset="" type="image/avif">
                                <source srcset="" type="image/webp">
                                    <img class="basket__image-small"
                                     src="https://muddy-substantial-gear.glitch.me/${item.image}"
                                     alt="${item.title}">
                            </picture>
                        </a>
                </div>
                    <div class="basket__list-text-block">
                        <p class="basket__list-text-main">
                            ${item.title}</p>
                    </div>
                    <div class="basket__list-quantity-block">
                            <button class="basket__minus-btn">−</button>
                        <input type="hidden" class="basket__quantity-input">
                                <span class="basket__quantity-text">${elem.qty}</span></input>
                            <button class="basket__plus-btn">+</button>
                    </div>
                    <div class="basket__list-price-block">
                        <div class="basket__list-price-block-new">
                            <span class="basket__item-new-price">${firstNew}&nbsp;</span>
                            <span class="basket__item-new-price">${lastNew} ₽</span>
                        </div>
                        <div class="basket__list-price-block-old">
                            <span class="basket__item-old-price">${firstOld}&nbsp;</span>
                            <span class="basket__item-old-price">${lastOld} ₽</span>
                        </div>
                        <p class="basket__credit-from">В кредит от ${creditfrom} ₽</p>
                    </div>
                    <div class="basket__trascan-block">
                        <button class="basket__trashcan-btn">
                            <svg class="basket__trashcan-svg" xmlns="http://www.w3.org/2000/svg"
                            width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <rect width="30" height="30" fill="white"/>
                                <path d="M19.0214 5.35355L19.1679
                                5.5H19.375H23.25V7H6.75V5.5H10.625H10.8321L10.9786
                                 5.35355L12.0821 4.25H17.9179L19.0214
                                 5.35355ZM10 25.75C8.90114 25.75 8 24.8489
                                 8 23.75V9.25H22V23.75C22 24.8489 21.0989
                                 25.75 20 25.75H10Z" fill="#C9C9C9" stroke="#C9C9C9"/>
                            </svg>
                        </button>
                    </div>
                    </div>
                </li>
                `);
            const elemList = list.querySelector('li:nth-last-child(1)');
        });
    }
};

const renderPictures = () =>{
    
    const pictList = document.querySelector('.basket__dely-picture-block');
    const basketArray = getStorage(basketUserId);
    
    if (basketArray.length > 0) {
        
        basketArray.forEach((elem) => {
            
            const item = elem.item;
    
            pictList.insertAdjacentHTML('beforeend',
                `
                    <picture class="basket__picture" data-id="${item.id}">
                            <source srcset="" type="image/avif">
                            <source srcset="" type="image/webp">
                                <img class="basket__image-small"
                src="https://muddy-substantial-gear.glitch.me/${item.image}"
                alt="${item.title}">
                        </picture>
                `);
        });
    }
}

export const createSectionBasket = (name, $) => {
    
    $.main.insertAdjacentHTML('beforeend',
        `
    <section class="basket" aria-label="Корзина">
    <h2 class="visually-hidden">Корзина</h2>
    <div class="container basket__container">
        
        <div class="basket__list">
            <div class="basket__title-block">
                <h3 class="basket__title">Корзина</h3>
                <p class="basket__cart-count">0</p>
            </div>
            <div class="basket__list-manage-block">
                
                <label class="basket__label">
                    <input type="checkbox" class="basket__checkbox-input"
                        >
                    <span class="basket__checkbox-icon">Выбрать все</span>
                </label>
                <label>
                <button class="basket__trashcan-btn">
                    <svg class="basket__trashcan-svg" xmlns="http://www.w3.org/2000/svg"
                    width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <rect width="30" height="30" fill="white"/>
                        <path d="M19.0214 5.35355L19.1679
                        5.5H19.375H23.25V7H6.75V5.5H10.625H10.8321L10.9786
                         5.35355L12.0821 4.25H17.9179L19.0214
                         5.35355ZM10 25.75C8.90114 25.75 8 24.8489
                         8 23.75V9.25H22V23.75C22 24.8489 21.0989
                         25.75 20 25.75H10Z" fill="#C9C9C9" stroke="#C9C9C9"/>
                    </svg>
                </button>
                </label>
            </div>
                
            <div class="basket__underline"></div>
            <ul class="basket__items-list">
            </ul>
        </div>
        
        <div class="basket__total">
                
                <div class="basket__price-block">
                    <span class="basket__total-text">итого: </span>
                    <div class="basket__total-text">
                    <span class="basket__total-value"></span>
                    <span class="basket__total-value">0 ₽</span>
                    </div>
                </div>
                <div class="basket__item-block">
                    <div class="basket__price">
                        <span class="basket__item-details-text">Товары, 0 шт.</span>
                        <div class="basket__details-item-total">
                        <span class="basket__item-details-value"></span>
                        <span class="basket__item-details-value">0 ₽</span>
                        </div>
                    </div>
                    <div class="basket__price">
                        <span class="basket__item-details-text">Скидка </span>
                        <div class="basket__details-item-discount">
                        <span class="basket__item-details-value"></span>
                        <span class="basket__item-details-value">0 ₽</span>
                        </div>
                    </div>
                    <div class="basket__price">
                        <span class="basket__item-details">Доставка</span>
                        <span class="basket__item-details">Бесплатно</span>
                    </div>
                </div>
                
                <div class="basket__info-block">
                    <span class="basket__info-text-info">Доставка:
                    <a href="./" class="basket__info-link">Пункт выдачи</a>
                    </span>
                </div>
                <div class="basket__time-address">
                <p class="basket__time">Ежедневно 10:00 - 21:00</p>
                <p class="basket__address">г. Москва (Московская область),
                 улица Павлика Морозова, д. 48</p>
                </div>
                <div class="basket__info-block">
                    <span class="basket__info-text-info">Дата:
                    <a href="./" class="basket__info-link">10-13 февраля</a>
                    </span>
                </div>
                <div class="basket__info-block">
                    <span class="basket__info-text-info">Оплата:
                    <a href="./" class="basket__info-link">Картой</a>
                    </span>
                </div>
                <button class="basket__order-btn" aria-label="Заказать">
                    Заказать
                </button>
                <div class="basket__agreement">
                    <label class="basket__label">
                        <input type="checkbox" class="basket__checkbox-input"
                           checked required>
                        <span class="basket__checkbox-icon"></span>
                    </label>
                        <span class="basket__agree-text">
                        Согласен с условиями <a class="basket__agree-link">
                        правил пользования торговой площадкой
                         и правилами возврата
                        </a></span>
                </div>
            </div>
        <div class="basket__delivery-options">
            <div class="basket__dely-block">
                <h3 class="basket__title">Способ доставки</h3>
                <a href="./" class="basket__dely-link">Изменить</a>
            </div>
            <div class="basket__dely-block">
                <span class="basket__dely-name">Пункт выдачи</span>
                <span class="basket__dely-value">г. Москва (Московская область),
                улица Павлика Морозова, д. 48, (Пункт выдачи), Ежедневно 10:00-21:00</span>
            </div>
            <div class="basket__dely-block">
                <span class="basket__dely-name">Стоимость доставки</span>
                <span class="basket__dely-value">Бесплатно</span>
            </div>
            <div class="basket__dely-block">
                <span class="basket__dely-estim-date">10-13 февраля</span>
                <div class="basket__dely-picture-block">
                
                </div>
            </div>
        </div>
    </div>
</section>
            `);
    if (screen.width <= 666) {
        const value = $.main.querySelector('.basket__dely-block:nth-child(3) .basket__dely-value');
        value.textContent = 'Бесплатная доставка';
    }
    
    renderBasketItems($);
    renderPictures();
};