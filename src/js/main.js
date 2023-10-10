const navToggle = document.querySelector('.nav-toggle');
const navImage = document.querySelectorAll('.nav-toggle__img');
const mobileNav = document.querySelector('.mobile-nav');

navToggle.addEventListener('click', () => {
    navImage.forEach(element => {
        if(!element.classList.contains('nav-toggle__img--active')){
            element.classList.add('nav-toggle__img--active');
        } else {
            element.classList.remove('nav-toggle__img--active');
        }
    });
    mobileNav.classList.toggle('mobile-nav--active');
})