
import { isEscapeKey } from './data.js';
const fullScreenImage = document.querySelector('.big-picture');
const body = document.querySelector('body');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    fullScreenImage.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};
const closeButton = document.querySelector('.big-picture__cancel');
closeButton.addEventListener('click', () => {
  fullScreenImage.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}
);

const bigPicture = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const socialCaption = document.querySelector('.social__caption');
const commentsCounterBlock = document.querySelector('.social__comment-count');
const blockOfNewComments = document.querySelector('.comments-loader');

const socialCommentsList = document.querySelector('.social__comments');
const socialCommentTemplate = document.querySelector('.social__comment');
const fragment = document.createDocumentFragment();


export const showBigPicture = (element) => {
  fullScreenImage.classList.remove('hidden');
  bigPicture.src = element.url;
  likesCount.textContent = element.likes;
  socialCaption.textContent = element.description;
  commentsCount.textContent = element.commens.length;
  commentsCounterBlock.classList.add('hidden');
  blockOfNewComments.classList.add('hidden');
  body.classList.add('modal-open');

  socialCommentsList.innerHTML = '';

  element.commens.forEach((elem) => {
    const clone = socialCommentTemplate.cloneNode(true);
    clone.querySelector('.social__comment img').src = elem.avatar;
    clone.querySelector('.social__comment img').alt = elem.name;
    clone.querySelector('.social__comment p').textContent = elem.message;
    fragment.append(clone);

  });
  socialCommentsList.append(fragment);

  document.addEventListener('keydown', onDocumentKeydown);
};


