import {getSearchParams} from "../../base/tools.js";
import {createFooter, createHeader, createMain} from "../../base/baseElems.js";
import {createSection} from "../createShop.js";
import {createBCCart} from "../basket/createCart.js";


export const renderCart = ($) => {
    const paramsObject = getSearchParams();
    
    $.cart.forEach(({type, name}) => {
        if (type === $.types.header) {
            createHeader(name, $);
            return;
        }
        
        if (type === $.types.main) {
            const bc = createBCCart($, $.breadCrumbs.cartInfo);
            createMain(name, $);
            $.main.append(bc);
            return;
        }
        
        if (type === $.types.basket) {
        //     createSectionCard(name, $, paramsObject);
            return;
        }
    
        if (type === $.types.section) {
            createSection(name, $);
            return;
        }
        
        if (type === $.types.footer) {
            createFooter(name, $);
            return;
        }
    });
};