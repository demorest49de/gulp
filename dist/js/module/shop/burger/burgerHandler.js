import{rafAnimationIcon,rafAnimationMenu}from"../../base/baseRafAnimation.js";export const burgerHandler=e=>{const t=document.querySelector(".header__button-menu"),i=document.querySelector(".header__button-menu-svg use"),r=document.querySelector(".burger"),n=document.querySelector(".burger__menu"),u=document.querySelector(".burger__block");let s=NaN;const o=()=>{const t=+u.scrollHeight;let i=92;screen.width<=650&&(i=45),s=t+i,e.burgerMenu.visibility&&(n.style.height=`${s}px`)},l=()=>{i.style.opacity="0",rafAnimationIcon(500,1,(e=>{i.style.opacity=`${e}`}))},c=async()=>{i.setAttribute("href",e.burgerMenu.menu),l(),o();const t=rafAnimationMenu(300,-1,n.scrollHeight,(e=>{n.style.height=`${e}px`}));await t.then((e=>{0===e&&(r.style.visibility="hidden")}))};t.addEventListener("click",(()=>{e.burgerMenu.visibility?c():(i.setAttribute("href",e.burgerMenu.clear),r.style.visibility="visible",l(),o(),rafAnimationMenu(300,1,s,(e=>{n.style.height=`${e}px`}))),e.burgerMenu.visibility=!e.burgerMenu.visibility})),r.addEventListener("click",(({target:t})=>{t===r&&(c(),e.burgerMenu.visibility=!e.burgerMenu.visibility)})),window.addEventListener("resize",(()=>{o()}))};