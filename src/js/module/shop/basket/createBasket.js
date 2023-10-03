import {getItemById} from "../fetch.js";

export const createBCCart = ($, bc) => {
    
    const breadCrumbs = document.createElement('div');
    breadCrumbs.classList.add('breadcrumbs', 'bc');
    
    breadCrumbs.insertAdjacentHTML('beforeend', `
        <div class="container bc__container">
            <nav class="bc__navigation">
                <ul class="bc__bread-crumbs">
                </ul>
            </nav>
        </div>
    `);
    
    const ul = breadCrumbs.querySelector('.bc__bread-crumbs');
    
    const home = bc.home;
    const cart = bc.cart;
    
    ul.insertAdjacentHTML('beforeend',
        `
            <li class="bc__item">
            <a class="bc__link" href="${home.url}" aria-label="${home.ariaLabel}">${home.name}</a>
                <div class="bc__arrow-block">
                    <svg class="bc__nav-arrow">
                        <use href="./svg/article/nav-arrow.svg#nav-arrow"></use>
                    </svg>
                </div>
            </li>
            <li class="bc__item">
            <a class="bc__link" href="${cart.url}"
            aria-label="${cart.ariaLabel}">${cart.name}</a>
                <div class="bc__arrow-block">
                </div>
            </li>
        `);
    return breadCrumbs;
};

export const createSectionBasket = (name, $) => {
    
    $.main.insertAdjacentHTML('beforeend',
        `
    <section class="basket" aria-label="Корзина">
    <h2 class="visually-hidden">Корзина</h2>
    <div class="container basket__container">
        
        <div class="basket__list">
            <h3 class="basket__title">Корзина</h3>
            <div class="basket__underline"></div>
        </div>
        
        <div class="basket__total">
                <div class="basket__price-block">
                    <div class="basket__price">
                        <span class="basket__total-text">итого: </span>
                        <span class="basket__total-text">${1} ₽</span>
                    </div>
                    <div class="basket__price">
                        <span class="basket__item-details">Товары, ${2} шт.</span>
                        <span class="basket__item-details">${100} ₽</span>
                    </div>
                    <div class="basket__price">
                        <span class="basket__item-details">Скидка </span>
                        <span class="basket__item-details">${10} ₽</span>
                    </div>
                    <div class="basket__price">
                        <span class="basket__item-details">Доставка</span>
                        <span class="basket__item-details">Бесплатно/span>
                    </div>
                </div>
                <div class="basket__order-block"></div>
                <button class="basket__order-btn">Добавить в корзину</button>
                
                <div class="basket__info-block">
                    <p class="basket__text-info">Доставка</p>
                    <p class="basket__text-details">1-3 января</p>
                    <p class="basket__text-info">Продавец</p>
                    <p class="basket__text-details">ShopOnline</p>
                </div>
               
                <button class="basket__price-reduction-btn">
                    <svg class="basket__price-reduction-bell-svg" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 13.586V10C19 6.783 16.815 4.073
                         13.855 3.258C13.562 2.52 12.846 2 12 2C11.154
                         2 10.438 2.52 10.145 3.258C7.185 4.074 5 6.783
                          5 10V13.586L3.293 15.293C3.19996 15.3857
                          3.12617 15.4959 3.07589 15.6172C3.0256 15.7386
                           2.99981 15.8687 3 16V18C3 18.2652 3.10536 18.5196
                           3.29289 18.7071C3.48043 18.8946 3.73478 19 4
                           19H20C20.2652 19 20.5196 18.8946 20.7071
                           18.7071C20.8946 18.5196 21 18.2652 21
                           18V16C21.0002 15.8687 20.9744 15.7386 20.9241
                           15.6172C20.8738 15.4959 20.8 15.3857 20.707
                           15.293L19 13.586ZM19 17H5V16.414L6.707 14.707C6.80004
                           14.6143 6.87383 14.5041 6.92412 14.3828C6.9744
                            14.2614 7.00019 14.1313 7 14V10C7 7.243 9.243
                             5 12 5C14.757 5 17 7.243 17 10V14C17 14.266
                             17.105 14.52 17.293 14.707L19 16.414V17ZM12
                              22C12.6193 22.0008 13.2235 21.8086 13.7285
                              21.4502C14.2335 21.0917 14.6143 20.5849 14.818
                               20H9.182C9.38566 20.5849 9.76648 21.0917
                                10.2715 21.4502C10.7765 21.8086 11.3807 22.0008 12 22Z"/>
                    </svg>
                    <span class="basket__price-reduction-text">Узнать о снижении цены</span>
                </button>
            </div>
        <div class="basket__delivery-options">
            <h4 class="basket__subtitle">Описание:</h4>
            <p class="basket__descr-text">${1}</p>
        </div>
    </div>
</section>
            `);
    
    // getItemById($, cardId).then((data) => {
    //     console.log(' : ', data.data);
    //     const item = data.data;
    //
    //     const newPrice = item.price.toString();
    //     let oldPrice = NaN;
    //     if (item.discount === 0) {
    //         oldPrice = (Math.ceil(item.price * 1.2)).toString();
    //     } else {
    //         oldPrice = (Math.ceil(item.price - ((item.price * item.discount) / 100))).toString();
    //
    //     }
    //     console.log(' : ', oldPrice);
    //     const {firstPart: firstNew, lastPart: lastNew} = calculateDepth(newPrice);
    //     const {firstPart: firstOld, lastPart: lastOld} = calculateDepth(oldPrice);
    //
    //     const creditfrom = Math.ceil(item.price - (item.price / 1.2));
    //     console.log(' : ', creditfrom);
    // });
};