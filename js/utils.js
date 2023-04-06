const ALERT_SHOW_TIME = 5000;

export const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
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
