import {getRandomNum, getRandomNumberUnique} from './utils.js';

export const isEscapeKey = (evt) => evt.key === 'Escape';

const DESCRIPTIONS_LIST = [
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

const MESSAGES_LIST = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES_LIST = ['Tyrion Lannister',
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

const PHOTOS_COUNT = 25;
const MIN_AMOUNT_COMMENTS = 0;
const MAX_AMOUNT_COMMENTS = 19;
const MIN_AMOUNT_ID = 400;
const MAX_AMOUNT_ID = 900;
const MIN_AMOUNT_AVATARS = 1;
const MAX_AMOUNT_AVATARS = 6;
const MIN_AMOUNT_MESSAGES = 0;
const MAX_AMOUNT_MESSAGES = 5;
const MIN_AMOUNT_NAMES = 0;
const MAX_AMOUNT_NAMES = 19;
const MIN_AMOUNT_LIKES = 15;
const MAX_AMOUNT_LIKES = 200;

const uniqueIdentifiers = getRandomNumberUnique(MIN_AMOUNT_ID, MAX_AMOUNT_ID);

const createComments = (numberOfComment) => {
  const arr = [];
  for (let i = 1; i <= numberOfComment; i++) {
    const comment = {
      id: `${uniqueIdentifiers()}`,
      avatar: `img/avatar-${getRandomNum(MIN_AMOUNT_AVATARS, MAX_AMOUNT_AVATARS)}.svg`,
      message: `${MESSAGES_LIST[getRandomNum(MIN_AMOUNT_MESSAGES, MAX_AMOUNT_MESSAGES)]}`,
      name: `${NAMES_LIST[getRandomNum(MIN_AMOUNT_NAMES, MAX_AMOUNT_NAMES)]}`,
    };
    arr.push(comment);
  }
  return arr;
};

export const createPhotos = () => {
  const arr = [];
  for (let i = 1; i <= PHOTOS_COUNT; i++) {
    const photo = {
      id : `${i}`,
      url : `photos/${i}.jpg`,
      description : `${DESCRIPTIONS_LIST[i]}`,
      likes : `${getRandomNum(MIN_AMOUNT_LIKES, MAX_AMOUNT_LIKES)}`,
      comments : createComments(getRandomNum(MIN_AMOUNT_COMMENTS, MAX_AMOUNT_COMMENTS)),
    };
    arr.push(photo);
  }
  return arr;
};

