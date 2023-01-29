"use strict";

// Создать расширяемый калькулятор
// важность: 5

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// function Calculator() {

//     this.methods = {
//         "+": (a, b) => a + b,
//         "-": (a, b) => a - b,
//     };

//     this.addMethod = function(key, fnc) {
//         this.methods[key] = fnc;
//     }

//     this.calculate = function(str) {
//         [this.a, this.sign, this.b] = str.split(" ");
//         if (this.methods[`${this.sign}`] && !isNaN(this.a) && !isNaN(this.b)) {
//             return this.methods[`${this.sign}`](+this.a, +this.b);

//         } else {
//             console.log("Недопустимая операция или отсутствует метод.");
//             return NaN;
//         }
//     }
// }


// let calc = new Calculator;



// calc.addMethod("*", (a, b) => a * b);
// calc.addMethod("/", (a, b) => a / b);
// calc.addMethod("**", (a, b) => a ** b);

// console.log(calc);
// console.log(calc.calculate("787 / 8"));
// console.log(calc.calculate("78 ** 8"));


// ------------------------------------------------------------

// Трансформировать в массив имён
// важность: 5

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который 
// преобразует их в массив имён.

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// alert( names ); // Вася, Петя, Маша

// --------------------------------------------------------------

// Трансформировать в объекты
// важность: 5

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, 

