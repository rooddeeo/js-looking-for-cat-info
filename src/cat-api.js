const BASE_URL = 'https://api.thecatapi.com/v1/';

function fetchBreeds(BASE_URL, API_KEY) {
  return fetch(`${BASE_URL}breeds?breed_ids=beng,abys,api_key=${API_KEY}&=`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Ошибка загрузки данных: ${response.status}`);
      }
      return response.json();
    });
}

function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}images/search?breed_ids=${breedId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Ошибка загрузки данных: ${response.status}`);
      }
      // console.log(response.json());
      return response.json();
    });
}

  export{fetchBreeds, fetchCatByBreed};