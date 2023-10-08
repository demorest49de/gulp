import {createFooter, createHeader, createMain} from "../../base/baseElems.js";
import {createSection} from "../createShop.js";
import {createBCCart, createSectionBasket} from "../basket/createBasket.js";


export const renderBasket = ($) => {
    
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
            createSectionBasket(name, $);
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

export const basketHandlers = () => {
    const label = document.querySelector('.basket__list-manage-block .basket__label');
    const checkbox = label.querySelector('.basket__checkbox-input');
    const checkboxes = document.querySelectorAll('.basket__list-item-block .basket__checkbox-input');
    label.addEventListener('click', ({target}) => {
        checkboxes.forEach((box) => {
            if(checkbox.checked){
                box.checked = true;
            }else{
                box.checked = false;
            }
        });
    });
};