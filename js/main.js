import {createPhotos} from './data.js';
import {createUsersImages} from './pictures.js';
import {initModal} from './form.js';

const generatedPhotos = createPhotos();
createUsersImages(generatedPhotos);
initModal();
