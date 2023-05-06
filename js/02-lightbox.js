import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");

const galleryMarkup = createMarkup(galleryItems);

galleryListEl.insertAdjacentHTML("afterbegin", galleryMarkup);

function createMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}
new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
