// formattedTime.js
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут
//   (прошедших с начала суток) и возвращает строку, являющуюся временем в формате чч: мм.

//   Пример:

// formattedTime(5); // 00:05
// formattedTime(15); // 00:15
// formattedTime(60); // 01:00
// formattedTime(67); // 01:07
// formattedTime(175); // 02:55
// formattedTime(600); // 10:00
// formattedTime(754); // 12:34
// Подсказки
// Используйте функцию Math.floor(number) для округления до нижней границы

const export default formattedTime = (minutes) => {

  if (Math.floor(minutes / 60) < 10 && minutes % 60 < 10) {
    const time = '0' + String(Math.floor(minutes / 60)) + ':' + '0' + String(minutes % 60)
    return time;
  }

  else if (Math.floor(minutes / 60) < 10 || minutes % 60 < 10) {

    if (Math.floor(minutes / 60) < 10) {
      const time = '0' + String(Math.floor(minutes / 60)) + ':' + String(minutes % 60)
      return time;
    }

    else {
      const time = String(Math.floor(minutes / 60)) + ':' + '0' + String(minutes % 60)
      return time;
    }
  }
}
