import {rafAnimation} from "../../base/baseRafAnimation.js";

export const burgerHandler = ($) => {
    const burgerBtn = document.querySelector('.header__button-menu');
    const menuSvg = document.querySelector('.header__button-menu-svg use');
    const burger = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.burger__menu');
    const burgerBlock = document.querySelector('.burger__block');
    
    let blockHeight = NaN;
    
    const updateBlockHeight = () => {
        const height = +(burgerBlock.scrollHeight);
        let paddingBottom = 92;
        if(screen.width <= 440){
           paddingBottom = 45;
        }
        blockHeight = height + paddingBottom;
        burgerMenu.style.height = `${blockHeight}px`;
    };
    
    const closeMenu = () => {
        menuSvg.setAttribute('href', $.burgerMenu.menu);
        document.body.style.overflow = 'visible';
        
        updateBlockHeight();
        rafAnimation(300, -1, burgerMenu.scrollHeight, (progress) => {
            burgerMenu.style.height = `${progress}px`;
        });
    };
    
    const openMenu = () => {
        menuSvg.setAttribute('href', $.burgerMenu.clear);
        document.body.style.overflow = 'hidden';
        
        updateBlockHeight();
        rafAnimation(300, 1, blockHeight, (progress) => {
            burgerMenu.style.height = `${progress}px`;
        });
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
    
    window.addEventListener('resize', () => {
        updateBlockHeight();
    });
    
};