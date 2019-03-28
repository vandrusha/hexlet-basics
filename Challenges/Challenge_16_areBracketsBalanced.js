// areBracketsBalanced.js
// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку,
//   состоящую только из открывающих и закрывающих круглых скобок,
//   и проверяет является ли эта строка корректной.
// Пустая строка(отсутствие скобок) считается корректной.

// Строка считается корректной(сбалансированной),
//   если содержащаяся в ней скобочная структура соответствует требованиям:

// Скобки — это парные структуры.У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
// Закрывающая скобка не должна идти впереди открывающей.
// import areBracketsBalanced from 'roundBracketsValidator';

// areBracketsBalanced('(())');  // true
// areBracketsBalanced('((())'); // false

export default const areBracketsBalanced = (brackets) => {
  let openBrackets = 0;
  let closedBrackets = 0;

  for (let i = 0; i <= brackets.length && brackets[i] === '('; i += 1) {
      openBrackets += 1;
  }

  const str = brackets.substr(openBrackets, brackets.length - openBrackets)
  for (let i = 0; i < brackets.length - openBrackets; i += 1) {
    if (str[i] === ')') {
      closedBrackets += 1;
    }
    else { return false }
  }


  return openBrackets - closedBrackets === 0;
}
