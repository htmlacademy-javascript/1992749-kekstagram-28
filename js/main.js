import { createUsersImages } from './pictures.js';
import { initModal } from './form.js';
import { getData } from './api.js';
import { showAlert } from './utils.js';

initModal();

getData()
  .then((data) => {
    createUsersImages(data);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );
