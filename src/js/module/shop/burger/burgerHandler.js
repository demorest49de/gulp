export const burgerHandler = ($) => {
    const burgerBtn = document.querySelector('.header__button-menu');
    const menuSvg = document.querySelector('.header__button-menu-svg use');
    const burger = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.burger__menu');
    
    // const updateBurgerHeight = () => {
    //     const height = getComputedStyle(burgerMenu).height;
    //     console.log(' : ', height);
    // };
    
    const checkWindowsWidth = () => {
        if (screen.width <= 440) {
            burgerMenu.style.paddingBottom = '45px';
        }
    };
    
    
    const closeMenu = () => {
        menuSvg.setAttribute('href', $.burgerMenu.menu);
        document.body.style.overflow = 'visible';
        // burger.style.visibility = 'hidden';
        // burger.style.opacity = '0';
        
        burgerMenu.style.paddingBottom = '0px';
    };
    
    const openMenu = () => {
        menuSvg.setAttribute('href', $.burgerMenu.clear);
        document.body.style.overflow = 'hidden';
        
        // burger.style.visibility = 'visible';
        // burger.style.opacity = '1';
        
        burgerMenu.style.paddingBottom = '92px';
    };
    
    burgerBtn.addEventListener('click', () => {
        if ($.burgerMenu.visibility) {
            closeMenu();
        } else {
            openMenu();
        }
        $.burgerMenu.visibility = !$.burgerMenu.visibility;
    });
    
    burger.addEventListener('click', ({target}) => {
        if (target === burger) {
            closeMenu();
            $.burgerMenu.visibility = !$.burgerMenu.visibility;
        }
    });
    
    const burgerMenuWidth = () => {
        switch (true) {
            case screen.width <= 1840:
                burgerMenu.style.height = '700';
                return;
            case screen.width <= 1024:
                burgerMenu.style.height = '460px';
                return;
            case screen.width <= 440:
                burgerMenu.style.height = '680';
                return;
            default:
                burgerMenu.style.height = '500px';
                return;
        }
    };


// @media (max-width: 1840px) {
//         height: 700px;
//     }
// @media (max-width: 1024px) {
//         height: 460px;
//     }
// @media (max-width: 440px) {
//         height: 680px;
//     }
    
    document.addEventListener('DOMContentLoaded', () => {
        checkWindowsWidth();
    });
    
    window.addEventListener('resize', () => {
        checkWindowsWidth();
    });
};