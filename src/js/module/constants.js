const types = {
    footer: 'footer',
    section: 'section',
    header: 'header',
    main: 'main',
};

const elems = [
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


export const $ = {elems, types};