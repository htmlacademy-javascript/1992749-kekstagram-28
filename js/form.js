import { isEscapeKey } from './data.js';
const body = document.querySelector('body');
const modalWindow = document.querySelector('.img-upload__overlay');
const fileField = document.querySelector('#upload-file');
const closeButton = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const MAX_TAG_COUNT = 5;
const PATTERN = /^#[a-zа-яё0-9]{1,19}$/i;
const TAG_ERROR = 'Невалидный хэш-тег';
const hashtagsInputField = document.querySelector('.text__hashtags');
const commentInputField = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error-text',
});

const checkCommentEscape = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const assistsСlosing = () => {
  form.reset();
  modalWindow.classList.add('hidden');
  body.classList.remove('modal-open');
  hashtagsInputField.removeEventListener('keydown', checkCommentEscape);
  commentInputField.removeEventListener('keydown', checkCommentEscape);
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    assistsСlosing();
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};
const closeModalWindow = () => {
  pristine.reset();
  assistsСlosing();
  document.removeEventListener('keydown', onDocumentKeydown);
};

const openModalWindow = () => {
  modalWindow.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  hashtagsInputField.addEventListener('keydown', checkCommentEscape);
  commentInputField.addEventListener('keydown', checkCommentEscape);
};

const initValidation = () => {
  const checkValidTag = (tag) => PATTERN.test(tag);
  const checkValidCount = (tags) => tags.length <= MAX_TAG_COUNT;

  const checkUniqueTags = (tags) => {
    const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
    return lowerCaseTags.length === new Set(lowerCaseTags).size;
  };

  const validateTags = (value) => {
    const tags = value
      .trim()
      .split(' ')
      .filter((tag) => tag.trim().length);
    return checkValidCount(tags) && checkUniqueTags(tags) && tags.every(checkValidTag);
  };

  pristine.addValidator(
    hashtagsInputField,
    validateTags,
    TAG_ERROR
  );
};

export const initModal = () => {
  fileField.addEventListener('change', openModalWindow);
  closeButton.addEventListener('click', closeModalWindow);
  initValidation();
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });
};

