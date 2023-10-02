function fetchBreeds(BASE_URL, API_KEY) {
  const headers = {
    'x-api-key': `${API_KEY}`
  };
  return fetch(`${BASE_URL}breeds?api_key=${API_KEY}`, {headers}).then(response => {
    if (!response.ok) {
      throw new Error(`Ошибка загрузки данных: ${response.status}`);
    }
    return response.json();
  });
}

function fetchCatByBreed(BASE_URL, breedId) {
  return fetch(`${BASE_URL}images/search?breed_ids=${breedId}`).then(
    response => {
      if (!response.ok) {
        throw new Error(`Ошибка загрузки данных: ${response.status}`);
      }
      // console.log(response.json());
      return response.json();
    }
  );
}

export { fetchBreeds, fetchCatByBreed };
