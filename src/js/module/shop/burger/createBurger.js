export const createBurger = () => {
    const burger = document.createElement('div');
    burger.classList.add('burger');
    burger.insertAdjacentHTML('beforeend', `
      <div class="burger__container">
        <nav class="burger__nav">
          <ul class="burger__list">
            <li class="burger__item">
              <a class="burger__link" href="#rooms" >Залы</a>
            </li>
            <li class="burger__item">
              <a class="burger__link" href="#about" >О нас</a>
            </li>
            <li class="burger__item">
              <a class="burger__link" href="#booking" >Бронь</a>
            </li>
            <li class="burger__item">
              <a class="burger__link" href="#reviews" >Отзывы</a>
            </li>
            <li class="burger__item">
              <a class="burger__link" href="#contacts" >Контакты</a>
            </li>
          </ul>
        </nav>
        <button class="burger__call-button">Заказать звонок</button>
      </div>
  `);
    return burger;
};