
export const createBreadCrumbs = (bc) => {
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
    
    for (const {link, svg} of bc) {
        ul.insertAdjacentHTML('beforeend',
            `
            <li class="bc__item">
                ${link}
                ${svg}
            </li>
        `);
    }
    
    return breadCrumbs;
};