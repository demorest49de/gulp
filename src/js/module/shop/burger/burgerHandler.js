export const burgerHandler = ($) => {
    const burgerBtn = document.querySelector('.header__button-menu');
    const menuSvg = document.querySelector('.header__button-menu-svg use');
    const burgerMenu = document.querySelector('.burger');
    
    const closeMenu = () => {
        menuSvg.setAttribute('href', $.burgerMenu.menu);
        document.body.style.overflow = 'visible';
        burgerMenu.style.visibility = 'hidden';
        burgerMenu.style.opacity = '0';
    };
    burgerBtn.addEventListener('click', (ev) => {
        $.burgerMenu.visibility = !$.burgerMenu.visibility;
        
        if ($.burgerMenu.visibility) {
            closeMenu();
        } else {
            menuSvg.setAttribute('href', $.burgerMenu.clear);
            document.body.style.overflow = 'hidden';
            burgerMenu.style.visibility = 'visible';
            burgerMenu.style.opacity = '1';
        }
    });
    
    
    burgerMenu.addEventListener('click', () => {
        closeMenu();
        $.burgerMenu.visibility = !$.burgerMenu.visibility;
    });
};