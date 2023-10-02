import {createFooter, createHeader, createMain} from "../../base/baseElems.js";
import {getSearchParams} from "../../base/tools.js";
import {createBCCard, createSectionCard} from "./createCard.js";


export const renderCard = ($) => {
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
            const paramsObject = getSearchParams();
            createSectionCard(name, $, paramsObject);
            return;
        }
        
        if (type === $.types.footer) {
            createFooter(name, $);
            return;
        }
    });
};