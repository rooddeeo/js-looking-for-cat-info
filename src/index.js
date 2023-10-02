import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const BASE_URL = 'https://api.thecatapi.com/v1/';
const API_KEY =
  'live_LdyZZAkvOUOZW3p4VB6sUES1xXuWB4URiEdzXmtox4uhzgcwlKHnYfmIPsy30pkJ';

fetchBreeds(BASE_URL, API_KEY)
  .then(data => {
    console.log(data);

    const breedSelect = document.querySelector('.breed-select');

    const addBreedCats = data
      .map(
        breedCat => `<option value='${breedCat.id}'>${breedCat.name}</option>`
      )
      .join('');
    breedSelect.insertAdjacentHTML('beforeend', addBreedCats);
  })
  .catch(err => console.log(err));

const breedSelect = document.querySelector('.breed-select');
breedSelect.addEventListener('change', selectedValue);

function selectedValue(event) {
  const breedId = event.target.value;
  console.log(breedId);

  fetchCatByBreed(BASE_URL, breedId)
    .then(data => {
      console.log(data);

      const catInfo = document.querySelector('.cat-info');
      const addCatInfo = data
        .map(
          infoCat =>
            `${infoCat.name}, ${infoCat.description}, ${infoCat.temperament}`
        )
        .join('');
      catInfo.insertAdjacentHTML('beforeend', addCatInfo);
    })
    .catch(err => console.log(err));
}
