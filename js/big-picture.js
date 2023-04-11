
import { isEscapeKey } from './utils.js';
const PART_COMMENTS = 5;
const fullScreenImage = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const socialCaption = document.querySelector('.social__caption');
const socialСommentСount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
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

const renderCommentsToList = (remarks, remarksOpen) => {
  if (remarksOpen >= remarks.comments.length) {
    commentsLoader.classList.add('hidden');
    remarksOpen = remarks.comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }
  for (let i = 0; i < remarksOpen; i++) {
    const clone = socialCommentTemplate.cloneNode(true);
    clone.querySelector('.social__comment img').src = remarks.comments[i].avatar;
    clone.querySelector('.social__comment img').alt = remarks.comments[i].name;
    clone.querySelector('.social__comment p').textContent = remarks.comments[i].message;
    fragment.append(clone);
  }
  socialСommentСount.textContent = `${remarksOpen} из ${remarks.comments.length} комментариев`;
  return fragment;
};

const renderComments = (photo) => {
  let commentsOpen = PART_COMMENTS;
  renderCommentsToList(photo, commentsOpen);

  commentsLoader.addEventListener('click', () => {
    commentsOpen += PART_COMMENTS;
    socialCommentsList.innerHTML = '';
    renderCommentsToList(photo, commentsOpen);
    socialCommentsList.append(fragment);
  }
  );
};

export const showBigPicture = (photo) => {
  fullScreenImage.classList.remove('hidden');
  bigPicture.src = photo.url;
  likesCount.textContent = photo.likes;
  socialCaption.textContent = photo.description;
  commentsCount.textContent = photo.comments.length;
  body.classList.add('modal-open');

  socialCommentsList.innerHTML = '';
  renderComments(photo);
  socialCommentsList.append(fragment);
  document.addEventListener('keydown', onDocumentKeydown);
};

