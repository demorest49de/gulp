/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 511:
/***/ (function(__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _js_module_shop_createShop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var _js_module_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(817);
/* harmony import */ var _js_module_base_customPaddings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(993);
/* harmony import */ var _js_module_shop_burger_burgerHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(304);
/* harmony import */ var _module_shop_basket_renderBasket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _module_base_search_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(422);






{
  const constsInit = (selector, page, $) => {
    const app = document.querySelector(selector);
    $.app = app;
    $.selector = selector;
    $.page = page;
  };
  const handlersInit = $ => {
    (0,_js_module_base_customPaddings_js__WEBPACK_IMPORTED_MODULE_2__/* .setCustomPaddings */ .S)($);
    (0,_js_module_base_customPaddings_js__WEBPACK_IMPORTED_MODULE_2__/* .customPaddingHandler */ .y)($);
    (0,_js_module_shop_burger_burgerHandler_js__WEBPACK_IMPORTED_MODULE_4__/* .burgerHandler */ .Y)($);
    (0,_module_shop_basket_renderBasket_js__WEBPACK_IMPORTED_MODULE_3__/* .basketHandlers */ .uu)();
    (0,_module_base_search_js__WEBPACK_IMPORTED_MODULE_5__/* .searchHandlers */ .m)();
  };
  const init = (selector, page) => {
    constsInit(selector, page, _js_module_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .global */ .CO);
    (0,_js_module_shop_createShop_js__WEBPACK_IMPORTED_MODULE_0__/* .renderElement */ .lw)(_js_module_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .global */ .CO);
    handlersInit(_js_module_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .global */ .CO);
  };
  window.init = init;
}

/***/ }),

/***/ 359:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: function() { return /* binding */ createArticle; }
/* harmony export */ });
/* unused harmony export articleHandler */
/* harmony import */ var _handleLoadArticle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(458);
/* harmony import */ var _base_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(659);


const createArticleContent = breadCrumbs => {
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
const articleHandler = $ => {
  const app = document.querySelector($.selector);
  const breadCrumbs = (0,_base_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_0__/* .createBreadCrumbs */ .B)($.breadCrumbs.articleInfo);
  const main = createArticleContent(breadCrumbs);
  app.append(main);
  const breadCrumbsTitle = breadCrumbs.querySelector('.bc__item:nth-child(3)');
  const title = main.querySelector('.article__title');
  const text = main.querySelector('.article__text');
  const author = main.querySelector('.article__author');
  const articleDate = main.querySelector('.article__date');
  const articleTime = main.querySelector('.article__time');
  const articleVars = {
    breadCrumbsTitle,
    title,
    text,
    author,
    articleDate,
    articleTime
  };
  return articleVars;
};
const createArticle = $ => {
  const vars = articleHandler($);
  (0,_handleLoadArticle_js__WEBPACK_IMPORTED_MODULE_1__/* .loadItemsHandler */ .h)(vars);
};

/***/ }),

/***/ 458:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: function() { return /* binding */ loadItemsHandler; }
/* harmony export */ });
const loadItemsHandler = $ => {
  const loadArticle = async (search, callback) => {
    const result = await fetch(`https://gorest.co.in/public-api/posts/${search.id}`);
    const data = await result.json();
    const userId = callback(data);
    return userId;
  };
  const getUser = async (id, callback) => {
    const result = await fetch(`https://gorest.co.in/public-api/users/${id}`);
    const data = await result.json();
    callback(data);
  };
  const updateArticle = data => {
    const apiData = data.data;
    const textTitle = apiData.title;
    $.breadCrumbsTitle.textContent = textTitle;
    $.title.textContent = textTitle;
    document.title = textTitle;
    $.text.textContent = apiData.body;
    return apiData.user_id;
  };
  const updateUser = data => {
    const api = data.data;
    $.author.textContent = api.name;
  };
  const getSearchParams = () => {
    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    const paramsObject = Object.fromEntries(searchParams);
    return paramsObject;
  };
  const searchObject = getSearchParams();
  const promiseId = loadArticle(searchObject, updateArticle);
  promiseId.then(id => {
    getUser(id, updateUser);
  });
};

/***/ }),

/***/ 641:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: function() { return /* binding */ renderArticle; }
/* harmony export */ });
/* harmony import */ var _base_baseElems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(396);
/* harmony import */ var _createArticle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(359);


const renderArticle = $ => {
  $.blog.forEach(({
    type,
    name
  }) => {
    if (type === $.types.header) {
      (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_0__/* .createHeader */ .dc)(name, $);
      return;
    }
    if (type === $.types.blog) {
      (0,_createArticle_js__WEBPACK_IMPORTED_MODULE_1__/* .createArticle */ .t)($);
      return;
    }
    if (type === $.types.footer) {
      (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_0__/* .createFooter */ .vE)(name, $);
      return;
    }
  });
};

/***/ }),

/***/ 396:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CY: function() { return /* binding */ createMain; },
/* harmony export */   dc: function() { return /* binding */ createHeader; },
/* harmony export */   kZ: function() { return /* binding */ iterateOverCards; },
/* harmony export */   vE: function() { return /* binding */ createFooter; }
/* harmony export */ });
/* harmony import */ var _shop_burger_createBurger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(285);
/* harmony import */ var _shop_fetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(224);
/* harmony import */ var _customFeatures_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);



