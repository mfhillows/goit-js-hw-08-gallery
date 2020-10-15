import galleryItems from "./gallery-items.js";

// Создание разметки

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
            <a
                class="gallery__link"
                href="${original}"
            >
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

// Навешивание и рендеринг разметки

const tableMarkup = document.querySelector(".js-gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
tableMarkup.insertAdjacentHTML("beforeend", galleryMarkup);

// Открываем модалку
const modal = document.querySelector(".js-lightbox");
tableMarkup.addEventListener("click", openModal);

function openModal(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  modal.classList.add("is-open");
  e.preventDefault();
  bigPhotoUrl(e);
}

const bigPhoto = document.querySelector(".lightbox__image");
function bigPhotoUrl(e) {
  bigPhoto.src = e.target.dataset.source;
  bigPhoto.alt = e.target.alt;
}

// Закрываем модалку по клику на кнопку
const crossCloseModal = document.querySelector(".lightbox__button");
crossCloseModal.addEventListener("click", closeModalMouse);

// Закрываем по клику в оверлэй
const overlayCloseModal = document.querySelector(".lightbox__overlay");
overlayCloseModal.addEventListener("click", closeModalMouse);

// Функция под закрытие на оба варианта
function closeModalMouse() {
  bigPhoto.src = "";
  bigPhoto.alt = "";

  modal.classList.remove("is-open");
}

// Закрываем по эскейпу
window.addEventListener("keydown", closeModalKeyBoard);

function closeModalKeyBoard(e) {
  console.log(e.key);

  if (e.key === "Escape") {
    bigPhoto.src = "";
    bigPhoto.alt = "";

    modal.classList.remove("is-open");
  }
}

// Листаем

// function leftKeyBoard(galleryItems) {
//   const t = galleryItems.map((x) => {
//     console.log("jbjhvb");
//   });
// }

// window.addEventListener("keydown", leftKeyBoard);

// function leftKeyBoard(e) {
//   const left = e.target.closest(".gallery__item").previousElementSibling
//     .firstElementChild.firstElementChild;
//   if (e.key === "ArrowLeft") {
//     bigPhoto.src = left.dataset.source;
//   }
// }

// function leftKeyBoard(e) {
//   if (e.key === "ArrowLeft") {
//     for (let i = 0; i < galleryItems.length; i += 1) {
//       console.log(galleryItems[0]);

// const t = galleryItems[i+1];
//       // bigPhoto.src = galleryItems[i].original;
//     }
//   }
// }

// function leftKeyBoard(galleryItems) {
//   galleryItems.map(({ preview, original, description }) => {
//     console.log(galleryItems.original);
//   });
// }
// const img = document.querySelectorAll(".gallery__image");

// galleryItems.forEach.call(img, function (img, i) {
//   console.log(img[i]);
// });
