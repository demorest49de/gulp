import {getItemById} from "../fetch.js";

export const createSectionCard = (name, $, paramsObject) => {
    
    const cardId = paramsObject.id;
    getItemById($, cardId).then((data) => {
        console.log(' : ', data.data);
        const item = data.data;
        $.main.insertAdjacentHTML('beforeend',
            `
            <section class="${name}" aria-label="${item.title}">
            <h2 class="visually-hidden">${item.title}</h2>
            <div class="container">
                <h3 class="card__title">${item.title}</h3>
                <div class="card__block">
                    <picture class="card__figure">
                    <img loading="lazy" class="card__image"
                     src="${$.URL}/${item.image}"
                     alt="${item.title}" width="757" height="427">
                    </picture>
                </div>
            </div>
        </section>
            `);
        const cardBlock = $.main.querySelector('.card__block');
        cardBlock.style.width = '757px';
        cardBlock.style.height = '427px';
        
        const cardFigure = $.main.querySelector('.card__figure');
        cardFigure.style.height = '100%';
        
        const cardTitle = $.main.querySelector('.card__title');
        cardTitle.style.marginBottom = '69px';
    
        const cardAfterStyle = document.createElement("style");
        if (item.discount > 0) {
            cardAfterStyle.innerHTML +=
                `.card__figure:after {
                content: '-${item.discount}%';
                top: 20px;
                right: 20px;
                bottom: unset;
                left: unset;
            }`;
            document.body.append(cardAfterStyle);
        }
    });
};