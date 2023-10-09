import {createFooter, createHeader, createMain} from "../../base/baseElems.js";
import {createSection} from "../createShop.js";
import {createBCCart, createSectionBasket} from "../basket/createBasket.js";
import {basketUserId} from '../../constants.js';
import {getStorage, setStorage} from "../localStorage.js";
import {calculateDepth} from "../card/createCard.js";


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
            valueBasket.style.display = 'block';
        }
        if (valueHeader) {
            valueHeader.textContent = sum;
            valueHeader.style.display = 'block';
            console.log(' : ', valueHeader.textContent);
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

const calculate = (value, id, target) => {
    
    const basketArray = getStorage(basketUserId);
    const elem = basketArray.find((elem) => elem.id === id);
    if (elem) {
        elem.qty += value;
    }
    setStorage(basketUserId, basketArray);
    setBasketQuantity();
    
    // const positionTotal = elem.qty * item.price;
    //
    // const newPrice = positionTotal.toString();
    // let oldPrice = NaN;
    // if (item.discount === 0) {
    //     oldPrice = (Math.ceil(item.price * 1.2)).toString();
    // } else {
    //     oldPrice = (Math.ceil(item.price - ((item.price * item.discount) / 100))).toString();
    // }
    //
    // const {firstPart: firstNew, lastPart: lastNew} = calculateDepth(item.price.toString());
    // const {firstPart: firstOld, lastPart: lastOld} = calculateDepth(oldPrice);
    //
    // const creditfrom = Math.ceil(item.price - (item.price / 1.2));
    
};

export const handleEncreaseQuantity = (id) => {
    const plusBtns = document.querySelectorAll('.basket__plus-btn');
    plusBtns.forEach((btn) => {
        btn.addEventListener('click', ({target}) => {
            const btnBlock = btn.closest('.basket__list-quantity-block');
            const text = btnBlock.querySelector('.basket__quantity-text');
            text.textContent = +(text.textContent) + 1;
            
            calculate(1, id, target);
        });
    });
};

export const handleDecreaseQuantity = (id) => {
    const plusBtns = document.querySelectorAll('.basket__minus-btn');
    plusBtns.forEach((btn) => {
        btn.addEventListener('click', ({target}) => {
            const btnBlock = btn.closest('.basket__list-quantity-block');
            const text = btnBlock.querySelector('.basket__quantity-text');
            if (+(text.textContent) > 1){
                text.textContent = +(text.textContent) - 1;
                calculate(-1, id, target);
            }
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