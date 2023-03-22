
import { isEscapeKey } from './data.js';

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
const PART_COMMENTS = 5;
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

const getComments = (sample) => {
  let commentsOpen = 0;
  commentsOpen = PART_COMMENTS;

  if (commentsOpen >= sample.comments.length) {
    commentsLoader.classList.add('hidden');
    commentsOpen = sample.comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  for (let i = 0; i < commentsOpen; i++) {
    const clone = socialCommentTemplate.cloneNode(true);
    clone.querySelector('.social__comment img').src = sample.comments[i].avatar;
    clone.querySelector('.social__comment img').alt = sample.comments[i].name;
    clone.querySelector('.social__comment p').textContent = sample.comments[i].message;
    fragment.append(clone);
  }

  commentsLoader.addEventListener('click', () => {
    commentsOpen += PART_COMMENTS;
    socialCommentsList.innerHTML = '';

    if (commentsOpen >= sample.comments.length) {
      commentsLoader.classList.add('hidden');
      commentsOpen = sample.comments.length;
    } else {
      commentsLoader.classList.remove('hidden');
    }

    for (let i = 0; i < commentsOpen; i++) {
      const clone = socialCommentTemplate.cloneNode(true);
      clone.querySelector('.social__comment img').src = sample.comments[i].avatar;
      clone.querySelector('.social__comment img').alt = sample.comments[i].name;
      clone.querySelector('.social__comment p').textContent = sample.comments[i].message;
      fragment.append(clone);
    }
    socialCommentsList.append(fragment);
    socialСommentСount.textContent = `${commentsOpen} из ${sample.comments.length} комментариев`;
  }
  );
  socialСommentСount.textContent = `${commentsOpen} из ${sample.comments.length} комментариев`;

};

export const showBigPicture = (photo) => {
  fullScreenImage.classList.remove('hidden');
  bigPicture.src = photo.url;
  likesCount.textContent = photo.likes;
  socialCaption.textContent = photo.description;
  commentsCount.textContent = photo.comments.length;
  body.classList.add('modal-open');

  socialCommentsList.innerHTML = '';

  getComments(photo);
  socialCommentsList.append(fragment);
  document.addEventListener('keydown', onDocumentKeydown);
};
