const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '44e3f14385e26f37ff8b73c729efacb7';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}
// Запрос на популярные фильмы
export function fetchTrending() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  );
}
// Запрос на инфо о фильме
export function fetchMovieDetails({ movieId }) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
}
// Запрос на каст
export function fetchCast({ movieId }) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
  );
}
// Запрос на на ревью
export function fetchReviews({ movieId }) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`,
  );
}
// Запрос на на по ключевому слову
export function fetchMovies({ query }) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
  );
}
