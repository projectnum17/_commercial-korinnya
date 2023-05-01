// Header
(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());

new Swiper('.presentation__slider', {
    //Количество слайдов для показа
    slidesPerView: 2.65,

    //Отступ между слайдами
    spaceBetween: 20,

    //Кол-во пролистываемых слайдов
    slidesPerGroup: 1,

    //Бесконечность
    loop: true,

    //Курсор
    grabCursor: true,

    //Автопрокрутка
    autoplay: {
        //пауза между прокруткой
        delay: 2000,

        //Отключить после ручного переключения
        disableOnInteraction: false,
    },

    //адаптив
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        400: {
            slidesPerView: 1,
        },
        835: {
            slidesPerView: 2.2
        },
    }
});


//menu
(function () {
    const menuItem = document.querySelector('.menu');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const bodyMenu = document.querySelector('body');
    menuItem.addEventListener('click', () => {
        menu.classList.add('header__nav-active');
        bodyMenu.classList.add('active');
    });

    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav-active');
        bodyMenu.classList.remove('active');
    });
}());

//change lang
(function () {
    const language = document.querySelector('.language');
    const languageUa = document.querySelector('.header__nav-lang_ua');
    language.addEventListener('click', () => {
        languageUa.classList.add('language__active');
    });

}());