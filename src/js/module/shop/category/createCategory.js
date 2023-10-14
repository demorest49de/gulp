import {getSearchParams} from "../../base/tools.js";


export const createBCCategory = (bc) => {
    
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
    const name =  paramsObject.name;
    last.ariaLabel = name;
    last.name = name;
    last.url += `?name=${name}`;
    for (const {url, name, ariaLabel} of bc) {
        ul.insertAdjacentHTML('beforeend',
            `
            <li class="bc__item">
            <a class="bc__link" href="./${url}" aria-label="${ariaLabel}">${name}</a>
                <div class="bc__arrow-block">
                    <svg class="bc__nav-arrow">
                        <use href="./svg/article/nav-arrow.svg#nav-arrow"></use>
                    </svg>
                </div>
            </li>
        `);
    }
    
    return breadCrumbs;
};