export const createBurger = () => {
    const burger = document.createElement('div');
    burger.classList.add('burger');
    burger.insertAdjacentHTML('beforeend', `
      <div class="burger__container">
        <nav class="burger__nav">
          <ul class="burger__list">
            <li class="burger__item">
              <a class="burger__link" href="#rooms" tabindex="3">Залы</a>
            </li>
            <li class="burger__item">
              <a class="burger__link" href="#about" tabindex="4">О нас</a>
            </li>
            <li class="burger__item">
              <a class="burger__link" href="#booking" tabindex="5">Бронь</a>
            </li>
            <li class="burger__item">
              <a class="burger__link" href="#reviews" tabindex="6">Отзывы</a>
            </li>
            <li class="burger__item">
              <a class="burger__link" href="#contacts" tabindex="7">Контакты</a>
            </li>
          </ul>
        </nav>
        <button class="burger__call-button" tabindex="8">Заказать звонок</button>
      </div>
  `);
    return burger;
};