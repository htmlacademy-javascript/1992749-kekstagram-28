const FILTER_PICTURES_COUNT = 10;
const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const filterBlock = document.querySelector('.img-filters');
let currentFilter = Filter.DEFAULT;
let pictures = [];

const sortRandom = () => Math.random() - 0.5;
const sortDiscussed = (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length;

export const getFilteredImages = () => {
  switch(currentFilter) {
    case Filter.RANDOM:
      return [...pictures].sort(sortRandom).slice(0,FILTER_PICTURES_COUNT);
    case Filter.DISCUSSED:
      return [...pictures].sort(sortDiscussed);
    default:
      return [...pictures];
  }
};

const initFilterClick = (callback) => {
  filterBlock.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }
    if (evt.target.id === currentFilter) {
      return;
    }
    filterBlock.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    currentFilter = evt.target.id;
    callback(getFilteredImages());
  });
};

export const initFilter = (data, callback) => {
  filterBlock.classList.remove('img-filters--inactive');
  pictures = [...data];
  initFilterClick(callback);
};

