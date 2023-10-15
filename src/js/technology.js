const listItems = document.querySelectorAll('.technology-list__item');
const infoElements = document.querySelectorAll('.technology__info');
const image = document.querySelectorAll('.image');
const technology = ['launch-vehicle', 'space-capsule', 'spaceport'];

listItems.forEach( (item, index) => {
    item.addEventListener('click', () => {
        changeSelected(item);
        changeInfo(index);
        changeImage(index);
    });
});

function changeSelected(clickedElement) {
    listItems.forEach(element => {
        element.classList.remove('technology-list__item--active')
        clickedElement.classList.add('technology-list__item--active');
    });
}
function changeInfo(index) {
    infoElements.forEach( element => {
        element.classList.remove('technology__info--active');
        infoElements[index].classList.add('technology__info--active');
    })
}
function changeImage(index) {
    image[0].setAttribute('src', `./src/assets/technology/image-${technology[index]}-landscape.jpg`)
    image[1].setAttribute('src', `./src/assets/technology/image-${technology[index]}-portrait.jpg`)
}