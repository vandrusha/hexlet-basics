// Программист, который работал на проекте до вас, разбросал все функции,
//   связанные с математическими вычислениями по разным файлам с именами numbers1, numbers2 и numbers3.
// Причем имена функций тоже сделал странными: все функции в файле numbers2 заканчиваются на двойку,
//   например, sum2.

// Вы быстро поняли, что это неудобно и нужно создать единый интерфейс для доступа к ним(говорят "фасад").
// Для этого необходимо импортировать все функции из всех перечисленных модулей в новый модуль в файле math.js.

//   math.js
// Задача состоит в том, чтобы файл math.js импортировал в себя все функции из трех описанных выше файлов
// и выставил их наружу(то есть сделал их реэкспорт) под следующими именами: pow, sum, sub, sqrt и multi.
// А так же экспортировал функцию cube по умолчанию.

// В этом задании специально не сказано, где какая функция и под каким именем лежит.А так же не сказано,
//   как они все экспортируются.Цель этого задания в том, чтобы вы хорошо разобрались с системой модулей,
//   что очень упростит вашу жизнь в дальнейшем.Огромная просьба не подсматривать решение и подумать
// самостоятельно, а в случае чего задать вопрос в комьюнити.

// Не забудьте проанализировать файл с тестами, чтобы понять, как используется модуль math.js.

import * as numbers1 from './number1'
import * as numbers2 from './number2'
import * as numbers3 from './number3'

if (numbers1.pow1) {
  export const pow = numbers1.pow1;
}
else if (numbers2.pow2) {
  export const pow = numbers2.pow2;
}
else if (numbers3.pow3) {
  export const pow = numbers3.pow3;
}

if (numbers1.sum1) {
  export const sum = numbers1.sum1;
}
else if (numbers2.sum2) {
  export const sum = numbers2.sum2;
}
else if (numbers3.sum3) {
  export const sum = numbers3.sum3;
}

if (numbers1.sub1) {
  export const sub = numbers1.sub1;
}
else if (numbers2.sub2) {
  export const sub = numbers2.sub2;
}
else if (numbers3.sub3) {
  export const sub = numbers3.sub3;
}

if (numbers1.sqrt1) {
  export const sqrt = numbers1.sqrt1;
}
else if (numbers2.sqrt2) {
  export const sqrt = numbers2.sqrt2;
}
else if (numbers3.sqrt3) {
  export const sqrt = numbers3.sqrt3;
}

if (numbers1.multi1) {
  export const multi = numbers1.multi1;
}
else if (numbers2.multi2) {
  export const multi = numbers2.multi2;
}
else if (numbers3.multi3) {
  export const multi = numbers3.multi3;
}

if (numbers1.cube1) {
  export default const cube = numbers1.cube1;
}
else if (numbers2.cube2) {
  export default const cube = numbers2.cube2;
}
else if (numbers3.cube3) {
  export default const cube = numbers3.cube3;
}