const createHeader = (name, $) => {
  if (name === 'header') {
    $.app.insertAdjacentHTML('beforeend', `
            <header class="header">
                <div class="container header__container">
                    <a href="./" class="header__logo-block">
                        <img
                                class="header__logo"
                                src="svg/header/logo.svg"
                                alt="Логотип магазина ShopOnline" width="235" height="39">
                    </a>
                    <button class="header__button-menu" aria-label="Открыть меню"
                    >
                    <svg class="header__button-menu-svg"  xmlns="http://www.w3.org/2000/svg">
                        <use href="./svg/header/menu.svg#menu">
                    </svg>

                    Меню</button>
        
                    <form class="header__form-search form-search" method="post" name="header__form-search"
                    aria-label="поиск товара">
                        <input type="search"
                               class="form-search__input"
                               name="search"
                               placeholder="Я ищу..."
                               >
                        <button class="form-search__button" type="submit" aria-label="Поиск"
                        >
                            <svg
                                    class="form-search__button-img"
                                    width="27"
                                    height="27"
                                    viewBox="0 0 27 27"
                                    fill="white"
                                    xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                        d="M19.25 17H18.065L17.645 16.595C19.115 14.885 20 12.665 20 10.25C20 4.865 15.635 0.5 10.25 0.5C4.865 0.5 0.5 4.865 0.5 10.25C0.5 15.635 4.865 20 10.25 20C12.665 20 14.885 19.115 16.595 17.645L17 18.065V19.25L24.5 26.735L26.735 24.5L19.25 17ZM10.25 17C6.515 17 3.5 13.985 3.5 10.25C3.5 6.515 6.515 3.5 10.25 3.5C13.985 3.5 17 6.515 17 10.25C17 13.985 13.985 17 10.25 17Z"
                                        fill="white"
                                />
                            </svg>
                        </button>
                    </form>
        
                    <nav class="header__navigation navigation">
                        <ul class="navigation__list">
                            <li class="navigation__item">
                                <a href="./" class="navigation__link" aria-label="Профиль"
                                 >
                                    <svg
                                            class="navigation__link-img"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="#2D2D2D"
                                            xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                                d="M12 12C15.315 12 18 9.315 18 6C18 2.685 15.315 0 12 0C8.685 0 6 2.685 6 6C6 9.315 8.685 12 12 12ZM12 15C7.995 15 0 17.01 0 21V24H24V21C24 17.01 16.005 15 12 15Z"
                                                fill="#2D2D2D"
                                        />
                                    </svg>
                                    Профиль
                                </a>
                            </li>
                            <li class="navigation__item navigation__item-cart">
                                <a href="./cart.html" class="navigation__link" aria-label="Корзина"
                                 >
                                    <svg
                                            class="navigation__link-img"
                                            width="31"
                                            height="30"
                                            viewBox="0 0 31 30"
                                            fill="#2D2D2D"
                                            xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                                d="M9.5 24C7.85 24 6.515 25.35 6.515 27C6.515 28.65 7.85 30 9.5 30C11.15 30 12.5 28.65 12.5 27C12.5 25.35 11.15 24 9.5 24ZM0.5 0V3H3.5L8.9 14.385L6.875 18.06C6.635 18.48 6.5 18.975 6.5 19.5C6.5 21.15 7.85 22.5 9.5 22.5H27.5V19.5H10.13C9.92 19.5 9.755 19.335 9.755 19.125L9.8 18.945L11.15 16.5H22.325C23.45 16.5 24.44 15.885 24.95 14.955L30.32 5.22C30.44 5.01 30.5 4.755 30.5 4.5C30.5 3.675 29.825 3 29 3H6.815L5.405 0H0.5ZM24.5 24C22.85 24 21.515 25.35 21.515 27C21.515 28.65 22.85 30 24.5 30C26.15 30 27.5 28.65 27.5 27C27.5 25.35 26.15 24 24.5 24Z"
                                                fill="#2D2D2D"
                                        />
                                    </svg>
                                    Корзина
                                </a>
                                <p class="navigation__cart-count">0</p>
                            </li>
                            <li class="navigation__item">
                                <a href="./" class="navigation__link" aria-label="Избранное"
                                 >
                                    <svg
                                            class="navigation__link-img"
                                            width="30"
                                            height="29"
                                            viewBox="0 0 30 29"
                                            fill="#2D2D2D"
                                            xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                                d="M15 28.025L12.825 26.045C5.1 19.04 0 14.42 0 8.75C0 4.13 3.63 0.5 8.25 0.5C10.86 0.5 13.365 1.715 15 3.635C16.635 1.715 19.14 0.5 21.75 0.5C26.37 0.5 30 4.13 30 8.75C30 14.42 24.9 19.04 17.175 26.06L15 28.025Z"
                                                fill="#2D2D2D"
                                        />
                                    </svg>
                                    Избранное
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        `);
  }
  const header = $.app.querySelector('.header');
  const burger = (0,_shop_burger_createBurger_js__WEBPACK_IMPORTED_MODULE_0__/* .createBurger */ .t)($, _shop_fetch_js__WEBPACK_IMPORTED_MODULE_1__/* .getCategory */ .n3);
  header.append(burger);
};
const createFooter = (name, $) => {
  $.app.insertAdjacentHTML('beforeend', `
            <footer class="footer">
        <div class="container footer__container">
            <div class="footer__block">
                <div class="footer__logo-block">
                    <img
                            class="footer__logo"
                            src="svg/footer/logo.svg"
                            alt="Логотип магазина ShopOnline" width="235" height="39"
                            >
                </div>
                <div class="footer__catalog">
                    <h2 class="footer__subtitle">Каталог</h2>
                    <nav class="footer__nav">
                        <ul class="footer__list">
                        
                        </ul>
                    </nav>
                </div>
                <div class="footer__buyers-info">
                    <h2 class="footer__subtitle">Покупателям</h2>
                    <nav class="footer__nav">
                        <ul class="footer__list">
                            <li class="footer__elem"><a href="./">Оплата заказа</a></li>
                            <li class="footer__elem"><a href="./">Условия доставки</a></li>
                            <li class="footer__elem"><a href="./">Условия возврата товара</a></li>
                            <li class="footer__elem"><a href="./blog.html">Блог</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="footer__contacts">
                    <h2 class="footer__subtitle">Контакты</h2>
                    <address class="footer__nav footer__contacts-info">
                        <ul class="footer__list">
                            <li class="footer__elem">Тел: <a href="tel:+79378392361">+7 937 839 23-61</a></li>
                            <li class="footer__elem">Email: <a href="mailto:OnlineShop@gmail.com">OnlineShop@gmail.com</a>
                            </li>
                        </ul>
                    </address>
                    <nav class="footer__nav">
                        <ul class="footer__list-social">
                            <li><a href="https://web.whatsapp.com" aria-label="whatsapp.com" title="whatsapp">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.1162 15.2318C17.8395 15.0896 16.4608 14.4143 16.2043 14.3229C15.9479 14.2264 15.76 14.1807 15.5746 14.465C15.3867 14.7469 14.8535 15.374 14.686 15.5645C14.5235 15.7523 14.3584 15.7752 14.0817 15.6355C12.4363 14.8129 11.3572 14.168 10.2731 12.3068C9.98616 11.8117 10.56 11.8473 11.0957 10.7783C11.1871 10.5904 11.1414 10.4305 11.0703 10.2883C10.9992 10.1461 10.4406 8.76992 10.2071 8.20879C9.98108 7.66289 9.74748 7.73906 9.57737 7.72891C9.41487 7.71875 9.22952 7.71875 9.04163 7.71875C8.85373 7.71875 8.55159 7.78984 8.29514 8.0666C8.0387 8.34844 7.31506 9.02637 7.31506 10.4025C7.31506 11.7787 8.31799 13.1117 8.4551 13.2996C8.59729 13.4875 10.428 16.3109 13.2387 17.5271C15.016 18.2939 15.7117 18.36 16.6004 18.2279C17.1412 18.1467 18.2559 17.5525 18.4869 16.8949C18.718 16.2398 18.718 15.6787 18.6494 15.5619C18.5809 15.4375 18.393 15.3664 18.1162 15.2318Z"
                                          fill="white"/>
                                    <path d="M23.4914 8.59219C22.9176 7.22871 22.0949 6.00488 21.0463 4.95371C19.9977 3.90508 18.7738 3.07988 17.4078 2.50859C16.0113 1.92207 14.5285 1.625 13 1.625H12.9492C11.4106 1.63262 9.92014 1.9373 8.51858 2.53652C7.16526 3.11543 5.95158 3.93809 4.91311 4.98672C3.87463 6.03535 3.05959 7.2541 2.49592 8.6125C1.91194 10.0191 1.6174 11.5146 1.62502 13.0533C1.63264 14.8154 2.05412 16.5648 2.84377 18.1289V21.9883C2.84377 22.6332 3.36682 23.1562 4.01174 23.1562H7.87365C9.43772 23.9459 11.1871 24.3674 12.9492 24.375H13.0026C14.5235 24.375 15.9987 24.0805 17.3875 23.5041C18.7459 22.9379 19.9672 22.1254 21.0133 21.0869C22.0619 20.0484 22.8871 18.8348 23.4635 17.4814C24.0627 16.0799 24.3674 14.5895 24.375 13.0508C24.3826 11.5045 24.083 10.0039 23.4914 8.59219ZM19.6549 19.7133C17.875 21.4754 15.5137 22.4453 13 22.4453H12.9569C11.4258 22.4377 9.9049 22.0568 8.56174 21.3408L8.34846 21.2266H4.77346V17.6516L4.6592 17.4383C3.94319 16.0951 3.56233 14.5742 3.55471 13.0432C3.54455 10.5117 4.51194 8.13516 6.28674 6.34512C8.05901 4.55508 10.428 3.56484 12.9594 3.55469H13.0026C14.2721 3.55469 15.5035 3.80098 16.6639 4.28848C17.7963 4.76328 18.8119 5.44629 19.6854 6.31973C20.5563 7.19062 21.2418 8.20879 21.7166 9.34121C22.2092 10.5143 22.4555 11.7584 22.4504 13.0432C22.4352 15.5721 21.4424 17.941 19.6549 19.7133Z"
                                          fill="white"/>
                                </svg>
                            </a></li>
                            <li><a href="https://www.instagram.com" aria-label="instagram.com" title="instagram">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 2C10.0149 2 9.6395 2.01375 8.46663 2.066C7.29375 2.121 6.49487 2.30525 5.795 2.5775C5.06088 2.85363 4.39593 3.28676 3.84663 3.84663C3.2871 4.39621 2.85402 5.06108 2.5775 5.795C2.30525 6.4935 2.11963 7.29375 2.066 8.4625C2.01375 9.63812 2 10.0121 2 13.0014C2 15.9879 2.01375 16.3619 2.066 17.5347C2.121 18.7063 2.30525 19.5051 2.5775 20.205C2.85938 20.9282 3.23475 21.5415 3.84663 22.1534C4.45713 22.7652 5.07037 23.142 5.79363 23.4225C6.49487 23.6947 7.29238 23.8804 8.46388 23.934C9.63813 23.9862 10.0121 24 13 24C15.9879 24 16.3605 23.9862 17.5347 23.934C18.7049 23.879 19.5065 23.6947 20.2064 23.4225C20.94 23.1462 21.6045 22.7131 22.1534 22.1534C22.7652 21.5415 23.1406 20.9282 23.4225 20.205C23.6934 19.5051 23.879 18.7063 23.934 17.5347C23.9862 16.3619 24 15.9879 24 13C24 10.0121 23.9862 9.63813 23.934 8.46388C23.879 7.29375 23.6934 6.4935 23.4225 5.795C23.146 5.06106 22.7129 4.39618 22.1534 3.84663C21.6042 3.28655 20.9392 2.85339 20.205 2.5775C19.5037 2.30525 18.7035 2.11963 17.5334 2.066C16.3591 2.01375 15.9865 2 12.9973 2H13.0014H13ZM12.0141 3.98275H13.0014C15.9384 3.98275 16.2863 3.99238 17.4454 4.046C18.5179 4.09413 19.1009 4.27425 19.4886 4.42412C20.0015 4.6235 20.3686 4.86275 20.7536 5.24775C21.1386 5.63275 21.3765 5.9985 21.5759 6.51275C21.7271 6.89913 21.9059 7.48213 21.954 8.55463C22.0076 9.71375 22.0186 10.0616 22.0186 12.9973C22.0186 15.9329 22.0076 16.2821 21.954 17.4412C21.9059 18.5138 21.7257 19.0954 21.5759 19.4831C21.3995 19.9607 21.118 20.3926 20.7522 20.7467C20.3672 21.1318 20.0015 21.3696 19.4873 21.569C19.1023 21.7203 18.5192 21.899 17.4454 21.9485C16.2863 22.0007 15.9384 22.0131 13.0014 22.0131C10.0644 22.0131 9.71513 22.0007 8.556 21.9485C7.4835 21.899 6.90188 21.7203 6.51412 21.569C6.03631 21.3929 5.60405 21.1119 5.24913 20.7467C4.88303 20.392 4.60112 19.9598 4.42412 19.4818C4.27425 19.0954 4.09413 18.5124 4.046 17.4399C3.99375 16.2808 3.98275 15.9329 3.98275 12.9945C3.98275 10.0575 3.99375 9.711 4.046 8.55187C4.0955 7.47937 4.27425 6.89638 4.4255 6.50863C4.62488 5.99575 4.86412 5.62862 5.24913 5.24362C5.63412 4.85862 5.99988 4.62075 6.51412 4.42138C6.90188 4.27013 7.4835 4.09138 8.556 4.04188C9.57075 3.99513 9.964 3.98138 12.0141 3.98V3.98275ZM18.8726 5.80875C18.6993 5.80875 18.5276 5.84289 18.3675 5.90923C18.2073 5.97557 18.0618 6.0728 17.9392 6.19537C17.8167 6.31794 17.7194 6.46346 17.6531 6.62361C17.5868 6.78376 17.5526 6.95541 17.5526 7.12875C17.5526 7.30209 17.5868 7.47374 17.6531 7.63389C17.7194 7.79404 17.8167 7.93956 17.9392 8.06213C18.0618 8.1847 18.2073 8.28193 18.3675 8.34827C18.5276 8.41461 18.6993 8.44875 18.8726 8.44875C19.2227 8.44875 19.5585 8.30968 19.806 8.06213C20.0536 7.81458 20.1926 7.47884 20.1926 7.12875C20.1926 6.77866 20.0536 6.44292 19.806 6.19537C19.5585 5.94782 19.2227 5.80875 18.8726 5.80875ZM13.0014 7.3515C12.2521 7.33981 11.508 7.47729 10.8123 7.75594C10.1167 8.0346 9.48346 8.44885 8.94946 8.97458C8.41546 9.50032 7.99138 10.127 7.70191 10.8182C7.41244 11.5094 7.26336 12.2513 7.26336 13.0007C7.26336 13.7501 7.41244 14.4919 7.70191 15.1831C7.99138 15.8743 8.41546 16.5011 8.94946 17.0268C9.48346 17.5525 10.1167 17.9668 10.8123 18.2454C11.508 18.5241 12.2521 18.6616 13.0014 18.6499C14.4844 18.6267 15.8988 18.0214 16.9393 16.9645C17.9799 15.9076 18.5631 14.4839 18.5631 13.0007C18.5631 11.5175 17.9799 10.0938 16.9393 9.03691C15.8988 7.97999 14.4844 7.37464 13.0014 7.3515ZM13.0014 9.33288C13.974 9.33288 14.9067 9.71923 15.5944 10.407C16.2821 11.0947 16.6685 12.0274 16.6685 13C16.6685 13.9726 16.2821 14.9053 15.5944 15.593C14.9067 16.2808 13.974 16.6671 13.0014 16.6671C12.0288 16.6671 11.096 16.2808 10.4083 15.593C9.72061 14.9053 9.33425 13.9726 9.33425 13C9.33425 12.0274 9.72061 11.0947 10.4083 10.407C11.096 9.71923 12.0288 9.33288 13.0014 9.33288Z"
                                          fill="white"/>
                                </svg>
                            </a></li>
                            <li><a href="https://www.youtube.com" aria-label="youtube.com" title="youtube">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.375 12.9291C24.375 12.8732 24.375 12.8097 24.3725 12.7361C24.3699 12.5304 24.3648 12.2994 24.3598 12.0531C24.3395 11.3447 24.3039 10.6388 24.248 9.97358C24.1719 9.05698 24.0602 8.29272 23.9078 7.7189C23.747 7.12006 23.4319 6.5739 22.9939 6.13502C22.5559 5.69614 22.0104 5.3799 21.4119 5.21792C20.6934 5.02495 19.2867 4.90562 17.3062 4.83198C16.3643 4.79644 15.3562 4.77358 14.3482 4.76089C13.9953 4.75581 13.6678 4.75327 13.3732 4.75073H12.6268C12.3322 4.75327 12.0047 4.75581 11.6518 4.76089C10.6438 4.77358 9.63574 4.79644 8.69375 4.83198C6.71328 4.90815 5.3041 5.02749 4.58809 5.21792C3.98938 5.3795 3.44365 5.69561 3.0056 6.13455C2.56755 6.57349 2.25255 7.11986 2.09219 7.7189C1.9373 8.29272 1.82812 9.05698 1.75195 9.97358C1.69609 10.6388 1.66055 11.3447 1.64023 12.0531C1.63262 12.2994 1.63008 12.5304 1.62754 12.7361C1.62754 12.8097 1.625 12.8732 1.625 12.9291V13.0712C1.625 13.1271 1.625 13.1906 1.62754 13.2642C1.63008 13.4699 1.63516 13.7009 1.64023 13.9472C1.66055 14.6556 1.69609 15.3615 1.75195 16.0267C1.82812 16.9433 1.93984 17.7076 2.09219 18.2814C2.41719 19.4976 3.37187 20.4574 4.58809 20.7824C5.3041 20.9753 6.71328 21.0947 8.69375 21.1683C9.63574 21.2039 10.6438 21.2267 11.6518 21.2394C12.0047 21.2445 12.3322 21.247 12.6268 21.2496H13.3732C13.6678 21.247 13.9953 21.2445 14.3482 21.2394C15.3562 21.2267 16.3643 21.2039 17.3062 21.1683C19.2867 21.0921 20.6959 20.9728 21.4119 20.7824C22.6281 20.4574 23.5828 19.5001 23.9078 18.2814C24.0627 17.7076 24.1719 16.9433 24.248 16.0267C24.3039 15.3615 24.3395 14.6556 24.3598 13.9472C24.3674 13.7009 24.3699 13.4699 24.3725 13.2642C24.3725 13.1906 24.375 13.1271 24.375 13.0712V12.9291ZM22.5469 13.0611C22.5469 13.1144 22.5469 13.1728 22.5443 13.2414C22.5418 13.4394 22.5367 13.6578 22.5316 13.8939C22.5139 14.5693 22.4783 15.2447 22.425 15.8718C22.3564 16.6894 22.26 17.3597 22.1406 17.8091C21.9832 18.3957 21.5211 18.8603 20.9371 19.0152C20.4039 19.1574 19.0607 19.2716 17.2352 19.3402C16.3109 19.3757 15.3156 19.3986 14.3229 19.4113C13.975 19.4164 13.6525 19.4189 13.3631 19.4189H12.6369L11.6771 19.4113C10.6844 19.3986 9.6916 19.3757 8.76484 19.3402C6.93926 19.2691 5.59355 19.1574 5.06289 19.0152C4.47891 18.8578 4.0168 18.3957 3.85938 17.8091C3.74004 17.3597 3.64355 16.6894 3.575 15.8718C3.52168 15.2447 3.48867 14.5693 3.46836 13.8939C3.46074 13.6578 3.4582 13.4369 3.45566 13.2414C3.45566 13.1728 3.45312 13.1119 3.45312 13.0611V12.9392C3.45312 12.8859 3.45313 12.8275 3.45566 12.7589C3.4582 12.5609 3.46328 12.3425 3.46836 12.1064C3.48613 11.431 3.52168 10.7556 3.575 10.1285C3.64355 9.31089 3.74004 8.64057 3.85938 8.19116C4.0168 7.60464 4.47891 7.13999 5.06289 6.98511C5.59609 6.84292 6.93926 6.72866 8.76484 6.66011C9.68906 6.62456 10.6844 6.60171 11.6771 6.58901C12.025 6.58393 12.3475 6.5814 12.6369 6.5814H13.3631L14.3229 6.58901C15.3156 6.60171 16.3084 6.62456 17.2352 6.66011C19.0607 6.7312 20.4064 6.84292 20.9371 6.98511C21.5211 7.14253 21.9832 7.60464 22.1406 8.19116C22.26 8.64057 22.3564 9.31089 22.425 10.1285C22.4783 10.7556 22.5113 11.431 22.5316 12.1064C22.5393 12.3425 22.5418 12.5634 22.5443 12.7589C22.5443 12.8275 22.5469 12.8884 22.5469 12.9392V13.0611ZM10.7402 16.4025L16.6309 12.9748L10.7402 9.5978V16.4025Z"
                                          fill="white"/>
                                </svg>
                            </a></li>
                            <li><a href="https://www.facebook.com" aria-label="facebook.com" title="facebook">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.5 2.1665H16.25C14.8135 2.1665 13.4357 2.73719 12.4199 3.75301C11.4041 4.76883 10.8334 6.14658 10.8334 7.58317V10.8332H7.58337V15.1665H10.8334V23.8332H15.1667V15.1665H18.4167L19.5 10.8332H15.1667V7.58317C15.1667 7.29585 15.2808 7.0203 15.484 6.81714C15.6872 6.61397 15.9627 6.49984 16.25 6.49984H19.5V2.1665Z"
                                          stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a></li>
                            <li><a href="https://www.telegram.org" aria-label="telegram.org" title="telegram">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.1818 3.24682C20.921 3.26579 20.665 3.32698 20.4238 3.428H20.4205C20.1889 3.51982 19.088 3.98294 17.4143 4.68494L11.4164 7.211C7.11257 9.02288 2.88188 10.8071 2.88188 10.8071L2.93226 10.7876C2.93226 10.7876 2.64057 10.8835 2.33588 11.0923C2.14765 11.2121 1.98567 11.3688 1.85976 11.553C1.71026 11.7724 1.59001 12.1079 1.63469 12.4549C1.70782 13.0415 2.08807 13.3933 2.36107 13.5875C2.63732 13.7841 2.90057 13.8759 2.90057 13.8759H2.90707L6.87451 15.2125C7.05244 15.7837 8.0835 19.1734 8.33132 19.9543C8.47757 20.4206 8.61975 20.7123 8.79769 20.9349C8.88382 21.0487 8.98457 21.1438 9.10563 21.2201C9.16857 21.2567 9.23567 21.2857 9.3055 21.3063L9.26488 21.2965C9.27707 21.2998 9.28682 21.3095 9.29575 21.3128C9.32825 21.3217 9.35019 21.3249 9.39163 21.3314C10.0197 21.5216 10.5243 21.1316 10.5243 21.1316L10.5527 21.1088L12.8951 18.976L16.8211 21.9879L16.9105 22.0261C17.7287 22.3853 18.5574 22.1854 18.9954 21.8328C19.4366 21.4777 19.608 21.0235 19.608 21.0235L19.6364 20.9504L22.6703 5.40807C22.7564 5.02457 22.7784 4.66544 22.6833 4.31688C22.5853 3.96411 22.3589 3.66071 22.0488 3.46619C21.7883 3.30785 21.4862 3.23142 21.1818 3.24682ZM21.0998 4.91244C21.0965 4.96363 21.1063 4.95794 21.0835 5.05625V5.06519L18.0781 20.4458C18.0651 20.4678 18.0431 20.5157 17.983 20.5636C17.9196 20.614 17.8693 20.6457 17.6052 20.5409L12.8033 16.8594L9.90269 19.5033L10.5121 15.6114L18.3576 8.29894C18.6809 7.99832 18.5729 7.93494 18.5729 7.93494C18.5956 7.56607 18.0846 7.82688 18.0846 7.82688L8.19157 13.9556L8.18832 13.9393L3.44657 12.3428V12.3395L3.43438 12.3371C3.44269 12.3343 3.45083 12.331 3.45876 12.3273L3.48476 12.3143L3.50994 12.3054C3.50994 12.3054 7.74388 10.5211 12.0477 8.70925C14.2024 7.80169 16.3734 6.88763 18.0431 6.18238C19.7128 5.48119 20.947 4.96688 21.0169 4.93925C21.0835 4.91325 21.0518 4.91325 21.0998 4.91325V4.91244Z"
                                          fill="white"/>
                                </svg>
                            </a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="footer__block">
                <p class="footer__copyright">© OnlineShop, 2021</p>
                <div class="footer__author-info">
                    <p>Design by Anastasia Ilina</p>
                    <p>Tg: <a href="https://www.telegram.org">
                        @Mrshmallowww
                    </a></p>
                </div>
            </div>
        </div>
    </footer>
        `);
  $.form = $.app.querySelector('.header__form-search');
  const list = document.querySelector('.footer__list');
  const categories = (0,_shop_fetch_js__WEBPACK_IMPORTED_MODULE_1__/* .getCategory */ .n3)($);
  categories.then(data => {
    data.data.forEach((elem, index) => {
      const li = document.createElement('li');
      li.className = "footer__elem";
      const a = document.createElement('a');
      a.href = `category.html?name=${elem}`;
      a.textContent = elem;
      li.append(a);
      list.append(li);
    });
  });
};
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
const iterateOverCards = (cards, $, cardAfterStyle, items) => {
  items.forEach((item, index) => {
    if (item.discount > 0) {
      cardAfterStyle.innerHTML += `.card-category:nth-child(${index + 1}) .card-category__figure:after {
                content: '-${item.discount}%';

            }`;
      document.body.append(cardAfterStyle);
    }
    const li = document.createElement('li');
    li.className = 'card-category';
    const a = document.createElement('a');
    a.className = 'card-category__link';
    a.title = `${item.title}`;
    a.href = `card.html?id=${item.id}`;
    let newPrice = NaN;
    if (item.discount === 0) {
      newPrice = Math.ceil(item.price / 1.2).toString();
    } else {
      newPrice = Math.ceil(item.price - item.price * item.discount / 100);
    }
    a.insertAdjacentHTML('beforeend', `
                    <picture class="card-category__figure">
                    <img loading="lazy" class="card-category__image" src="${$.URL}/${item.image}"
                              alt="${item.title}" width="420" height="295">
                    </picture>
                    <div class="card-category__price-block">
                    <span class="card-category__new-price">${newPrice} ₽</span>
                    
                    </div>
                    <p class="card-category__item-text">${item.title}</p>
                `);
    const cardPriceBlock = a.querySelector('.card-category__price-block');
    cardPriceBlock.insertAdjacentHTML('beforeend', `<span class="card-category__old-price">${item.price} ₽</span>`);
    li.append(a);
    cards.append(li);
  });
  (0,_customFeatures_js__WEBPACK_IMPORTED_MODULE_2__/* .handleSingleCardAligment */ .S)();
};

