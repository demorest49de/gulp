import {getItemById} from "../fetch.js";

export const createSectionCard = (name, $, paramsObject) => {
    
    const cardId = paramsObject.id;
    getItemById($, cardId).then((data) => {
        console.log(' : ', data.data);
        const item = data.data;
        const newPrice = item.price.toString();
        
        let priceFirstPart;
        let priceLastPart;
        const depth = newPrice.length / 2;
        console.log(' : ', newPrice.length);
        if (depth > 0) {
            // priceFirstPart =
        }
        
        
        $.main.insertAdjacentHTML('beforeend',
            `
            <section class="details" aria-label="${item.title}">
            <h2 class="visually-hidden">${item.title}</h2>
            <div class="container">
                <h3 class="details__title">${item.title}</h3>
                <div class="details__block">
                    <picture class="details__figure">
                    <img loading="lazy" class="details__image"
                     src="${$.URL}/${item.image}"
                     alt="${item.title}" width="757" height="427">
                    </picture>
                    <div class="details__cart-info">
                        <div class="details__price-block">
                            <span class="details__new-price"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            `);
        
        const cardAfterStyle = document.createElement("style");
        if (item.discount > 0) {
            cardAfterStyle.innerHTML +=
                `.details__figure:after {
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