"use strict";

/*
function removePassword(reset) {
    if (reset) {
        this.password = undefined;
    } else {
        this.password = "1";
    }
}

const user = {
    firstName: "Petr",
    lastName: "Ivanov",
    login: "123us",
    password: "123321"
};

removePassword.bind(user, true);

console.log(user);

*/

// removePassword.call(user, true);
// console.log(user);

// -----------------------------------

// Перепишите функцию, используя оператор '?' или '||'
/*
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }

  function checkAge(age) {
    return ((age >18) ? true : confirm("Родители разрешили?"));
  }

  function checkAge(age) {
    return ((age > 18) || confirm("Родители разрешили?"));
  }
  */

//   -----------------------------------------------------

// Функция min(a, b)
/*
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

/*
function min(a, b) {
    return (a < b) ? a : b; 
}

console.log(min(10,-5));
*/
/*
function min(a, b) {
    if (a < b) {
        return a;
    }

    return b;
}

console.log(min(-10,-5));
*/

// ---------------------------------------------------

// Функция pow(x,n)
// Напишите функцию pow(x,n), которая возвращает x в степени n.

/*
function pow(x, n) {
    let res = x;

    for (let i = 1; i < n; i++ ) {
        res *= x;
    }
    return res;
}

let x = +prompt("Введите число:");
let n = +prompt("Введите степень:");

if (n < 1) {
    alert("Степень должна быть больше 1")
} else {
    console.log(pow(x, n));
}

*/

// ---------------------------------------------------------

/*
function sayHi() {  
    alert( "Привет" );
}
  
let func = sayHi;    
  
func(); 
sayHi();
*/
// -----------------------------------------

/*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "Вы согласны." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

ask("Вы согласны?", showOk, showCancel);
*/

/*

let ask = function(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

let showOk = function () {
  alert( "Вы согласны." );
}

let showCancel = function () {
  alert( "Вы отменили выполнение." );
}

ask("Вы согласны?", showOk, showCancel);

*/

// ---------------------------------------------------

/*

let age = prompt("Сколько Вам лет?", 18);

let welcome = (age < 18) ?
  () => alert('Привет!') :
  () => alert("Здравствуйте!");

welcome();
*/
/*

let age = prompt("Сколько Вам лет?", 18);

let welcome = (age < 18) ?
  alert('Привет!') :
  alert("Здравствуйте!");

welcome();
*/

// -----------------------------------------

// Перепишите с использованием функции-стрелки

/*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/

/*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => { alert("Вы согласились."); },
  () => { alert("Вы отменили выполнение."); }
);

*/

// ------------------------------------------------

/*
Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
*/
/*
const user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
*/

/*
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет 
свойств, иначе false.
*/

/*
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false


function isEmpty(obj) {
  for (let key in obj) {     
    return true;
  }
  return false;
}
*/

// ---------------------------------------------------

// Сумма свойств объекта

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0;

// for (let key in salaries) {
//   sum = sum + salaries[key];  
// }

// console.log(sum);

// ------------------------------------------


// Умножаем все числовые свойства на 2
// Создайте функцию multiplyNumeric(obj), которая умножает все ч
// исловые свойства объекта obj на 2.
// до вызова функции
/*
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};


function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof(menu[key]) === "number") {
      menu[key] *= 2;
    }
  }
}


console.log(menu);
multiplyNumeric(menu);
console.log(menu);

*/

// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// -----------------------------
// Глубокое клонирование рекурсия

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: {
      metr: 0.5,
      centimeters: 50,
    }
  },
  mass: {
    asd: [1, {
      qwer: [1, [1, 2, 3, [1, 2]], 3, {www: 123}],
    }, 3],
  }
};

let user2 = {};

function deepClone(obj, clone) {
  for (let key in obj) {

    if (Array.isArray(obj[key])) {

      let el = 0;
      clone[key] = [];

      for (let key2 of obj[key]) {

        if (typeof(key2) === "object") {
          deepClone(obj[key], clone[key]);

        } else {
          clone[key][el] = obj[key][el];
        }

      }
      el++;

    } else if (typeof(obj[key]) === "object") {

      clone[key] = {};
      deepClone(obj[key], clone[key]);

    } else {

      clone[key] = obj[key];

    }
  }
}


deepClone(user, user2);

console.log(user.mass.asd[1].qwer[3].www);
console.log(user2.mass.asd[1].qwer[3].www);

user.mass.asd[1].qwer[3].www = 15;

console.log(user.mass.asd[1].qwer[3].www);
console.log(user2.mass.asd[1].qwer[3].www);

console.log(user);
console.log(user2);