/***/ }),

/***/ 447:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: function() { return /* binding */ rafAnimationIcon; },
/* harmony export */   l: function() { return /* binding */ rafAnimationMenu; }
/* harmony export */ });
const rafAnimationMenu = (duration, direction, height, callback) => {
  let requestId = NaN;
  let startAnimation = NaN;
  let progressExternal = '';
  const rafPromise = new Promise(resolve => {
    requestId = window.requestAnimationFrame(function step(timestamp) {
      startAnimation ||= timestamp;
      let progress = ((timestamp - startAnimation) / duration * 550).toFixed(2);
      if (direction > 0) {
        callback(progress);
        if (+progress <= height) {
          requestId = requestAnimationFrame(step);
        } else {
          cancelAnimationFrame(requestId);
        }
      } else {
        progress = (height - +progress).toFixed(2);
        callback(progress);
        if (+progress >= 0) {
          requestId = requestAnimationFrame(step);
        } else {
          progress = '0';
          callback(progress);
          cancelAnimationFrame(requestId);
          progressExternal = progress;
          resolve(+progressExternal);
        }
      }
    });
  });
  return rafPromise;
};
const rafAnimationIcon = (duration, direction, callback) => {
  let requestId = NaN;
  let startAnimation = NaN;
  requestId = window.requestAnimationFrame(function step(timestamp) {
    startAnimation ||= timestamp;
    let progress = ((timestamp - startAnimation) / duration).toFixed(2);
    callback(progress);
    if (+progress <= 1) {
      requestId = requestAnimationFrame(step);
    } else {
      callback("1");
      cancelAnimationFrame(requestId);
    }
  });
};

/***/ }),

/***/ 659:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: function() { return /* binding */ createBreadCrumbs; }
/* harmony export */ });
const createBreadCrumbs = bc => {
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
  for (const {
    url,
    name,
    ariaLabel
  } of bc) {
    ul.insertAdjacentHTML('beforeend', `
            <li class="bc__item">
            <a class="bc__link" href="${url}" aria-label="${ariaLabel}">${name}</a>
                <div class="bc__arrow-block">
                    <svg class="bc__nav-arrow">
                        <use href="./svg/article/nav-arrow.svg#nav-arrow"></use>
                    </svg>
                </div>
            </li>
        `);
  }
  return breadCrumbs;
};

/***/ }),

/***/ 21:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ handleSingleCardAligment; }
/* harmony export */ });
const handleSingleCardAligment = () => {
  //
  const list = document.querySelector('.category__cards');
  const items = document.querySelectorAll('.card-category');
  if (items.length === 1) {
    list.style.cssText = `
            justify-content: start;
            `;
  }
};

/***/ }),

/***/ 993:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ setCustomPaddings; },
/* harmony export */   y: function() { return /* binding */ customPaddingHandler; }
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(817);

const setHeader = () => {
  const header = document.querySelector('.header');
  switch (true) {
    case window.screen.width <= 320:
      header.style.cssText = `
                padding-bottom: 16px;
            `;
      break;
    case window.screen.width <= 768:
      header.style.cssText = `
                padding-bottom: 35px;
            `;
      break;
    case window.screen.width <= 1024:
      header.style.cssText = `
                padding-bottom: 40px;
            `;
      break;
    case window.screen.width <= 1440:
      header.style.cssText = `
                padding-bottom: 60px;
            `;
      break;
    default:
      header.style.cssText = `
                padding-bottom: 60px;
            `;
      break;
  }
};
const setCustomPaddings = $ => {
  if ($.page === _constants_js__WEBPACK_IMPORTED_MODULE_0__/* .types */ .V5.blog || $.page === _constants_js__WEBPACK_IMPORTED_MODULE_0__/* .types */ .V5.article) {
    setHeader($);
  }
};
const customPaddingHandler = $ => {
  window.addEventListener('resize', () => {
    if ($.page === _constants_js__WEBPACK_IMPORTED_MODULE_0__/* .types */ .V5.blog || $.page === _constants_js__WEBPACK_IMPORTED_MODULE_0__/* .types */ .V5.article) {
      setHeader();
    }
  });
};

/***/ }),

/***/ 422:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: function() { return /* binding */ searchHandlers; }
/* harmony export */ });
const handleSearch = () => {
  const form = document.querySelector('.header__form-search');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const target = e.target;
    const formData = new FormData(target);
    const data = Object.fromEntries(formData);
    const searchInput = data.search;
    window.location.replace(`/search.html?search=${searchInput}`);
  });
};
const searchHandlers = () => {
  handleSearch();
};

/***/ }),

/***/ 433:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: function() { return /* binding */ getSearchParams; }
/* harmony export */ });
const getSearchParams = () => {
  const paramsString = window.location.search;
  const searchParams = new URLSearchParams(paramsString);
  const paramsObject = Object.fromEntries(searchParams);
  return paramsObject;
};

/***/ }),

/***/ 429:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: function() { return /* binding */ createBlog; }
/* harmony export */ });
/* harmony import */ var _handleLoadBlog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(597);
/* harmony import */ var _base_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(659);


const createPageLink = pagination => {
  const pages = document.createElement('nav');
  pages.classList.add('pagination__navigation');
  pages.ariaLabel = `pagination`;
  pages.insertAdjacentHTML(`beforeend`, `
            <ul class="pagination__list">
                 <li class="pagination__item pagination__item-active">
                  <a class="pagination__link" data-pageNumber="1" href="./blog.html">1</a></li>
                 <li class="pagination__item">
                 <a class="pagination__link" data-pageNumber="2" href="./blog.html?page=2">2</a></li>
                 <li class="pagination__item">
                 <a class="pagination__link" data-pageNumber="3" href="./blog.html?page=3">3</a></li>
             </ul>
        `);
  pagination.append(pages);
  const links = pages.querySelectorAll('.pagination__item .pagination__link');
  const pageList = pages.querySelector('.pagination__list');
  return {
    links: links,
    pageList: pageList
  };
};
const addPagination = pagination => {
  pagination.insertAdjacentHTML('afterbegin', `
        <a class="pagination__link-left">
            <svg class="pagination__left-arrow" xmlns="http://www.w3.org/2000/svg"><use href="./svg/blog/arrows.svg#left"></use></svg>
        </a>
        `);
  const pageElems = createPageLink(pagination);
  const leftLink = pagination.querySelector('.pagination__link-left');
  pageElems.leftLink = leftLink;
  pagination.insertAdjacentHTML('beforeend', `
        <a class="pagination__link-right" href="./blog.html?page=2">
            <svg class="pagination__right-arrow" xmlns="http://www.w3.org/2000/svg"><use href="./svg/blog/arrows.svg#right"></use></svg>
        </a>
        `);
  const rightLink = pagination.querySelector('.pagination__link-right');
  pageElems.rightLink = rightLink;
  return pageElems;
};
const createBlog = (name, $) => {
  const main = document.createElement('main');
  const section = document.createElement('section');
  section.classList.add(name);
  section.ariaLabel = `блог`;
  const breadCrumbs = (0,_base_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_1__/* .createBreadCrumbs */ .B)($.breadCrumbs.blogInfo);
  main.append(breadCrumbs);
  main.append(section);
  const h1 = document.createElement('h1');
  h1.classList.add(`blog__title`, `visually-hidden`);
  h1.textContent = 'блог об всем по-немногу!';
  section.append(h1);
  const container = document.createElement('div');
  container.classList.add('container', 'blog__container');
  section.append(container);
  const blogList = document.createElement('div');
  blogList.classList.add('blog__list');
  const pagination = document.createElement('div');
  pagination.classList.add('blog__pagination', `pagination`);
  const pageElems = addPagination(pagination);
  container.append(blogList, pagination);
  const blogItems = {
    main,
    blogList,
    blogPagination: pagination,
    pageElems
  };
  $.blogItems = blogItems;
  (0,_handleLoadBlog_js__WEBPACK_IMPORTED_MODULE_0__/* .paginationClickHandler */ .g0)($);
  (0,_handleLoadBlog_js__WEBPACK_IMPORTED_MODULE_0__/* .paginationHandler */ .FA)($);
  (0,_handleLoadBlog_js__WEBPACK_IMPORTED_MODULE_0__/* .loadItemsHandler */ .hI)($);
  $.app.querySelector('header').after(main);
};

