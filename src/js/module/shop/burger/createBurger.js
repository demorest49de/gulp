export const createBurger = ($, callback) => {
    
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
    const list = burger.querySelector('.burger__list');
    
    const categories = callback($);
    categories.then((data) => {
        
        data.data.forEach((elem, index) => {
            const li = document.createElement('li');
            li.className = "burger__elem";
            const a = document.createElement('a');
            a.href = `catalog?name=${elem}`;
            a.textContent = elem;
            li.append(a);
            
            list.append(li);
        });
    });
    
    
    return burger;
};