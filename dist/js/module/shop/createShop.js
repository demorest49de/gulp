import{renderBlog}from"../blog/renderBlog.js";import{createHeader,createFooter}from"../base/baseElems.js";import{handlers}from"./handlers.js";import{renderArticle}from"../article/renderArticle.js";const createMain=(e,i)=>{"main"===e&&(i.app.insertAdjacentHTML("beforeend",'\n            <main class="main">\n                <h1 class="visually-hidden">Сайт онлайн магазина ShopOnline</h1>\n            </main>\n        '),i.main=i.app.querySelector("main"))},createSection=async(e,i)=>{if("item"!==e)return"wholesale"===e?(i.main.insertAdjacentHTML("beforeend",'\n            <section class="wholesale" aria-label="Распродажа">\n            <h2 class="visually-hidden">Распродажа</h2>\n            <div class="container">\n                <h3 class="wholesale__title">Это выгодно!</h3>\n                <ul class="wholesale__cards">\n                </ul>\n            </div>\n        </section>\n            '),void renderCards(i)):void 0;i.main.insertAdjacentHTML("beforeend",'\n                <section class="item" aria-label="Каталог товаров">\n                    <h2 class="visually-hidden">товары и скидки</h2>\n                    <div class="container item__container">\n        \n                        <a href="#" class="item__gallery item__gallery-notebook"\n                        aria-label="ноутбуки - всегда отличный подарок"\n                         >\n                            <p class="item__text-notebook">\n                                -50% на все ноутбуки</p>\n                            <div class="item__timer timer"\n                            data-timer-deadline="09/26/22 22:41"\n                            >\n                            </div>\n                                <picture>\n                                \n                                <source srcset="img/item/timer.avif" type="image/avif">\n                                <source srcset="img/item/timer.webp" type="image/webp">\n                                    <img class="item__image-items" src="img/item/timer.jpg"\n                                     alt="Распродажа ноутбуков" width="4096" height="2900">\n                                </picture>\n                        </a>\n        \n                        <a href="#" class="item__gallery item__gallery-book"\n                        aria-label="Книга – лучший подарок"\n                        >\n                            <p class="item__text-book">\n                                <span class="item__text-bold">Книга –</span> лучший подарок</p>\n                                 <picture>\n                                \n                                <source srcset="img/item/1.avif" type="image/avif">\n                                <source srcset="img/item/1.webp" type="image/webp">\n                                    <img class="item__image-items" src="img/item/1.jpg"\n                                     alt="Книга" width="500" height="400">\n                                </picture>\n                        </a>\n        \n                        <a href="#" class="item__gallery item__gallery-discount-bottom-left item__gallery-time"\n                           aria-label="Время скидок!">\n                            <p class="item__text-time">\n                                Время скидок!\n                            </p>\n                                <picture>\n                                \n                                <source srcset="img/item/2.avif" type="image/avif">\n                                <source srcset="img/item/2.webp" type="image/webp">\n                                    <img loading="lazy"  class="item__image-items" src="img/item/2.jpg"\n                                     alt="Скидки" width="500" height="400">\n                                </picture>\n                        </a>\n        \n                        <a href="#" class="item__gallery item__gallery-discount-top-left item__gallery-shoes"\n                        aria-label="скидки на обувь!">\n                        <picture>\n                        \n                        <source srcset="img/item/3.avif" type="image/avif">\n                        <source srcset="img/item/3.webp" type="image/webp">\n                            <img loading="lazy"  class="item__image-shoes" src="img/item/3.jpg" alt="Обувь" width="420"\n                            height="200">\n                        </picture>\n                        </a>\n        \n                        <a href="#" class="item__gallery item__gallery-second-pair"\n                        aria-label="Вторая пара кроссовок в подарок!">\n                            <p class=" item__text-second-pair">\n                                Вторая пара кроссовок\n                                <span class="item__text-big">в&nbsp;подарок!</span>\n                            </p>\n                                <picture>\n                                \n                                <source srcset="img/item/4.avif" type="image/avif">\n                                <source srcset="img/item/4.webp" type="image/webp">\n                                    <img loading="lazy"  class="item__image-items" src="img/item/4.jpg"\n                                     alt="Кросовки" width="500" height="400">\n                                </picture>\n                        </a>\n        \n                        <a href="#" class="item__gallery item__gallery-gift-ideas"\n                         aria-label="Идеи новогодних подарков"\n                         >\n                            <p class=" item__text-new-ideas">\n                                Идеи новогодних подарков\n                            </p>\n                                <picture>\n                                \n                                <source srcset="img/item/5.avif" type="image/avif">\n                                <source srcset="img/item/5.webp" type="image/webp">\n                                    <img loading="lazy"  class="item__image-items" src="img/item/5.jpg"\n                                     alt="Подарки" width="500" height="400">\n                                </picture>\n                        </a>\n        \n                        <a href="#" class="item__gallery item__gallery-discount-bottom-left\n                        item__gallery-profitable-december"\n                           aria-label="Выгодно в декабре!">\n                            <p class="item__text-profitable-december">\n                                Выгодно в декабре!\n                            </p>\n                                <picture>\n                                \n                                <source srcset="img/item/6.avif" type="image/avif">\n                                <source srcset="img/item/6.webp" type="image/webp">\n                                    <img loading="lazy"  class="item__image-items" src="img/item/6.jpg"\n                                     alt="Техника" width="500" height="400">\n                                </picture>\n                        </a>\n        \n                        <a href="#" class="item__gallery item__gallery-new-year"\n                        aria-label="НОВОГОДНИЕ УКРАШЕНИЯ"\n                         >\n                            <p class="item__text-new-year">\n                                Новогодние украшения\n                            </p>\n                                <picture>\n                                \n                                <source srcset="img/item/7.avif" type="image/avif">\n                                <source srcset="img/item/7.webp" type="image/webp">\n                                    <img loading="lazy"  class="item__image-items" src="img/item/7.jpg"\n                                     alt="Украшения на новый год" width="1074" height="806">\n                                </picture>\n                        </a>\n        \n                        <a href="#" class="item__gallery item__gallery-discount-bottom-left item__gallery-dresses"\n                           aria-label="Женская одежда"\n                           >\n                                <picture>\n                                \n                                <source srcset="img/item/8.avif" type="image/avif">\n                                <source srcset="img/item/8.webp" type="image/webp">\n                                    <img loading="lazy"  class="item__image-items" src="img/item/8.jpg"\n                                     alt="Женская одежда" width="1100" height="810">\n                                </picture>\n                        </a>\n        \n                        <a href="#" class="item__gallery item__gallery-discount-top-left item__gallery-chemicals"\n                           aria-label="На бытовую химию"\n                           >\n                            <p class="item__text-chemicals">\n                                На бытовую химию\n                            </p>\n                                <picture>\n                                \n                                <source srcset="img/item/9.avif" type="image/avif">\n                                <source srcset="img/item/9.webp" type="image/webp">\n                                    <img loading="lazy"  class="item__image-items" src="img/item/9.jpg"\n                                     alt="Бытовая химия" width="500" height="400">\n                                </picture>\n                        </a>\n        \n                        <a href="#" class="item__gallery item__gallery-ny-toys"\n                         aria-label="Елочные украшения"\n                          >\n                        <picture>\n                            <source srcset="img/item/10.avif" type="image/avif">\n                            <source srcset="img/item/10.webp" type="image/webp">\n                            <img loading="lazy"  class="item__image-ny-toys" src="img/item/10.jpg"\n                            alt="Елочные украшения"\n                            width="500" height="333">\n                        </picture>\n                        </a>\n                    </div>\n                </section>\n            ')},renderShop=e=>{e.shop.forEach((({type:i,name:a})=>{i!==e.types.header?i!==e.types.main?i!==e.types.section?i!==e.types.footer||createFooter(a,e):createSection(a,e):createMain(a,e):createHeader(a,e)}))};export const renderElement=e=>{"shop"===e.page&&(renderShop(e),handlers(e)),"blog"!==e.page?"article"===e.page&&renderArticle(e):renderBlog(e)};export const renderCards=async e=>{const i=document.querySelector(".wholesale__cards"),a=await fetch("db.json");if(a.ok){(await a.json()).forEach(((e,a)=>{const t=a+1;i.insertAdjacentHTML("beforeend",`\n                    <li class="card">\n                        <a href="#" class="card__link "\n                        aria-label="${e.name}">\n                            <picture class="card__figure ${e.discountClass}">\n                                <source srcset="img/wholesale/photo${t}.avif" type="image/avif">\n                                <source srcset="img/wholesale/photo${t}.webp" type="image/webp">\n                                <img loading="lazy" class="card__image" src="img/wholesale/photo${t}.png"\n                                      alt="${e.name}" width="300" height="400">\n                            </picture>\n                            <div class="card__price-block"><span class="card__new-price">${e.newPrice} ₽</span>\n                                <span class="card__old-price">${2*e.newPrice} ₽</span>\n                            </div>\n                            <p class="card__item-text">${e.name}</p>\n                        </a>\n                    </li>\n                    `)}))}};