/***/ }),

/***/ 597:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FA: function() { return /* binding */ paginationHandler; },
/* harmony export */   g0: function() { return /* binding */ paginationClickHandler; },
/* harmony export */   hI: function() { return /* binding */ loadItemsHandler; }
/* harmony export */ });
const pageSettings = () => {
  return {
    currentPage: "",
    endPage: "",
    currentPageStr: 'currentPage'
  };
};
let {
  currentPage,
  currentPageStr,
  endPage
} = pageSettings();
const setStorage = (key, value) => {
  localStorage.setItem(key, `${value}`);
  return value;
};
const getPageFromStorage = () => {
  currentPage = localStorage.getItem(currentPageStr);
  currentPage = currentPage && Number.isInteger(+currentPage) ? currentPage : setStorage(currentPageStr, '1');
};
const loadItemsHandler = $ => {
  const loadArticles = async callback => {
    const result = await fetch(`https://gorest.co.in/public-api/posts?page=${currentPage}&per_page=12`);
    const data = await result.json();
    callback(data);
  };
  const getFormattedDate = () => {
    const dt_options = {
      day: `numeric`,
      month: `long`,
      year: `numeric`
    };
    const today = new Date();
    const strDate = today.toLocaleDateString("ru-RU", dt_options).split(" ").slice(0, -1);
    const [monthDate, monthName, yearNumber] = strDate;
    return `${monthDate} ${monthName} ${yearNumber}, `;
  };
  const getFormattedTime = () => {
    const dt_options = {
      hour: `2-digit`,
      minute: `2-digit`
    };
    const today = new Date();
    const strTime = today.toLocaleTimeString("ru-RU", dt_options).split(" ");
    return strTime.toString();
  };
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const renderArticles = data => {
    endPage = data.meta.pagination.total;
    setStorage('endPage', endPage);
    const articlesHTML = data.data.map((item, index) => {
      const strDate = getFormattedDate();
      const strTime = getFormattedTime();
      const article = document.createElement('article');
      article.classList.add('blog__ba', 'ba');
      article.innerHTML = `
                <a class="ba__link" href="article.html?id=${item.id}">
                    <picture class="ba__image">
                        <source srcset="./img/blog/${index}.avif" type="image/avif">
                        <source srcset="./img/blog/${index}.webp" type="image/webp">
                        <img src="./img/blog/${index}.png" alt="${item.title}" width="140" height="140">
                    </picture>
                    <div class="ba__block">
                        <h2 class="ba__subtitle">
                            <span class="ba__text">
                                ${item.title}
                            </span>
                        </h2>
                    </div>
                </a>
        `;
      return article;
    });
    while ($.blogItems.blogList.childElementCount > 0) {
      $.blogItems.blogList.childNodes[0].remove();
    }
    $.blogItems.blogList.append(...articlesHTML);
  };
  loadArticles(renderArticles);
};
const setPage = $ => {
  getPageFromStorage();
  const nodeListOf = $.blogItems.pageElems.pageList.querySelectorAll('.pagination__item');
  [...nodeListOf].forEach(element => {
    element.classList.remove('pagination__item-active');
  });
  $.blogItems.pageElems.links.forEach(elem => {
    if (elem.getAttribute('data-pagenumber') === currentPage) {
      elem.parentElement.classList.add('pagination__item-active');
      return;
    }
  });
};
const setArrows = $ => {
  const arrowNodes = $.blogItems.blogPagination.querySelectorAll('svg');
  const [leftArrow, rightArrow] = arrowNodes;
  if (+currentPage !== 1) {
    leftArrow.classList.add('pagination__arrow-active');
  } else {
    leftArrow.classList.remove('pagination__arrow-active');
  }
  if (+currentPage >= 3) {
    rightArrow.classList.remove('pagination__arrow-active');
  } else {
    rightArrow.classList.add('pagination__arrow-active');
  }
};
const setArrowLink = $ => {
  endPage = localStorage.getItem('endPage');
  if (+currentPage > 1) {
    $.blogItems.pageElems.leftLink.href = `./blog.html?page=${+currentPage - 1}`;
  }
  if (+currentPage < +endPage) {
    $.blogItems.pageElems.rightLink.href = `./blog.html?page=${+currentPage + 1}`;
  }
};
const paginationClickHandler = $ => {
  const pageClick = () => {
    $.blogItems.pageElems.pageList.addEventListener('click', ev => {
      ev.preventDefault();
      const target = ev.target;
      const targetPage = target.getAttribute('data-pageNumber');
      if (+targetPage !== +currentPage) {
        currentPage = target.getAttribute('data-pageNumber');
        setStorage(currentPageStr, currentPage);
        loadItemsHandler($);
        paginationHandler($);
      }
    });
  };
  const arrowsClick = () => {
    const leftLink = $.blogItems.pageElems.leftLink;
    const rightLink = $.blogItems.pageElems.rightLink;
    leftLink.addEventListener('click', ev => {
      ev.preventDefault();
      const target = ev.target;
      const anchor = target.closest('.pagination__link-left');
      if (anchor && +currentPage > 1) {
        currentPage = +currentPage - 1;
        setStorage(currentPageStr, currentPage);
        loadItemsHandler($);
        paginationHandler($);
      }
    });
    rightLink.addEventListener('click', ev => {
      ev.preventDefault();
      const target = ev.target;
      const anchor = target.closest('.pagination__link-right');
      if (anchor && +currentPage < 3) {
        currentPage = +currentPage + 1;
        setStorage(currentPageStr, currentPage);
        loadItemsHandler($);
        paginationHandler($);
      }
    });
  };
  pageClick();
  arrowsClick();
};
const paginationHandler = $ => {
  setPage($);
  setArrows($);
  setArrowLink($);
};

/***/ }),

/***/ 348:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ renderBlog; }
/* harmony export */ });
/* harmony import */ var _createBlog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(429);
/* harmony import */ var _base_baseElems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(396);


const renderBlog = $ => {
  $.blog.forEach(({
    type,
    name
  }) => {
    if (type === $.types.header) {
      (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_1__/* .createHeader */ .dc)(name, $);
      return;
    }
    if (type === $.types.blog) {
      (0,_createBlog_js__WEBPACK_IMPORTED_MODULE_0__/* .createBlog */ .V)(name, $);
      return;
    }
    if (type === $.types.footer) {
      (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_1__/* .createFooter */ .vE)(name, $);
      return;
    }
  });
};

/***/ }),

/***/ 817:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CO: function() { return /* binding */ global; },
/* harmony export */   G9: function() { return /* binding */ basketUserId; },
/* harmony export */   V5: function() { return /* binding */ types; }
/* harmony export */ });
const get = 'GET';
const URL = 'https://muddy-substantial-gear.glitch.me';
const api = '/api';
const goods = '/goods';
const category = '/category';
const types = {
  footer: 'footer',
  section: 'section',
  header: 'header',
  main: 'main',
  blog: 'blog',
  article: 'article',
  category: 'category',
  basket: 'basket'
};
const _class = {
  footer: 'footer',
  section: 'section',
  header: 'header',
  main: 'main',
  blog: 'blog',
  article: 'article',
  item: 'item',
  wholesale: 'wholesale',
  category: 'category',
  search: 'search',
  card: 'card',
  cart: 'cart'
};
const shop = [{
  type: types.header,
  name: _class.header
}, {
  type: types.main,
  name: _class.main
}, {
  type: types.section,
  name: _class.item
}, {
  type: types.section,
  name: _class.wholesale
}, {
  type: types.footer,
  name: _class.footer
}];
const blog = [{
  type: types.header,
  name: _class.header
}, {
  type: types.blog,
  name: _class.blog
}, {
  type: types.footer,
  name: _class.footer
}];
const article = [{
  type: types.header,
  name: _class.header
}, {
  type: types.article,
  name: _class.article
}, {
  type: types.footer,
  name: _class.footer
}];
const categoryPage = [{
  type: types.header,
  name: _class.header
}, {
  type: types.main,
  name: _class.main
}, {
  type: types.section,
  name: _class.category
}, {
  type: types.footer,
  name: _class.footer
}];
const searchPage = [{
  type: types.header,
  name: _class.header
}, {
  type: types.main,
  name: _class.main
}, {
  type: types.section,
  name: _class.search
}, {
  type: types.footer,
  name: _class.footer
}];
const card = [{
  type: types.header,
  name: _class.header
}, {
  type: types.main,
  name: _class.main
}, {
  type: types.section,
  name: _class.card
}, {
  type: types.category,
  name: _class.category
}, {
  type: types.footer,
  name: _class.footer
}];
const cart = [{
  type: types.header,
  name: _class.header
}, {
  type: types.main,
  name: _class.main
}, {
  type: types.basket,
  name: _class.cart
}, {
  type: types.section,
  name: _class.wholesale
}, {
  type: types.footer,
  name: _class.footer
}];
const bc = {
  url: './',
  main: 'Главная',
  blog: 'Блог',
  article: 'имя статьи',
  category: 'имя каталога',
  card: 'имя товара',
  search: 'Поиск',
  categoryURL: './category.html',
  cardURL: './card.html',
  cart: 'Корзина',
  cartURL: './cart.html',
  searchURL: './search.html',
  blogURL: './blog.html',
  articleURL: './article.html'
};
const breadCrumbs = {
  blogInfo: [{
    url: bc.url,
    name: bc.main,
    ariaLabel: bc.main
  }, {
    url: bc.blogURL,
    name: bc.blog,
    ariaLabel: bc.blog
  }],
  articleInfo: [{
    url: bc.url,
    name: bc.main,
    ariaLabel: bc.main
  }, {
    url: bc.blogURL,
    name: bc.blog,
    ariaLabel: bc.blog
  }, {
    url: bc.articleURL,
    name: bc.article,
    ariaLabel: bc.article
  }],
  categoryInfo: [{
    url: bc.url,
    name: bc.main,
    ariaLabel: bc.main
  }, {
    url: bc.categoryURL,
    name: bc.category,
    ariaLabel: bc.category
  }],
  searchInfo: [{
    url: bc.url,
    name: bc.main,
    ariaLabel: bc.main
  }, {
    url: bc.searchURL,
    name: bc.search,
    ariaLabel: bc.search
  }],
  cardInfo: {
    home: {
      url: bc.url,
      name: bc.main,
      ariaLabel: bc.main
    },
    category: {
      url: bc.categoryURL,
      name: bc.category,
      ariaLabel: bc.category
    },
    card: {
      url: bc.cardURL,
      name: bc.card,
      ariaLabel: bc.card
    }
  },
  cartInfo: {
    home: {
      url: bc.url,
      name: bc.main,
      ariaLabel: bc.main
    },
    cart: {
      url: bc.cartURL,
      name: bc.cart,
      ariaLabel: bc.cart
    }
  }
};
const burgerMenu = {
  visibility: false,
  menu: './svg/header/menu.svg#menu',
  clear: './svg/header/menu.svg#clear'
};
const basketUserId = 'userId';
const global = {
  shop,
  blog,
  article,
  types,
  breadCrumbs,
  burgerMenu,
  get,
  api,
  category,
  URL,
  goods,
  categoryPage,
  searchPage,
  card,
  cart
};

/***/ }),

/***/ 260:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: function() { return /* binding */ createBCSearch; }
/* harmony export */ });
/* harmony import */ var _base_tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(433);

