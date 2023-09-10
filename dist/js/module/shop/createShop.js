import {renderBlog} from "../blog/renderBlog.js";
import {createHeader, createFooter} from '../base/baseElems.js';
import {handlers} from "./handlers.js";
import {renderArticle} from '../article/renderArticle.js'
import {setCustomPaddings} from "../base/customPaddings.js";

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
        
                        <a href="#" class="item__gallery item__gallery-notebook" aria-label="Распродажа ноутбуков">
                            <p class="item__text-notebook">
                                -50% на все ноутбуки</p>
                            <div class="item__timer timer" data-timer-deadline="04/26/23 22:41">
                            </div>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-book" aria-label="Книга">
                            <p class="item__text-book">
                                <span class="item__text-bold">Книга –</span> лучший подарок</p>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-discount-bottom-left item__gallery-time"
                           aria-label="Скидки">
                            <p class="item__text-time">
                                Время скидок!
                            </p>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-discount-top-left item__gallery-shoes"
                        aria-label="вторая пара кросовок в подарок">
                            <img class="item__image-shoes" src="img/item/3.jpg" alt="Обувь">
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-second-pair" aria-label="Кросовки">
                            <p class=" item__text-second-pair">
                                Вторая пара кроссовок
                                <span class="item__text-big">в&nbsp;подарок!</span>
                            </p>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-gift-ideas" aria-label="Подарки">
                            <p class=" item__text-new-ideas">
                                Идеи новогодних подарков
                            </p>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-discount-bottom-left item__gallery-profitable-december"
                           aria-label="Техника">
                            <p class=" item__text-profitable-december">
                                Выгодно в декабре!
                            </p>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-new-year" aria-label="Украшения на новый год">
                            <p class="item__text-new-year">
                                Новогодние украшения
                            </p>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-discount-bottom-left item__gallery-dresses"
                           aria-label="Одежда">
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-discount-top-left item__gallery-chemicals"
                           aria-label="Бытовая химия">
                            <p class="item__text-chemicals">
                                На бытовую химию
                            </p>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-ny-toys" aria-label="Елочные украшения">
                            <img class="item__image-ny-toys" src="img/item/10.jpg" alt="Елочные украшения">
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
        renderCards();
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
        // setTimeout(() => {
        //     window.scrollTo({top: (document.documentElement.scrollHeight), behavior: 'smooth'});
        // }, 1000);
    }
    
    if ($.page === 'blog') {
        renderBlog($);
        return;
    }
    
    if ($.page === 'article') {
        renderArticle($);
    }
};

export const renderCards = async () => {
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
                            <figure class="card__figure ${card.discountClass}">
                                <img class="card__image" src="img/wholesale/photo${count}.png"
                                                              alt="${card.name}"></figure>
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