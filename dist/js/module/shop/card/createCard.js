import {getItemById} from "../fetch.js";

export const createSectionCard = (name, $, paramsObject) => {
    
    const cardId = paramsObject.id;
    getItemById($, cardId).then((data) => {
        console.log(' : ',data.data);
        const item = data.data;
        
            $.main.insertAdjacentHTML('beforeend',
                `
            <section class="${name}" aria-label="${item.title}">
            <h2 class="visually-hidden">${item.title}</h2>
            <div class="container">
                <h3 class="card__title">${item.title}</h3>
                <div class="card__block">
                
                </div>
            </div>
        </section>
            `);
    });
};