// // 5. Переменные и строгий режим
"use strict";

// let number1 = 5;
// const leftBorderWidth = 1;

// number1 = 10;
// console.log(number1);

// leftBorderWidth = 3

// // 6.Классификация типов данных

// let number = 4.6;
// console.log(-4/0);
// console.log('string' * 9);

// const persone = 'Alex';

// const bool = true;

// console.log(something); // null

// let und;
// console.log(und); // undefined - потому что переменная не определена

// const obj = { 
//     name: 'John', // ключ-это свойство обьекта: значение
//     age: 25, 
//     isMarried: false
// };

//  console.log(obj.name); // способ вывода значения ключа обьекта
//  console.log(obj['name']); // способ вывода значения ключа обьекта

//          // 0            1           2   3  4   - заданные по умолчанию ключи как у обьекта
// let arr = ['plum.png', 'orange.jpg', 6, {}, []]; // у массива порядковый номер наинается с 0
// console.log(arr[1]);

// // 7. Простое общение с пользователем

// alert('Hello'); - команда, используется чтобы предупредить пользователя о чем-то важном (в модальном окне) 

// const result = confirm('Are you here?'); - команда, когда есть 2 варианта ответа
// console.log(result); - в переменной отодражаеться результат дейсвий польз. в виде типа данных Boolean:true/false

// const answer = prompt('Are you 18?', '18'); - когда нужет свободный ответ от пользователя
//                           вопрос, пишем default значение(значение по умолчанию), placeholder или оставляем пустые кавычки 

// const name = 46; 
// const age = confirm(name); - в alert, confirm, prompt можно вставить переменную
// console.log(age);

// console.log(typeof answer ); - ответ, который напишет пользователь будет отображаться в консоле, то есть в переменной answer лежит ответ-значение в виде строки
//                              - чтобы не ответил пользователь данные будут в виде типа данных - строки
//             (typeof ... ) - метод при помощи которого можно проверить на типы данных

//  !!!!!! ВСЯ ИНФО ПРИХОДЯЩАЯ ОТ ПОЛЬЗОВАТЕЛЯ - В ВИДЕ СТРОК ВНЕ ЗАВИСИМОСТИ ОТ ТОГО КАК МЫ ЕЕ ПОЛУЧИЛИ
//         НО С ПОМОЩИ НЕКОТОРЫХ ОПЕРАЦИЙ МОЖНО ПРЕОБРАЗОВОВАТЬ ОДИН ТИП ДАННЫХ В ДРУГОЙ:

// let answer = Number(prompt('Are you 18?')); - Number() - метод, который преобразовывает в тип дан.-цифры (ставить прям перед строкой)
// answer = Number(answer)
// console.log(answer);
// console.log(typeof answer);

// console.log(typeof 'Hello');


// const answers = [];
//   answers[0] = prompt('What is your name?', '');
//   answers[1] = prompt('What is your surname?', '');
//   answers[2] = prompt('How old are you?', '');
// document.write(answers);

// console.log(typeof answers);
// console.log(typeof null); - официально признанная ошибка - консоль показывает тип данных-объект


// const type = typeOf 10;
// console.log(type);

// // 8. Интерполяция (ЕS6) - значит, что мы прямо внутри строки можем вставлять значение переменной

// const category = 'toys';
// console.log(`I want my ${category}`);

// const nam = 'Vlada';
// alert(`My name is ${nam}/6`);

// console.log(typeof category);

// // 9. Операторы в JS 
// математические - это +(основной), -, *, /, <, =, >, <=, >=, %(возвращ.остаток от деления двух чисел)
// логические - && (и) когда два или больше правдивых выражений
//              || (или) когда хотя бы один из вариантов правдивый

// строка+строка=строка ("a" + "f" - результат выведет af) 
// строка+цифра=строка ("a" + 5 - результат выведет a5)

// console.log('arr' + ' - object');
// console.log(6 + Number(' - object'));
// console.log(6 + Number('5'));

// let incr = 10,
//     decr = 10; 
// ++incr; 
// --decr;
// console.log(incr++);
// console.log(decr--);

// console.log(++incr);
// console.log(--decr);

// console.log(5%2); - делит на столько раз сколько возможно и возвращ.остаток, в этом примере 1

// console.log(2*4 == 8);
// console.log(2*4 == '8');
// console.log(2*4 === '8');
// console.log(2*4 === 8);

// const isChecked = true,
//       isClose = false;
      
// console.log(isChecked || isClose);     
// console.log(isChecked && isClose);

// const isChecked = false,
// isClose = false;
// console.log(isChecked || !isClose); 

// console.log(2 + 2 * 2 != 6);
// console.log(2 + 2 * 2 != '6');
// console.log(2 + 2 * 2 !== '6');

// // 12. Практика ч.1

// 1. const numberOfFilms = Numbet(prompt ("How many films did you watch?"));
// console.log(numberOfFilms);

// 2. const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [], 
//     privat: false
// };

// 3. const first = prompt ('What film did you watch the last?', '');
// const second = prompt ('-?', '');
// const third = prompt ('What film did you watch the last?', '');
// const fourth = prompt ('-?', '');

// personalMovieDB.movies[first] = second; - записали свойство в обьект (ключ:значение) и также можно менять значение ключа
// personalMovieDB.movies[third] = fourth;

// const five = '5'; - 
// personalMovieDB.movies[third] = five; - изменили значение ключа third, будет писать 5 вместо указаного пользователем ответа
// personalMovieDB.movies.six = five; - создало новый ключ


// console.log(personalMovieDB);
// console.log(personalMovieDB['movies']);


// Проверено на ошибки, правильное решение
// "use strict"

// const numberOfFilms = +prompt ('How many films did you watch?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// const a = prompt ('What last film did you watch?', ''),
//       b = prompt ('How much do you rate it?', ''),
//       c = prompt ('What last film did you watch?', ''),
//       d = prompt ('How much do you rate it?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// // 13. Условия

// if (4 == 9) {
//   console.log('Ok!');
// } else {
//   console.log('Error');
// }


// const num = 5;
//  if (num < 4) {
//      console.log('Error');
// } else if (num > 10) {
//      console.log('Many');
// } else {
//     console.log('Ok!');
// } - чтобы не допускать таких разветвлений использ. switch

// const num = 5;
// (num === 5) ? console.log('Ok!') : console.log('Error'); - тернарный оператор (в его работе учавствует три аргумента 1,2,3)
//  условие(1)   если оно выполн(2)    есл оно не выполн(3) 
// 4 + 4 -бинарный оператор
// +'4'; -унарный оператор

// switch - модификация if, которая поддерживает сразу несколько проверок и условий
// const num = 50;
// switch (num) {
//     case 49:
//         console.log('Error');
//         break;
//     case 100:
//         console.log('Error');
//         break;
//     case 50:
//         console.log('Ok!');
//         break;
//     default:
//         console.log('Not this time');
//         break;
// }

// // ***

// let side = 50px - метод Number.parseInt(side);
// let side = 20.34px - метод Number.parseFloat(side);

// let salary = 30000.45378
// salary = Number(salary.toFixed(2));
// // salary = Number(salary);
// console.log(salary);

// const a = prompt('Enter the number');
// const b = prompt('Enter degree');
// // const c = Math.pow(a, b);
// console.log(a **b);

// const b = prompt('Enter degree');
// const a = prompt('Enter the number') ** b;
// console.log(a);

// const b = prompt('Enter degree');
// const a = Math.pow(prompt('Enter the number'), b);
// console.log(a);

const max = 80;
const min = 10;

const result = Math.random() * (max-min) + min;
console.log(Math.round(1.7));