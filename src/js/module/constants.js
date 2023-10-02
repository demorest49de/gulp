const get = 'GET';

const URL = 'https://muddy-substantial-gear.glitch.me';

const api = '/api';

const goods = '/goods';

const category = '/category';

//api/goods/category/Ноутбуки

export const types = {
    footer: 'footer',
    section: 'section',
    header: 'header',
    main: 'main',
    blog: 'blog',
    article: 'article',
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
    card: 'card',
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
    categoryURL: '/category.html',
    cardURL: '/card.html',
    
};

breadCrumbs = {
    
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
    cardInfo: [
        {
            url: bc.url,
            name: bc.main,
            ariaLabel: bc.main,
        },
        {
            url: bc.categoryURL,
            name: bc.category,
            ariaLabel: bc.category,
        },
        {
            url: bc.cardURL,
            name: bc.article,
            ariaLabel: bc.article,
        },
    ],
};


const burgerMenu = {
    visibility: false,
    menu: './svg/header/menu.svg#menu',
    clear: './svg/header/menu.svg#clear'
};

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
    card
};