import {createFooter, createHeader, createMain} from "../../base/baseElems.js";
import {createSection} from "../createShop.js";
import {createSectionBasket} from "../basket/createBasket.js";
import {basketUserId} from '../../constants.js';
import {getStorage, setStorage} from "../localStorage.js";
import {calculateDepth} from "../card/createCard.js";
import {createBreadCrumbs} from "../../base/breadcrumbs.js";


export const renderBasket = ($) => {
    
    $.cart.forEach(({type, name}) => {
        if (type === $.types.header) {
            createHeader(name, $);
            return;
        }
        
        if (type === $.types.main) {
            const bc = createBreadCrumbs($.breadCrumbs.cartInfo);
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

// TODO plusminusCalculate
const calculate = (value, id, target) => {
    
    const basketArray = getStorage(basketUserId);
    const elem = basketArray.find((elem) => elem.item.id === id);
    const item = elem.item;
    if (elem) {
        elem.qty += value;
    }
    setStorage(basketUserId, basketArray);
    setBasketQuantity();
    calculateTotal();
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

export const handleChangeQuantity = () => {
    
    const list = document.querySelector('.basket__items-list');
    if (list) {
        list.addEventListener('click', ({target}) => {
            const plusBtn = '.basket__plus-btn';
            const minusBtn = '.basket__minus-btn';
            if (target.closest(plusBtn)) {
                handleQtyBtns(target, plusBtn);
            }
            if (target.closest(minusBtn)) {
                handleQtyBtns(target, minusBtn);
            }
        });
    }
};

// TODO calculateTotal
const calculateTotal = () => {
    const basket = getStorage(basketUserId);
    const fDiscount = document.querySelector('.basket__total-value:nth-child(1)');
    // если элемент не существует на странице  то будет ошибка
    if (fDiscount) {
        
        const lDiscount = document.querySelector('.basket__total-value:nth-child(2)');
        const fTotal = document.querySelector('.basket__details-item-total ' +
            '.basket__item-details-value:nth-child(1)');
        const lTotal = document.querySelector('.basket__details-item-total ' +
            '.basket__item-details-value:nth-child(2)');
        const fDiff = document.querySelector('.basket__details-item-discount ' +
            '.basket__item-details-value:nth-child(1)');
        const lDiff = document.querySelector('.basket__details-item-discount ' +
            '.basket__item-details-value:nth-child(2)');
        
        let total = 0;
        let discoutedSum = 0;
        
        const list = document.querySelectorAll('.basket__list-item');
    
    
        fTotal.textContent = '0';
        lTotal.textContent = ` ₽`;
    
        fDiscount.textContent = '0';
        lDiscount.textContent = ` ₽`;
    
        fDiff.textContent = '0';
        lDiff.textContent = ` ₽`;
        
        list.forEach((li) => {
            const checkbox = li.querySelector('.basket__checkbox-input');
            const id = li.getAttribute('data-id');
            
            if (checkbox.checked) {
                const data = basket.find(i => i.item.id === id);
                if (data) {
                    const item = data.item;
                    
                    const localTotal = data.qty * item.price;
                    total += (data.qty * item.price);
                    
                    if (item.discount > 0) {
                        discoutedSum += (Math.ceil((localTotal) - ((localTotal * item.discount) / 100)));
                    } else {
                        discoutedSum += (Math.ceil((localTotal) / 1.2));
                    }
                    const diff = total - discoutedSum;
                    
                    // console.log(' : ', total);
                    // console.log(' : ', discoutedSum);
                    // console.log(' : ', diff);
                    
                    const {firstPart: firstTotal, lastPart: lastTotal} = calculateDepth(total.toString());
                    const {
                        firstPart: firstDiscount,
                        lastPart: lastDiscount
                    } = calculateDepth(discoutedSum.toString());
                    const {firstPart: firstDiff, lastPart: lastDiff} = calculateDepth(diff.toString());
                    
                    fTotal.textContent = firstTotal;
                    lTotal.textContent = lastTotal + ` ₽`;
                    
                    fDiscount.textContent = firstDiscount;
                    lDiscount.textContent = lastDiscount + ` ₽`;
                    
                    fDiff.textContent = firstDiff;
                    lDiff.textContent = lastDiff + ` ₽`;
                }
            }
        });
    }
};

const handleQtyBtns = (target, className) => {
    const btnBlock = target.closest('.basket__list-quantity-block');
    const text = btnBlock.querySelector('.basket__quantity-text');
    let value = 0;
    
    const el = target.closest(('li'));
    const id = el.getAttribute('data-id');
    if (className === '.basket__plus-btn') {
        value = 1;
        text.textContent = +(text.textContent) + value;
        calculate(value, id, target);
    }
    
    if (className === '.basket__minus-btn') {
        value = -1;
        if (+(text.textContent) > 1) {
            text.textContent = +(text.textContent) + value;
            calculate(value, id, target);
            return;
        }
    }
};

//todo chooseAll
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
            calculateTotal();
        });
    }
    ;
};

// TODO handleSingleChoose
const handleChooseSingle = () => {
    // в листе всегда нужно брать его ли элементы  а не сам лист!!!!
    const list = document.querySelectorAll('.basket__list-item');
    list.forEach((li) => {
        const checkbox = li.querySelector('.basket__checkbox-input');
        
        checkbox.addEventListener('click', ({target}) => {
            calculateTotal();
        });
    });
};

const removePictures = (id) => {
    const pictures = document.querySelectorAll('.basket__dely-picture-block .basket__picture');
    pictures.forEach((item) => {
        
        const attr = item.getAttribute('data-id');
        if (attr && attr === id) item.remove();
    });
};

export const deleteItemByCheckbox = () => {
    const block = document.querySelector('.basket__list-manage-block .basket__trashcan-svg');
    const list = document.querySelector('.basket__items-list');
    if (block) {
        block.addEventListener('click', ({target}) => {
            if (target.closest('.basket__trashcan-svg')) {
                const liEls = list.querySelectorAll('li');
                liEls.forEach((el) => {
                    const checkbox = el.querySelector('.basket__checkbox-input');
                    if (checkbox && checkbox.checked) {
                        el.remove();
                        
                        const id = el.getAttribute('data-id');
                        
                        const storage = getStorage(basketUserId);
                        const result = storage.filter((data) => (data.item.id !== id));
                        
                        setStorage(basketUserId, result);
                        setBasketQuantity();
                        
                        removePictures(id);
                        calculateTotal();
                    }
                });
                const checkbox = document.querySelector('.basket__list-manage-block .basket__checkbox-input');
                checkbox.checked = false;
            }
        });
    }
};

export const deleteItem = () => {
    const btns = document.querySelectorAll('.basket__list-all-info-block .basket__trashcan-btn');
    
    btns.forEach((btn) => {
        btn.addEventListener('click', ({target}) => {
            if (target.closest('.basket__trashcan-svg')) {
                const li = target.closest('li');
                li.remove();
                const id = li.getAttribute('data-id');
                
                const storage = getStorage(basketUserId);
                const result = storage.filter((data) => (data.item.id !== id));
                
                setStorage(basketUserId, result);
                setBasketQuantity();
                
                removePictures(id);
                calculateTotal();
            }
        });
    });
};

export const basketHandlers = () => {
    setBasketQuantity();
    handleChooseAll();
    deleteItemByCheckbox();
    deleteItem();
    handleChangeQuantity();
    // calculateTotal();
    handleChooseSingle();
};