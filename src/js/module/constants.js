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
    article: 'article'
};

// const categories = [
//     'смартфоны',
//     'ноутбуки',
//     'ювелирные изделия',
//     'одежда',
//     'бытовая техника',
//     'бытовая химия',
//     'книги и журналы',
//     'домашний текстиль',
//     'электроника',
//     'косметика',
// ]

const _class = {
    footer: 'footer',
    section: 'section',
    header: 'header',
    main: 'main',
    blog: 'blog',
    article: 'article',
    item: 'item',
    wholesale: 'wholesale',
    catalog: 'catalog',
}

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

const catalog = [
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
            name: _class.catalog
        },
        {
            type: types.footer,
            name: _class.footer
        },
    ]
;

const breadCrumbs = {
    blogInfo: [
        {
            url: '/',
            name: 'Главная',
            ariaLabel: 'Главная',
        },
        {
            url: '/blog.html',
            name: 'Блог',
            ariaLabel: 'Блог',
        },
    ],
    articleInfo: [
        {
            url: '/',
            name: 'Главная',
            ariaLabel: 'Главная',
        },
        {
            url: '/blog.html',
            name: 'Блог',
            ariaLabel: 'Блог',
        },
        {
            url: '/article.html',
            name: 'имя статьи',
            ariaLabel: 'имя статьи',
        },
    ],
};


const burgerMenu = {
    visibility: false,
    menu: './svg/header/menu.svg#menu',
    clear: './svg/header/menu.svg#clear'
}

export const global = {shop,
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
    catalog,
};