const createBCSearch = bc => {
  const paramsObject = (0,_base_tools_js__WEBPACK_IMPORTED_MODULE_0__/* .getSearchParams */ .Q)();
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
  const last = bc[bc.length - 1];
  const name = paramsObject.search;
  last.url += `?search=${name}`;
  const home = bc[0];
  const search = bc[1];
  ul.insertAdjacentHTML('beforeend', `
            <li class="bc__item">
            <a class="bc__link" href="${home.url}" aria-label="${home.ariaLabel}">${home.name}</a>
                <div class="bc__arrow-block">
                    <svg class="bc__nav-arrow">
                        <use href="./svg/article/nav-arrow.svg#nav-arrow"></use>
                    </svg>
                </div>
            </li>
            <li class="bc__item">
            <a class="bc__link" href="${search.url}" aria-label="${search.ariaLabel}">${search.name}</a>
                <div class="bc__arrow-block">
                    <svg class="bc__nav-arrow">
                        <use href="./svg/article/nav-arrow.svg#nav-arrow"></use>
                    </svg>
                </div>
            </li>
        `);
  return breadCrumbs;
};

/***/ }),

/***/ 969:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: function() { return /* binding */ renderSearch; }
/* harmony export */ });
/* unused harmony export cbRenderCatalog */
/* harmony import */ var _base_baseElems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(396);
/* harmony import */ var _base_tools_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(433);
/* harmony import */ var _shop_fetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(224);
/* harmony import */ var _createSearch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(260);




const renderSearch = $ => {
  $.searchPage.forEach(({
    type,
    name
  }) => {
    if (type === $.types.header) {
      (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_0__/* .createHeader */ .dc)(name, $);
      return;
    }
    if (type === $.types.main) {
      (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_0__/* .createMain */ .CY)(name, $);
      const breadCrumbs = (0,_createSearch_js__WEBPACK_IMPORTED_MODULE_1__/* .createBCSearch */ .U)($.breadCrumbs.searchInfo);
      $.main.append(breadCrumbs);
      return;
    }
    if (type === $.types.section) {
      const paramsObject = (0,_base_tools_js__WEBPACK_IMPORTED_MODULE_2__/* .getSearchParams */ .Q)();
      createSectionSearch(name, $, paramsObject);
      return;
    }
    if (type === $.types.footer) {
      (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_0__/* .createFooter */ .vE)(name, $);
      return;
    }
  });
};
const cbRenderCatalog = (error, data, $) => {
  if (error) {
    handleErrorMessage(error, data, $);
    return;
  }
  return {
    data
  };
};
const handleErrorMessage = (error, data, $) => {
  if (!data) data = error.message;
  console.warn(error, data);
};
const renderCardsByCategory = ($, items) => {
  const cards = document.querySelector('.category__cards');
  const cardAfterStyle = document.createElement("style");
  (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_0__/* .iterateOverCards */ .kZ)(cards, $, cardAfterStyle, items);
};
const createSectionSearch = (name, $, paramsObject) => {
  const itemName = paramsObject.search;
  (0,_shop_fetch_js__WEBPACK_IMPORTED_MODULE_3__/* .getGoods */ .QO)($).then(data => {
    const returnedData = data.data;
    const items = returnedData.filter(elem => elem.title.toLowerCase().includes(itemName));
    console.log(items);
    const resultMessage = items && items.length > 0 ? 'Вот что мы нашли...' : 'По вашему запросу ничего не нашлось...';
    if (items && items.length > 0) {
      $.main.insertAdjacentHTML('beforeend', `
            <section class="${name}" aria-label="Поиск">
            <h2 class="visually-hidden">${resultMessage}</h2>
            <div class="container">
                <h3 class="category__title">${resultMessage}</h3>
                <ul class="category__cards">
                </ul>
            </div>
        </section>
            `);
      const section = $.main.querySelector('section');
      section.style.color = '#2d2d2d';
      renderCardsByCategory($, items);
    } else {
      $.main.insertAdjacentHTML('beforeend', `
            <section class="${name}" aria-label="Поиск">
            <h2 class="visually-hidden">${resultMessage}</h2>
            <div class="container">
                <h3 class="category__title">${resultMessage}</h3>
                
            </div>
        </section>
            `);
      const section = $.main.querySelector('section');
      section.style.color = '#2d2d2d';
    }
  });
};

/***/ }),

/***/ 118:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: function() { return /* binding */ createSectionBasket; },
/* harmony export */   a: function() { return /* binding */ createBCCart; }
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(817);
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(863);
/* harmony import */ var _card_createCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(167);



