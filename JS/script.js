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

// const numberOfFilms = Number(prompt ('How many films did you watch?'));

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

// // 1. Modul 1 Webinar 1 JS GoIt

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


// const max = 80;
// const min = 10;
// const result = Math.random() * (max-min) + min;
// const resultTwo = Math.round(Math.random() * (max-min) + min);

// console.log(Math.round(1.7)); - округляет више 5

// const x = 'Sergey';
// const y = 'Vlada';
// const z = 'Taor Carpathians'
// const q = 23;
// const w = `Гость ${x} и ${y} поселяются в ${z} номер ${q}`;
// console.log(w);

// let q = 'HuaWei';
// q = q.toLowerCase(); - нижний регистр
// .toUpperCase() - верхний регистр
// console.log(q);

// let q = 'SamSUnG';
// console.log(q[4]);
// console.log(q.slice(1).toLowerCase()); 

// q = q[0] + q.slice(1).toLowerCase()
// console.log(q);

// const q = 'спам';
// const w = 'распродажа';
// const a = 'Привет, это не спам';
// const s = 'Привет сегодня РАСПРОДАЖА приходи';

// console.log(a.includes(q));
// console.log(a.includes(w));
// console.log(s.includes(q));
// console.log(s.includes(w));

// const aa = s.toLowerCase();
// console.log(aa.includes(w)); или console.log(s.toLowerCase().includes(w))

// Приведене к булю Boolean(value)

// const x1 = 10;
// const x2 = 30;
// const number = 50;

// console.log(`Число ${number} попадает в отрезок после ${x1}?`, number < x1);
// console.log(`Число ${number} попадает в отрезок после ${x2}?`, number > x2);
// console.log(`Число ${number} попадает в отрезок oт ${x1} до ${x2}?`, number === number > x1 && number < x2);

// const a =  number > x1 && number < x2;
// То как читает интерпритатор:
// 50>10 && 50<30
// true && false
// false

// console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}?`,  number < x1 || number > x2);

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можно открыть чам?', canOpenChat);

// const firstSubscription = 'pro';
// const secondSubscription = 'vip';

// const canAccessContent = firstSubscription === 'pro' || firstSubscription === 'vip';
// const canAccessContent1 = secondSubscription === 'pro' || secondSubscription === 'vip';
// console.log('Есть доступ к контенту?', canAccessContent);
// console.log('Есть доступ к контенту?', canAccessContent1);

// const balance = 1000;
// const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

// console.log(message);

// const b = 10;

// it (true) {
//     console.log(b);
//     const a = 5;
//     console.log(a);
// }
// console.log(a);
// console.log(b);

// let balance = 10000;
// const payment = 20000;

// alert (`Oбщая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счету`);

// if (payment <= balance) {
//     const a = balance - payment;
//     alert(`На счету осталось ${a} кредитов`);
//     alert('Все хорошо, снимаем деньги ... Спасибо за покупку!');
// } else  {
//     alert('На счету недостаточно средств для проведения операции');
//     alert('Операция завершена');
// }

// // 14. Циклы

// let num = 50;
// while (num < 55) {      - читается: Пока наше условие не віполнено, віполняй следующие действия 
//     console.log(num);   - while () - читается: пока наше условие выполняется, выполняй следующее действия
//     num +=1;
// }

// let num = 50;
// do {                    - читается: сначала сделай что-то, а потом проверь условие и віходи из цикла если нужно
//     console.log(num);
//     num +=1;
// } 
// while (num < 55);

// for (let i = 1; i < 8; i += 1) {
//     console.log(i);
// }

// for (let i = 1; i < 10; i += 1) {
//     if (i === 6){
//         break;
//     }
//     console.log(i);
// }

// // 2. Modul 1 Webinar 2 JS GoIt

const stars = 1;
let price;

switch (stars) {
    case 1: 
      price = 20;
    break;   
}


 //     case 2: price = 30;
//     break;
//     case 3: price = 50;
//     break;
//     case 4: price = 70;
//     break;
//     case 5: price = 120;
//     break;
//     default: console.log('Такого количества звезд нет');
// }

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log ('Такого количества звeзд нет');
// }
//   console.log(price);