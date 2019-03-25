// reverse.js
// Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед, 
//используя рекурсию.

//   Например:

// import reverse from './reverse';

// reverse('str');    // rts
// reverse('hexlet'); // telxeh
// Попробуйте решить эту задачу, используя рекурсивный процесс.Для этого вам понадобится метод substr.

//   Подсказки
// Чтобы узнать длину строки, используйте свойство length:

// 'welcome'.length; // 7
// Чтобы получить подстроку из строки, используйте метод substr:

// 'foo'.substr(1, 2); // 'oo';

const reverse = (str) => {
const num = str.length - 1

  const rec = (num) => {
    if (num === 0) {
      return str[0]
    }
    else {
      return str[num] + rec(num - 1)
    }
  }
  return rec(num);
}

// OR

const reverse = (str) => {

  if (str.length === 1) {
    return str[0]
  }
else return str[str.length - 1] + reverse(str.substr(0, str.length - 1))

}