const createBCCart = ($, bc) => {
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
  ul.insertAdjacentHTML('beforeend', `
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
const renderBasketItems = $ => {
  const list = $.main.querySelector('.basket__items-list');
  const basketArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__/* .getStorage */ .c)(_constants_js__WEBPACK_IMPORTED_MODULE_0__/* .basketUserId */ .G9);
  if (basketArray.length > 0) {
    basketArray.forEach(elem => {
      const item = elem.item;
      const positionTotal = elem.qty * item.price;
      const oldPrice = positionTotal.toString();
      let newPrice = NaN;
      if (item.discount === 0) {
        newPrice = Math.ceil(positionTotal / 1.2).toString();
      } else {
        newPrice = Math.ceil(positionTotal - positionTotal * item.discount / 100).toString();
      }
      const {
        firstPart: firstNew,
        lastPart: lastNew
      } = (0,_card_createCard_js__WEBPACK_IMPORTED_MODULE_1__/* .calculateDepth */ .z_)(newPrice);
      const {
        firstPart: firstOld,
        lastPart: lastOld
      } = (0,_card_createCard_js__WEBPACK_IMPORTED_MODULE_1__/* .calculateDepth */ .z_)(oldPrice);
      const creditfrom = Math.ceil(item.price - item.price / 1.2);
      list.insertAdjacentHTML('beforeend', `
                    
                <li class="basket__list-item" data-id="${item.id}">
                    <div class="basket__list-all-info-block">
                    <div class="basket__list-item-block">
                        
                        <label class="basket__label">
                            <input type="checkbox" class="basket__checkbox-input"
                                >
                            <span class="basket__checkbox-icon"></span>
                        </label>
                        
                        <a href="card.html?id=${item.id}" class="basket__item-link">
                            <picture  class="basket__picture" data-id="${item.id}">
                                <source srcset="" type="image/avif">
                                <source srcset="" type="image/webp">
                                    <img class="basket__image-small"
                                     src="https://muddy-substantial-gear.glitch.me/${item.image}"
                                     alt="${item.title}">
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
      const elemList = list.querySelector('li:nth-last-child(1)');
    });
  }
};
const renderPictures = () => {
  const pictList = document.querySelector('.basket__dely-picture-block');
  const basketArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__/* .getStorage */ .c)(_constants_js__WEBPACK_IMPORTED_MODULE_0__/* .basketUserId */ .G9);
  if (basketArray.length > 0) {
    basketArray.forEach(elem => {
      const item = elem.item;
      pictList.insertAdjacentHTML('beforeend', `
                    <picture class="basket__picture" data-id="${item.id}">
                            <source srcset="" type="image/avif">
                            <source srcset="" type="image/webp">
                                <img class="basket__image-small"
                src="https://muddy-substantial-gear.glitch.me/${item.image}"
                alt="${item.title}">
                        </picture>
                `);
    });
  }
};
const createSectionBasket = (name, $) => {
  $.main.insertAdjacentHTML('beforeend', `
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
                <label>
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
                </label>
            </div>
                
            <div class="basket__underline"></div>
            <ul class="basket__items-list">
            </ul>
        </div>
        
        <div class="basket__total">
                
                <div class="basket__price-block">
                    <span class="basket__total-text">итого: </span>
                    <div class="basket__total-text">
                    <span class="basket__total-value"></span>
                    <span class="basket__total-value">0 ₽</span>
                    </div>
                </div>
                <div class="basket__item-block">
                    <div class="basket__price">
                        <span class="basket__item-details-text">Товары, 0 шт.</span>
                        <div class="basket__details-item-total">
                        <span class="basket__item-details-value"></span>
                        <span class="basket__item-details-value">0 ₽</span>
                        </div>
                    </div>
                    <div class="basket__price">
                        <span class="basket__item-details-text">Скидка </span>
                        <div class="basket__details-item-discount">
                        <span class="basket__item-details-value"></span>
                        <span class="basket__item-details-value">0 ₽</span>
                        </div>
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
                           checked required>
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
  renderPictures();
};

/***/ }),

/***/ 11:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z4: function() { return /* binding */ renderBasket; },
/* harmony export */   m3: function() { return /* binding */ setBasketQuantity; },
/* harmony export */   uu: function() { return /* binding */ basketHandlers; }
/* harmony export */ });
/* unused harmony exports handleChangeQuantity, handleChooseAll, deleteItemByCheckbox, deleteItem */
/* harmony import */ var _base_baseElems_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(396);
/* harmony import */ var _createShop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var _basket_createBasket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(118);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(817);
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(863);
/* harmony import */ var _card_createCard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(167);






const renderBasket = $ => {
  $.cart.forEach(({
    type,
    name
  }) => {
    if (type === $.types.header) {
      (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_4__/* .createHeader */ .dc)(name, $);
      return;
    }
    if (type === $.types.main) {
      const bc = (0,_basket_createBasket_js__WEBPACK_IMPORTED_MODULE_1__/* .createBCCart */ .a)($, $.breadCrumbs.cartInfo);
      (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_4__/* .createMain */ .CY)(name, $);
      $.main.append(bc);
      return;
    }
    if (type === $.types.basket) {
      (0,_basket_createBasket_js__WEBPACK_IMPORTED_MODULE_1__/* .createSectionBasket */ .$)(name, $);
      return;
    }
    if (type === $.types.section) {
      (0,_createShop_js__WEBPACK_IMPORTED_MODULE_0__/* .createSection */ .vB)(name, $);
      return;
    }
    if (type === $.types.footer) {
      (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_4__/* .createFooter */ .vE)(name, $);
      return;
    }
  });
};
const setBasketQuantity = () => {
  const valueHeader = document.querySelector('.navigation__cart-count');
  const valueBasket = document.querySelector('.basket__cart-count');
  const basketArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_5__/* .getStorage */ .c)(_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .basketUserId */ .G9);
  if (basketArray.length > 0) {
    const sum = basketArray.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.qty;
    }, 0);
    if (valueBasket) {
      valueBasket.textContent = sum;
      valueBasket.style.display = 'block';
    }
    if (valueHeader) {
      valueHeader.textContent = sum;
      valueHeader.style.display = 'block';
    }
  } else {
    if (valueBasket) {
      valueBasket.style.display = 'none';
    }
    if (valueHeader) {
      valueHeader.style.display = 'none';
    }
  }
};

// TODO plusminusCalculate
const calculate = (value, id, target) => {
  const basketArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_5__/* .getStorage */ .c)(_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .basketUserId */ .G9);
  const elem = basketArray.find(elem => elem.item.id === id);
  const item = elem.item;
  if (elem) {
    elem.qty += value;
  }
  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_5__/* .setStorage */ .p)(_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .basketUserId */ .G9, basketArray);
  setBasketQuantity();
  calculateTotal();
  const priceBlock = target.closest('.basket__list-all-info-block');
  const newPriceFirst = priceBlock.querySelector('.basket__item-new-price:nth-child(1)');
  const newPriceSecond = priceBlock.querySelector('.basket__item-new-price:nth-child(2)');
  const oldPriceFirst = priceBlock.querySelector('.basket__item-old-price:nth-child(1)');
  const oldPriceSecond = priceBlock.querySelector('.basket__item-old-price:nth-child(2)');
  const creditFrom = priceBlock.querySelector('.basket__credit-from');
  const positionTotal = elem.qty * item.price;
  const oldPrice = positionTotal.toString();
  let newPrice = NaN;
  if (item.discount === 0) {
    newPrice = Math.ceil(positionTotal / 1.2).toString();
  } else {
    newPrice = Math.ceil(positionTotal - positionTotal * item.discount / 100).toString();
  }
  const {
    firstPart: firstNew,
    lastPart: lastNew
  } = (0,_card_createCard_js__WEBPACK_IMPORTED_MODULE_3__/* .calculateDepth */ .z_)(newPrice);
  const {
    firstPart: firstOld,
    lastPart: lastOld
  } = (0,_card_createCard_js__WEBPACK_IMPORTED_MODULE_3__/* .calculateDepth */ .z_)(oldPrice);
  const creditfromValue = Math.ceil(positionTotal - positionTotal / 1.2);
  newPriceFirst.innerHTML = `${firstNew}&nbsp`;
  newPriceSecond.innerHTML = `${lastNew} ₽`;
  oldPriceFirst.innerHTML = `${firstOld}&nbsp`;
  oldPriceSecond.innerHTML = `${lastOld} ₽`;
  creditFrom.innerHTML = `В кредит от ${creditfromValue} ₽`;
};
const handleChangeQuantity = () => {
  const list = document.querySelector('.basket__items-list');
  if (list) {
    list.addEventListener('click', ({
      target
    }) => {
      const plusBtn = '.basket__plus-btn';
      const minusBtn = '.basket__minus-btn';
      if (target.closest(plusBtn)) {
        handleQtyBtns(target, plusBtn);
      }
      if (target.closest(minusBtn)) {
        handleQtyBtns(target, minusBtn);
      }
    });
  }
};

// TODO calculateTotal
const calculateTotal = () => {
  const basket = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_5__/* .getStorage */ .c)(_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .basketUserId */ .G9);
  const fDiscount = document.querySelector('.basket__total-value:nth-child(1)');
  // если элемент не существует на странице  то будет ошибка
  if (fDiscount) {
    const lDiscount = document.querySelector('.basket__total-value:nth-child(2)');
    const fTotal = document.querySelector('.basket__details-item-total ' + '.basket__item-details-value:nth-child(1)');
    const lTotal = document.querySelector('.basket__details-item-total ' + '.basket__item-details-value:nth-child(2)');
    const fDiff = document.querySelector('.basket__details-item-discount ' + '.basket__item-details-value:nth-child(1)');
    const lDiff = document.querySelector('.basket__details-item-discount ' + '.basket__item-details-value:nth-child(2)');
    let total = 0;
    let discoutedSum = 0;
    const list = document.querySelectorAll('.basket__list-item');
    fTotal.textContent = '0';
    lTotal.textContent = ` ₽`;
    fDiscount.textContent = '0';
    lDiscount.textContent = ` ₽`;
    fDiff.textContent = '0';
    lDiff.textContent = ` ₽`;
    list.forEach(li => {
      const checkbox = li.querySelector('.basket__checkbox-input');
      const id = li.getAttribute('data-id');
      if (checkbox.checked) {
        const data = basket.find(i => i.item.id === id);
        if (data) {
          const item = data.item;
          const localTotal = data.qty * item.price;
          total += data.qty * item.price;
          if (item.discount > 0) {
            discoutedSum += Math.ceil(localTotal - localTotal * item.discount / 100);
          } else {
            discoutedSum += Math.ceil(localTotal / 1.2);
          }
          const diff = total - discoutedSum;

          // console.log(' : ', total);
          // console.log(' : ', discoutedSum);
          // console.log(' : ', diff);

          const {
            firstPart: firstTotal,
            lastPart: lastTotal
          } = (0,_card_createCard_js__WEBPACK_IMPORTED_MODULE_3__/* .calculateDepth */ .z_)(total.toString());
          const {
            firstPart: firstDiscount,
            lastPart: lastDiscount
          } = (0,_card_createCard_js__WEBPACK_IMPORTED_MODULE_3__/* .calculateDepth */ .z_)(discoutedSum.toString());
          const {
            firstPart: firstDiff,
            lastPart: lastDiff
          } = (0,_card_createCard_js__WEBPACK_IMPORTED_MODULE_3__/* .calculateDepth */ .z_)(diff.toString());
          fTotal.textContent = firstTotal;
          lTotal.textContent = lastTotal + ` ₽`;
          fDiscount.textContent = firstDiscount;
          lDiscount.textContent = lastDiscount + ` ₽`;
          fDiff.textContent = firstDiff;
          lDiff.textContent = lastDiff + ` ₽`;
        }
      }
    });
  }
};
const handleQtyBtns = (target, className) => {
  const btnBlock = target.closest('.basket__list-quantity-block');
  const text = btnBlock.querySelector('.basket__quantity-text');
  let value = 0;
  const el = target.closest('li');
  const id = el.getAttribute('data-id');
  if (className === '.basket__plus-btn') {
    value = 1;
    text.textContent = +text.textContent + value;
    calculate(value, id, target);
  }
  if (className === '.basket__minus-btn') {
    value = -1;
    if (+text.textContent > 1) {
      text.textContent = +text.textContent + value;
      calculate(value, id, target);
      return;
    }
  }
};

//todo chooseAll
const handleChooseAll = () => {
  const label = document.querySelector('.basket__list-manage-block .basket__label');
  if (label) {
    const checkbox = label.querySelector('.basket__checkbox-input');
    const checkboxes = document.querySelectorAll('.basket__list-item-block .basket__checkbox-input');
    label.addEventListener('click', ({
      target
    }) => {
      checkboxes.forEach(box => {
        if (checkbox.checked) {
          box.checked = true;
        } else {
          box.checked = false;
        }
      });
      calculateTotal();
    });
  }
  ;
};

// TODO handleSingleChoose
const handleChooseSingle = () => {
  // в листе всегда нужно брать его ли элементы  а не сам лист!!!!
  const list = document.querySelectorAll('.basket__list-item');
  list.forEach(li => {
    const checkbox = li.querySelector('.basket__checkbox-input');
    checkbox.addEventListener('click', ({
      target
    }) => {
      calculateTotal();
    });
  });
};
const removePictures = id => {
  const pictures = document.querySelectorAll('.basket__dely-picture-block .basket__picture');
  pictures.forEach(item => {
    const attr = item.getAttribute('data-id');
    if (attr && attr === id) item.remove();
  });
};
const deleteItemByCheckbox = () => {
  const block = document.querySelector('.basket__list-manage-block .basket__trashcan-svg');
  const list = document.querySelector('.basket__items-list');
  if (block) {
    block.addEventListener('click', ({
      target
    }) => {
      if (target.closest('.basket__trashcan-svg')) {
        const liEls = list.querySelectorAll('li');
        liEls.forEach(el => {
          const checkbox = el.querySelector('.basket__checkbox-input');
          if (checkbox && checkbox.checked) {
            el.remove();
            const id = el.getAttribute('data-id');
            const storage = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_5__/* .getStorage */ .c)(_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .basketUserId */ .G9);
            const result = storage.filter(data => data.item.id !== id);
            (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_5__/* .setStorage */ .p)(_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .basketUserId */ .G9, result);
            setBasketQuantity();
            removePictures(id);
            calculateTotal();
          }
        });
        const checkbox = document.querySelector('.basket__list-manage-block .basket__checkbox-input');
        checkbox.checked = false;
      }
    });
  }
};
const deleteItem = () => {
  const btns = document.querySelectorAll('.basket__list-all-info-block .basket__trashcan-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', ({
      target
    }) => {
      if (target.closest('.basket__trashcan-svg')) {
        const li = target.closest('li');
        li.remove();
        const id = li.getAttribute('data-id');
        const storage = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_5__/* .getStorage */ .c)(_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .basketUserId */ .G9);
        const result = storage.filter(data => data.item.id !== id);
        (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_5__/* .setStorage */ .p)(_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .basketUserId */ .G9, result);
        setBasketQuantity();
        removePictures(id);
        calculateTotal();
      }
    });
  });
};
const basketHandlers = () => {
  setBasketQuantity();
  handleChooseAll();
  deleteItemByCheckbox();
  deleteItem();
  handleChangeQuantity();
  // calculateTotal();
  handleChooseSingle();
};

/***/ }),

/***/ 304:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: function() { return /* binding */ burgerHandler; }
/* harmony export */ });
/* harmony import */ var _base_baseRafAnimation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(447);

const burgerHandler = $ => {
  const burgerBtn = document.querySelector('.header__button-menu');
  const menuSvg = document.querySelector('.header__button-menu-svg use');
  const burger = document.querySelector('.burger');
  const burgerMenu = document.querySelector('.burger__menu');
  const burgerBlock = document.querySelector('.burger__block');
  let blockHeight = NaN;
  const updateBlockHeight = () => {
    const height = +burgerBlock.scrollHeight;
    let paddingBottom = 92;
    if (screen.width <= 650) {
      paddingBottom = 45;
    }
    blockHeight = height + paddingBottom;
    if ($.burgerMenu.visibility) {
      burgerMenu.style.height = `${blockHeight}px`;
    }
  };
  const animationIconHandler = () => {
    menuSvg.style.opacity = '0';
    (0,_base_baseRafAnimation_js__WEBPACK_IMPORTED_MODULE_0__/* .rafAnimationIcon */ .g)(500, 1, progress => {
      menuSvg.style.opacity = `${progress}`;
    });
  };
  const closeMenu = async () => {
    menuSvg.setAttribute('href', $.burgerMenu.menu);
    animationIconHandler();
    updateBlockHeight();
    const rafPromise = (0,_base_baseRafAnimation_js__WEBPACK_IMPORTED_MODULE_0__/* .rafAnimationMenu */ .l)(300, -1, burgerMenu.scrollHeight, progress => {
      burgerMenu.style.height = `${progress}px`;
    });
    await rafPromise.then(data => {
      if (data === 0) {
        burger.style.visibility = 'hidden';
      }
    });
  };
  const openMenu = () => {
    menuSvg.setAttribute('href', $.burgerMenu.clear);
    // document.body.style.overflow = 'hidden';
    burger.style.visibility = 'visible';
    animationIconHandler();
    updateBlockHeight();
    (0,_base_baseRafAnimation_js__WEBPACK_IMPORTED_MODULE_0__/* .rafAnimationMenu */ .l)(300, 1, blockHeight, progress => {
      burgerMenu.style.height = `${progress}px`;
    });
  };
  burgerBtn.addEventListener('click', () => {
    if ($.burgerMenu.visibility) {
      closeMenu();
    } else {
      openMenu();
    }
    $.burgerMenu.visibility = !$.burgerMenu.visibility;
  });
  burger.addEventListener('click', ({
    target
  }) => {
    if (target === burger) {
      closeMenu();
      $.burgerMenu.visibility = !$.burgerMenu.visibility;
    }
  });
  window.addEventListener('resize', () => {
    updateBlockHeight();
  });
};

/***/ }),

/***/ 285:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: function() { return /* binding */ createBurger; }
/* harmony export */ });
const createBurger = ($, callback) => {
  const burger = document.createElement('div');
  burger.classList.add('burger');
  burger.insertAdjacentHTML('beforeend', `

        <div class="burger__menu">
              <div class="container burger__container">
                    <div class="burger__block">
                        <div class="burger__catalog">
                            <h2 class="burger__subtitle">Каталог</h2>
                            <nav class="burger__nav">
                                <ul class="burger__list">
                                
                                </ul>
                            </nav>
                        </div>
                        <div class="burger__buyers-info">
                            <h2 class="burger__subtitle">Покупателям</h2>
                            <nav class="burger__nav">
                                <ul class="burger__list burger__list">
                                    <li class="burger__elem"><a href="./">Оплата заказа</a></li>
                                    <li class="burger__elem"><a href="./">Условия доставки</a></li>
                                    <li class="burger__elem"><a href="./">Условия возврата товара</a></li>
                                    <li class="burger__elem"><a href="./blog.html">Блог</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="burger__contacts">
                            <h2 class="burger__subtitle">Связаться с нами</h2>
                            <nav class="burger__nav">
                                <ul class="burger__list">
                                    <li class="burger__elem"><a href="./">Контакты</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
              </div>
        </div>
  `);
  const list = burger.querySelector('.burger__list');
  const categories = callback($);
  categories.then(data => {
    data.data.forEach((elem, index) => {
      const li = document.createElement('li');
      li.className = "burger__elem";
      const a = document.createElement('a');
      a.href = `category.html?name=${elem}`;
      a.textContent = elem;
      li.append(a);
      list.append(li);
    });
  });
  return burger;
};

/***/ }),

/***/ 167:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X1: function() { return /* binding */ createSectionCard; },
/* harmony export */   iH: function() { return /* binding */ createBCCard; },
/* harmony export */   yz: function() { return /* binding */ createSectionRecommended; },
/* harmony export */   z_: function() { return /* binding */ calculateDepth; }
/* harmony export */ });
/* unused harmony export renderCardsByCategory */
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(224);
/* harmony import */ var _base_tools_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(433);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(817);
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(863);
/* harmony import */ var _basket_renderBasket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _base_baseElems_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(396);






const calculateDepth = priceValue => {
  let firstPart = NaN;
  let lastPart = NaN;
  const depth = Math.floor(priceValue.length - 3);
  if (depth > 0) {
    firstPart = priceValue.slice(0, depth);
    lastPart = priceValue.slice(depth, priceValue.length);
  } else {
    firstPart = priceValue;
    lastPart = '';
  }
  return {
    firstPart,
    lastPart
  };
};
const cardAfterStyle = document.createElement("style");
const createSectionCard = (name, $, paramsObject) => {
  const cardId = paramsObject.id;
  (0,_fetch_js__WEBPACK_IMPORTED_MODULE_2__/* .getItemById */ .PF)($, cardId).then(data => {
    const item = data.data;
    const oldPrice = item.price.toString();
    let newPrice = NaN;
    if (item.discount === 0) {
      newPrice = Math.ceil(item.price / 1.2).toString();
    } else {
      newPrice = Math.ceil(item.price - item.price * item.discount / 100).toString();
    }
    const {
      firstPart: firstNew,
      lastPart: lastNew
    } = calculateDepth(newPrice);
    const {
      firstPart: firstOld,
      lastPart: lastOld
    } = calculateDepth(oldPrice);
    const creditfrom = Math.ceil(item.price - item.price / 1.2);
    $.main.insertAdjacentHTML('beforeend', `
            <section class="details" aria-label="${item.title}">
            <h2 class="visually-hidden">${item.title}</h2>
            <div class="container">
                <h3 class="details__title">${item.title}</h3>
                <div class="details__underline"></div>
                <div class="details__block">
                    <picture class="details__figure">
                    <img loading="lazy" class="details__image"
                     src="${$.URL}/${item.image}"
                     alt="${item.title}" width="757" height="427">
                    </picture>
                    <div class="details__cart-info">
                        <div class="details__price-block">
                            <div class="details__price">
                                <span class="details__new-price">${firstNew} </span>
                                <span class="details__new-price">${lastNew} ₽</span>
                            </div>
                            <div class="details__price">
                                <span class="details__old-price">${firstOld} </span>
                                <span class="details__old-price">${lastOld} ₽</span>
                            </div>
                        </div>
                        <p class="details__credit-from">В кредит от ${creditfrom} ₽</p>
                        <div class="details__add-block">
                            <button class="details__add-to-card">Добавить в корзину</button>
                            <button class="details__add-to-favorite">
                                    <svg class="details__add-to-favorite-icon" xmlns="http://www.w3.org/2000/svg"
                                     width="33" height="33" viewBox="0 0 33 33" >
                                        <path d="M22.6875 4.125C20.295 4.125 17.9987
                                        5.23875 16.5 6.99875C15.0012 5.23875 12.705 4.125
                                        10.3125 4.125C6.0775 4.125 2.75 7.4525 2.75 11.6875C2.75
                                        16.885 7.425 21.12 14.5062 27.555L16.5 29.3563L18.4937
                                         27.5413C25.575 21.12 30.25 16.885 30.25
                                         11.6875C30.25 7.4525 26.9225 4.125 22.6875
                                          4.125ZM16.6375 25.5062L16.5 25.6437L16.3625
                                          25.5062C9.8175 19.58 5.5 15.6613 5.5 11.6875C5.5
                                          8.9375 7.5625 6.875 10.3125 6.875C12.43 6.875 14.4925
                                          8.23625 15.2212 10.12H17.7925C18.5075 8.23625 20.57
                                          6.875 22.6875 6.875C25.4375 6.875 27.5 8.9375 27.5
                                           11.6875C27.5 15.6613 23.1825 19.58 16.6375 25.5062Z"/>
                                    </svg>

                            </button>
                        </div>
                        <div class="details__info-block">
                            <p class="details__text-info">Доставка</p>
                            <p class="details__text-details">1-3 января</p>
                            <p class="details__text-info">Продавец</p>
                            <p class="details__text-details">ShopOnline</p>
                        </div>
                       
                        <button class="details__price-reduction-btn">
                            <svg class="details__price-reduction-bell-svg" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24">
                                <path d="M19 13.586V10C19 6.783 16.815 4.073
                                 13.855 3.258C13.562 2.52 12.846 2 12 2C11.154
                                 2 10.438 2.52 10.145 3.258C7.185 4.074 5 6.783
                                  5 10V13.586L3.293 15.293C3.19996 15.3857
                                  3.12617 15.4959 3.07589 15.6172C3.0256 15.7386
                                   2.99981 15.8687 3 16V18C3 18.2652 3.10536 18.5196
                                   3.29289 18.7071C3.48043 18.8946 3.73478 19 4
                                   19H20C20.2652 19 20.5196 18.8946 20.7071
                                   18.7071C20.8946 18.5196 21 18.2652 21
                                   18V16C21.0002 15.8687 20.9744 15.7386 20.9241
                                   15.6172C20.8738 15.4959 20.8 15.3857 20.707
                                   15.293L19 13.586ZM19 17H5V16.414L6.707 14.707C6.80004
                                   14.6143 6.87383 14.5041 6.92412 14.3828C6.9744
                                    14.2614 7.00019 14.1313 7 14V10C7 7.243 9.243
                                     5 12 5C14.757 5 17 7.243 17 10V14C17 14.266
                                     17.105 14.52 17.293 14.707L19 16.414V17ZM12
                                      22C12.6193 22.0008 13.2235 21.8086 13.7285
                                      21.4502C14.2335 21.0917 14.6143 20.5849 14.818
                                       20H9.182C9.38566 20.5849 9.76648 21.0917
                                        10.2715 21.4502C10.7765 21.8086 11.3807 22.0008 12 22Z"/>
                            </svg>
                            <span class="details__price-reduction-text">Узнать о снижении цены</span>
                        </button>
                    </div>
                </div>
                <div class="details__description">
                    <h4 class="details__subtitle">Описание:</h4>
                    <p class="details__descr-text">${item.description}</p>
                </div>
            </div>
        </section>
            `);
    if (item.discount > 0) {
      cardAfterStyle.innerHTML += `.details__figure:after {
                content: '-${item.discount}%';
                top: 20px;
                right: 20px;
                bottom: unset;
                left: unset;
            }`;
      document.body.append(cardAfterStyle);
    }
    const addBtn = $.main.querySelector('.details__add-to-card');
    addBtn.addEventListener('click', ({
      target
    }) => {
      const basketArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__/* .getStorage */ .c)(_constants_js__WEBPACK_IMPORTED_MODULE_0__/* .basketUserId */ .G9);
      let index = NaN;
      const elem = basketArray.find((elem, index) => {
        if (elem.item.id === item.id) {
          index = index;
          return elem;
        }
      });
      if (elem) {
        elem.qty += 1;
      } else {
        const itemObj = {
          item: item,
          qty: 1
        };
        basketArray.push(itemObj);
      }
      (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__/* .setStorage */ .p)(_constants_js__WEBPACK_IMPORTED_MODULE_0__/* .basketUserId */ .G9, basketArray);
      (0,_basket_renderBasket_js__WEBPACK_IMPORTED_MODULE_1__/* .setBasketQuantity */ .m3)();
    });
  });
};
const createBCCard = ($, bc) => {
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
  const category = bc.category;
  const card = bc.card;
  const paramsURL = (0,_base_tools_js__WEBPACK_IMPORTED_MODULE_4__/* .getSearchParams */ .Q)();
  (0,_fetch_js__WEBPACK_IMPORTED_MODULE_2__/* .getItemById */ .PF)($, paramsURL.id).then(data => {
    const item = data.data;
    ul.insertAdjacentHTML('beforeend', `
            <li class="bc__item">
            <a class="bc__link" href="${home.url}" aria-label="${home.ariaLabel}">${home.name}</a>
                <div class="bc__arrow-block">
                    <svg class="bc__nav-arrow">
                        <use href="./svg/article/nav-arrow.svg#nav-arrow"></use>
                    </svg>
                </div>
            </li>
            <li class="bc__item">
            <a class="bc__link" href="${category.url}?name=${item.category}"
            aria-label="${item.category}">${item.category}</a>
                <div class="bc__arrow-block">
                    <svg class="bc__nav-arrow">
                        <use href="./svg/article/nav-arrow.svg#nav-arrow"></use>
                    </svg>
                </div>
            </li>
            <li class="bc__item">
            <a class="bc__link" href="${card.url}?id=${item.id}"
            aria-label="${item.title}">${item.title}</a>
                <div class="bc__arrow-block">
                </div>
            </li>
        `);
  });
  return breadCrumbs;
};
const createSectionRecommended = (name, $, paramsObject) => {
  const itemId = paramsObject.id;
  (0,_fetch_js__WEBPACK_IMPORTED_MODULE_2__/* .getItemById */ .PF)($, itemId).then(data => {
    const item = data.data;
    (0,_fetch_js__WEBPACK_IMPORTED_MODULE_2__/* .getGoodsByCategory */ .n_)($, item.category).then(data => {
      const items = data.data;
      if (items && items.length > 0) {
        $.main.insertAdjacentHTML('beforeend', `
            <section class="${name}" aria-label="Рекомендуем также">
            <h2 class="visually-hidden">Рекомендуем также</h2>
            <div class="container">
                <h3 class="category__title">Рекомендуем также</h3>
                <ul class="category__cards">
                </ul>
            </div>
        </section>
            `);
        const title = $.main.querySelector('.category__title');
        title.style.cssText = `
                    margin-bottom: 60px;
                `;
        renderCardsByCategory($, items, itemId);
      }
    });
  });
};
const renderCardsByCategory = ($, source, itemId) => {
  const cards = document.querySelector('.category__cards');
  const cardAfterStyle = document.createElement("style");
  let temp = source.filter(x => x.id !== itemId);
  const items = temp.slice(0, 6);
  (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_5__/* .iterateOverCards */ .kZ)(cards, $, cardAfterStyle, items);
};

/***/ }),

/***/ 480:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: function() { return /* binding */ renderCard; }
/* harmony export */ });
/* harmony import */ var _base_baseElems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(396);
/* harmony import */ var _base_tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(433);
/* harmony import */ var _createCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);




const renderCard = $ => {
  const paramsObject = (0,_base_tools_js__WEBPACK_IMPORTED_MODULE_1__/* .getSearchParams */ .Q)();
  $.card.forEach(({
    type,
    name
  }) => {
    if (type === $.types.header) {
      (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_2__/* .createHeader */ .dc)(name, $);
      return;
    }
    if (type === $.types.main) {
      const bc = (0,_createCard_js__WEBPACK_IMPORTED_MODULE_0__/* .createBCCard */ .iH)($, $.breadCrumbs.cardInfo);
      (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_2__/* .createMain */ .CY)(name, $);
      $.main.append(bc);
      return;
    }
    if (type === $.types.section) {
      (0,_createCard_js__WEBPACK_IMPORTED_MODULE_0__/* .createSectionCard */ .X1)(name, $, paramsObject);
      return;
    }
    if (type === $.types.category) {
      (0,_createCard_js__WEBPACK_IMPORTED_MODULE_0__/* .createSectionRecommended */ .yz)(name, $, paramsObject);
      return;
    }
    if (type === $.types.footer) {
      (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_2__/* .createFooter */ .vE)(name, $);
      return;
    }
  });
};

/***/ }),

/***/ 942:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: function() { return /* binding */ createBCCategory; }
/* harmony export */ });
/* harmony import */ var _base_tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(433);

const createBCCategory = bc => {
  const paramsObject = (0,_base_tools_js__WEBPACK_IMPORTED_MODULE_0__/* .getSearchParams */ .Q)();
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
  const last = bc[bc.length - 1];
  const name = paramsObject.name;
  last.ariaLabel = name;
  last.name = name;
  last.url += `?name=${name}`;
  for (const {
    url,
    name,
    ariaLabel
  } of bc) {
    ul.insertAdjacentHTML('beforeend', `
            <li class="bc__item">
            <a class="bc__link" href="${url}" aria-label="${ariaLabel}">${name}</a>
                <div class="bc__arrow-block">
                    <svg class="bc__nav-arrow">
                        <use href="./svg/article/nav-arrow.svg#nav-arrow"></use>
                    </svg>
                </div>
            </li>
        `);
  }
  return breadCrumbs;
};

/***/ }),

/***/ 989:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: function() { return /* binding */ cbRenderCatalog; },
/* harmony export */   o: function() { return /* binding */ renderCategory; }
/* harmony export */ });
/* harmony import */ var _base_baseElems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(396);
/* harmony import */ var _base_tools_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(433);
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(224);
/* harmony import */ var _createCategory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(942);




const renderCategory = $ => {
  $.categoryPage.forEach(({
    type,
    name
  }) => {
    if (type === $.types.header) {
      (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_0__/* .createHeader */ .dc)(name, $);
      return;
    }
    if (type === $.types.main) {
      (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_0__/* .createMain */ .CY)(name, $);
      const breadCrumbs = (0,_createCategory_js__WEBPACK_IMPORTED_MODULE_1__/* .createBCCategory */ .b)($.breadCrumbs.categoryInfo);
      $.main.append(breadCrumbs);
      return;
    }
    if (type === $.types.section) {
      const paramsObject = (0,_base_tools_js__WEBPACK_IMPORTED_MODULE_2__/* .getSearchParams */ .Q)();
      createSectionCategory(name, $, paramsObject);
      return;
    }
    if (type === $.types.footer) {
      (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_0__/* .createFooter */ .vE)(name, $);
      return;
    }
  });
};
const cbRenderCatalog = (error, data, $) => {
  if (error) {
    handleErrorMessage(error, data, $);
    return;
  }
  return {
    data
  };
};
const handleErrorMessage = (error, data, $) => {
  if (!data) data = error.message;
  console.warn(error, data);
};
const renderCardsByCategory = ($, items) => {
  const cards = document.querySelector('.category__cards');
  const cardAfterStyle = document.createElement("style");
  (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_0__/* .iterateOverCards */ .kZ)(cards, $, cardAfterStyle, items);
};
const createSectionCategory = (name, $, paramsObject) => {
  const categoryName = paramsObject.name;
  (0,_fetch_js__WEBPACK_IMPORTED_MODULE_3__/* .getGoodsByCategory */ .n_)($, categoryName).then(data => {
    const items = data.data;
    if (items && items.length > 0) {
      $.main.insertAdjacentHTML('beforeend', `
            <section class="${name}" aria-label="${categoryName}">
            <h2 class="visually-hidden">${categoryName}</h2>
            <div class="container">
                <h3 class="category__title">${categoryName}</h3>
                <ul class="category__cards">
                </ul>
            </div>
        </section>
            `);
      renderCardsByCategory($, items);
    }
  });
};

/***/ }),

/***/ 390:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lw: function() { return /* binding */ renderElement; },
/* harmony export */   vB: function() { return /* binding */ createSection; }
/* harmony export */ });
/* unused harmony export renderCards */
/* harmony import */ var _blog_renderBlog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(348);
/* harmony import */ var _base_baseElems_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(396);
/* harmony import */ var _handlers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(140);
/* harmony import */ var _article_renderArticle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(641);
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(224);
/* harmony import */ var _category_renderCategory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(989);
/* harmony import */ var _card_renderCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(480);
/* harmony import */ var _basket_renderBasket_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _search_renderSearch_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(969);









const createSection = (name, $, categoryName) => {
  if (name === 'item') {
    $.main.insertAdjacentHTML('beforeend', `
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
    $.main.insertAdjacentHTML('beforeend', `
            <section class="wholesale" aria-label="Распродажа">
            <h2 class="visually-hidden">Распродажа</h2>
            <div class="container">
                <h3 class="wholesale__title">Это выгодно!</h3>
                <ul class="wholesale__cards">
                </ul>
            </div>
        </section>
            `);
    renderCards($, _fetch_js__WEBPACK_IMPORTED_MODULE_3__/* .getGoodsWithDiscount */ .PI).then(() => {});
    return;
  }
};
const renderShop = $ => {
  $.shop.forEach(({
    type,
    name
  }) => {
    if (type === $.types.header) {
      (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_4__/* .createHeader */ .dc)(name, $);
      return;
    }
    if (type === $.types.main) {
      (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_4__/* .createMain */ .CY)(name, $);
      return;
    }
    if (type === $.types.section) {
      createSection(name, $);
      return;
    }
    if (type === $.types.footer) {
      (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_4__/* .createFooter */ .vE)(name, $);
      return;
    }
  });
};
const renderElement = $ => {
  // todo here we define what page we are goin to
  if ($.page === 'shop') {
    renderShop($);
    (0,_handlers_js__WEBPACK_IMPORTED_MODULE_5__/* .handlers */ .q)($);
  }
  if ($.page === 'blog') {
    (0,_blog_renderBlog_js__WEBPACK_IMPORTED_MODULE_0__/* .renderBlog */ .S)($);
  }
  if ($.page === 'article') {
    (0,_article_renderArticle_js__WEBPACK_IMPORTED_MODULE_6__/* .renderArticle */ .v)($);
  }
  if ($.page === 'category') {
    (0,_category_renderCategory_js__WEBPACK_IMPORTED_MODULE_7__/* .renderCategory */ .o)($);
  }
  if ($.page === 'card') {
    (0,_card_renderCard_js__WEBPACK_IMPORTED_MODULE_1__/* .renderCard */ .Y)($);
  }
  if ($.page === 'cart') {
    (0,_basket_renderBasket_js__WEBPACK_IMPORTED_MODULE_2__/* .renderBasket */ .Z4)($);
  }
  if ($.page === 'search') {
    (0,_search_renderSearch_js__WEBPACK_IMPORTED_MODULE_8__/* .renderSearch */ .s)($);
  }
};
const renderCards = async ($, callback) => {
  const cards = document.querySelector('.wholesale__cards');
  const itemsPromise = callback($);
  const cardAfterStyle = document.createElement("style");
  itemsPromise.then(source => {
    if (source.data && source.data.length === 0) {
      $.app.querySelector('.wholesale').style.display = 'none';
      return;
    }
    const items = source.data.slice(0, 6);
    (0,_base_baseElems_js__WEBPACK_IMPORTED_MODULE_4__/* .iterateOverCards */ .kZ)(cards, $, cardAfterStyle, items);
  });
};

