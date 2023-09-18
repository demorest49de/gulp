import{renderBlog}from"../blog/renderBlog.js";import{createHeader,createFooter}from"../base/baseElems.js";import{handlers}from"./handlers.js";import{renderArticle}from"../article/renderArticle.js";const createMain=(e,a)=>{"main"===e&&(a.app.insertAdjacentHTML("beforeend",'\n            <main class="main">\n                <h1 class="visually-hidden">Сайт онлайн магазина ShopOnline</h1>\n            </main>\n        '),a.main=a.app.querySelector("main"))},createSection=(e,a)=>{if("item"!==e)return"wholesale"===e?(a.main.insertAdjacentHTML("beforeend",'\n            <section class="wholesale" aria-label="Распродажа">\n            <h2 class="visually-hidden">Распродажа</h2>\n            <div class="container">\n                <h3 class="wholesale__title">Это выгодно!</h3>\n                <ul class="wholesale__cards">\n                </ul>\n            </div>\n        </section>\n            '),void renderCards(a)):void 0;a.main.insertAdjacentHTML("beforeend",`\n                <section class="item" aria-label="Каталог товаров">\n                    <h2 class="visually-hidden">товары и скидки</h2>\n                    <div class="container item__container">\n        \n                        <a href="#" class="item__gallery item__gallery-notebook" aria-label="Распродажа ноутбуков"\n                         tabindex="${a.tabIndex=a.tabIndex+1}">\n                            <p class="item__text-notebook">\n                                -50% на все ноутбуки</p>\n                            <div class="item__timer timer"\n                            data-timer-deadline="09/26/22 22:41"\n                            >\n                            </div>\n\x3c!--                            //added picture with source and img for google page speed rating and testing. maybe--\x3e\n\x3c!--                            //deleted in the nearest future--\x3e\n                                <picture>\n                                \n                                <source srcset="img/item/timer.avif" type="image/avif">\n                                <source srcset="img/item/timer.webp" type="image/webp">\n                                    <img class="item__image-notebook" src="img/item/timer.jpg"\n                                     alt="Распродажа ноутбуков" width="4100" height="2900">\n                                </picture>\n                        </a>\n        \n                        <a href="#" class="item__gallery item__gallery-book" aria-label="Книга"\n                        tabindex="${a.tabIndex=a.tabIndex+1}">\n                            <p class="item__text-book">\n                                <span class="item__text-bold">Книга –</span> лучший подарок</p>\n                        </a>\n        \n                        <a href="#" class="item__gallery item__gallery-discount-bottom-left item__gallery-time"\n                         tabindex="${a.tabIndex=a.tabIndex+1}"\n                           aria-label="Скидки">\n                            <p class="item__text-time">\n                                Время скидок!\n                            </p>\n                        </a>\n        \n                        <a href="#" class="item__gallery item__gallery-discount-top-left item__gallery-shoes"\n                         tabindex="${a.tabIndex=a.tabIndex+1}"\n                        aria-label="вторая пара кросовок в подарок">\n                        <picture>\n                        \n                        <source srcset="img/item/3.avif" type="image/avif">\n                        <source srcset="img/item/3.webp" type="image/webp">\n                            <img class="item__image-shoes" src="img/item/3.jpg" alt="Обувь" width="420"\n                            height="200">\n                        </picture>\n                        </a>\n        \n                        <a href="#" class="item__gallery item__gallery-second-pair" aria-label="Кросовки"\n                         tabindex="${a.tabIndex=a.tabIndex+1}">\n                            <p class=" item__text-second-pair">\n                                Вторая пара кроссовок\n                                <span class="item__text-big">в&nbsp;подарок!</span>\n                            </p>\n                        </a>\n        \n                        <a href="#" class="item__gallery item__gallery-gift-ideas" aria-label="Подарки"\n                         tabindex="${a.tabIndex=a.tabIndex+1}">\n                            <p class=" item__text-new-ideas">\n                                Идеи новогодних подарков\n                            </p>\n                        </a>\n        \n                        <a href="#" class="item__gallery item__gallery-discount-bottom-left\n                        item__gallery-profitable-december" tabindex="${a.tabIndex=a.tabIndex+1}"\n                           aria-label="Техника">\n                            <p class=" item__text-profitable-december">\n                                Выгодно в декабре!\n                            </p>\n                        </a>\n        \n                        <a href="#" class="item__gallery item__gallery-new-year"\n                        aria-label="Украшения на новый год" tabindex="${a.tabIndex=a.tabIndex+1}">\n                            <p class="item__text-new-year">\n                                Новогодние украшения\n                            </p>\n                        </a>\n        \n                        <a href="#" class="item__gallery item__gallery-discount-bottom-left item__gallery-dresses"\n                           aria-label="Одежда" tabindex="${a.tabIndex=a.tabIndex+1}">\n                        </a>\n        \n                        <a href="#" class="item__gallery item__gallery-discount-top-left item__gallery-chemicals"\n                           aria-label="Бытовая химия" tabindex="${a.tabIndex=a.tabIndex+1}">\n                            <p class="item__text-chemicals">\n                                На бытовую химию\n                            </p>\n                        </a>\n        \n                        <a href="#" class="item__gallery item__gallery-ny-toys"\n                         aria-label="Елочные украшения" tabindex="${a.tabIndex=a.tabIndex+1}">\n                        <picture>\n                            <source srcset="img/item/10.avif" type="image/avif">\n                            <source srcset="img/item/10.webp" type="image/webp">\n                            <img class="item__image-ny-toys" src="img/item/10.jpg"\n                            alt="Елочные украшения"\n                            width="200" height="200">\n                        </picture>\n                        </a>\n                    </div>\n                </section>\n            `)},renderShop=e=>{e.shop.forEach((({type:a,name:n})=>{a!==e.types.header?a!==e.types.main?a!==e.types.section?a!==e.types.footer||createFooter(n,e):createSection(n,e):createMain(n,e):createHeader(n,e)}))};export const renderElement=e=>{"shop"===e.page&&(renderShop(e),handlers(e)),"blog"!==e.page?"article"===e.page&&renderArticle(e):renderBlog(e)};export const renderCards=async e=>{const a=document.querySelector(".wholesale__cards"),n=await fetch("db.json");if(n.ok){(await n.json()).forEach(((n,t)=>{const i=t+1;a.insertAdjacentHTML("beforeend",`\n                    <li class="card">\n                        <a href="#" class="card__link " aria-label="${n.name}"\n                        tabindex="${e.tabIndex=e.tabIndex+1}">\n                            <picture class="card__figure ${n.discountClass}">\n                                <source srcset="img/wholesale/photo${i}.avif" type="image/avif">\n                                <source srcset="img/wholesale/photo${i}.webp" type="image/webp">\n                                <img loading="lazy" class="card__image" src="img/wholesale/photo${i}.png"\n                                      alt="${n.name}" width="300" height="400">\n                            </picture>\n                            <div class="card__price-block"><span class="card__new-price">${n.newPrice} ₽</span>\n                                <span class="card__old-price">${2*n.newPrice} ₽</span>\n                            </div>\n                            <p class="card__item-text">${n.name}</p>\n                        </a>\n                    </li>\n                    `)}))}};
//# sourceMappingURL=../../../maps/module/shop/createShop.js.map