// где fullName – состоит из name и surname.

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(item => ({
//     fullName: `${item.name}  ${item.surname}`, 
//     id: item.id
// }));

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// alert( usersMapped[0].id ); // 1
// alert( usersMapped[0].fullName ); // Вася Пупкин

// alert( usersMapped[1].id ); 
// alert( usersMapped[1].fullName ); 

// alert( usersMapped[2].id ); 
// alert( usersMapped[2].fullName ); 

// ---------------------------------------------------------

// Отсортировать пользователей по возрасту
// важность: 5

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством 
// age и сортирует их по нему.

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// function sortByAge(users) {
//     arr.sort((a, b) => a.age - b.age);
// }

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// --------------------------------------------------------------------

// Перемешайте массив
// важность: 3

// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) 
// элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. 

// let arr = [1, 2, 3];


// function shuffle(arr) {
//     let size = arr.length
//     for (let i = 0; i <= size - 1; i++) {
//         let index = Math.floor(Math.random()*(arr.length - 0));
//         let [res] = arr.splice(i, 1);
//         arr.splice(index, 0, res);
//     }
// }



// let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '321': 0,
//     '312': 0
//   };

//   for (let i = 0; i < 1000000; i++) {
//     let array = [1, 2, 3];
//     shuffle(array);
//     count[array.join('')]++;
//   }

//   // показать количество всех возможных вариантов
//   for (let key in count) {
//     console.log(`${key}: ${count[key]}`);
//   }

// // // arr = [3, 2, 1]

// // shuffle(arr);
// // // arr = [2, 1, 3]

// // shuffle(arr);
// // // arr = [3, 1, 2]

// -----------------------------------------------------

// Получить средний возраст
// важность: 4

// Напишите функцию getAverageAge(users), которая принимает массив объектов 
// со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// function getAverageAge(users) {
//     let res;
//     return res = users.reduce((acc, value) => acc + value.age, 0)/users.length;
// }

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// ---------------------------------------------------------

// Оставить уникальные элементы массива
// важность: 4

// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий 
// только уникальные элементы arr.

// function unique(arr) {
//   for (let key of arr) {
//     if (!uniqueValues.includes(key)) {
//       uniqueValues.push(key);
//     }
//   }
//   return uniqueValues;
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// let uniqueValues = [];


// alert( unique(values) ); // Hare,Krishna,:-O

// ------------------------------------------------------

// Создайте объект с ключами из массива
// важность: 4

// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа 
// и элементами массива в качестве значений.

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];


// function groupById(array) {
//   return array.reduce((acc, value) => {
//   acc[value.id] = value;
//   return acc;
//   }, {})
//   }

// let usersById = groupById(users);

// console.log(usersById);

/*
// после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// --------------------------------

// Фильтрация уникальных элементов массива
// важность: 5

// Допустим, у нас есть массив arr.

// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся 
// значений массива arr.

// function unique(arr) {
//   return Array.from(new Set(arr));
// }


// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); // Hare,Krishna,:-

// --------------------------------------------------

// Отфильтруйте анаграммы
// важность: 4

// Анаграммы – это слова, у которых те же буквы в том же количестве, 
// но они располагаются в другом порядке.

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr) {
//   let setWard = new Set();
//   for (let key of arr) {
//     (setWard.add(key.toLowerCase().split("").sort().join("")));
//   }
//   return Array.from(setWard);
// }

// function aclean(arr) {
//   let newObj = {};
//   for (let key of arr) {
//     let word = key.toLowerCase().split("").sort().join("");
//     newObj[word] = key;
//   }
//   let arr2 =[];
//   return Object.values(newObj);
// }

// console.log(aclean(arr));
// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

// -------------------------------------------------------

// Перебираемые ключи
// важность: 5

// Мы хотели бы получить массив ключей map.keys() в переменную и далее
//  работать с ними, например, применить метод .push.

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());


// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");

// console.log(keys);

// ------------------------------------------------
// Хранение отметок "не прочитано"
// важность: 5

// Есть массив сообщений:

// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"}
// ];

// let weakM = new WeakSet();

// weakM.add(messages[0]);
// weakM.add(messages[1]);
// weakM.add(messages[0]);

// console.log(weakM.has(messages[0]));

// ------------------------------------------
  
// Хранение времени прочтения
// важность: 5

// Есть массив сообщений такой же, как и в предыдущем задании.

// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" }
// ];

// let weakM = new WeakMap();

// let obj0 = messages[0];

// weakM.set(messages[0], new Date(2017, 1, 1));
// weakM.set(messages[2], new Date(2017, 1, 1));
// weakM.set(obj0, new Date(2017, 10, 10));

// console.log(weakM.get(messages[0]));
// console.log(weakM.get(messages[2]));
// console.log(weakM.get(obj0));

// ------------------------------------------------

// Сумма свойств объекта
// важность: 5

// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью 

// метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// // function sumSalaries(salaries) {
// //   let sum = 0;
// //   for (let key of Object.values(salaries)) {
// //     sum += key;
// //   }
// //   return sum;
// // }

// function sumSalaries(salaries) {
//   return Object.values(salaries).reduce((acc, value) => acc + value, 0);
// }

// alert( sumSalaries(salaries) ); // 650

// --------------------------------------------------

// // Подсчёт количества свойств объекта
// // важность: 5

// // Напишите функцию count(obj), которая возвращает количество свойств объекта:

// let user = {
//   name: 'John',
//   age: 30
// };

// function count(eser) {
//  return Object.keys(user).length;
// }

// alert( count(user) ); // 2

// -----------------------------------------------

// // Деструктурирующее присваивание
// // важность: 5

// // У нас есть объект:

// let user = {
//   name: "John",
//   years: 30
// };

// let {name, years: age, isAdmin = false} = user;

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// -----------------------------------------------------

// Максимальная зарплата
// важность: 5

// У нас есть объект salaries с зарплатами:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// function opSalary(salaries) {
//   let keyRes = null;
//   let valRes = 0;
//   for (let [key, value] of Object.entries(salaries)) {
//     if (value > valRes) {
//       keyRes = key;
//       valRes = value;
//     }
//   }
//   return [keyRes, valRes];
// }

// console.log(opSalary(salaries));

// --------------------------------------------------------

// Вычислить сумму чисел до данного
// важность: 5

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// function sumTo(n) { 
//   if (n <= 1) {
//     return n;
//   } else {
//     return n+sumTo(n-1);
//   }
// }

// alert( sumTo(100) ); // 5050

// ----------------------------------------------------------

// Вычислить факториал
// важность: 4

// Факториал натурального числа – это число, умноженное на "себя минус один", 
// затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

// function factorial(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return n*factorial(n-1);
//   }
// }

// alert( factorial(5) ); // 120

// ---------------------------------------------------------

// Числа Фибоначчи
// важность: 5

// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, 

// следующее число получается как сумма двух предыдущих.

// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) 

// и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// function fib(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return n = fib(n -1) + fib(n - 2);
//   }
// }
// alert(fib(1)); // 
// alert(fib(2)); // 
// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(20)); // 
// // alert(fib(77)); // 5527939700884757

// ---------------------------------------------------------



