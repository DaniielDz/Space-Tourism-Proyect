const listItem = document.querySelectorAll('.crew-list__item');
const crewContainer = document.querySelectorAll('.crew__info');
const crewImage = document.querySelector('.image');
const crewImageSource = document.querySelector('.source');
const crew = ['douglas-hurley','mark-shuttleworth', 'victor-glover', 'anousheh-ansari'];

listItem.forEach( ( item, index ) => {
    item.addEventListener('click', () => {
        changeSelected(item);
        changeCrew(index);
    });
});
function changeSelected( element ) {
    listItem.forEach( e => {
        e.classList.remove('crew-list__item--active');
        element.classList.add('crew-list__item--active');
    });
}
function changeCrew(index) {
    crewImageSource.setAttribute('srcset', `./src/assets/crew/image-${crew[index]}.webp`);
    crewImage.setAttribute('src', `./src/assets/crew/image-${crew[index]}.png`);
    crewContainer.forEach( element => {
        element.classList.remove('crew__info--active');
        crewContainer[index].classList.add('crew__info--active');
    })
}