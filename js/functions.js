// Функция для проверки длины строки. Она нам пригодится для валидации формы.
const checkingLength = function (str, num) {
  return str.length <= num ? 'true' : 'false';
};
checkingLength('проверяемая строка', 17);

//Функция для проверки, является ли строка палиндромом.
const isPalindrome = function (str) {
  let sum = '';
  for (let i = str.length - 1; i > -1; i--) {
    sum += str[i];
  }
  return str.replaceAll(' ', '').toUpperCase() === sum.replaceAll(' ', '').toUpperCase()
    ? 'true' : 'false';
};
isPalindrome('Лёша на полке клопа нашёл ');

/*Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и
возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры,
функция должна вернуть NaN: */
const searchingNumbers = function (str) {
  const withoutSpaces = String(str).replaceAll(' ', '');
  let num = '';
  for (let i = 0; i < withoutSpaces.length; i++) {
    if (Number(withoutSpaces[i]) || Number(withoutSpaces[i]) === 0) {
      num += withoutSpaces[i];
    }
  }
  return Number(num) ? num : 'NaN';
};
searchingNumbers(-1.589);

/*Функция, которая принимает три параметра: исходную строку, минимальную длину и строку
с добавочными символами — и возвращает исходную строку, дополненную указанными символами
до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает
заданную длину, она не должна обрезаться. Если «добивка» слишком длинная,
она обрезается с конца.
*/

const format = function (str, size, pattern) {

  if (size <= str.length) {
    return str;
  }

  const amount = Math.floor((size - str.length) / pattern.length); //расчет количества итераций цикла
  for (let i = 0; i < amount; i++) {
    str = pattern + str;
  }

  const difference = size - str.length; //Если «добивка» слишком длинная, она обрезается с конца
  str = pattern.slice(0, difference) + str;
  return str;
};
format('q', 4, 'we');
