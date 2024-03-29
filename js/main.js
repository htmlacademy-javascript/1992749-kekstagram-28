import { createUsersImages } from './pictures.js';
import { initModal } from './form.js';
import { getData } from './api.js';
import { showAlert, debounce } from './utils.js';
import { initFilter, getFilteredImages } from './filter.js';

initModal();

getData()
  .then((data) => {
    const doDebounce = debounce(createUsersImages);
    initFilter(data, doDebounce);
    createUsersImages(getFilteredImages());
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );
