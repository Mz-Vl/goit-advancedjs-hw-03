import iziToast from 'izitoast';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';

const breedSelectElement = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const errorText = document.querySelector('.error');

const catImage = document.querySelector('.cat-image');
const catName = document.querySelector('.cat-name');
const catDescription = document.querySelector('.cat-description');
const catTemperament = document.querySelector('.cat-temperament');

let breedSelect;

const initialize = async () => {
  try {
    hideCatInfo();
    toggleLoader(true);
    const breeds = await fetchBreeds();
    populateBreedSelect(breeds);
    breedSelect = new SlimSelect({
      select: '.breed-select'
    });
  } catch (error) {
    showError(error.message);
  } finally {
    toggleLoader(false);
  }
};

const populateBreedSelect = (breeds) => {
  breedSelectElement.innerHTML = breeds.map(breed =>
    `<option value="${breed.id}">${breed.name}</option>`
  ).join('');
};

const handleBreedSelectChange = async (event) => {
  const breedId = event.target.value;
  try {
    toggleLoader(true);
    hideError();
    hideCatInfo();
    const catData = await fetchCatByBreed(breedId);
    if (!catData) {
      showError('No cat was found for your request');
      return;
    }
    displayCatInfo(catData);
  } catch (error) {
    showError(error.message);
  } finally {
    toggleLoader(false);
  }
};

const displayCatInfo = (catData) => {
  const breed = catData.breeds[0];
  catImage.src = catData.url;
  catName.textContent = breed.name;
  catDescription.textContent = breed.description;
  const temperamentHtml = `<p><strong>Temperament:</strong> ${breed.temperament.split(', ').join(', ')}</p>`;
  catTemperament.innerHTML = temperamentHtml;
  catInfo.hidden = false;
};

const toggleLoader = (show) => {
  const loaderElement = document.querySelector('.loader');
  loaderElement.hidden = !show;
  loaderElement.style.display = show ? 'inline-block' : 'none';
  breedSelectElement.hidden = show;
  catInfo.hidden = show;
};

const showError = (message) => {
  errorText.textContent = message;
  errorText.hidden = false;
  iziToast.error({ title: 'Error', message });
};

const hideError = () => {
  errorText.hidden = true;
};

const hideCatInfo = () => {
  catInfo.hidden = true;
};

breedSelectElement.addEventListener('change', handleBreedSelectChange);

initialize();
