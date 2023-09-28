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

const categories = [
    'смартфоны',
    'ноутбуки',
    'ювелирные изделия',
    'одежда',
    'бытовая техника',
    'бытовая химия',
    'книги и журналы',
    'домашний текстиль',
    'электроника',
    'косметика',
]

const shop = [
        {
            type: types.header,
            name: 'header'
        },
        {
            type: types.main,
            name: 'main'
        },
        {
            type: types.section,
            name: 'item'
        },
        {
            type: types.section,
            name: 'wholesale'
        },
        {
            type: types.footer,
            name: 'footer'
        },
    ]
;

const blog = [
        {
            type: types.header,
            name: 'header'
        },
        {
            type: types.blog,
            name: 'blog'
        },
        {
            type: types.footer,
            name: 'footer'
        },
    ]
;

const article = [
        {
            type: types.header,
            name: 'header'
        },
        {
            type: types.article,
            name: 'article'
        },
        {
            type: types.footer,
            name: 'footer'
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
};