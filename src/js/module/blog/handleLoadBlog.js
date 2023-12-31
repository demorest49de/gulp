const pageSettings = () => {
    return {
        currentPage: "",
        endPage: "",
        currentPageStr: 'currentPage',
    };
};

let {currentPage, currentPageStr, endPage} = pageSettings();

const setStorage = (key, value) => {
    localStorage.setItem(key, `${value}`);
    return value;
};

const getPageFromStorage = () => {
    currentPage = localStorage.getItem(currentPageStr);

    currentPage = currentPage && Number.isInteger(+currentPage) ? currentPage : setStorage(currentPageStr, '1');
    
};

export const loadItemsHandler = ($) => {

    const loadArticles = async (callback) => {
        const result = await fetch(`https://gorest.co.in/public-api/posts?page=${currentPage}&per_page=12`);
        const data = await result.json();

        callback(data);
    };

    const getFormattedDate = () => {
        const dt_options = {day: `numeric`, month: `long`, year: `numeric`};
        const today = new Date();
        const strDate = today.toLocaleDateString("ru-RU", dt_options).split(" ").slice(0, -1);
        const [monthDate, monthName, yearNumber] = strDate;
        return `${monthDate} ${monthName} ${yearNumber}, `;
    };

    const getFormattedTime = () => {
        const dt_options = {hour: `2-digit`, minute: `2-digit`};
        const today = new Date();
        const strTime = today.toLocaleTimeString("ru-RU", dt_options).split(" ");
        return strTime.toString();
    };

    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const renderArticles = (data) => {

        endPage = data.meta.pagination.total;
        setStorage('endPage', endPage);
        
        const articlesHTML = data.data.map((item, index) => {

            const strDate = getFormattedDate();
            const strTime = getFormattedTime();
            
            const article = document.createElement('article');
            article.classList.add('blog__ba', 'ba');
            article.innerHTML = `
                <a class="ba__link" href="./article.html?id=${item.id}">
                    <picture class="ba__image">
                        <source srcset="./img/blog/${index}.avif" type="image/avif">
                        <source srcset="./img/blog/${index}.webp" type="image/webp">
                        <img src="./img/blog/${index}.png" alt="${item.title}" width="140" height="140">
                    </picture>
                    <div class="ba__block">
                        <h2 class="ba__subtitle">
                            <span class="ba__text">
                                ${item.title}
                            </span>
                        </h2>
                    </div>
                </a>
        `;

            return article;
        });

        while ($.blogItems.blogList.childElementCount > 0) {
            $.blogItems.blogList.childNodes[0].remove();
        }
    
        $.blogItems.blogList.append(...articlesHTML);
    };

    loadArticles(renderArticles);
};

const setPage = ($) => {
    getPageFromStorage();

    const nodeListOf = $.blogItems.pageElems.pageList.querySelectorAll('.pagination__item');
    [...nodeListOf].forEach(element => {
        element.classList.remove('pagination__item-active');
    });

    $.blogItems.pageElems.links.forEach(elem => {
        if (elem.getAttribute('data-pagenumber') === currentPage) {
            elem.parentElement.classList.add('pagination__item-active');
            return;
        }
    });
};

const setArrows = ($) => {
    const arrowNodes = $.blogItems.blogPagination.querySelectorAll('svg');
    const [leftArrow, rightArrow] = arrowNodes;

    if (+currentPage !== 1) {
        leftArrow.classList.add('pagination__arrow-active');
    }else{
        leftArrow.classList.remove('pagination__arrow-active');
    }

    if (+currentPage >= 3) {
        rightArrow.classList.remove('pagination__arrow-active');
    }else{
        rightArrow.classList.add('pagination__arrow-active');
    }


};

const setArrowLink = ($) => {
    endPage = localStorage.getItem('endPage');
    if (+currentPage > 1) {
        $.blogItems.pageElems.leftLink.href = `./blog.html?page=${+currentPage - 1}`;
    }
    if (+currentPage < +endPage) {
        $.blogItems.pageElems.rightLink.href = `./blog.html?page=${+currentPage + 1}`;
    }
};

export const paginationClickHandler = ($) => {
    const pageClick = () => {
        $.blogItems.pageElems.pageList.addEventListener('click', (ev) => {
            ev.preventDefault();
            const target = ev.target;
            const targetPage = target.getAttribute('data-pageNumber');
            if(+targetPage !== +currentPage){
                currentPage = (target.getAttribute('data-pageNumber'));
                setStorage(currentPageStr, currentPage);
                loadItemsHandler($);
                paginationHandler($);
            }
        });
    };

    const arrowsClick = () => {
        const leftLink = $.blogItems.pageElems.leftLink;
        const rightLink = $.blogItems.pageElems.rightLink;

        leftLink.addEventListener('click', (ev) => {
            ev.preventDefault();
            const target = ev.target;
            const anchor = target.closest('.pagination__link-left');

            if (anchor && (+currentPage > 1)) {
                currentPage = (+currentPage - 1);
                setStorage(currentPageStr, currentPage);
                loadItemsHandler($);
                paginationHandler($);
            }
        });

        rightLink.addEventListener('click', (ev) => {
            ev.preventDefault();
            const target = ev.target;
            const anchor = target.closest('.pagination__link-right');

            
            if (anchor && (+currentPage < 3)) {
                currentPage = (+currentPage + 1);
                setStorage(currentPageStr, currentPage);
                loadItemsHandler($);
                paginationHandler($);
            }
        });
    };


    pageClick();
    arrowsClick();
};

export const paginationHandler = ($) => {

    setPage($);
    setArrows($);
    setArrowLink($);
};