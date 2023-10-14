import {renderBlog} from "../blog/renderBlog.js";
import {createHeader, createFooter, createMain, iterateOverCards} from '../base/baseElems.js';
import {handlers} from "./handlers.js";
import {renderArticle} from '../article/renderArticle.js';

import {getGoodsWithDiscount} from "./fetch.js";
import {renderCategory} from "./category/renderCategory.js";
import {renderCard} from "./card/renderCard.js";
import {renderBasket} from "./basket/renderBasket.js";
import {renderSearch} from "../search/renderSearch.js";


export const createSection = (name, $, categoryName) => {
    if (name === 'item') {
        $.main.insertAdjacentHTML('beforeend',
            `
                <section class="item" aria-label="Каталог товаров">
                    <h2 class="visually-hidden">товары и скидки</h2>
                    <div class="container item__container">
        
                        <a href="./" class="item__gallery item__gallery-notebook"
                        title="ноутбуки - всегда отличный подарок"
                         >
                            <p class="item__text-notebook">
                                -50% на все ноутбуки</p>
                            <div class="item__timer timer"
                            data-timer-deadline="09/26/22 22:41"
                            >
                            </div>
                                <picture>
                                
                                <source srcset="./img/item/timer.avif" type="image/avif">
                                <source srcset="./img/item/timer.webp" type="image/webp">
                                    <img class="item__image-items" src="./img/item/timer.jpg"
                                     alt="Распродажа ноутбуков" width="4096" height="2900">
                                </picture>
                        </a>
        
                        <a href="./" class="item__gallery item__gallery-book"
                        title="Книга – лучший подарок"
                        >
                            <p class="item__text-book">
                                <span class="item__text-bold">Книга –</span> лучший подарок</p>
                                 <picture>
                                
                                <source srcset="./img/item/1.avif" type="image/avif">
                                <source srcset="./img/item/1.webp" type="image/webp">
                                    <img class="item__image-items" src="./img/item/1.jpg"
                                     alt="Книга" width="500" height="400">
                                </picture>
                        </a>
        
                        <a href="./" class="item__gallery item__gallery-discount-bottom-left item__gallery-time"
                           title="Время скидок!">
                            <p class="item__text-time">
                                Время скидок!
                            </p>
                                <picture>
                                
                                <source srcset="./img/item/2.avif" type="image/avif">
                                <source srcset="./img/item/2.webp" type="image/webp">
                                    <img loading="lazy"  class="item__image-items" src="./img/item/2.jpg"
                                     alt="Скидки" width="500" height="400">
                                </picture>
                        </a>
        
                        <a href="./" class="item__gallery item__gallery-discount-top-left item__gallery-shoes"
                        title="скидки на обувь!">
                        <picture>
                        
                        <source srcset="./img/item/3.avif" type="image/avif">
                        <source srcset="./img/item/3.webp" type="image/webp">
                            <img loading="lazy"  class="item__image-shoes" src="./img/item/3.jpg" alt="Обувь" width="420"
                            height="200">
                        </picture>
                        </a>
        
                        <a href="./" class="item__gallery item__gallery-second-pair"
                        title="Вторая пара кроссовок в подарок!">
                            <p class=" item__text-second-pair">
                                Вторая пара кроссовок
                                <span class="item__text-big">в&nbsp;подарок!</span>
                            </p>
                                <picture>
                                
                                <source srcset="./img/item/4.avif" type="image/avif">
                                <source srcset="./img/item/4.webp" type="image/webp">
                                    <img loading="lazy"  class="item__image-items" src="./img/item/4.jpg"
                                     alt="Кросовки" width="500" height="400">
                                </picture>
                        </a>
        
                        <a href="./" class="item__gallery item__gallery-gift-ideas"
                         title="Идеи новогодних подарков"
                         >
                            <p class=" item__text-new-ideas">
                                Идеи новогодних подарков
                            </p>
                                <picture>
                                
                                <source srcset="./img/item/5.avif" type="image/avif">
                                <source srcset="./img/item/5.webp" type="image/webp">
                                    <img loading="lazy"  class="item__image-items" src="./img/item/5.jpg"
                                     alt="Подарки" width="500" height="400">
                                </picture>
                        </a>
        
                        <a href="./" class="item__gallery item__gallery-discount-bottom-left
                        item__gallery-profitable-december"
                           title="Выгодно в декабре!">
                            <p class="item__text-profitable-december">
                                Выгодно в декабре!
                            </p>
                                <picture>
                                
                                <source srcset="./img/item/6.avif" type="image/avif">
                                <source srcset="./img/item/6.webp" type="image/webp">
                                    <img loading="lazy"  class="item__image-items" src="./img/item/6.jpg"
                                     alt="Техника" width="500" height="400">
                                </picture>
                        </a>
        
                        <a href="./" class="item__gallery item__gallery-new-year"
                        title="НОВОГОДНИЕ УКРАШЕНИЯ"
                         >
                            <p class="item__text-new-year">
                                Новогодние украшения
                            </p>
                                <picture>
                                
                                <source srcset="./img/item/7.avif" type="image/avif">
                                <source srcset="./img/item/7.webp" type="image/webp">
                                    <img loading="lazy"  class="item__image-items" src="./img/item/7.jpg"
                                     alt="Украшения на новый год" width="1074" height="806">
                                </picture>
                        </a>
        
                        <a href="./" class="item__gallery item__gallery-discount-bottom-left item__gallery-dresses"
                           title="Женская одежда"
                           >
                                <picture>
                                
                                <source srcset="./img/item/8.avif" type="image/avif">
                                <source srcset="./img/item/8.webp" type="image/webp">
                                    <img loading="lazy"  class="item__image-items" src="./img/item/8.jpg"
                                     alt="Женская одежда" width="1100" height="810">
                                </picture>
                        </a>
        
                        <a href="./" class="item__gallery item__gallery-discount-top-left item__gallery-chemicals"
                           title="На бытовую химию"
                           >
                            <p class="item__text-chemicals">
                                На бытовую химию
                            </p>
                                <picture>
                                
                                <source srcset="./img/item/9.avif" type="image/avif">
                                <source srcset="./img/item/9.webp" type="image/webp">
                                    <img loading="lazy"  class="item__image-items" src="./img/item/9.jpg"
                                     alt="Бытовая химия" width="500" height="400">
                                </picture>
                        </a>
        
                        <a href="./" class="item__gallery item__gallery-ny-toys"
                         title="Елочные украшения"
                          >
                        <picture>
                            <source srcset="./img/item/10.avif" type="image/avif">
                            <source srcset="./img/item/10.webp" type="image/webp">
                            <img loading="lazy"  class="item__image-ny-toys" src="./img/item/10.jpg"
                            alt="Елочные украшения"
                            width="500" height="333">
                        </picture>
                        </a>
                    </div>
                </section>
            `);
        return;
    }
    if (name === 'wholesale') {
        $.main.insertAdjacentHTML('beforeend',
            `
            <section class="wholesale" aria-label="Распродажа">
            <h2 class="visually-hidden">Распродажа</h2>
            <div class="container">
                <h3 class="wholesale__title">Это выгодно!</h3>
                <ul class="wholesale__cards">
                </ul>
            </div>
        </section>
            `);
        renderCards($, getGoodsWithDiscount).then(() => {
        });
        return;
    }
};

