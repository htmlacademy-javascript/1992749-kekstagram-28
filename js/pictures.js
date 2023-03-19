import {showBigPicture} from './big-picture.js';

const picturesContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const template = document.querySelector('#picture').content.querySelector('a');


export const createUsersImages = (photos) => {

  photos.forEach((item) => {
    const clone = template.cloneNode(true);
    clone.querySelector('img').src = item.url;
    clone.querySelector('img').alt = item.description;
    clone.querySelector('.picture__likes').textContent = item.likes;
    clone.querySelector('.picture__comments').textContent = item.comments.length;

    clone.addEventListener('click', () => {
      showBigPicture(item);
    });
    fragment.append(clone);
  });
  picturesContainer.append(fragment);
};


