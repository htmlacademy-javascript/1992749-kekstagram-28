const getRandomNum = (min, max) => {
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


const getRandomNumberUnique = (min, max) => {
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

export {getRandomNum};
export {getRandomNumberUnique};
