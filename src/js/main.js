const navToggle = document.querySelector('.nav-toggle');
const navImage = document.querySelectorAll('.nav-toggle__img');
const mobileNav = document.querySelector('.mobile-nav');

navToggle.addEventListener('click', () => {     // Agregar un event listener al elemento 'navToggle' para detectar clics
    navImage.forEach(element => {    // Iterar a través de cada elemento en 'navImage'
        if(!element.classList.contains('nav-toggle__img--active')){     // Verificar si el elemento actual no tiene la clase 'nav-toggle__img--active'   
            element.classList.add('nav-toggle__img--active');       // Si no la tiene, agregar la clase 'nav-toggle__img--active' para activar la imagen
        } else {
            element.classList.remove('nav-toggle__img--active');    // Si la tiene, quitar la clase 'nav-toggle__img--active' para desactivar la imagen
        }
    });
    mobileNav.classList.toggle('mobile-nav--active'); // Alternar la clase 'mobile-nav--active' en el elemento 'mobileNav' para mostrar/ocultar la navegación móvil
})