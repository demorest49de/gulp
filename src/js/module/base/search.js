const debounce = (fn, msec) => {
    let lastCall = 0;
    let lastCallTimerId = NaN;
    
    return (...args) => {
        const previousCall = lastCall;
        lastCall = Date.now();
        
        if (previousCall && ((lastCall - previousCall) < msec)) {
            clearTimeout(lastCallTimerId);
        }
        lastCallTimerId = setTimeout(() => fn(...args), msec);
    };
};
//
// const handleSearch = ($) => {
//     const searchInput = document.querySelector('.nav__input');
//
//     const requestSearchedItems = () => {
//
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
    form.addEventListener('submit', ({target}) => {
        target.preventDefault();
        console.log(' : ',target);
        console.log(' : ',form.querySelector('.form-search__input'));
    });
};

export  const searchHandlers=()=>{
    handleSearch();
}