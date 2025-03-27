import axios from 'axios';
const API_KEY = `49488951-e375fee229e59287138537a31`;
const BASE_URL = `https://pixabay.com/api/`;

export async function fetchImages(query, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: `photo`,
        orientation: `horizontal`,
        safesearch: true,
        per_page: 15,
        page,
      },
    });

    return response.data;
  } catch (error) {
    console.error(`Error fetching images:`, error);
    throw error;
  }
}