/***/ }),

/***/ 224:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PF: function() { return /* binding */ getItemById; },
/* harmony export */   PI: function() { return /* binding */ getGoodsWithDiscount; },
/* harmony export */   QO: function() { return /* binding */ getGoods; },
/* harmony export */   n3: function() { return /* binding */ getCategory; },
/* harmony export */   n_: function() { return /* binding */ getGoodsByCategory; }
/* harmony export */ });
/* harmony import */ var _category_renderCategory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(989);

const fetchRequest = async ({
  url,
  method = 'get',
  id = '',
  callback,
  headers,
  vars = {},
  body,
  search = ""
}) => {
  try {
    const options = {
      method
    };
    if (id) url += id.toString();
    if (body) options.body = JSON.stringify(body);
    if (headers) options.headers = headers;
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      if (callback && id) return callback(null, data, vars, id);
      if (callback && search) return callback(null, data, vars, search);
      if (callback) return callback(null, data, vars);
      return;
    }
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  } catch (err) {
    console.log(' : ', err);
    return callback(err, null, vars);
  }
};
const getItemById = async ($, id) => {
  return await fetchRequest({
    url: $.URL + $.api + $.goods + `/${id}`,
    method: $.get,
    headers: {
      'Content-Type': 'application/json'
    },
    callback: _category_renderCategory_js__WEBPACK_IMPORTED_MODULE_0__/* .cbRenderCatalog */ .H,
    vars: $
  });
};
const getGoodsWithDiscount = async $ => {
  return await fetchRequest({
    url: $.URL + $.api + $.goods + `/discount`,
    method: $.get,
    headers: {
      'Content-Type': 'application/json'
    },
    callback: _category_renderCategory_js__WEBPACK_IMPORTED_MODULE_0__/* .cbRenderCatalog */ .H,
    vars: $
  });
};
const getGoodsByCategory = async ($, categoryName) => {
  return await fetchRequest({
    url: $.URL + $.api + $.goods + $.category + `/${categoryName}`,
    method: $.get,
    headers: {
      'Content-Type': 'application/json'
    },
    callback: _category_renderCategory_js__WEBPACK_IMPORTED_MODULE_0__/* .cbRenderCatalog */ .H,
    vars: $
  });
};
const getGoods = async $ => {
  return await fetchRequest({
    url: $.URL + $.api + $.goods,
    method: $.get,
    headers: {
      'Content-Type': 'application/json'
    },
    callback: _category_renderCategory_js__WEBPACK_IMPORTED_MODULE_0__/* .cbRenderCatalog */ .H,
    vars: $
  });
};
const getCategory = async $ => {
  return await fetchRequest({
    url: $.URL + $.api + $.category,
    method: $.get,
    headers: {
      'Content-Type': 'application/json'
    },
    callback: _category_renderCategory_js__WEBPACK_IMPORTED_MODULE_0__/* .cbRenderCatalog */ .H,
    vars: $
  });
};

