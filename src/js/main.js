// Menu mobile
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

// Cambiar list__item, imagen e info
const listItem = document.querySelectorAll('.list__item');
const infoElements = document.querySelectorAll('.info');
const image = document.querySelectorAll('.image');
const source = document.querySelector('.source');
const crew = ['douglas-hurley','mark-shuttleworth', 'victor-glover', 'anousheh-ansari'];    // Define un array de nombres de miembros de la tripulación
const technology = ['launch-vehicle', 'spaceport','space-capsule', ];    // Define un array de nombres de tecnologías
const astro = ['moon', 'mars', 'europa', 'titan'];  // Define un array de nombres de astros
listItem.forEach( (item, index) => {    // Itera sobre cada elemento de la lista 'listItem' y agrega un evento de click
    item.addEventListener('click', () => {
        change(listItem, index);    // Llama a la función 'change' para cambiar las clases activas
        change(infoElements, index);    // Llama a la función 'change' para cambiar las clases activas
        changeImage(index); // Llama a la función 'changeImage' para cambiar la imagen
    });
}); 
function change(nodeList, index) {      // Función para cambiar las clases activas en un conjunto de elementos
    nodeList.forEach(element => {
        const firstClass = element.classList[0];    // Obtiene la primera clase del elemento     
        element.classList.remove(`${firstClass}--active`); // Elimina la clase activa de todos los elementos
        nodeList[index].classList.add(`${firstClass}--active`); // Agrega la clase activa al elemento en la posición 'index'
    });
}
function changeImage(index) {   // Función para cambiar la imagen mostrada
    if (image.length > 1) { // Verifica si hay más de una imagen 
        image[0].setAttribute('src', `./src/assets/technology/image-${technology[index]}-landscape.jpg`);   // Cambia la fuente de la primera imagen al modo paisaje
        image[1].setAttribute('src', `./src/assets/technology/image-${technology[index]}-portrait.jpg`);    // Cambia la fuente de la segunda imagen al modo retrato
    }   else if(image[0].classList[1] === 'crew__image') {
        // Cambia la fuente de la imagen y el conjunto de fuentes si solo hay una imagen
        source.setAttribute('srcset', `./src/assets/crew/image-${crew[index]}.webp`);
        image[0].setAttribute('src', `./src/assets/crew/image-${crew[index]}.png`);
    }   else if(image[0].classList[1] === 'astro__image') {
        // Cambia la fuente de la imagen al destino y establece un atributo 'alt'
        source.setAttribute('srcset', `./src/assets/destination/image-${astro[index]}.webp`);
        image[0].setAttribute('src', `./src/assets/crew/image-${astro[index]}.png`);
        image[0].setAttribute('alt', `${astro[index]} Image`) 
    }
}