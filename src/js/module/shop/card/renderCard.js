import {createFooter, createHeader, createMain} from "../../base/baseElems.js";
import {getSearchParams} from "../../base/tools.js";
import {createSectionCard} from "./createCard.js";
import {createBreadCrumbs} from "../../base/breadcrumbs.js";


export const renderCard = ($) => {
    $.card.forEach(({type, name}) => {
        if (type === $.types.header) {
            createHeader(name, $);
            return;
        }
        
        if (type === $.types.main) {
            createMain(name, $);
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