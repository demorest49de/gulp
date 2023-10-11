import {types} from "../constants.js";


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

export const setCustomPaddings = ($) => {
    if ($.page === types.blog || $.page === types.article) {
        console.log(' : ', $.page);
        setHeader($);
    }
};

export const customPaddingHandler = ($) => {
    window.addEventListener('resize', () => {
        if ($.page === types.blog || $.page === types.article) {
            console.log(' : ', $.page);
            setHeader();
        }
    });
};