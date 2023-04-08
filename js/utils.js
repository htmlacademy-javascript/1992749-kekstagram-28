const ALERT_SHOW_TIME = 5000;
const alertContainer = document.querySelector('.show_alert');

export const showAlert = (message) => {

  alertContainer.classList.remove('hidden');
  alertContainer.textContent = message;

  setTimeout(() => {
    alertContainer.classList.add('hidden');
  }, ALERT_SHOW_TIME);
};

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export const getRandomNum = (min, max) => {
  if (min < 0 || max < 0) {
    throw new Error('Укажите положительный диапазон');
  }
  if (min >= max) {
    throw new Error('Внимание: min должен быть меньше, чем max');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


export const getRandomNumberUnique = (min, max) => {
  const uniqueNumbers = [];

  return function () {
    let swap = getRandomNum(min, max);

    if (uniqueNumbers.length > max - min) {
      throw new Error('Массив переполнен!');
    }
    while (uniqueNumbers.includes(swap)) {
      swap = getRandomNum(min, max);
    }
    uniqueNumbers.push(swap);
    return swap;
  };
};
