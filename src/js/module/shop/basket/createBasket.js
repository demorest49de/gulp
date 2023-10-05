import {getItemById} from "../fetch.js";

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

export const createSectionBasket = (name, $) => {
    
    $.main.insertAdjacentHTML('beforeend',
        `
    <section class="basket" aria-label="Корзина">
    <h2 class="visually-hidden">Корзина</h2>
    <div class="container basket__container">
        
        <div class="basket__list">
            <div class="basket__title-block">
                <h3 class="basket__title">Корзина</h3>
                <p class="basket__cart-count">2</p>
            </div>
            <div class="basket__list-manage-block">
                <div class="basket__choose-all">
                    <div class="basket__checkbox-block">
                        <input type="checkbox" class="basket__checkbox" style="display: none">
                        <svg xmlns="http://www.w3.org/2000/svg"
                        width="24" class="basket__checkbox-checked-svg" height="24" viewBox="0 0 14 14" fill="none">
                            <rect width="24" height="24" fill="#3670C7"/>
                            <path d="M5.25006 9.45L2.80007 7L1.9834 7.81666L5.25006 11.0833L12.2501 4.08333L11.4334 3.26666L5.25006 9.45Z" fill="white"/>
                        </svg>
                    </div>
                    <p class="basket__choose-all-text">Выбрать все</p>
                </div>
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
                <li class="basket__list-item">
                    <div class="basket__list-item-block">
                        <div class="basket__checkbox-block">
                            <input type="checkbox" class="basket__checkbox" style="display: none">
                            <svg xmlns="http://www.w3.org/2000/svg"
                            width="24" class="basket__checkbox-checked-svg" height="24" viewBox="0 0 14 14" fill="none">
                                <rect width="24" height="24" fill="#3670C7"/>
                                <path d="M5.25006 9.45L2.80007 7L1.9834 7.81666L5.25006 11.0833L12.2501 4.08333L11.4334 3.26666L5.25006 9.45Z" fill="white"/>
                            </svg>
                        </div>
                        <picture  class="basket__picture">
                            <source srcset="" type="image/avif">
                            <source srcset="" type="image/webp">
                                <img class="basket__image-small"
                                 src="" alt="" width="" height="">
                        </picture>
                    </div>
                    <div class="basket__list-all-info-block">
                        <div class="basket__list-text-block">
                            <p class="basket__list-text-main">
                                15.6" Игровой ноутбук ASUS G513IE-HN004T</p>
                            <p class="basket__list-text-additional">
                                Цвет: черный
                            </p>
                            <p class="basket__list-text-additional">
                                Оперативная память: 16 ГБ
                            </p>
                        </div>
                        <div class="basket__list-quantity-block">
<!--                            <svg xmlns="http://www.w3.org/2000/svg"-->
<!--                            class="basket__item-svg"-->
<!--                                width="36" height="36" viewBox="0 0 36 36" fill="none">-->
<!--                                <circle cx="18" cy="18" r="17.5" fill="white" stroke="#E8E8E8"/>-->
<!--                                <text x="13" y="24.5" class="basket__minus-svg-text">−</text>-->
<!--                            </svg>-->
                                <button class="basket__minus-btn">−</button>
                            <input type="hidden" class="basket__quantity-input">1</input>
                                <button class="basket__plus-btn">+</button>
<!--                            <svg xmlns="http://www.w3.org/2000/svg"-->
<!--                            class="basket__item-svg"-->
<!--                                width="36" height="36" viewBox="0 0 36 36" fill="none">-->
<!--                                <circle cx="18" cy="18" r="17.5" fill="white" stroke="#E8E8E8"/>-->
<!--                                <text x="13" y="24.5" class="basket__plus-svg-text">+</text>-->
<!--                            </svg>-->
                        </div>
                        
                        <div class="basket__list-price-block">
                            <div class="basket__list-price-block-new">
                                <span class="basket__item-new-price">109&nbsp;</span>
                                <span class="basket__item-new-price">090 ₽</span>
                            </div>
                            <div class="basket__list-price-block-old">
                                <span class="basket__item-old-price">140&nbsp;</span>
                                <span class="basket__item-old-price">590 ₽</span>
                            </div>
                            <p class="basket__credit-from">В кредит от  ₽</p>
                        </div>
                    </div>
                </li>
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
                    <div class="basket__checkbox-block">
                        <input type="checkbox" class="basket__checkbox" style="display: none">
                        <svg xmlns="http://www.w3.org/2000/svg"
                        width="24" class="basket__checkbox-checked-svg" height="24" viewBox="0 0 14 14" fill="none">
                            <rect width="24" height="24" fill="#3670C7"/>
                            <path d="M5.25006 9.45L2.80007 7L1.9834 7.81666L5.25006 11.0833L12.2501 4.08333L11.4334 3.26666L5.25006 9.45Z" fill="white"/>
                        </svg>
                    </div>
                    <div>
                        <span class="basket__agree-text">
                        Согласен с условиями <a class="basket__agree-link">
                        правил пользования торговой площадкой
                         и правилами возврата
                        </a></span>
                    </div>
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
    if(screen.width <= 666){
        const value = $.main.querySelector('.basket__dely-block:nth-child(3) .basket__dely-value');
        value.textContent = 'Бесплатная доставка';
    }
    // getItemById($, cardId).then((data) => {
    //     console.log(' : ', data.data);
    //     const item = data.data;
    //
    //     const newPrice = item.price.toString();
    //     let oldPrice = NaN;
    //     if (item.discount === 0) {
    //         oldPrice = (Math.ceil(item.price * 1.2)).toString();
    //     } else {
    //         oldPrice = (Math.ceil(item.price - ((item.price * item.discount) / 100))).toString();
    //
    //     }
    //     console.log(' : ', oldPrice);
    //     const {firstPart: firstNew, lastPart: lastNew} = calculateDepth(newPrice);
    //     const {firstPart: firstOld, lastPart: lastOld} = calculateDepth(oldPrice);
    //
    //     const creditfrom = Math.ceil(item.price - (item.price / 1.2));
    //     console.log(' : ', creditfrom);
    // });
};