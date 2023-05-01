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

//first slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("first-slider");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


//second slider
let secondSlide = 1;
secondShowSlides(secondSlide);

// Next/previous controls
function secondPlusSlides(n) {
    secondShowSlides(secondSlide += n);
}

// Thumbnail image controls
function secondCurrentSlide(n) {
    secondShowSlides(secondSlide = n);
}

function secondShowSlides(n) {
    let i;
    let slides = document.getElementsByClassName("second-slider");
    let dots = document.getElementsByClassName("second-slider__dots");
    if (n > slides.length) { secondSlide = 1 }
    if (n < 1) { secondSlide = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[secondSlide - 1].style.display = "block";
    dots[secondSlide - 1].className += " active";
}

//third slider
let thirdSlide = 1;
thirdShowSlides(thirdSlide);

// Next/previous controls
function thirdPlusSlides(n) {
    thirdShowSlides(thirdSlide += n);
}

// Thumbnail image controls
function thirdCurrentSlide(n) {
    thirdShowSlides(thirdSlide = n);
}

function thirdShowSlides(n) {
    let i;
    let slides = document.getElementsByClassName("third-slider");
    let dots = document.getElementsByClassName("third-slider__dots");
    if (n > slides.length) { thirdSlide = 1 }
    if (n < 1) { thirdSlide = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[thirdSlide - 1].style.display = "block";
    dots[thirdSlide - 1].className += " active";
}

//fourth slider
let fourthSlide = 1;
fourthShowSlides(fourthSlide);

// Next/previous controls
function fourthPlusSlides(n) {
    fourthShowSlides(fourthSlide += n);
}

// Thumbnail image controls
function fourthCurrentSlide(n) {
    fourthShowSlides(fourthSlide = n);
}

function fourthShowSlides(n) {
    let i;
    let slides = document.getElementsByClassName("fourth-slider");
    let dots = document.getElementsByClassName("fourth-slider__dots");
    if (n > slides.length) { fourthSlide = 1 }
    if (n < 1) { fourthSlide = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[fourthSlide - 1].style.display = "block";
    dots[fourthSlide - 1].className += " active";
}


//fifth slider
let fifthSlide = 1;
fifthShowSlides(fifthSlide);

// Next/previous controls
function fifthPlusSlides(n) {
    fifthShowSlides(fifthSlide += n);
}

// Thumbnail image controls
function fifthCurrentSlide(n) {
    fifthShowSlides(fifthSlide = n);
}

function fifthShowSlides(n) {
    let i;
    let slides = document.getElementsByClassName("fifth-slider");
    let dots = document.getElementsByClassName("fifth-slider__dots");
    if (n > slides.length) { fifthSlide = 1 }
    if (n < 1) { fifthSlide = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[fifthSlide - 1].style.display = "block";
    dots[fifthSlide - 1].className += " active";
}

//sixth slider
let sixthSlide = 1;
sixthShowSlides(sixthSlide);

// Next/previous controls
function sixthPlusSlides(n) {
    sixthShowSlides(sixthSlide += n);
}

// Thumbnail image controls
function sixthCurrentSlide(n) {
    sixthShowSlides(sixthSlide = n);
}

function sixthShowSlides(n) {
    let i;
    let slides = document.getElementsByClassName("sixth-slider");
    let dots = document.getElementsByClassName("sixth-slider__dots");
    if (n > slides.length) { sixthSlide = 1 }
    if (n < 1) { sixthSlide = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[sixthSlide - 1].style.display = "block";
    dots[sixthSlide - 1].className += " active";
}

//seventh slider
let seventhSlide = 1;
seventhShowSlides(seventhSlide);

// Next/previous controls
function seventhPlusSlides(n) {
    seventhShowSlides(seventhSlide += n);
}

// Thumbnail image controls
function seventhCurrentSlide(n) {
    seventhShowSlides(seventhSlide = n);
}

function seventhShowSlides(n) {
    let i;
    let slides = document.getElementsByClassName("seventh-slider");
    let dots = document.getElementsByClassName("seventh-slider__dots");
    if (n > slides.length) { seventhSlide = 1 }
    if (n < 1) { seventhSlide = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[seventhSlide - 1].style.display = "block";
    dots[seventhSlide - 1].className += " active";
}