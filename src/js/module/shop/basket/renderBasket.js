import {createFooter, createHeader, createMain} from "../../base/baseElems.js";
import {createSection} from "../createShop.js";
import {createBCCart, createSectionBasket} from "../basket/createBasket.js";
import {basketUserId} from '../../constants.js';
import {getStorage, setStorage} from "../localStorage.js";


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


export const setBasketQuantity = () => {
    const valueHeader = document.querySelector('.navigation__cart-count');
    const valueBasket = document.querySelector('.basket__cart-count');
    
    const basketArray = getStorage(basketUserId);
    if (basketArray.length > 0) {
        
        const sum = basketArray.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.qty;
        }, 0);
        if (valueBasket) {
            valueBasket.textContent = sum;
        }
        if (valueHeader) {
            valueHeader.textContent = sum;
        }
    } else {
        if (valueBasket) {
            valueBasket.style.display = 'none';
        }
        if (valueHeader) {
            valueHeader.style.display = 'none';
        }
    }
};

export const handleEncreaseQuantity = (id) => {
    const plusBtns = document.querySelectorAll('.basket__plus-btn');
    plusBtns.forEach((btn) => {
        btn.addEventListener('click', ({target}) => {
            const btnBlock = btn.closest('.basket__list-quantity-block');
            const text = btnBlock.querySelector('.basket__quantity-text');
            text.textContent = +(text.textContent) + 1;
            
            const basketArray = getStorage(basketUserId);
            const elem = basketArray.find((elem) => elem.id === id);
            if (elem) {
                elem.qty += 1;
            }
            setStorage(basketUserId, basketArray);
            setBasketQuantity();
        });
    });
};

export const handleDecreaseQuantity = (id) => {
    const plusBtns = document.querySelectorAll('.basket__minus-btn');
    plusBtns.forEach((btn) => {
        btn.addEventListener('click', ({target}) => {
            const btnBlock = btn.closest('.basket__list-quantity-block');
            const text = btnBlock.querySelector('.basket__quantity-text');
            if (+(text.textContent) > 1) text.textContent = +(text.textContent) - 1;
        });
    });
};

export const handleChooseAll = () => {
    const label = document.querySelector('.basket__list-manage-block .basket__label');
    if (label) {
        const checkbox = label.querySelector('.basket__checkbox-input');
        const checkboxes = document.querySelectorAll('.basket__list-item-block .basket__checkbox-input');
        label.addEventListener('click', ({target}) => {
            checkboxes.forEach((box) => {
                if (checkbox.checked) {
                    box.checked = true;
                } else {
                    box.checked = false;
                }
            });
        });
    }
    ;
};

export const basketHandlers = () => {
    
    
    handleChooseAll();
    handleEncreaseQuantity();
    handleDecreaseQuantity();
    setBasketQuantity();
};