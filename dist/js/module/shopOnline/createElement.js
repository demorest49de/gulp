const main = document.querySelector('main');
import {elemTypes as types} from '/js/module/constants.js';

const createSection = (name) => {
    if (name === 'item') {
        main.insertAdjacentHTML('beforeend',
            `
                <section class="item" aria-label="Каталог товаров">
                    <h2 class="visually-hidden">товары и скидки</h2>
                    <div class="container item__container">
        
                        <a href="#" class="item__gallery item__gallery-notebook" aria-label="Распродажа ноутбуков">
                            <p class="item__text-notebook">
                                -50% на все ноутбуки</p>
                            <div class="item__timer timer" data-timer-deadline="04/26/23 22:41">
                            </div>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-book" aria-label="Книга">
                            <p class="item__text-book">
                                <span class="item__text-bold">Книга –</span> лучший подарок</p>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-discount-bottom-left item__gallery-time"
                           aria-label="Скидки">
                            <p class="item__text-time">
                                Время скидок!
                            </p>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-discount-top-left item__gallery-shoes"
                        aria-label="вторая пара кросовок в подарок">
                            <img class="item__image-shoes" src="img/item/3.jpg" alt="Обувь">
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-second-pair" aria-label="Кросовки">
                            <p class=" item__text-second-pair">
                                Вторая пара кроссовок
                                <span class="item__text-big">в&nbsp;подарок!</span>
                            </p>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-gift-ideas" aria-label="Подарки">
                            <p class=" item__text-new-ideas">
                                Идеи новогодних подарков
                            </p>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-discount-bottom-left item__gallery-profitable-december"
                           aria-label="Техника">
                            <p class=" item__text-profitable-december">
                                Выгодно в декабре!
                            </p>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-new-year" aria-label="Украшения на новый год">
                            <p class="item__text-new-year">
                                Новогодние украшения
                            </p>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-discount-bottom-left item__gallery-dresses"
                           aria-label="Одежда">
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-discount-top-left item__gallery-chemicals"
                           aria-label="Бытовая химия">
                            <p class="item__text-chemicals">
                                На бытовую химию
                            </p>
                        </a>
        
                        <a href="#" class="item__gallery item__gallery-ny-toys" aria-label="Елочные украшения">
                            <img class="item__image-ny-toys" src="img/item/10.jpg" alt="Елочные украшения">
                        </a>
                    </div>
                </section>
            `);
        return;
    }
    if (name === 'wholesale') {
        main.insertAdjacentHTML('beforeend',
            `
            <section class="wholesale" aria-label="Распродажа">
            <h2 class="visually-hidden">Распродажа</h2>
            <div class="container">
                <h3 class="wholesale__title">Это выгодно!</h3>
                <ul class="wholesale__cards">
                </ul>
            </div>
        </section>
            `);
        createCards();
        return;
    }
};


