
import { isEscapeKey } from './data.js';

const fullScreenImage = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const socialCaption = document.querySelector('.social__caption');
const commentsCounterBlock = document.querySelector('.social__comment-count');
const blockOfNewComments = document.querySelector('.comments-loader');
const closeButton = document.querySelector('.big-picture__cancel');
const socialCommentsList = document.querySelector('.social__comments');
const socialCommentTemplate = document.querySelector('.social__comment');
const fragment = document.createDocumentFragment();

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    fullScreenImage.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

closeButton.addEventListener('click', () => {
  fullScreenImage.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}
);

export const showBigPicture = (photo) => {
  fullScreenImage.classList.remove('hidden');
  bigPicture.src = photo.url;
  likesCount.textContent = photo.likes;
  socialCaption.textContent = photo.description;
  commentsCount.textContent = photo.comments.length;
  commentsCounterBlock.classList.add('hidden');
  blockOfNewComments.classList.add('hidden');
  body.classList.add('modal-open');

  socialCommentsList.innerHTML = '';

  photo.comments.forEach((comment) => {
    const clone = socialCommentTemplate.cloneNode(true);
    clone.querySelector('.social__comment img').src = comment.avatar;
    clone.querySelector('.social__comment img').alt = comment.name;
    clone.querySelector('.social__comment p').textContent = comment.message;
    fragment.append(clone);

  });
  socialCommentsList.append(fragment);

  document.addEventListener('keydown', onDocumentKeydown);
};


