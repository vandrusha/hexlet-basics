// Счастливым билетом называют такой билет с шестизначным номером,
//   где сумма первых трех цифр равна сумме последних трех.

//   Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6

// isHappyTicket.js
// Напишите и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым
//   (номер может быть как числового, так и строкового типа: см.примеры ниже).
// Функция должна возвращать true, если билет счастливый, или false, если нет.

// Примеры использования:

// import isHappyTicket from './isHappyTicket';

// isHappyTicket(385916); // true
// isHappyTicket(231002); // false
// isHappyTicket(128722); // true
// isHappyTicket('054702'); // true
// Подсказки
// Преобразовать число в строку можно с помощью функции String:

// String(1234); // '1234'
// Преобразовать строку в число можно с помощью функции Number:

// Number('456'); // 456
// Чтобы узнать длину строки, используйте свойство length:

// 'welcome'.length; // 7


export default const isHappyTicket = (numOrStr) => {
  const firstSum = Number(String(numOrStr[0])) + Number(String(numOrStr[1])) + Number(String(numOrStr[2]))
  const secondSum = Number(String(numOrStr[3])) + Number(String(numOrStr[4])) + Number(String(numOrStr[5]))
  return firstSum === secondSum;
}
