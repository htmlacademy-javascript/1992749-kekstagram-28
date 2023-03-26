import { isEscapeKey } from './data.js';
const body = document.querySelector('body');
const modalWindow = document.querySelector('.img-upload__overlay');
const fileField = document.querySelector('#upload-file');
const closeButton = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    //evt.preventDefault(); здесь не нужен, так как нечего отменять?
    form.reset();
    modalWindow.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};
const closeModalWindow = () => {

  modalWindow.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const openModalWindow = () => {

  modalWindow.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

};

fileField.addEventListener('change', openModalWindow);
closeButton.addEventListener('click', closeModalWindow);

