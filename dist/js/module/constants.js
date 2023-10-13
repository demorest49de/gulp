const get = 'GET';

const URL = 'https://muddy-substantial-gear.glitch.me';

const api = '/api';

const goods = '/goods';

const category = '/category';


export const types = {
    footer: 'footer',
    section: 'section',
    header: 'header',
    main: 'main',
    blog: 'blog',
    article: 'article',
    category: 'category',
    basket: 'basket',
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
    cart: 'cart',
};

const shop = [
        {
            type: types.header,
            name: _class.header
        },
        {
            type: types.main,
            name: _class.main
        },
        {
            type: types.section,
            name: _class.item
        },
        {
            type: types.section,
            name: _class.wholesale
        },
        {
            type: types.footer,
            name: _class.footer
        },
    ]
;

const blog = [
        {
            type: types.header,
            name: _class.header
        },
        {
            type: types.blog,
            name: _class.blog
        },
        {
            type: types.footer,
            name: _class.footer
        },
    ]
;

const article = [
        {
            type: types.header,
            name: _class.header
        },
        {
            type: types.article,
            name: _class.article
        },
        {
            type: types.footer,
            name: _class.footer
        },
    ]
;

const categoryPage = [
        {
            type: types.header,
            name: _class.header
        },
        {
            type: types.main,
            name: _class.main
        },
        {
            type: types.section,
            name: _class.category
        },
        {
            type: types.footer,
            name: _class.footer
        },
    ]
;

const searchPage = [
        {
            type: types.header,
            name: _class.header
        },
        {
            type: types.main,
            name: _class.main
        },
        {
            type: types.section,
            name: _class.search
        },
        {
            type: types.footer,
            name: _class.footer
        },
    ]
;

const card = [
        {
            type: types.header,
            name: _class.header
        },
        {
            type: types.main,
            name: _class.main
        },
        {
            type: types.section,
            name: _class.card
        },
        {
            type: types.category,
            name: _class.category
        },
        {
            type: types.footer,
            name: _class.footer
        },
    ]
;

const cart = [
        {
            type: types.header,
            name: _class.header
        },
        {
            type: types.main,
            name: _class.main
        },
        {
            type: types.basket,
            name: _class.cart
        },
        {
            type: types.section,
            name: _class.wholesale
        },
        {
            type: types.footer,
            name: _class.footer
        },
    ]
;

const bc = {
    url: '/',
    main: 'Главная',
    blog: 'Блог',
    article: 'имя статьи',
    category: 'имя каталога',
    card: 'имя товара',
    search: 'Поиск',
    categoryURL: '/category.html',
    cardURL: '/card.html',
    cart: 'Корзина',
    cartURL: '/cart.html',
    searchURL: '/search.html',
};

const breadCrumbs = {
    
    blogInfo: [
        {
            url: bc.url,
            name: bc.main,
            ariaLabel: bc.main,
        },
        {
            url: '/blog.html',
            name: bc.blog,
            ariaLabel: bc.blog,
        },
    ],
    articleInfo: [
        {
            url: bc.url,
            name: bc.main,
            ariaLabel: bc.main,
        },
        {
            url: '/blog.html',
            name: bc.blog,
            ariaLabel: bc.blog,
        },
        {
            url: '/article.html',
            name: bc.article,
            ariaLabel: bc.article,
        },
    ],
    categoryInfo: [
        {
            url: bc.url,
            name: bc.main,
            ariaLabel: bc.main,
        },
        {
            url: bc.categoryURL,
            name: bc.category,
            ariaLabel: bc.category,
        }
    ],
    
    searchInfo: [
        {
            url: bc.url,
            name: bc.main,
            ariaLabel: bc.main,
        },
        {
            url: bc.searchURL,
            name: bc.search,
            ariaLabel: bc.search,
        }
    ],
    
    cardInfo: {
        home: {
            url: bc.url,
            name: bc.main,
            ariaLabel: bc.main,
        },
        category: {
            url: bc.categoryURL,
            name: bc.category,
            ariaLabel: bc.category,
        },
        card: {
            url: bc.cardURL,
            name: bc.card,
            ariaLabel: bc.card,
        },
    },
    
    cartInfo: {
        home: {
            url: bc.url,
            name: bc.main,
            ariaLabel: bc.main,
        },
        cart: {
            url: bc.cartURL,
            name: bc.cart,
            ariaLabel: bc.cart,
        },
    },
};


const burgerMenu = {
    visibility: false,
    menu: './svg/header/menu.svg#menu',
    clear: './svg/header/menu.svg#clear'
};

export const basketUserId = 'userId';

export const global = {
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
    cart,
};