const createFooter = (name) => {
    window.document.body.insertAdjacentHTML('beforeend',
        `
            <footer class="footer">
        <div class="container ">
            <div class="footer__block">
                <div class="footer__logo-block">
                    <img
                            class="footer__logo"
                            src="img/footer/logo.svg"
                            alt="Логотип магазина ShopOnline">
                </div>
                <div class="footer__catalog">
                    <h2 class="footer__subtitle">Каталог</h2>
                    <ul class="footer__list">
                        <li class="footer__elem"><a href="#">Смартфоны</a></li>
                        <li class="footer__elem"><a href="#">Ноутбуки</a></li>
                        <li class="footer__elem"><a href="#">Ювелирные изделия</a></li>
                        <li class="footer__elem"><a href="#">Одежда</a></li>
                        <li class="footer__elem"><a href="#">Бытовая техника</a></li>
                        <li class="footer__elem"><a href="#">Бытовая химия</a></li>
                        <li class="footer__elem"><a href="#">Книги и журналы</a></li>
                        <li class="footer__elem"><a href="#">Домашний текстиль</a></li>
                        <li class="footer__elem"><a href="#">Электроника</a></li>
                        <li class="footer__elem"><a href="#">Косметика</a></li>
                    </ul>
                </div>
                <div class="footer__buyers-info">
                    <h2 class="footer__subtitle">Покупателям</h2>

                    <ul class="footer__list">
                        <li class="footer__elem"><a href="#">Оплата заказа</a></li>
                        <li class="footer__elem"><a href="#">Условия доставки</a></li>
                        <li class="footer__elem"><a href="#">Условия возврата товара</a></li>
                        <li class="footer__elem"><a href="">Блог</a></li>
                    </ul>
                </div>
                <div class="footer__contacts">
                    <h2 class="footer__subtitle">Контакты</h2>
                    <ul class="footer__list">
                        <li class="footer__elem">Тел: <a href="tel:+79378392361">+7 937 839 23-61</a></li>
                        <li class="footer__elem">Email: <a href="mailto:OnlineShop@gmail.com">OnlineShop@gmail.com</a>
                        </li>
                    </ul>
                    <ul class="footer__list-social">
                        <li><a href="https://web.whatsapp.com">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.1162 15.2318C17.8395 15.0896 16.4608 14.4143 16.2043 14.3229C15.9479 14.2264 15.76 14.1807 15.5746 14.465C15.3867 14.7469 14.8535 15.374 14.686 15.5645C14.5235 15.7523 14.3584 15.7752 14.0817 15.6355C12.4363 14.8129 11.3572 14.168 10.2731 12.3068C9.98616 11.8117 10.56 11.8473 11.0957 10.7783C11.1871 10.5904 11.1414 10.4305 11.0703 10.2883C10.9992 10.1461 10.4406 8.76992 10.2071 8.20879C9.98108 7.66289 9.74748 7.73906 9.57737 7.72891C9.41487 7.71875 9.22952 7.71875 9.04163 7.71875C8.85373 7.71875 8.55159 7.78984 8.29514 8.0666C8.0387 8.34844 7.31506 9.02637 7.31506 10.4025C7.31506 11.7787 8.31799 13.1117 8.4551 13.2996C8.59729 13.4875 10.428 16.3109 13.2387 17.5271C15.016 18.2939 15.7117 18.36 16.6004 18.2279C17.1412 18.1467 18.2559 17.5525 18.4869 16.8949C18.718 16.2398 18.718 15.6787 18.6494 15.5619C18.5809 15.4375 18.393 15.3664 18.1162 15.2318Z"
                                      fill="white"/>
                                <path d="M23.4914 8.59219C22.9176 7.22871 22.0949 6.00488 21.0463 4.95371C19.9977 3.90508 18.7738 3.07988 17.4078 2.50859C16.0113 1.92207 14.5285 1.625 13 1.625H12.9492C11.4106 1.63262 9.92014 1.9373 8.51858 2.53652C7.16526 3.11543 5.95158 3.93809 4.91311 4.98672C3.87463 6.03535 3.05959 7.2541 2.49592 8.6125C1.91194 10.0191 1.6174 11.5146 1.62502 13.0533C1.63264 14.8154 2.05412 16.5648 2.84377 18.1289V21.9883C2.84377 22.6332 3.36682 23.1562 4.01174 23.1562H7.87365C9.43772 23.9459 11.1871 24.3674 12.9492 24.375H13.0026C14.5235 24.375 15.9987 24.0805 17.3875 23.5041C18.7459 22.9379 19.9672 22.1254 21.0133 21.0869C22.0619 20.0484 22.8871 18.8348 23.4635 17.4814C24.0627 16.0799 24.3674 14.5895 24.375 13.0508C24.3826 11.5045 24.083 10.0039 23.4914 8.59219ZM19.6549 19.7133C17.875 21.4754 15.5137 22.4453 13 22.4453H12.9569C11.4258 22.4377 9.9049 22.0568 8.56174 21.3408L8.34846 21.2266H4.77346V17.6516L4.6592 17.4383C3.94319 16.0951 3.56233 14.5742 3.55471 13.0432C3.54455 10.5117 4.51194 8.13516 6.28674 6.34512C8.05901 4.55508 10.428 3.56484 12.9594 3.55469H13.0026C14.2721 3.55469 15.5035 3.80098 16.6639 4.28848C17.7963 4.76328 18.8119 5.44629 19.6854 6.31973C20.5563 7.19062 21.2418 8.20879 21.7166 9.34121C22.2092 10.5143 22.4555 11.7584 22.4504 13.0432C22.4352 15.5721 21.4424 17.941 19.6549 19.7133Z"
                                      fill="white"/>
                            </svg>
                        </a></li>
                        <li><a href="https://www.instagram.com">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 2C10.0149 2 9.6395 2.01375 8.46663 2.066C7.29375 2.121 6.49487 2.30525 5.795 2.5775C5.06088 2.85363 4.39593 3.28676 3.84663 3.84663C3.2871 4.39621 2.85402 5.06108 2.5775 5.795C2.30525 6.4935 2.11963 7.29375 2.066 8.4625C2.01375 9.63812 2 10.0121 2 13.0014C2 15.9879 2.01375 16.3619 2.066 17.5347C2.121 18.7063 2.30525 19.5051 2.5775 20.205C2.85938 20.9282 3.23475 21.5415 3.84663 22.1534C4.45713 22.7652 5.07037 23.142 5.79363 23.4225C6.49487 23.6947 7.29238 23.8804 8.46388 23.934C9.63813 23.9862 10.0121 24 13 24C15.9879 24 16.3605 23.9862 17.5347 23.934C18.7049 23.879 19.5065 23.6947 20.2064 23.4225C20.94 23.1462 21.6045 22.7131 22.1534 22.1534C22.7652 21.5415 23.1406 20.9282 23.4225 20.205C23.6934 19.5051 23.879 18.7063 23.934 17.5347C23.9862 16.3619 24 15.9879 24 13C24 10.0121 23.9862 9.63813 23.934 8.46388C23.879 7.29375 23.6934 6.4935 23.4225 5.795C23.146 5.06106 22.7129 4.39618 22.1534 3.84663C21.6042 3.28655 20.9392 2.85339 20.205 2.5775C19.5037 2.30525 18.7035 2.11963 17.5334 2.066C16.3591 2.01375 15.9865 2 12.9973 2H13.0014H13ZM12.0141 3.98275H13.0014C15.9384 3.98275 16.2863 3.99238 17.4454 4.046C18.5179 4.09413 19.1009 4.27425 19.4886 4.42412C20.0015 4.6235 20.3686 4.86275 20.7536 5.24775C21.1386 5.63275 21.3765 5.9985 21.5759 6.51275C21.7271 6.89913 21.9059 7.48213 21.954 8.55463C22.0076 9.71375 22.0186 10.0616 22.0186 12.9973C22.0186 15.9329 22.0076 16.2821 21.954 17.4412C21.9059 18.5138 21.7257 19.0954 21.5759 19.4831C21.3995 19.9607 21.118 20.3926 20.7522 20.7467C20.3672 21.1318 20.0015 21.3696 19.4873 21.569C19.1023 21.7203 18.5192 21.899 17.4454 21.9485C16.2863 22.0007 15.9384 22.0131 13.0014 22.0131C10.0644 22.0131 9.71513 22.0007 8.556 21.9485C7.4835 21.899 6.90188 21.7203 6.51412 21.569C6.03631 21.3929 5.60405 21.1119 5.24913 20.7467C4.88303 20.392 4.60112 19.9598 4.42412 19.4818C4.27425 19.0954 4.09413 18.5124 4.046 17.4399C3.99375 16.2808 3.98275 15.9329 3.98275 12.9945C3.98275 10.0575 3.99375 9.711 4.046 8.55187C4.0955 7.47937 4.27425 6.89638 4.4255 6.50863C4.62488 5.99575 4.86412 5.62862 5.24913 5.24362C5.63412 4.85862 5.99988 4.62075 6.51412 4.42138C6.90188 4.27013 7.4835 4.09138 8.556 4.04188C9.57075 3.99513 9.964 3.98138 12.0141 3.98V3.98275ZM18.8726 5.80875C18.6993 5.80875 18.5276 5.84289 18.3675 5.90923C18.2073 5.97557 18.0618 6.0728 17.9392 6.19537C17.8167 6.31794 17.7194 6.46346 17.6531 6.62361C17.5868 6.78376 17.5526 6.95541 17.5526 7.12875C17.5526 7.30209 17.5868 7.47374 17.6531 7.63389C17.7194 7.79404 17.8167 7.93956 17.9392 8.06213C18.0618 8.1847 18.2073 8.28193 18.3675 8.34827C18.5276 8.41461 18.6993 8.44875 18.8726 8.44875C19.2227 8.44875 19.5585 8.30968 19.806 8.06213C20.0536 7.81458 20.1926 7.47884 20.1926 7.12875C20.1926 6.77866 20.0536 6.44292 19.806 6.19537C19.5585 5.94782 19.2227 5.80875 18.8726 5.80875ZM13.0014 7.3515C12.2521 7.33981 11.508 7.47729 10.8123 7.75594C10.1167 8.0346 9.48346 8.44885 8.94946 8.97458C8.41546 9.50032 7.99138 10.127 7.70191 10.8182C7.41244 11.5094 7.26336 12.2513 7.26336 13.0007C7.26336 13.7501 7.41244 14.4919 7.70191 15.1831C7.99138 15.8743 8.41546 16.5011 8.94946 17.0268C9.48346 17.5525 10.1167 17.9668 10.8123 18.2454C11.508 18.5241 12.2521 18.6616 13.0014 18.6499C14.4844 18.6267 15.8988 18.0214 16.9393 16.9645C17.9799 15.9076 18.5631 14.4839 18.5631 13.0007C18.5631 11.5175 17.9799 10.0938 16.9393 9.03691C15.8988 7.97999 14.4844 7.37464 13.0014 7.3515ZM13.0014 9.33288C13.974 9.33288 14.9067 9.71923 15.5944 10.407C16.2821 11.0947 16.6685 12.0274 16.6685 13C16.6685 13.9726 16.2821 14.9053 15.5944 15.593C14.9067 16.2808 13.974 16.6671 13.0014 16.6671C12.0288 16.6671 11.096 16.2808 10.4083 15.593C9.72061 14.9053 9.33425 13.9726 9.33425 13C9.33425 12.0274 9.72061 11.0947 10.4083 10.407C11.096 9.71923 12.0288 9.33288 13.0014 9.33288Z"
                                      fill="white"/>
                            </svg>
                        </a></li>
                        <li><a href="https://www.youtube.com">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.375 12.9291C24.375 12.8732 24.375 12.8097 24.3725 12.7361C24.3699 12.5304 24.3648 12.2994 24.3598 12.0531C24.3395 11.3447 24.3039 10.6388 24.248 9.97358C24.1719 9.05698 24.0602 8.29272 23.9078 7.7189C23.747 7.12006 23.4319 6.5739 22.9939 6.13502C22.5559 5.69614 22.0104 5.3799 21.4119 5.21792C20.6934 5.02495 19.2867 4.90562 17.3062 4.83198C16.3643 4.79644 15.3562 4.77358 14.3482 4.76089C13.9953 4.75581 13.6678 4.75327 13.3732 4.75073H12.6268C12.3322 4.75327 12.0047 4.75581 11.6518 4.76089C10.6438 4.77358 9.63574 4.79644 8.69375 4.83198C6.71328 4.90815 5.3041 5.02749 4.58809 5.21792C3.98938 5.3795 3.44365 5.69561 3.0056 6.13455C2.56755 6.57349 2.25255 7.11986 2.09219 7.7189C1.9373 8.29272 1.82812 9.05698 1.75195 9.97358C1.69609 10.6388 1.66055 11.3447 1.64023 12.0531C1.63262 12.2994 1.63008 12.5304 1.62754 12.7361C1.62754 12.8097 1.625 12.8732 1.625 12.9291V13.0712C1.625 13.1271 1.625 13.1906 1.62754 13.2642C1.63008 13.4699 1.63516 13.7009 1.64023 13.9472C1.66055 14.6556 1.69609 15.3615 1.75195 16.0267C1.82812 16.9433 1.93984 17.7076 2.09219 18.2814C2.41719 19.4976 3.37187 20.4574 4.58809 20.7824C5.3041 20.9753 6.71328 21.0947 8.69375 21.1683C9.63574 21.2039 10.6438 21.2267 11.6518 21.2394C12.0047 21.2445 12.3322 21.247 12.6268 21.2496H13.3732C13.6678 21.247 13.9953 21.2445 14.3482 21.2394C15.3562 21.2267 16.3643 21.2039 17.3062 21.1683C19.2867 21.0921 20.6959 20.9728 21.4119 20.7824C22.6281 20.4574 23.5828 19.5001 23.9078 18.2814C24.0627 17.7076 24.1719 16.9433 24.248 16.0267C24.3039 15.3615 24.3395 14.6556 24.3598 13.9472C24.3674 13.7009 24.3699 13.4699 24.3725 13.2642C24.3725 13.1906 24.375 13.1271 24.375 13.0712V12.9291ZM22.5469 13.0611C22.5469 13.1144 22.5469 13.1728 22.5443 13.2414C22.5418 13.4394 22.5367 13.6578 22.5316 13.8939C22.5139 14.5693 22.4783 15.2447 22.425 15.8718C22.3564 16.6894 22.26 17.3597 22.1406 17.8091C21.9832 18.3957 21.5211 18.8603 20.9371 19.0152C20.4039 19.1574 19.0607 19.2716 17.2352 19.3402C16.3109 19.3757 15.3156 19.3986 14.3229 19.4113C13.975 19.4164 13.6525 19.4189 13.3631 19.4189H12.6369L11.6771 19.4113C10.6844 19.3986 9.6916 19.3757 8.76484 19.3402C6.93926 19.2691 5.59355 19.1574 5.06289 19.0152C4.47891 18.8578 4.0168 18.3957 3.85938 17.8091C3.74004 17.3597 3.64355 16.6894 3.575 15.8718C3.52168 15.2447 3.48867 14.5693 3.46836 13.8939C3.46074 13.6578 3.4582 13.4369 3.45566 13.2414C3.45566 13.1728 3.45312 13.1119 3.45312 13.0611V12.9392C3.45312 12.8859 3.45313 12.8275 3.45566 12.7589C3.4582 12.5609 3.46328 12.3425 3.46836 12.1064C3.48613 11.431 3.52168 10.7556 3.575 10.1285C3.64355 9.31089 3.74004 8.64057 3.85938 8.19116C4.0168 7.60464 4.47891 7.13999 5.06289 6.98511C5.59609 6.84292 6.93926 6.72866 8.76484 6.66011C9.68906 6.62456 10.6844 6.60171 11.6771 6.58901C12.025 6.58393 12.3475 6.5814 12.6369 6.5814H13.3631L14.3229 6.58901C15.3156 6.60171 16.3084 6.62456 17.2352 6.66011C19.0607 6.7312 20.4064 6.84292 20.9371 6.98511C21.5211 7.14253 21.9832 7.60464 22.1406 8.19116C22.26 8.64057 22.3564 9.31089 22.425 10.1285C22.4783 10.7556 22.5113 11.431 22.5316 12.1064C22.5393 12.3425 22.5418 12.5634 22.5443 12.7589C22.5443 12.8275 22.5469 12.8884 22.5469 12.9392V13.0611ZM10.7402 16.4025L16.6309 12.9748L10.7402 9.5978V16.4025Z"
                                      fill="white"/>
                            </svg>
                        </a></li>
                        <li><a href="https://www.facebook.com">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 2.1665H16.25C14.8135 2.1665 13.4357 2.73719 12.4199 3.75301C11.4041 4.76883 10.8334 6.14658 10.8334 7.58317V10.8332H7.58337V15.1665H10.8334V23.8332H15.1667V15.1665H18.4167L19.5 10.8332H15.1667V7.58317C15.1667 7.29585 15.2808 7.0203 15.484 6.81714C15.6872 6.61397 15.9627 6.49984 16.25 6.49984H19.5V2.1665Z"
                                      stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a></li>
                        <li><a href="https://www.telegram.org">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.1818 3.24682C20.921 3.26579 20.665 3.32698 20.4238 3.428H20.4205C20.1889 3.51982 19.088 3.98294 17.4143 4.68494L11.4164 7.211C7.11257 9.02288 2.88188 10.8071 2.88188 10.8071L2.93226 10.7876C2.93226 10.7876 2.64057 10.8835 2.33588 11.0923C2.14765 11.2121 1.98567 11.3688 1.85976 11.553C1.71026 11.7724 1.59001 12.1079 1.63469 12.4549C1.70782 13.0415 2.08807 13.3933 2.36107 13.5875C2.63732 13.7841 2.90057 13.8759 2.90057 13.8759H2.90707L6.87451 15.2125C7.05244 15.7837 8.0835 19.1734 8.33132 19.9543C8.47757 20.4206 8.61975 20.7123 8.79769 20.9349C8.88382 21.0487 8.98457 21.1438 9.10563 21.2201C9.16857 21.2567 9.23567 21.2857 9.3055 21.3063L9.26488 21.2965C9.27707 21.2998 9.28682 21.3095 9.29575 21.3128C9.32825 21.3217 9.35019 21.3249 9.39163 21.3314C10.0197 21.5216 10.5243 21.1316 10.5243 21.1316L10.5527 21.1088L12.8951 18.976L16.8211 21.9879L16.9105 22.0261C17.7287 22.3853 18.5574 22.1854 18.9954 21.8328C19.4366 21.4777 19.608 21.0235 19.608 21.0235L19.6364 20.9504L22.6703 5.40807C22.7564 5.02457 22.7784 4.66544 22.6833 4.31688C22.5853 3.96411 22.3589 3.66071 22.0488 3.46619C21.7883 3.30785 21.4862 3.23142 21.1818 3.24682ZM21.0998 4.91244C21.0965 4.96363 21.1063 4.95794 21.0835 5.05625V5.06519L18.0781 20.4458C18.0651 20.4678 18.0431 20.5157 17.983 20.5636C17.9196 20.614 17.8693 20.6457 17.6052 20.5409L12.8033 16.8594L9.90269 19.5033L10.5121 15.6114L18.3576 8.29894C18.6809 7.99832 18.5729 7.93494 18.5729 7.93494C18.5956 7.56607 18.0846 7.82688 18.0846 7.82688L8.19157 13.9556L8.18832 13.9393L3.44657 12.3428V12.3395L3.43438 12.3371C3.44269 12.3343 3.45083 12.331 3.45876 12.3273L3.48476 12.3143L3.50994 12.3054C3.50994 12.3054 7.74388 10.5211 12.0477 8.70925C14.2024 7.80169 16.3734 6.88763 18.0431 6.18238C19.7128 5.48119 20.947 4.96688 21.0169 4.93925C21.0835 4.91325 21.0518 4.91325 21.0998 4.91325V4.91244Z"
                                      fill="white"/>
                            </svg>
                        </a></li>
                    </ul>
                </div>
            </div>
            <div class="footer__block">
                <p class="footer__copyright">© OnlineShop, 2021</p>
                <div class="footer__author-info">
                    <p>Design by Anastasia Ilina</p>
                    <p>Tg: <a href="https://www.telegram.org">
                        @Mrshmallowww
                    </a></p>
                </div>
            </div>
        </div>
    </footer>
        `);
};

export const addElements = (elems) => {
    elems.forEach(({type, name}) => {
        
        if (type === types.section) {
            createSection(name);
            return;
        }
        if (type === types.footer) {
            createFooter(name);
            return;
        }
    });
};

export const createCards = async () => {
    const cards = document.querySelector('.wholesale__cards');
    
    const response = await fetch('/db.json');
    if (response.ok) {
        const json = await response.json();
        
        console.log(json);
        json.forEach((card, index) => {
            const count = index + 1;
            cards.insertAdjacentHTML('beforeend',
                `
                    <li class="card">
                        <a href="#" class="card__link " aria-label="${card.name}">
                            <figure class="card__figure ${card.discountClass}">
                                <img class="card__image" src="img/wholesale/photo${count}.png"
                                                              alt="${card.name}"></figure>
                            <div class="card__price-block"><span class="card__new-price">${card.newPrice} ₽</span>
                                <span class="card__old-price">${card.newPrice * 2} ₽</span>
                            </div>
                            <p class="card__item-text">${card.name}</p>
                        </a>
                    </li>
                    `);
        });
    }
};