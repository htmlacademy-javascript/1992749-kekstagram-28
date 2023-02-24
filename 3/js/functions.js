const checkLength = (str, maxLength) => str.length <= maxLength;
checkLength('проверяемая строка', 18);

const isPalindrome = (str) => {
  let sum = '';
  for (let i = str.length - 1; i > -1; i--) {
    sum += str[i];
  }
  return (str.replaceAll(' ', '').toUpperCase() === sum.replaceAll(' ', '').toUpperCase());
};
isPalindrome('Лёша на полке клопа нашёл ');

const searchingNumbers = (str) => {
  const withoutSpaces = String(str).replaceAll(' ', '');
  let num = '';
  for (let i = 0; i < withoutSpaces.length; i++) {
    if (!isNaN(Number(withoutSpaces[i]))) {
      num += withoutSpaces[i];
    }
  }
  return num.length > 0 ? Number(num) : NaN;
};
searchingNumbers(-1.586);

const formatString = (str, minLength, pattern) => {

  if (minLength <= str.length) {
    return str;
  }

  const amount = Math.floor((minLength - str.length) / pattern.length);
  for (let i = 0; i < amount; i++) {
    str = pattern + str;
  }

  const difference = minLength - str.length;
  str = pattern.slice(0, difference) + str;
  return str;
};
formatString('q', 4, 'we');
