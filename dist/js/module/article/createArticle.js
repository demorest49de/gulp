import {loadItemsHandler} from './handleLoadArticle.js';

export const createBreadCrumbs = (bc) => {
    const breadCrumbs = document.createElement('div');
    breadCrumbs.classList.add('breadcrumbs', 'bc');
    
    breadCrumbs.insertAdjacentHTML('beforeend', `
        <div class="bc__container">
            <nav class="bc__navigation">
                <ul class="bc__bread-crumbs">
                </ul>
            </nav>
        </div>
    `);
    const ul = breadCrumbs.querySelector('.bc__bread-crumbs');
    
    for (const {url, name} of bc) {
        ul.insertAdjacentHTML('beforeend',
            `
            <li class="bc__item"><a class="bc__link" href="${url}">${name}</a>
                <svg class="bc__nav-arrow">
                    <use href="./img/article/nav-arrow.svg#nav-arrow"></use>
                </svg>
            </li>
        `);
    }
    
    return breadCrumbs;
};

const createArticleMain = (breadCrumbs) => {
    const main = document.createElement('main');
    main.className = 'main';
    main.append(breadCrumbs);
    main.insertAdjacentHTML('beforeend', `
        <section class="bc__section">
            <div class="bc__container">
                <div class="bc__grid-container">
                    <div class="bc__hero">
                        <h1 class="bc__title">здесь название статьи</h1>
                        <p class="bc__text">Материала для обуви лучше натуральной кожи все ещё не придумали.
                            Качественную кожу очень приятно носить, она идеально ложится по ноге,
                            в нужных местах немного растягивается.
                            В кожаной обуви, если она соответствует погоде, создаётся хороший микроклимат –
                            ноги не мёрзнут, не потеют, и чувствуют себя очень комфортно. Неудивительно,
                            что по статистике больше 60% покупателей выбирает обувь именно из гладкой
                            натуральной кожи. Вдобавок кожа практична и не требует трудоёмкого ухода.
                        </p>
                        <div class="bc__subblock">
                            <a class="bc__backlink" href="blog.html">
                                <svg class="bc__left-arrow" xmlns="http://www.w3.org/2000/svg">
                                    <use href="./img/blog/arrows.svg#left"></use>
                                </svg>
                                <span class="bc__link-text">К списку статей</span>
                            </a>
                            <div class="bc__about-info">
                                <span class="bc__author"></span>
                                <div class="bc__reviews-subblock">
                                    <div class="article__datetime">
                                        <span class="article__date">22.04.2023,</span>
                                        <span class="article__time">15:15</span>
                                    </div>

                                    <div class="article__views-comments">
                                <span class="article__text-block">
                                <svg class="article__icon" xmlns="http://www.w3.org/2000/svg">
                                    <use href="./img/blog/views-chat.svg#views"></use>
                                </svg>
                                    1.1K</span>
                                        <span class="article__text-block">
                                <svg class="article__icon" xmlns="http://www.w3.org/2000/svg">
                                    <use href="./img/blog/views-chat.svg#chat"></use>
                                </svg>
                                    150</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <aside class="bc__adv">
                        <ul class="bc__adv-list">
                            <li class="bc__adv-item">
                                <figure class="bc__adv-image-block">
                                    <figcaption class="bc__image-text-block">
                                        <span class="bc__image-text-big">Горящие туры в Стамбул от 20 000 руб.</span>
                                        <span class="bc__image-text-small">Окунись в настоящую восточную сказку</span>
                                    </figcaption>
                                </figure>
                            </li>
                            <li class="bc__adv-item">
                                <figure class="bc__adv-image-block">
                                    <figcaption class="bc__image-text-block">
                                        <span class="bc__image-text-big">Новый RENAULT DUSTER</span>
                                        <span class="bc__image-text-small">Легендарный внедорожник в новом дизайне</span>
                                    </figcaption>
                                </figure>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>
        </section>
    `);
    return main;
};

export const createMarkup = ($) => {
    const app = document.querySelector($.selector);
    const breadCrumbs = createBreadCrumbs($.breadCrumbs.articleInfo);
    const main = createArticleMain(breadCrumbs);
    app.append(main);
    const breadCrumbsTitle = breadCrumbs.querySelector('.bc__item:nth-child(3)');
    const title = main.querySelector('.bc__title');
    const text = main.querySelector('.bc__text');
    const author = main.querySelector('.bc__author');
    const articleDate = main.querySelector('.article__date');
    const articleTime = main.querySelector('.article__time');
    const vars = {
        breadCrumbsTitle,
        title,
        text,
        author,
        articleDate,
        articleTime
    };
    return vars;
};

export const createArticle = ($) => {
    const vars = createMarkup($);
    loadItemsHandler(vars);
};