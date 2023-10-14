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
    articleURL: './article.html',
};

const bcSvg = '<div class="bc__arrow-block">' +
    '<svg class="bc__nav-arrow">\n' +
    '<use href="./svg/article/nav-arrow.svg#nav-arrow"></use>\n' +
    '</svg>\n' +
    '</div>'
;

const breadCrumbs = {
    
    blogInfo: [
        {
            link:
                `<a class="bc__link" href="${bc.url}" aria-label="${bc.main}">${bc.main}</a>`,
            svg: bcSvg,
        },
        {
            link:
                `<a class="bc__link" href="${bc.blogURL}" aria-label="${bc.blog}">${bc.blog}</a>`,
            svg: '',
        },
    ],
    articleInfo: [
        {
            link:
                `<a class="bc__link" href="${bc.url}" aria-label="${bc.main}">${bc.main}</a>`,
            svg: bcSvg,
        },
        {
            link:
                `<a class="bc__link" href="${bc.blogURL}" aria-label="${bc.blog}">${bc.blog}</a>`,
            svg: bcSvg,
        },
        {
            link:
                `<a class="bc__link" href="${bc.articleURL}" aria-label="${bc.article}">${bc.article}</a>`,
            svg: '',
        },
    ],
    
    categoryInfo: [
        {
            link:
                `<a class="bc__link" href="${bc.url}" aria-label="${bc.main}">${bc.main}</a>`,
            svg: bcSvg,
        },
        {
            link:
                `<a class="bc__link" href="${bc.categoryURL}" aria-label="${bc.category}">${bc.category}</a>`,
            svg: '',
        }
    ],
    
    searchInfo: [
        {
            link:
                `<a class="bc__link" href="${bc.url}" aria-label="${bc.main}">${bc.main}</a>`,
            svg: bcSvg,
        },
        {
            link:
                `<a class="bc__link" href="${bc.searchURL}" aria-label="${bc.search}">${bc.search}</a>`,
            svg: '',
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
    cartInfo: [
        {
            link:
                `<a class="bc__link" href="${bc.url}" aria-label="${bc.main}">${bc.main}</a>`,
            svg: bcSvg,
        },
        {
            link:
                `<a class="bc__link" href="${bc.cartURL}" aria-label="${bc.cart}">${bc.cart}</a>`,
            svg: '',
        },
    ]
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