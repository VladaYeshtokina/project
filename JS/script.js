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

// console.log(obj.name); // способ вывода значения ключа обьекта
// console.log(obj['name']); // способ вывода значения ключа обьекта

//          // 0            1           2   3  4   - заданные по умолчанию ключи как у обьекта
// let arr = ['plum.png', 'orange.jpg', 6, {}, []]; // у массива порядковый номер наинается с 0
// console.log(arr[1]);

// // 7. Простое общение с пользователем

// alert('Hello'); - команда, используется чтобы предупредить пользователя о чем-то важном (в модальном окне) 

// const result = confirm('Are you here?'); - команда, когда есть 2 варианта ответа
// console.log(result); - в переменной отодражаеться результат дейсвий польз. в виде типа данных Boolean:true/false

// const answer = prompt('Are you 18?', '18'); - когда нужет свободный ответ от пользователя
//                           вопрос   , пишем default значение(значение по умолчанию), placeholder или оставляем пустые кавычки 

// console.log(typeof(answer)); - ответ, который напишет пользователь будет отображаться в консоле, то есть в переменной answer лежит ответ-значение в виде строки
//                              - чтобы не ответил пользователь данные будут в виде типа данных - строки
//             (typeof(...)) - спец.оператор при помощи которого можно проверить на типы данных

//  !!!!!! ВСЯ ИНФО ПРИХОДЯЩАЯ ОТ ПОЛЬЗОВАТЕЛЯ - В ВИДЕ СТРОК ВНЕ ЗАВИСИМОСТИ ОТ ТОГО КАК МЫ ЕЕ ПОЛУЧИЛИ
//         НО С ПОМОЩИ НЕКОТОРЫХ ОПЕРАЦИЙ МОЖНО ПРЕОБРАЗОВОВАТЬ ОДИН ТИП ДАННЫХ В ДРУГОЙ:

// const answer = +prompt('Are you 18?', '18'); - +преобразовывает данные в тип данных - цифры

// const answer = prompt('Are you 18?', '18');
// console.log(answer + 5); 

// const answers = [];
//   answers[0] = prompt('What is your name?', '');
//   answers[1] = prompt('What is your surname?', '');
//   answers[2] = prompt('How old are you?', '');
// document.write(answers);

// console.log(typeof(answers));
// console.log(typeof(null)); - официально признанная ошибка - консоль показывает тип данных-объект


// // 8. Интерполяция (ЕS6) - значит, что мы прямо внутри строки можем вставлять значение переменной

const category = 'toys';
console.log(`I want my ${category}`);

const nam = 'Vlada';
alert(`My name is ${nam}/6`);

console.log(typeof category);