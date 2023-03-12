import {createPhotos} from './data.js';
import {createUsersImages} from './pictures.js';

const generatedPhotos = createPhotos();
createUsersImages(generatedPhotos);
