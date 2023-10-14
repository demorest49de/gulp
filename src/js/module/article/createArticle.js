import {loadItemsHandler} from './handleLoadArticle.js';
import {createBreadCrumbs} from '../base/breadcrumbs.js';


const createArticleContent = (breadCrumbs) => {
    const main = document.createElement('main');
    main.className = 'main';
    main.append(breadCrumbs);
    main.insertAdjacentHTML('beforeend', `
        <section class="article">
            <div class="container article__container">
                <div class="article__hero">
                    <h1 class="article__title">здесь название статьи</h1>
                    <p class="article__text">Материала для обуви лучше натуральной кожи все ещё не придумали.
                        Качественную кожу очень приятно носить, она идеально ложится по ноге,
                        в нужных местах немного растягивается.
                        В кожаной обуви, если она соответствует погоде, создаётся хороший микроклимат –
                        ноги не мёрзнут, не потеют, и чувствуют себя очень комфортно. Неудивительно,
                        что по статистике больше 60% покупателей выбирает обувь именно из гладкой
                        натуральной кожи. Вдобавок кожа практична и не требует трудоёмкого ухода.
                    </p>
                    <aside class="article__adv adv">
                        <ul class="adv__list">
                            <li class="adv__item">
                                <a class="adv__link" href="./"
                                title="Горящие туры в Стамбул от 20 000 руб.">
                                <div class="adv__text-block">
                                    <p class="adv__text-big">Горящие туры в Стамбул от 20 000 руб.</p>
                                    <p class="adv__text-small">Окунись в настоящую восточную сказку</p>
                                    </div>
                                    <picture class="adv__picture">
                                    <source srcset="./img/article/banner/turkey.avif" type="image/avif">
                                    <source srcset="./img/article/banner/turkey.webp" type="image/webp">
                                        <img class="adv__image"
                                         src="./img/article/banner/turkey.jpg" alt="Турция" width="532" height="328">
                                    </picture>
                                </a>
                            </li>
                            <li class="adv__item">
                                <a class="adv__link" href="./"
                                title="Новый RENAULT DUSTER">
                                <div class="adv__text-block">
                                    <p class="adv__text-big">Новый RENAULT DUSTER</p>
                                    <p class="adv__text-small">Легендарный внедорожник в новом дизайне</p>
                                </div>
                                    <picture class="adv__picture">
                                    
                                    <source srcset="./img/article/banner/reno.avif" type="image/avif">
                                    <source srcset="./img/article/banner/reno.webp" type="image/webp">
                                        <img class="adv__image"
                                         src="./img/article/banner/reno.jpg" alt="Рено" width="532" height="328">
                                    </picture>
                                </a>
                            </li>
                        </ul>
                    </aside>
                    <div class="article__subblock">
                        <a class="article__backlink" href="./blog.html">
                            <svg class="article__left-arrow" xmlns="http://www.w3.org/2000/svg">
                                <use href="./svg/blog/arrows.svg#left"></use>
                            </svg>
                            <span class="article__link-text">К списку статей</span>
                        </a>
                        <div class="article__about-info">
                            <span class="article__author"></span>
                            <div class="article__reviews-subblock">
                                <div class="article__datetime">
                                    <span class="article__date">22.04.2023,</span>
                                    <span class="article__time">15:15</span>
                                </div>

                                <div class="article__views-comments">
                            <span class="article__text-block">
                            <svg class="article__icon" xmlns="http://www.w3.org/2000/svg">
                                <use href="./svg/blog/views-chat.svg#views"></use>
                            </svg>
                                1.1K</span>
                                    <span class="article__text-block">
                            <svg class="article__icon" xmlns="http://www.w3.org/2000/svg">
                                <use href="./svg/blog/views-chat.svg#chat"></use>
                            </svg>
                                150</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `);
    return main;
};

export const articleHandler = ($) => {
    const app = document.querySelector($.selector);
    const breadCrumbs = createBreadCrumbs($.breadCrumbs.articleInfo);
    const main = createArticleContent(breadCrumbs);
    app.append(main);
    const bcLink = breadCrumbs.querySelector('.bc__item:nth-child(3) .bc__link');
    const title = main.querySelector('.article__title');
    const text = main.querySelector('.article__text');
    const author = main.querySelector('.article__author');
    const articleDate = main.querySelector('.article__date');
    const articleTime = main.querySelector('.article__time');
    const articleVars = {
        bcLink,
        title,
        text,
        author,
        articleDate,
        articleTime
    };
    return articleVars;
};

export const createArticle = ($) => {
    const vars = articleHandler($);
    loadItemsHandler(vars);
};