// const debounce = (fn, msec) => {
//     let lastCall = 0;
//     let lastCallTimerId = NaN;
//
//     return (...args) => {
//         const previousCall = lastCall;
//         lastCall = Date.now();
//
//         if (previousCall && ((lastCall - previousCall) < msec)) {
//             clearTimeout(lastCallTimerId);
//         }
//         lastCallTimerId = setTimeout(() => fn(...args), msec);
//     };
// };

// const handleSearchInput = () => {
//     const searchInput = document.querySelector('.form-search__input');
//
//     const requestSearchedItems = () => {
//         // searchGoodsHandler($, searchInput.value)
//     };
//
//     const handleRequestSearch = debounce(requestSearchedItems, 400);
//
//     searchInput.addEventListener('input', () => {
//         handleRequestSearch();
//
//         console.dir(handleRequestSearch);
//     });
// };

const handleSearch = () => {
    const form = document.querySelector('.header__form-search');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const target = e.target;
        const formData = new FormData(target);
        const data = Object.fromEntries(formData);
        const searchInput = data.search;
    
        window.location.replace(`/search.html?search=${searchInput}`);
    });
};

export const searchHandlers = () => {
    handleSearch();
};