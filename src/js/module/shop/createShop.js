import {renderBlog} from "../blog/renderBlog.js";
import {createHeader, createFooter} from '../base/baseElems.js';
import {handlers} from "./handlers.js";
import {renderArticle} from '../article/renderArticle.js';

const createMain = (name, $) => {
    
    if (name === 'main') {
        $.app.insertAdjacentHTML('beforeend', `
            <main class="main">
                <h1 class="visually-hidden">Сайт онлайн магазина ShopOnline</h1>
            </main>
        `);
        $.main = $.app.querySelector('main');
        
    }
};

const createSection = (name, $) => {
    if (name === 'item') {
        $.main.insertAdjacentHTML('beforeend',
            `
                <section class="item" aria-label="Каталог товаров">
                    <h2 class="visually-hidden">товары и скидки</h2>
                    <div class="container item__container">
        
                        <a href="#" class="item__gallery item__gallery-notebook" aria-label="Распродажа ноутбуков"
                         >
                            <p class="item__text-notebook">
                                -50% на все ноутбуки</p>
                            <div class="item__timer timer"
                            data-timer-deadline="09/26/22 22:41"
                            >
                            </div>
                                <picture>
                                
                                <source srcset="img/item/timer.avif" type="image/avif">
                                <source srcset="img/item/timer.webp" type="image/webp">
                                    <img class="item__image-items" src="img/item/timer.jpg"
                                     alt="Распродажа ноутбуков" width="4096" height="2900">
                                </picture>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-book" aria-label="Книга"
                        >
                            <p class="item__text-book">
                                <span class="item__text-bold">Книга –</span> лучший подарок</p>
                                 <picture>
                                
                                <source srcset="img/item/1.avif" type="image/avif">
                                <source srcset="img/item/1.webp" type="image/webp">
                                    <img class="item__image-items" src="img/item/1.jpg"
                                     alt="Книга" width="500" height="400">
                                </picture>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-discount-bottom-left item__gallery-time"
                           aria-label="Скидки">
                            <p class="item__text-time">
                                Время скидок!
                            </p>
                                <picture>
                                
                                <source srcset="img/item/2.avif" type="image/avif">
                                <source srcset="img/item/2.webp" type="image/webp">
                                    <img class="item__image-items" src="img/item/2.jpg"
                                     alt="Скидки" width="500" height="400">
                                </picture>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-discount-top-left item__gallery-shoes"
                        aria-label="вторая пара кросовок в подарок">
                        <picture>
                        
                        <source srcset="img/item/3.avif" type="image/avif">
                        <source srcset="img/item/3.webp" type="image/webp">
                            <img class="item__image-shoes" src="img/item/3.jpg" alt="Обувь" width="420"
                            height="200">
                        </picture>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-second-pair" aria-label="Кросовки"
                         >
                            <p class=" item__text-second-pair">
                                Вторая пара кроссовок
                                <span class="item__text-big">в&nbsp;подарок!</span>
                            </p>
                                <picture>
                                
                                <source srcset="img/item/4.avif" type="image/avif">
                                <source srcset="img/item/4.webp" type="image/webp">
                                    <img class="item__image-items" src="img/item/4.jpg"
                                     alt="Кросовки" width="500" height="400">
                                </picture>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-gift-ideas" aria-label="Подарки"
                         >
                            <p class=" item__text-new-ideas">
                                Идеи новогодних подарков
                            </p>
                                <picture>
                                
                                <source srcset="img/item/5.avif" type="image/avif">
                                <source srcset="img/item/5.webp" type="image/webp">
                                    <img class="item__image-items" src="img/item/5.jpg"
                                     alt="Подарки" width="500" height="400">
                                </picture>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-discount-bottom-left
                        item__gallery-profitable-december"
                           aria-label="Техника">
                            <p class="item__text-profitable-december">
                                Выгодно в декабре!
                            </p>
                                <picture>
                                
                                <source srcset="img/item/6.avif" type="image/avif">
                                <source srcset="img/item/6.webp" type="image/webp">
                                    <img class="item__image-items" src="img/item/6.jpg"
                                     alt="Техника" width="500" height="400">
                                </picture>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-new-year"
                        aria-label="Украшения на новый год"
                         >
                            <p class="item__text-new-year">
                                Новогодние украшения
                            </p>
                                <picture>
                                
                                <source srcset="img/item/7.avif" type="image/avif">
                                <source srcset="img/item/7.webp" type="image/webp">
                                    <img class="item__image-items" src="img/item/7.jpg"
                                     alt="Украшения на новый год" width="1074" height="806">
                                </picture>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-discount-bottom-left item__gallery-dresses"
                           aria-label="Женская одежда"
                           >
                                <picture>
                                
                                <source srcset="img/item/8.avif" type="image/avif">
                                <source srcset="img/item/8.webp" type="image/webp">
                                    <img class="item__image-items" src="img/item/8.jpg"
                                     alt="Женская одежда" width="1100" height="810">
                                </picture>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-discount-top-left item__gallery-chemicals"
                           aria-label="Бытовая химия"
                           >
                            <p class="item__text-chemicals">
                                На бытовую химию
                            </p>
                                <picture>
                                
                                <source srcset="img/item/9.avif" type="image/avif">
                                <source srcset="img/item/9.webp" type="image/webp">
                                    <img class="item__image-items" src="img/item/9.jpg"
                                     alt="Бытовая химия" width="500" height="400">
                                </picture>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-ny-toys"
                         aria-label="Елочные украшения"
                          >
                        <picture>
                            <source srcset="img/item/10.avif" type="image/avif">
                            <source srcset="img/item/10.webp" type="image/webp">
                            <img class="item__image-ny-toys" src="img/item/10.jpg"
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
        renderCards($);
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
    
    if ($.page === 'shop') {
        renderShop($);
        handlers($);
    }
    
    if ($.page === 'blog') {
        renderBlog($);
        return;
    }
    
    if ($.page === 'article') {
        renderArticle($);
    }
};

export const renderCards = async ($) => {
    const cards = document.querySelector('.wholesale__cards');
    
    const response = await fetch('db.json');
    if (response.ok) {
        const json = await response.json();
        
        json.forEach((card, index) => {
            const count = index + 1;
            cards.insertAdjacentHTML('beforeend',
                `
                    <li class="card">
                        <a href="#" class="card__link " aria-label="${card.name}">
                            <picture class="card__figure ${card.discountClass}">
                                <source srcset="img/wholesale/photo${count}.avif" type="image/avif">
                                <source srcset="img/wholesale/photo${count}.webp" type="image/webp">
                                <img loading="lazy" class="card__image" src="img/wholesale/photo${count}.png"
                                      alt="${card.name}" width="300" height="400">
                            </picture>
                            <div class="card__price-block"><span class="card__new-price">${card.newPrice} ₽</span>
                                <span class="card__old-price">${card.newPrice * 2} ₽</span>
                            </div>
                            <p class="card__item-text">${card.name}</p>
                        </a>
                    </li>
                    `);
        });
    }
};