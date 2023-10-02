import {getItemById} from "../fetch.js";

export const createSectionCard = (name, $, paramsObject) => {
    
    const cardId = paramsObject.id;
    getItemById($, cardId).then((data) => {
        console.log(' : ', data.data);
        const item = data.data;
        $.main.insertAdjacentHTML('beforeend',
            `
            <section class="details" aria-label="${item.title}">
            <h2 class="visually-hidden">${item.title}</h2>
            <div class="container">
                <h3 class="card__title">${item.title}</h3>
                <div class="card__block">
                    <picture class="card__figure">
                    <img loading="lazy" class="card__image"
                     src="${$.URL}/${item.image}"
                     alt="${item.title}" width="757" height="427">
                    </picture>
                    <div class="card__cart-info">
                        <div class="card__price-block">
                            span.card
                        </div>
                    </div>
                </div>
            </div>
        </section>
            `);
        
        const cardImage = $.main.querySelector('.card__image');
        cardImage.style.borderRadius = '0px';
        
        const cardFigure = $.main.querySelector('.card__figure');
        cardFigure.style.cssText = `
            width: 757px;
            height: 427px;
            margin-bottom: 80px;
        `;
        
        const cardTitle = $.main.querySelector('.card__title');
        cardTitle.style.cssText =
            `
                font-family: Lato;
                font-size: 50px;
                font-style: normal;
                font-weight: 700;
                line-height: 130%;
                margin-bottom: 69px;
            `;
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
        
        const cardBlock = $.main.querySelector('.card__block');
        cardBlock.style.cssText = `
                    margin-bottom: 80px;
                `;
    });
};