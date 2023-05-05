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
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
}

galleryListEl.addEventListener("click", onGalleryClick);

function onGalleryClick() {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const fullSizedPicture = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${fullSizedPicture}" width="800" height="600">
`);
  instance.show();

  document.addEventListener("keydown", (event) => {
    console.log(event.code);
    if (event.code === "Escape") {
      instance.close(instance);
    }
  });
}
