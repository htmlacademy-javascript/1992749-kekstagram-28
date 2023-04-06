const STEP_SCALE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const buttonScaleControlSmaller = document.querySelector('.scale__control--smaller');
const buttonScaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imageUploadPreview = document.querySelector('.img-upload__preview img');

const changeScaleImage = (value) => {
  imageUploadPreview.style.transform = `scale(${value / 100})`;
  scaleControlValue.value = `${value}%`;
};

const decreaseSize = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);
  let newValue = currentValue - STEP_SCALE;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  changeScaleImage(newValue);
};

const increaseSize = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);
  let newValue = currentValue + STEP_SCALE;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  changeScaleImage(newValue);
};

const initScale = () => {
  buttonScaleControlSmaller.addEventListener('click', decreaseSize);
  buttonScaleControlBigger.addEventListener('click', increaseSize);
};

export const deinitScale = () => {
  buttonScaleControlSmaller.removeEventListener('click', decreaseSize);
  buttonScaleControlBigger.removeEventListener('click', increaseSize);
};

export const resetScaleImage = () => {
  initScale();
  changeScaleImage(DEFAULT_SCALE);
};
