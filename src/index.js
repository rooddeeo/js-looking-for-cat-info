import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const BASE_URL = 'https://api.thecatapi.com/v1/';
const API_KEY =
  'live_LdyZZAkvOUOZW3p4VB6sUES1xXuWB4URiEdzXmtox4uhzgcwlKHnYfmIPsy30pkJ';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

loader.classList.add('hidden');
error.classList.add('hidden');
catInfo.classList.add('hidden');

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
  .catch(err => {
    console.log(err);
    loader.classList.add('hidden');
    error.classList.remove('hidden');
  });

breedSelect.addEventListener('change', selectedValue);

function selectedValue(event) {
  const breedId = event.target.value;
  console.log(breedId);

  catInfo.classList.add('hidden');
  loader.classList.remove('hidden');

  fetchCatByBreed(BASE_URL, breedId, API_KEY)
    .then(data => {
      console.log(data);
      const catInfo = document.querySelector('.cat-info');
      catInfo.innerHTML = '';
      const addCatInfo = `<li class = "cat__info">
      <img class="cat__image" src="${data[0].url}" alt = "${data[0].breeds[0].name}"></img>
      <h1 class="cat__title">${data[0].breeds[0].name}</h1>
      <p class="cat__description">${data[0].breeds[0].description}</p>
      <p class="cat__temperament"><strong>Temperament:</strong> ${data[0].breeds[0].temperament}</p>
      </li>`;
      catInfo.insertAdjacentHTML('beforeend', addCatInfo);
      
      error.classList.add('hidden');
      catInfo.classList.remove('hidden');
      loader.classList.add('hidden');
    })
    .catch(err => {
      console.log(err);
      loader.classList.add('hidden');
      error.classList.remove('hidden');
    });
}
