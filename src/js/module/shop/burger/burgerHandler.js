export const burgerHandler = ($) => {
    const burgerBtn = document.querySelector('.header__button-menu');
    const menuSvg = document.querySelector('.header__button-menu-svg use');
    const burgerMenu = document.querySelector('.burger');
    
    burgerBtn.addEventListener('click', (ev) => {
        ev.stopPropagation();
        $.burgerMenu.visibility = !$.burgerMenu.visibility;
        console.log(' : ',$.burgerMenu.visibility);
        if($.burgerMenu.visibility){
            menuSvg.setAttribute('href', $.burgerMenu.menu);
            document.body.style.overflow = 'visible';
            burgerMenu.style.visibility = 'hidden';
            burgerMenu.style.opacity = '0';
        }else{
            menuSvg.setAttribute('href', $.burgerMenu.clear);
            document.body.style.overflow = 'hidden';
            burgerMenu.style.visibility = 'visible';
            burgerMenu.style.opacity = '1';
        }
    });
};