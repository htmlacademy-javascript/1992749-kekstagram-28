import { isEscapeKey } from './data.js';
import { deinitScale } from './scale.js';
import { deInitEffects } from './effects.js';
import { resetScaleImage } from './scale.js';
import { resetEffect } from './effects.js';
import { showAlert } from './utils.js';
import { sendData } from './api.js';
import { showErrorMessage } from './message.js';
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
const submitButton = document.querySelector('.img-upload__submit');
const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};
const preview = document.querySelector('.img-upload__preview img');
const fileChooser = document.querySelector('.img-upload__input');

const getFile = () => {
  const file = fileChooser.files[0];
  preview.src = URL.createObjectURL(file);
};

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

const closeModalWindow = () => {
  deinitScale();
  deInitEffects();
  form.reset();
  modalWindow.classList.add('hidden');
  body.classList.remove('modal-open');
  hashtagsInputField.removeEventListener('keydown', checkCommentEscape);
  commentInputField.removeEventListener('keydown', checkCommentEscape);
  fileChooser.removeEventListener('change', getFile);
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeModalWindow();
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};
const onCloseButtonClick = () => {
  pristine.reset();
  closeModalWindow();
  document.removeEventListener('keydown', onDocumentKeydown);
};

const openModalWindow = () => {
  resetScaleImage();
  resetEffect();
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

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch(
          (err) => {
            showAlert(err.message);
            showErrorMessage();
          }
        )
        .finally(unblockSubmitButton);

      closeModalWindow();
    }
  });
};

export const initModal = () => {
  fileChooser.addEventListener('change', getFile);
  fileField.addEventListener('change', openModalWindow);
  closeButton.addEventListener('click', onCloseButtonClick);
  initValidation();
  setUserFormSubmit();
};
