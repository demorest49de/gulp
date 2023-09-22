import {rafAnimation} from "../../base/baseRafAnimation.js";

export const burgerHandler = ($) => {
    const burgerBtn = document.querySelector('.header__button-menu');
    const menuSvg = document.querySelector('.header__button-menu-svg use');
    const burger = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.burger__menu');
    
    let blockHeight = NaN;
    
    const changeBlockHeight = () => {
        // const height = getComputedStyle(burgerMenu).height;
        updateBlockHeight();
        burgerMenu.style.height = `${blockHeight}px`;
        console.log(' : ',blockHeight);
    };
    
    
    const updateBlockHeight = () => {
        switch (true) {
            case screen.width > 1200 && screen.width <= 1840:
                blockHeight = 680;
                return;
            case screen.width > 1024 && screen.width <= 1200:
                blockHeight = 670;
                return;
            case screen.width > 768 && screen.width <= 1024:
                blockHeight = 450;
                return;
            case screen.width > 440 && screen.width <= 768:
                blockHeight = 440;
                return;
            case screen.width <= 440:
                blockHeight = 680;
                return;
            default:
                blockHeight = 450;
                return;
        }
    };
    
    
    const closeMenu = () => {
        menuSvg.setAttribute('href', $.burgerMenu.menu);
        document.body.style.overflow = 'visible';
        
        burgerMenu.style.paddingBottom = '0px';
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

    document.addEventListener('DOMContentLoaded', () => {
    });
    
    window.addEventListener('resize', () => {
        changeBlockHeight();
    });
};