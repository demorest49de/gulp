import {getSearchParams} from "../base/tools.js";


export const createBCSearch = (bc) => {
    
    const paramsObject = getSearchParams();
    
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
    const last = bc[bc.length - 1];
    const name =  paramsObject.search;
    
    last.url += `?search=${name}`;
    const home = bc[0];
    const search = bc[1];
    
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
            <a class="bc__link" href="${search.url}" aria-label="${search.ariaLabel}">${search.name}</a>
                <div class="bc__arrow-block">
                    <svg class="bc__nav-arrow">
                        <use href="./svg/article/nav-arrow.svg#nav-arrow"></use>
                    </svg>
                </div>
            </li>
        `);
    
    return breadCrumbs;
};