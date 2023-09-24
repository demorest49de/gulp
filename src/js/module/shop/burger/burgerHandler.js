import {rafAnimationIcon, rafAnimationMenu} from "../../base/baseRafAnimation.js";

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
        if (screen.width <= 650) {
            paddingBottom = 45;
        }
        blockHeight = height + paddingBottom;
        if ($.burgerMenu.visibility) {
            burgerMenu.style.height = `${blockHeight}px`;
        }
    };
    
    const animationIconHandler = () => {
        menuSvg.style.opacity = '0';
        rafAnimationIcon(500, 1, (progress) => {
            menuSvg.style.opacity = `${progress}`;
        });
    };
    
    const closeMenu = async () => {
        menuSvg.setAttribute('href', $.burgerMenu.menu);
        // document.body.style.overflow = 'visible';
        animationIconHandler();
        updateBlockHeight();
        
        // решение через коллбэк которое меня не устроило
        // const callbackwrapper = (callback) => {
        //     const progress = rafAnimationMenu(300, -1, burgerMenu.scrollHeight, (progress) => {
        //         burgerMenu.style.height = `${progress}px`;
        //     });
        //     console.log(' : ', progress);
        // };
        // callbackwrapper(() => {
        //     burger.style.visibility = 'hidden';
        // });
        
        
        const rafPromise = rafAnimationMenu(300, -1, burgerMenu.scrollHeight, (progress) => {
            burgerMenu.style.height = `${progress}px`;
        });
        await rafPromise.then((data) => {
            if(data === 0){
                burger.style.visibility = 'hidden';
            }
        });
    };
    
    const openMenu = () => {
        menuSvg.setAttribute('href', $.burgerMenu.clear);
        // document.body.style.overflow = 'hidden';
        burger.style.visibility = 'visible';
        animationIconHandler();
        updateBlockHeight();
        rafAnimationMenu(300, 1, blockHeight, (progress) => {
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