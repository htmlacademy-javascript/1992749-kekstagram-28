import {getRandomNum, getRandomNumberUnique} from './utils.js';

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

const uniqueIdentifiers = getRandomNumberUnique(400, 900);

const createComments = (numberOfComment) => {
  const arr = [];
  for (let i = 1; i <= numberOfComment; i++) {
    const comment = {
      id: `${uniqueIdentifiers()}`,
      avatar: `img/avatar-${getRandomNum(1, 6)}.svg`,
      message: `${messagesList[getRandomNum(0, 5)]}`,
      name: `${namesList[getRandomNum(0, 19)]}`,
    };
    arr.push(comment);
  }
  return arr;
};

export const createPhotos = (numberOfPhotos) => {
  const arr = [];
  for (let i = 1; i <= numberOfPhotos; i++) {
    const photo = {
      id : `${i}`,
      url : `photos/${i}.jpg`,
      description : `${descriptionsList[i]}`,
      likes : `${getRandomNum(15, 200)}`,
      commens : createComments(2),
    };
    arr.push(photo);
  }
  return arr;
};

