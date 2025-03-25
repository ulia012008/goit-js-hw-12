import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(`.gallery`);
let lightbox = new SimpleLightbox('.gallery a', {
  captions: true, // Увімкнення підписів
  captionsData: 'alt', // Брати підпис з атрибуту alt
  captionDelay: 250,
});

export function clearGallery() {
  gallery.innerHTML = ''; // Очищаємо контейнер перед рендерингом
}

export function renderImages(images) {
  clearGallery(); // Очищаємо перед додаванням нових картинок

  const markup = images.map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}" class="gallery-link">
          <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
        </a>
        <div class="info">
        <ul class="baner">
          <li class="baner-li">
            <p class="baner-title">Likes</p>
            <p class="baner-text">${likes}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Views</p>
            <p class="baner-text">${views}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Comments</p>
            <p class="baner-text">${comments}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Downloads</p>
            <p class="baner-text">${downloads}</p>
          
            </li>
        </ul>
        </div>
      </li>`
    )
    .join('');

    gallery.innerHTML = markup;
    lightbox.refresh(); // Оновлюємо Lightbox після додавання нових зображень
}
