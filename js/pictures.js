import {createPhotos} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const template = document.querySelector('#picture').content.querySelector('a');
const generatePohotos = createPhotos(25);

export const createImagesUsers = () => {

  generatePohotos.forEach((item) => {
    const clone = template.cloneNode(true);
    clone.querySelector('img').src = item.url;
    clone.querySelector('img').alt = item.description;
    clone.querySelector('.picture__likes').textContent = item.likes;
    clone.querySelector('.picture__comments').textContent = item.commens.length;
    fragment.append(clone);
  });
  picturesContainer.append(fragment);
};

