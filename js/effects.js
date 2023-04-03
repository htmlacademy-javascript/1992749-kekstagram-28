const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];
const EFFECT_DEFAULT = EFFECTS[0];
let currentEffect = EFFECT_DEFAULT;
const imageUploadPreview = document.querySelector('.img-upload__preview img');
const fieldEffects = document.querySelector('.effects');
const slider = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const fieldEffectValue = document.querySelector('.effect-level__value');

noUiSlider.create(slider, {
  range: {
    min: EFFECT_DEFAULT.min,
    max: EFFECT_DEFAULT.max,
  },
  start: EFFECT_DEFAULT.max,
  step: EFFECT_DEFAULT.step,
  connect: 'lower',
});

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};

const updateSlider = () => {
  slider.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    step: currentEffect.step,
    start: currentEffect.max,
  });

  if (currentEffect === EFFECT_DEFAULT) {
    hideSlider();
  } else {
    showSlider();
  }
};

const changeEffect = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imageUploadPreview.classList = `effects__preview--${currentEffect.name}`;
  updateSlider();
};

const changeSlider = () => {
  const sliderValue = slider.noUiSlider.get();
  imageUploadPreview.style.filter = currentEffect === EFFECT_DEFAULT
    ? EFFECT_DEFAULT.style
    : `${currentEffect.style}(${sliderValue}${currentEffect.unit})`;
  fieldEffectValue.value = sliderValue;
};

const initEffects = () => {
  fieldEffects.addEventListener('change', changeEffect);
  slider.noUiSlider.on('update', changeSlider);
};

export const deInitEffects = () => {
  fieldEffects.removeEventListener('change', changeEffect);
};

export const resetEffect = () => {
  currentEffect = EFFECT_DEFAULT;
  updateSlider();
  initEffects();
};

