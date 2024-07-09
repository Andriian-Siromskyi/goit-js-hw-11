const API_KEY = '44809557-131d06481c86d2d236cb64612';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
      query
    )}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      return response.json();
    })
    .then(data => data.hits);
}