const renderShop = ($) => {
    $.shop.forEach(({type, name}) => {
        if (type === $.types.header) {
            createHeader(name, $);
            return;
        }
        
        if (type === $.types.main) {
            createMain(name, $);
            return;
        }
        
        if (type === $.types.section) {
            createSection(name, $);
            return;
        }
        
        if (type === $.types.footer) {
            createFooter(name, $);
            return;
        }
    });
};

export const renderElement = ($) => {
    // todo here we define what page we are goin to
    if ($.page === 'shop') {
        renderShop($);
        handlers($);
    }
    
    if ($.page === 'blog') {
        renderBlog($);
    }
    
    if ($.page === 'article') {
        renderArticle($);
    }
    
    if ($.page === 'category') {
        renderCategory($);
    }
    
    if ($.page === 'card') {
        renderCard($);
    }
    
    if ($.page === 'cart') {
        renderBasket($);
    }
    
    if ($.page === 'search') {
        renderSearch($);
    }
};

export const renderCards = async ($, callback) => {
    const cards = document.querySelector('.wholesale__cards');
    
    
    const itemsPromise = callback($);
    const cardAfterStyle = document.createElement("style");
    itemsPromise.then(source => {
        
        if (source.data && source.data.length === 0) {
            $.app.querySelector('.wholesale').style.display = 'none';
            return;
        }
        const items = source.data.slice(0, 6);
        
        iterateOverCards(cards, $, cardAfterStyle, items);
    });
};