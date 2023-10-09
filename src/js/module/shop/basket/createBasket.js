import {getItemById} from "../fetch.js";
import {basketUserId} from '../../constants.js';
import {getStorage} from "../localStorage.js";
import {calculateDepth} from "../card/createCard.js";
import {handleChooseAll, handleDecreaseQuantity, handleEncreaseQuantity} from "./renderBasket.js";

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
            <a class="bc__link" href="${home.url}" aria-label="${home.ariaLabel}">${home.name}</a>
                <div class="bc__arrow-block">
                    <svg class="bc__nav-arrow">
                        <use href="./svg/article/nav-arrow.svg#nav-arrow"></use>
                    </svg>
                </div>
            </li>
            <li class="bc__item">
            <a class="bc__link" href="${cart.url}"
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
        basketArray.sort(function (a, b) {
            return a.id - b.id;
        });
        console.log(' : ',basketArray);
        basketArray.forEach((elem) => {
            getItemById($, elem.id).then((data) => {
                
                const item = data.data;
                console.log(' : ', item);
                const positionTotal = elem.qty * item.price;
    
                    const newPrice = positionTotal.toString();
                    let oldPrice = NaN;
                    if (item.discount === 0) {
                        oldPrice = (Math.ceil(item.price * 1.2)).toString();
                    } else {
                        oldPrice = (Math.ceil(item.price - ((item.price * item.discount) / 100))).toString();
                    }
                    
                    const {firstPart: firstNew, lastPart: lastNew} = calculateDepth(item.price.toString());
                    const {firstPart: firstOld, lastPart: lastOld} = calculateDepth(oldPrice);

                    const creditfrom = Math.ceil(item.price - (item.price / 1.2));
                    
                
                list.insertAdjacentHTML('beforeend',
                    `
                    
                <li class="basket__list-item">
                    <div class="basket__list-all-info-block">
                    <div class="basket__list-item-block">
                        
                        <label class="basket__label">
                            <input type="checkbox" class="basket__checkbox-input"
                                >
                            <span class="basket__checkbox-icon"></span>
                        </label>
                        
                        <a href="card.html?id=${item.id}" class="basket__item-link">
                            <picture  class="basket__picture">
                                <source srcset="" type="image/avif">
                                <source srcset="" type="image/webp">
                                    <img class="basket__image-small"
                                     src="https://muddy-substantial-gear.glitch.me/${item.image}"
                                     alt="" width="" height="">
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
    
                handleChooseAll();
                handleEncreaseQuantity(item.id);
                handleDecreaseQuantity(item.id);
            });
        });
    }
};

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
                
            <div class="basket__underline"></div>
            <ul class="basket__items-list">
            </ul>
        </div>
        
        <div class="basket__total">
                
                <div class="basket__price-block">
                    <span class="basket__total-text">итого: </span>
                    <span class="basket__total-text">${1} ₽</span>
                </div>
                <div class="basket__item-block">
                    <div class="basket__price">
                        <span class="basket__item-details">Товары, ${2} шт.</span>
                        <span class="basket__item-details">${100} ₽</span>
                    </div>
                    <div class="basket__price">
                        <span class="basket__item-details">Скидка </span>
                        <span class="basket__item-details">${10} ₽</span>
                    </div>
                    <div class="basket__price">
                        <span class="basket__item-details">Доставка</span>
                        <span class="basket__item-details">Бесплатно</span>
                    </div>
                </div>
                
                <div class="basket__info-block">
                    <span class="basket__info-text-info">Доставка:
                    <a href="" class="basket__info-link">Пункт выдачи</a>
                    </span>
                </div>
                <div class="basket__time-address">
                <p class="basket__time">Ежедневно 10:00 - 21:00</p>
                <p class="basket__address">г. Москва (Московская область),
                 улица Павлика Морозова, д. 48</p>
                </div>
                <div class="basket__info-block">
                    <span class="basket__info-text-info">Дата:
                    <a href="" class="basket__info-link">10-13 февраля</a>
                    </span>
                </div>
                <div class="basket__info-block">
                    <span class="basket__info-text-info">Оплата:
                    <a href="" class="basket__info-link">Картой</a>
                    </span>
                </div>
                <button class="basket__order-btn" aria-label="Заказать">
                    Заказать
                </button>
                <div class="basket__agreement">
                    <label class="basket__label">
                        <input type="checkbox" class="basket__checkbox-input"
                            required>
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
                <a href="" class="basket__dely-link">Изменить</a>
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
                    <picture  class="basket__picture">
                        <source srcset="" type="image/avif">
                        <source srcset="" type="image/webp">
                            <img class="basket__image-small"
                             src="" alt="" width="" height="">
                    </picture>
                    <picture  class="basket__picture">
                        <source srcset="" type="image/avif">
                        <source srcset="" type="image/webp">
                            <img class="basket__image-small"
                             src="" alt="" width="" height="">
                    </picture>
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
    
    
    // <li className="basket__list-item">
    //     <div className="basket__list-all-info-block">
    //         <div className="basket__list-item-block">
    //
    //             <label className="basket__label">
    //                 <input type="checkbox" className="basket__checkbox-input"
    //                 >
    //                     <span className="basket__checkbox-icon"></span>
    //             </label>
    //             <picture className="basket__picture">
    //                 <source srcSet="" type="image/avif">
    //                     <source srcSet="" type="image/webp">
    //                         <img className="basket__image-small"
    //                              src="https://muddy-substantial-gear.glitch.me/image/0217012835.jpg"
    //                              alt="" width="" height="">
    //             </picture>
    //         </div>
    //         <div className="basket__list-text-block">
    //             <p className="basket__list-text-main">
    //                 15.6" Игровой ноутбук ASUS G513IE-HN004T</p>
    //             <p className="basket__list-text-additional">
    //                 Цвет: черный
    //             </p>
    //             <p className="basket__list-text-additional">
    //                 Оперативная память: 16 ГБ
    //             </p>
    //         </div>
    //         <div className="basket__list-quantity-block">
    //             <button className="basket__minus-btn">−</button>
    //             <input type="hidden" className="basket__quantity-input">
    //                 <span className="basket__quantity-text">1</span>
    //             </input>
    //             <button className="basket__plus-btn">+</button>
    //         </div>
    //         <div className="basket__list-price-block">
    //             <div className="basket__list-price-block-new">
    //                 <span className="basket__item-new-price">109&nbsp;</span>
    //                 <span className="basket__item-new-price">090 ₽</span>
    //             </div>
    //             <div className="basket__list-price-block-old">
    //                 <span className="basket__item-old-price">140&nbsp;</span>
    //                 <span className="basket__item-old-price">590 ₽</span>
    //             </div>
    //             <p className="basket__credit-from">В кредит от ₽</p>
    //         </div>
    //         <div className="basket__trascan-block">
    //             <button className="basket__trashcan-btn">
    //                 <svg className="basket__trashcan-svg" xmlns="http://www.w3.org/2000/svg"
    //                      width="30" height="30" viewBox="0 0 30 30" fill="none">
    //                     <rect width="30" height="30" fill="white"/>
    //                     <path d="M19.0214 5.35355L19.1679
    //                                 5.5H19.375H23.25V7H6.75V5.5H10.625H10.8321L10.9786
    //                                  5.35355L12.0821 4.25H17.9179L19.0214
    //                                  5.35355ZM10 25.75C8.90114 25.75 8 24.8489
    //                                  8 23.75V9.25H22V23.75C22 24.8489 21.0989
    //                                  25.75 20 25.75H10Z" fill="#C9C9C9" stroke="#C9C9C9"/>
    //                 </svg>
    //             </button>
    //         </div>
    //     </div>
    // </li>
    
};