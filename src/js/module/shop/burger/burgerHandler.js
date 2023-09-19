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
            document.body.style.overflow = 'hidden';
            burgerMenu.style.opacity = '0';
            document.body.style.overflow = 'visible';
        }else{
            menuSvg.setAttribute('href', $.burgerMenu.clear);
            burgerMenu.style.visibility = 'visible';
            burgerMenu.style.opacity = '1';
            document.body.style.overflow = 'hidden';
        }
    });
};