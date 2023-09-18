import{loadItemsHandler}from"./handleLoadArticle.js";export const createBreadCrumbs=e=>{const n=document.createElement("div");n.classList.add("breadcrumbs","bc"),n.insertAdjacentHTML("beforeend",'\n        <div class="bc__container">\n            <nav class="bc__navigation">\n                <ul class="bc__bread-crumbs">\n                </ul>\n            </nav>\n        </div>\n    ');const s=n.querySelector(".bc__bread-crumbs");for(const{url:n,name:a}of e)s.insertAdjacentHTML("beforeend",`\n            <li class="bc__item"><a class="bc__link" href="${n}">${a}</a>\n                <svg class="bc__nav-arrow">\n                    <use href="./img/article/nav-arrow.svg#nav-arrow"></use>\n                </svg>\n            </li>\n        `);return n};const createArticleMain=e=>{const n=document.createElement("main");return n.className="main",n.append(e),n.insertAdjacentHTML("beforeend",'\n        <section class="bc__section">\n            <div class="bc__container">\n                <div class="bc__grid-container">\n                    <div class="bc__hero">\n                        <h1 class="bc__title">здесь название статьи</h1>\n                        <p class="bc__text">Материала для обуви лучше натуральной кожи все ещё не придумали.\n                            Качественную кожу очень приятно носить, она идеально ложится по ноге,\n                            в нужных местах немного растягивается.\n                            В кожаной обуви, если она соответствует погоде, создаётся хороший микроклимат –\n                            ноги не мёрзнут, не потеют, и чувствуют себя очень комфортно. Неудивительно,\n                            что по статистике больше 60% покупателей выбирает обувь именно из гладкой\n                            натуральной кожи. Вдобавок кожа практична и не требует трудоёмкого ухода.\n                        </p>\n                        <div class="bc__subblock">\n                            <a class="bc__backlink" href="blog.html">\n                                <svg class="bc__left-arrow" xmlns="http://www.w3.org/2000/svg">\n                                    <use href="./img/blog/arrows.svg#left"></use>\n                                </svg>\n                                <span class="bc__link-text">К списку статей</span>\n                            </a>\n                            <div class="bc__about-info">\n                                <span class="bc__author"></span>\n                                <div class="bc__reviews-subblock">\n                                    <div class="article__datetime">\n                                        <span class="article__date">22.04.2023,</span>\n                                        <span class="article__time">15:15</span>\n                                    </div>\n\n                                    <div class="article__views-comments">\n                                <span class="article__text-block">\n                                <svg class="article__icon" xmlns="http://www.w3.org/2000/svg">\n                                    <use href="./img/blog/views-chat.svg#views"></use>\n                                </svg>\n                                    1.1K</span>\n                                        <span class="article__text-block">\n                                <svg class="article__icon" xmlns="http://www.w3.org/2000/svg">\n                                    <use href="./img/blog/views-chat.svg#chat"></use>\n                                </svg>\n                                    150</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <aside class="bc__adv">\n                        <ul class="bc__adv-list">\n                            <li class="bc__adv-item">\n                                <figure class="bc__adv-image-block">\n                                    <figcaption class="bc__image-text-block">\n                                        <span class="bc__image-text-big">Горящие туры в Стамбул от 20 000 руб.</span>\n                                        <span class="bc__image-text-small">Окунись в настоящую восточную сказку</span>\n                                    </figcaption>\n                                </figure>\n                            </li>\n                            <li class="bc__adv-item">\n                                <figure class="bc__adv-image-block">\n                                    <figcaption class="bc__image-text-block">\n                                        <span class="bc__image-text-big">Новый RENAULT DUSTER</span>\n                                        <span class="bc__image-text-small">Легендарный внедорожник в новом дизайне</span>\n                                    </figcaption>\n                                </figure>\n                            </li>\n                        </ul>\n                    </aside>\n                </div>\n            </div>\n        </section>\n    '),n};export const createMarkup=e=>{const n=document.querySelector(e.selector),s=createBreadCrumbs(e.breadCrumbs.articleInfo),a=createArticleMain(s);n.append(a);return{breadCrumbsTitle:s.querySelector(".bc__item:nth-child(3)"),title:a.querySelector(".bc__title"),text:a.querySelector(".bc__text"),author:a.querySelector(".bc__author"),articleDate:a.querySelector(".article__date"),articleTime:a.querySelector(".article__time")}};export const createArticle=e=>{const n=createMarkup(e);loadItemsHandler(n)};
//# sourceMappingURL=../../../maps/module/article/createArticle.js.map
