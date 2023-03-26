import {createPhotos} from './data.js';
import {createUsersImages} from './pictures.js';
import './form.js';

const generatedPhotos = createPhotos();
createUsersImages(generatedPhotos);

