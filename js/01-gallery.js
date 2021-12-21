import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryEl: document.querySelector(".gallery"),
};

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return ` <li class="gallery__item">
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
refs.galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);
let instance = null;
refs.galleryEl.addEventListener("click", openModal);
function openModal(e) {
  e.preventDefault();
  // console.log(e.target.tagName);
  if (e.target.tagName !== "IMG") return false;
  const dataSource = e.target.dataset.source;
  instance = basicLightbox.create(`
    <img src="${dataSource}" width="800" height="600">
`);
  instance.show();
  // console.log(dataSource);
}

window.addEventListener("keydown", closeModalEsc);

function closeModalEsc(e) {
  if (e.code === "Escape") instance.close();
}
