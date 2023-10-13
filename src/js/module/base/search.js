
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