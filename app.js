const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__list');

    burger.addEventListener('click' , () => {
        nav.classList.toggle('nav__active');
    });
}

navSlide();