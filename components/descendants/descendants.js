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
