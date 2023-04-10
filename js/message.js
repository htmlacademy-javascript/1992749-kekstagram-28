import { isEscapeKey } from './data.js';
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    onButtonClick();
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

function onButtonClick () {
  const modalElement = document.querySelector('.success') || document.querySelector('.error');
  modalElement.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
}

const onClick = (evt) => {
  if (evt.target.tagName === 'SECTION') {
    onButtonClick();
  }
};

export const showSuccessMessage = () => {
  const message = successMessageTemplate.cloneNode(true);
  document.body.appendChild(message);

  const modalElement = document.querySelector('.success');
  const modalCloseElement = document.querySelector('.success__button');

  modalCloseElement.addEventListener('click', onButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  modalElement.addEventListener('click', onClick);
};

export const showErrorMessage = () => {
  const message = errorMessageTemplate.cloneNode(true);
  document.body.appendChild(message);

  const modalElement = document.querySelector('.error');
  const modalCloseElement = document.querySelector('.error__button');

  modalCloseElement.addEventListener('click', onButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  modalElement.addEventListener('click', onClick);
};

