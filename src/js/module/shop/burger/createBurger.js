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
                                    <li class="burger__elem"><a href="category?name=Смартфоны">Смартфоны</a></li>
                                    <li class="burger__elem"><a href="category?name=Ноутбуки">Ноутбуки</a></li>
                                    <li class="burger__elem"><a href="category?name=Ювелирные изделия">Ювелирные изделия</a></li>
                                    <li class="burger__elem"><a href="category?name=Одежда">Одежда</a></li>
                                    <li class="burger__elem"><a href="category?name=Бытовая техника">Бытовая техника</a></li>
                                    <li class="burger__elem"><a href="category?name=Бытовая химия">Бытовая химия</a></li>
                                    <li class="burger__elem"><a href="category?name=Книги и журналы">Книги и журналы</a></li>
                                    <li class="burger__elem"><a href="category?name=Домашний текстиль">Домашний текстиль</a></li>
                                    <li class="burger__elem"><a href="category?name=Электроника">Электроника</a></li>
                                    <li class="burger__elem"><a href="category?name=Косметика">Косметика</a></li>
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