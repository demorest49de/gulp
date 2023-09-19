export const burgerHandler = ($) => {
    const burgerBtn = document.querySelector('.header__button-menu');
    const menuSvg = document.querySelector('.header__button-menu-svg use');
    
    burgerBtn.addEventListener('click', (ev) => {
        ev.stopPropagation();
        $.burgerMenu.visibility = !$.burgerMenu.visibility;
        console.log(' : ',$.burgerMenu.visibility);
        if($.burgerMenu.visibility){
            menuSvg.setAttribute('href', $.burgerMenu.menu);
        }else{
            menuSvg.setAttribute('href', $.burgerMenu.clear);
        }
    });
};