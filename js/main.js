const descriptionsList = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'twenty-one',
  'twenty-two',
  'twenty-three',
  'twenty-four',
  'twenty-five',
];

const messagesList = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const namesList = ['Tyrion Lannister',
  'Jon Snow',
  'Daenerys Targaryen',
  'Cersei Lannister',
  'Sansa Stark',
  'Arya Stark',
  'Jaime Lannister',
  'Jorah Mormont',
  'Theon Greyjoy',
  'Samwell Tarly',
  'Varys',
  'Davos Seaworth',
  'Brienne of Tarth',
  'Petyr Baelish',
  'Bran Stark',
  'Sandor Clegane',
  'Missandei',
  'Bronn Blackwater',
  'Gray Worm',
  'Tormund Giantdeath',
];

const uniqueNumbers = [];

const getRandomNum = (min, max) => {
  if (min < 0 || max < 0) {
    return 'Укажите положительный диапазон';
  }
  if (min >= max) {
    return 'Внимание: min должен быть меньше, чем max';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomNum(-2, 4);

const getRandomNumberUnique = (min, max) => {
  const swap = getRandomNum(min, max);
  if (!uniqueNumbers.includes(swap)) {
    uniqueNumbers.push(swap);
    return swap;
  } if (max - min < uniqueNumbers.length) {
    return 'Массив переполнен!';
  }
};
getRandomNumberUnique(2, 5);

const createComment = (numberOfComment) => {
  const arr = [];
  for (let i = 1; i <= numberOfComment; i++) {
    const comment = {
      id: `${getRandomNumberUnique(40, 900)}`,
      avatar: `img/avatar-${getRandomNum(1, 6)}.svg`,
      message: `${messagesList[getRandomNum(0, 5)]}`,
      name: `${namesList[getRandomNum(0, 19)]}`,
    };
    arr.push(comment);
  }
  return arr;
};

const createPhoto = (numberOfPhotos) => {
  const arr = [];
  for (let i = 1; i <= numberOfPhotos; i++) {
    const photo = {
      id : `${i}`,
      url : `photos/${i}.jpg`,
      description : `${descriptionsList[i]}`,
      likes : `${getRandomNum(15, 200)}`,
      commens : createComment(2),
    };
    arr.push(photo);
  }
  return arr;
};
createPhoto(25);
