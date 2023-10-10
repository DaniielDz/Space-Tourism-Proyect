const destinationItems = document.querySelectorAll('.destination-list__item');
const imageSource = document.querySelector('.source');
const image = document.querySelector('.image');
const astro = ['moon', 'mars', 'europa', 'titan'];
const astroName = document.querySelector('.astro__name');
const astroDescription = document.querySelector('.astro__description');
const travelValue = document.querySelectorAll('.travel__value');

destinationItems.forEach( (element, index) => {
    element.addEventListener('click', () =>{
        changeSelected( element );
        changeAstro( astro[index] );
    })
})
function changeSelected( astroClicked ) {
    destinationItems.forEach( e => {
        e.classList.remove('destination-list__item--active');
        astroClicked.classList.add('destination-list__item--active');
    })
}
function changeAstro( astro ) {
    switch (astro) {
        case 'moon':
            changeImage( astro )
            astroName.textContent = astro;
            travelValue[0].textContent = '384,400 km';
            travelValue[1].textContent = '3 days';
            astroDescription.textContent = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';
            break;
        case 'mars':
            changeImage( astro )
            astroName.textContent = astro;
            travelValue[0].textContent = '225 MIL. km';
            travelValue[1].textContent = '9 months';
            astroDescription.textContent = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!';
            break;
        case 'europa':
            changeImage( astro )
            astroName.textContent = astro;
            travelValue[0].textContent = '628 MIL. km';
            travelValue[1].textContent = '3 years';
            astroDescription.textContent = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.';
            break;
        case 'titan':
            changeImage( astro )
            astroName.textContent = astro;
            travelValue[0].textContent = '1.6 BIL. km';
            travelValue[1].textContent = '7 years';
            astroDescription.textContent = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.';
        default:
            break;
    }
}
function changeImage( astro ) {
    imageSource.setAttribute('srcset', `./src/assets/destination/image-${astro}.webp`);
    image.setAttribute('alt', `${astro} Image`) 
}