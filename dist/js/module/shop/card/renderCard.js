import {createFooter, createHeader, createMain} from "../../base/baseElems.js";
import {getSearchParams} from "../../base/tools.js";
import {createBCCard, createSectionCard} from "./createCard.js";
import {createSectionRecommended} from "./createCard.js";
import {basketUserId} from '../../constants.js';
import {getStorage} from "../localStorage.js";
import {getItemById} from "../fetch.js";
import {addCwdToWatchOptions} from "browser-sync/dist/cli/transforms/addCwdToWatchOptions.js";


export const renderCard = ($) => {
    const paramsObject = getSearchParams();
    $.card.forEach(({type, name}) => {
        if (type === $.types.header) {
            createHeader(name, $);
            return;
        }
        
        if (type === $.types.main) {
            const bc = createBCCard($, $.breadCrumbs.cardInfo);
            createMain(name, $);
            $.main.append(bc);
            return;
        }
        
        if (type === $.types.section) {
            createSectionCard(name, $, paramsObject);
            return;
        }
        
        if (type === $.types.category) {
            createSectionRecommended(name, $, paramsObject);
            return;
        }
        
        if (type === $.types.footer) {
            createFooter(name, $);
            return;
        }
    });
};


export const cardHandlers = async ($) => {
    const handleAddToCart = () => {
        const addBtn = document.querySelector('.details__add-to-card');
        const paramsObject = getSearchParams();
        
        // const addBtnPromise = await new Promise()
        
        console.log(' : ',addBtn);
        if (addBtn) {
            addBtn.addEventListener('click', ({target}) => {
                console.log(' : ',target);
                const basket = getStorage(basketUserId);
                const jsonArray = JSON.parse(basket);
                
                
                const cardId = paramsObject.id;
                getItemById($, cardId).then((data) => {
                    console.log(' : ', data.data);
                    const item = data.data;
                });
            });
        }
        ;
    };
    
    handleAddToCart();
};