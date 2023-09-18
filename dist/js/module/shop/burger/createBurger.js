export const createBurger=()=>{const n=document.createElement("div");return n.classList.add("burger"),n.insertAdjacentHTML("beforeend",'\n      <div class="burger__container">\n        <nav class="burger__nav">\n          <ul class="burger__list">\n            <li class="burger__item">\n              <a class="burger__link" href="#rooms" tabindex="3">Залы</a>\n            </li>\n            <li class="burger__item">\n              <a class="burger__link" href="#about" tabindex="4">О нас</a>\n            </li>\n            <li class="burger__item">\n              <a class="burger__link" href="#booking" tabindex="5">Бронь</a>\n            </li>\n            <li class="burger__item">\n              <a class="burger__link" href="#reviews" tabindex="6">Отзывы</a>\n            </li>\n            <li class="burger__item">\n              <a class="burger__link" href="#contacts" tabindex="7">Контакты</a>\n            </li>\n          </ul>\n        </nav>\n        <button class="burger__call-button" tabindex="8">Заказать звонок</button>\n      </div>\n  '),n};
//# sourceMappingURL=../../../../maps/module/shop/burger/createBurger.js.map
