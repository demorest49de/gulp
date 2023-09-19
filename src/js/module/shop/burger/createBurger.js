export const createBurger = () => {
    const burger = document.createElement('div');
    burger.classList.add('burger');
    burger.insertAdjacentHTML('beforeend', `

        <div class="burger__menu navbase">
              <div class="container navbase__container">
                    <div class="burger__block navbase__block">
                        <div class="navbase__catalog">
                            <h2 class="navbase__subtitle">Каталог</h2>
                            <nav class="navbase__nav">
                                <ul class="navbase__list">
                                    <li class="navbase__elem"><a href="#">Смартфоны</a></li>
                                    <li class="navbase__elem"><a href="#">Ноутбуки</a></li>
                                    <li class="navbase__elem"><a href="#">Ювелирные изделия</a></li>
                                    <li class="navbase__elem"><a href="#">Одежда</a></li>
                                    <li class="navbase__elem"><a href="#">Бытовая техника</a></li>
                                    <li class="navbase__elem"><a href="#">Бытовая химия</a></li>
                                    <li class="navbase__elem"><a href="#">Книги и журналы</a></li>
                                    <li class="navbase__elem"><a href="#">Домашний текстиль</a></li>
                                    <li class="navbase__elem"><a href="#">Электроника</a></li>
                                    <li class="navbase__elem"><a href="#">Косметика</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="navbase__buyers-info">
                            <h2 class="navbase__subtitle">Покупателям</h2>
                            <nav class="navbase__nav">
                                <ul class="navbase__list">
                                    <li class="navbase__elem"><a href="#">Оплата заказа</a></li>
                                    <li class="navbase__elem"><a href="#">Условия доставки</a></li>
                                    <li class="navbase__elem"><a href="#">Условия возврата товара</a></li>
                                    <li class="navbase__elem"><a href="/blog.html">Блог</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="navbase__contacts">
                            <h2 class="navbase__subtitle">Связаться с нами</h2>
                            <nav class="navbase__nav">
                                <ul class="navbase__list">
                                    <li class="navbase__elem"><a href="#">Контакты</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
              </div>
        </div>
  `);
    return burger;
};