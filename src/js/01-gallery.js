// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const list = document.querySelector('.gallery');
const listItemsMarkup = createListItemsMarkup(galleryItems);

list.innerHTML = listItemsMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 800,
});


function createListItemsMarkup(items) {
  return items
    .map(
      (item) => `<li> <a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description}/>
</a></li>`
    )
    .join('');
}