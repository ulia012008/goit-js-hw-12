import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery } from './js/render-functions';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const message = document.querySelector('.message');

let query = '';
let page = 1;
const perPage = 15;
let totalHits = 0;

loadMoreBtn.style.display = 'none';

async function handleSearch(event) {
  event.preventDefault();
  query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) return;

  page = 1;
  clearGallery();
  loadMoreBtn.style.display = 'none';
  message.textContent = '';

  try {
    const data = await fetchImages(query, page);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      message.textContent = 'No images found. Try another search!';
      return;
    }

    renderImages(data.hits);
    loadMoreBtn.style.display = 'block';
  } catch (error) {
    message.textContent = 'Something went wrong. Please try again later.';
  }
}

async function loadMoreImages() {
  page += 1;

  try {
    const data = await fetchImages(query, page);

    if (data.hits.length === 0 || page * perPage >= totalHits) {
      loadMoreBtn.style.display = 'none';
      message.textContent = `We're sorry, but you've reached the end of search results.`;
    }

    renderImages(data.hits, true);
    smoothScroll();
  } catch (error) {
    console.error(error);
  }
}

function smoothScroll() {
  const cardHeight = document
    .querySelector('.gallery-item')
    .getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

form.addEventListener('submit', handleSearch);
loadMoreBtn.addEventListener('click', loadMoreImages);
