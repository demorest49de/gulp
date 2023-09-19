export const burgerHandler = () => {
    const burgerBtn = document.querySelector('.header__button-menu');
    
    
    burgerBtn.addEventListener('click', ({target}) => {
        console.log(' : ',target);
        
    });
};