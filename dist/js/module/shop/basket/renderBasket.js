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

const calculate = (value, item, target) => {
    
    const basketArray = getStorage(basketUserId);
    const elem = basketArray.find((elem) => elem.item.id === item.id);
    if (elem) {
        elem.qty += value;
    }
    setStorage(basketUserId, basketArray);
    setBasketQuantity();
    
    const priceBlock = target.closest('.basket__list-all-info-block');
    const newPriceFirst = priceBlock.querySelector('.basket__item-new-price:nth-child(1)');
    const newPriceSecond = priceBlock.querySelector('.basket__item-new-price:nth-child(2)');
    
    const oldPriceFirst = priceBlock.querySelector('.basket__item-old-price:nth-child(1)');
    const oldPriceSecond = priceBlock.querySelector('.basket__item-old-price:nth-child(2)');
    
    const creditFrom = priceBlock.querySelector('.basket__credit-from');
    
    const positionTotal = elem.qty * item.price;
    const oldPrice = positionTotal.toString();
    
    let newPrice = NaN;
    if (item.discount === 0) {
        newPrice = (Math.ceil((positionTotal) / 1.2)).toString();
    } else {
        newPrice = (Math.ceil((positionTotal) - ((positionTotal * item.discount) / 100))).toString();
    }
    
    const {firstPart: firstNew, lastPart: lastNew} = calculateDepth(newPrice);
    const {firstPart: firstOld, lastPart: lastOld} = calculateDepth(oldPrice);
    
    const creditfromValue = Math.ceil(positionTotal - (positionTotal / 1.2));
    
    newPriceFirst.innerHTML = `${firstNew}&nbsp`;
    newPriceSecond.innerHTML = `${lastNew} ₽`;
    
    oldPriceFirst.innerHTML = `${firstOld}&nbsp`;
    oldPriceSecond.innerHTML = `${lastOld} ₽`;
    
    creditFrom.innerHTML = `В кредит от ${creditfromValue} ₽`;
};

export const handleEncreaseQuantity = (item, elem) => {
    const btn = elem.querySelector('.basket__plus-btn');
    btn.addEventListener('click', ({target}) => {
        const btnBlock = btn.closest('.basket__list-quantity-block');
        const text = btnBlock.querySelector('.basket__quantity-text');
        const value = 1;
        text.textContent = +(text.textContent) + value;
        
        calculate(value, item, target);
    });
};

export const handleDecreaseQuantity = (item, elem) => {
    const btn = elem.querySelector('.basket__minus-btn');
    btn.addEventListener('click', ({target}) => {
        const btnBlock = btn.closest('.basket__list-quantity-block');
        const text = btnBlock.querySelector('.basket__quantity-text');
        if (+(text.textContent) > 1) {
            const value = -1;
            text.textContent = +(text.textContent) + value;
            calculate(value, item, target);
        }
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

export const deleteItem = (list, elem, id) => {
    const removeBtn = document.querySelector('.basket__trashcan-svg');
    
    removeBtn.addEventListener('click', ({target}) => {
        if (target.closest('.basket__trashcan-svg')) {
            const liEls = list.querySelectorAll('li');
            liEls.forEach((el) => {
                const checkbox = el.querySelector('.basket__checkbox-input');
                if (checkbox.checked) {
                    el.remove();
                    const storage = getStorage(basketUserId);
                    const result = storage.filter((data) => data.item.id !== id);
                    console.log(' : ', result);
                }
            });
        }
    });
};

export const basketHandlers = () => {
    setBasketQuantity();
    handleChooseAll();
};