/***/ }),

/***/ 140:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: function() { return /* binding */ handlers; }
/* harmony export */ });
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(669);

const handlers = $ => {
  (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__/* .handleTimer */ .Z)();
};

/***/ }),

/***/ 863:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: function() { return /* binding */ getStorage; },
/* harmony export */   p: function() { return /* binding */ setStorage; }
/* harmony export */ });
const setStorage = (key, value) => {
  const stringified = JSON.stringify(value);
  localStorage.setItem(key, stringified);
};
const getStorage = key => {
  const storage = localStorage.getItem(key);
  if (storage) {
    return JSON.parse(storage);
  } else {
    return [];
  }
};

/***/ }),

/***/ 669:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ handleTimer; }
/* harmony export */ });
const handleTimer = () => {
  const changeBannerPromoText = () => {
    const timer = document.querySelector('.timer');
    timer.remove();
    const timerPromoText = document.querySelector('.item__text-notebook');
    timerPromoText.textContent = 'ноутбуки - всегда отличный подарок';
    timerPromoText.classList.add('item__text-notebook-changed');
    const itemGallery = timerPromoText.closest('.item__gallery-notebook');
    itemGallery.classList.add('item__gallery-notebook-changed');
  };
  const deadline = document.querySelector('.item__timer.timer');
  if (deadline) {
    const hasDeadlineAttr = deadline.hasAttribute('data-timer-deadline');
    if (hasDeadlineAttr) {
      deadline.insertAdjacentHTML('beforeend', `
            <p class="timer__title">До конца акции:</p>
            <div class="timer__block">
              <p><span class="timer__count timer-days-num">00
              </span><span class="timer__units  timer-days-text">дней</span></p>
              <p><span class="timer__count timer-hours-num">00
              </span><span class="timer__units  timer-hours-text">часов</span></p>
              <p><span class="timer__count timer-minutes-num">00
              </span><span class="timer__units  timer-minutes-text">минут</span></p>
              <p><span class="timer__count timer-seconds-num">00
              </span><span class="timer__units  timer-seconds-text">секунд</span></p>
            </div>
          `);
    }
  } else {
    changeBannerPromoText();
    return;
  }
  const deadlineAttr = deadline.getAttribute('data-timer-deadline');
  const timerBlockDays = document.querySelector('.timer-days-num');
  const timerBlockHour = document.querySelector('.timer-hours-num');
  const timerBlockMinutes = document.querySelector('.timer-minutes-num');
  const timerBlockSeconds = document.querySelector('.timer-seconds-num');
  const textDays = document.querySelector('.timer-days-text');
  const textHour = document.querySelector('.timer-hours-text');
  const textMinutes = document.querySelector('.timer-minutes-text');
  const textSeconds = document.querySelector('.timer-seconds-text');
  const getTimeRemaining = () => {
    const dateStop = new Date(deadlineAttr).getTime();
    if (!dateStop) return false;
    const dateNow = Date.now();
    const timezoneoffset = Math.abs(new Date().getTimezoneOffset()) * 60 * 1000;
    const myTimeZone = +3 * 60 * 60 * 1000;
    const myCurrentTime = dateNow - timezoneoffset + myTimeZone;
    const timeRemaining = dateStop - myCurrentTime;
    const seconds = Math.floor(timeRemaining / 1000 % 60);
    const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
    const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
    const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
    return {
      days,
      hours,
      minutes,
      seconds,
      timeRemaining
    };
  };
  const getArrayOfDigits = number => {
    return Array.from(String(number), n => Number(n));
  };
  const handleTextDeclension = ({
    days: day,
    hours: hour,
    minutes: min,
    seconds: sec,
    timeRemaining
  }) => {
    const dayNumber = [[0], [1], [2, 4]];
    const timerObject = [{
      timeMeasure: day,
      declension: 'дней-день-дня',
      text: textDays
    }, {
      timeMeasure: hour,
      declension: 'часов-час-часа',
      text: textHour
    }, {
      timeMeasure: min,
      declension: 'минут-минута-минуты',
      text: textMinutes
    }, {
      timeMeasure: sec,
      declension: 'секунд-секунда-секунды',
      text: textSeconds
    }];
    for (const {
      timeMeasure,
      declension,
      text
    } of timerObject) {
      const digits = getArrayOfDigits(timeMeasure);
      if (digits.length > 1 && digits[digits.length - 2] === 1) continue;
      const last = digits.slice(-1)[0];
      const declensions = declension.split('-');
      for (let j = 0; j < dayNumber.length; j++) {
        const [x, y] = dayNumber[j];
        if (!y && last === x) {
          text.textContent = declensions[j];
        } else if (last >= x && last <= y) {
          text.textContent = declensions[j];
        }
      }
    }
  };
  const start = () => {
    const timer = getTimeRemaining();
    if (!timer) return changeBannerPromoText();
    handleTextDeclension(timer);
    timer.days === 0 ? timerBlockDays.closest('p').remove() : timerBlockDays.textContent = `${timer.days}`;
    if (timer.days < 10) timerBlockDays.classList.add('timer__count_less-ten');
    timerBlockHour.textContent = timer.hours < 10 ? `0${timer.hours}` : `${timer.hours}`;
    timerBlockMinutes.textContent = timer.minutes < 10 ? `0${timer.minutes}` : `${timer.minutes}`;
    timerBlockSeconds.textContent = timer.seconds < 10 ? `0${timer.seconds}` : `${timer.seconds}`;
    const intevalId = setTimeout(start, 1000);
    if (timer.timeRemaining <= 0) {
      clearTimeout(intevalId);
      changeBannerPromoText();
    }
  };
  start();
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__(511);
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__(817);
/******/ 	__webpack_require__(359);
/******/ 	__webpack_require__(458);
/******/ 	__webpack_require__(641);
/******/ 	__webpack_require__(429);
/******/ 	__webpack_require__(597);
/******/ 	__webpack_require__(348);
/******/ 	__webpack_require__(396);
/******/ 	__webpack_require__(447);
/******/ 	__webpack_require__(659);
/******/ 	__webpack_require__(21);
/******/ 	__webpack_require__(993);
/******/ 	__webpack_require__(422);
/******/ 	__webpack_require__(433);
/******/ 	__webpack_require__(260);
/******/ 	__webpack_require__(969);
/******/ 	__webpack_require__(390);
/******/ 	__webpack_require__(224);
/******/ 	__webpack_require__(140);
/******/ 	__webpack_require__(863);
/******/ 	__webpack_require__(669);
/******/ 	__webpack_require__(118);
/******/ 	__webpack_require__(11);
/******/ 	__webpack_require__(304);
/******/ 	__webpack_require__(285);
/******/ 	__webpack_require__(167);
/******/ 	__webpack_require__(480);
/******/ 	__webpack_require__(942);
/******/ 	var __webpack_exports__ = __webpack_require__(989);
/******/ 	
/******/ })()
;