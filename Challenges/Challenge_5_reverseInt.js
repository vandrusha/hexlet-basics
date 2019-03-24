// Реализуйте и экспортируйте по умолчанию функцию reverseInt, 
//которая переворачивает цифры в переданном числе и возвращает новое число.

//   reverseInt(13); // 31
// reverseInt(-123); // -321
// reverseInt(8900); // 98
// Подсказки
// Длина строки str находится так: str.length

const reverseInt = (n) => {
  let initialString = String(n);

  if (n > 0) {
    let str = '';
    for (let i = initialString.length - 1; i >= 0; i -= 1) {
      str += initialString[i];
    }
    if (str[str.length - 1] === '-')
      return Number(str);
  }

  let str = '-';
  for (let i = initialString.length - 1; i > 0; i -= 1) {
    str += initialString[i];
  }
    return Number(str);
}
