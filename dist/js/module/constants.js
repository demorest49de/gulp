const types = {
    footer: 'footer',
    section: 'section',
    header: 'header',
    main: 'main',
    blog: 'blog',
    article: 'article'
};

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


export const $ = {shop, blog, article, types};