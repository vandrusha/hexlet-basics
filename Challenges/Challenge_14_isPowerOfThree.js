// isPowerOfThree.js
// Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree, которая определяет,
//   является ли переданное число натуральной степенью тройки.
//     Например, число 27 — это третья степень: 3 ^ 3, а 81 — это четвёртая: 3 ^ 4.

// Пример:

// isPowerOfThree(1); // true (3^0)
// isPowerOfThree(2); // false
// isPowerOfThree(9); // true (3^2)

export default const isPowerOfThree = (num) => {
  let possiblePower = 0;
  let result = '';

  for (let i = 0; i <= Math.cbrt(num); i += 1) {
    possiblePower = 3 ** i;

    if (possiblePower === num) {
      return result = 'true (3^' + String(i) + ')';
    }
    else if (possiblePower > num) {
      return result = 'false';
    }
  }
  return result;

}
