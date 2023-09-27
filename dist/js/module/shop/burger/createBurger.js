export const createBurger = () => {
    const burger = document.createElement('div');
    burger.classList.add('burger');
    burger.insertAdjacentHTML('beforeend', `

        <div class="burger__menu">
              <div class="container burger__container">
                    <div class="burger__block">
                        <div class="burger__catalog">
                            <h2 class="burger__subtitle">Каталог</h2>
                            <nav class="burger__nav">
                                <ul class="burger__list">
                                    <li class="burger__elem"><a href="#">Смартфоны</a></li>
                                    <li class="burger__elem"><a href="#">Ноутбуки</a></li>
                                    <li class="burger__elem"><a href="#">Ювелирные изделия</a></li>
                                    <li class="burger__elem"><a href="#">Одежда</a></li>
                                    <li class="burger__elem"><a href="#">Бытовая техника</a></li>
                                    <li class="burger__elem"><a href="#">Бытовая химия</a></li>
                                    <li class="burger__elem"><a href="#">Книги и журналы</a></li>
                                    <li class="burger__elem"><a href="#">Домашний текстиль</a></li>
                                    <li class="burger__elem"><a href="#">Электроника</a></li>
                                    <li class="burger__elem"><a href="#">Косметика</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="burger__buyers-info">
                            <h2 class="burger__subtitle">Покупателям</h2>
                            <nav class="burger__nav">
                                <ul class="burger__list burger__list">
                                    <li class="burger__elem"><a href="#">Оплата заказа</a></li>
                                    <li class="burger__elem"><a href="#">Условия доставки</a></li>
                                    <li class="burger__elem"><a href="#">Условия возврата товара</a></li>
                                    <li class="burger__elem"><a href="/blog.html">Блог</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="burger__contacts">
                            <h2 class="burger__subtitle">Связаться с нами</h2>
                            <nav class="burger__nav">
                                <ul class="burger__list">
                                    <li class="burger__elem"><a href="#">Контакты</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
              </div>
        </div>
  `);
    return burger;
};