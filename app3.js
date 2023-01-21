"use strict";

/*
let user = {
    name: "Вася"
  };
  
let id = Symbol("id");
let id2 = Symbol("id2");
  
user[id] = 1;
user[id2] = 17;
  

console.log(user[id]);
console.log(user[id2]);

console.log(user);

*/

// let id5 = Symbol.for("id5");
// let id = Symbol("id");
// let id2 = Symbol("id3");

// let user = {
//   name: "Вася",
//   age: 30,
//   [id]: 123,
//   [id2]: 789,
// };

// console.log(id);
// console.log(id5);

// console.log(Symbol.keyFor(id));
// console.log(Symbol.keyFor(id5));

// console.log(Object.getOwnPropertySymbols(user));
// console.log(Reflect.ownKeys(user));

// console.log(user);

// console.log(user.toString());
// console.log(user.valueOf());


// // for (let key in user) {
// //   alert(key);
// //   alert(user[key]);
// // } 

// // alert(Symbol.keyFor(id));
// // alert(Symbol.keyFor(id5));
// // alert( "Напрямую: " + user[id] );

// --------------------------------------------------

// let a = +prompt("а?");
// let b = +prompt("b?");

// let sum = a + b;

// alert(sum);
// --------------------------------------------------
function readNumber() {
  let a;

  do {
      a = prompt("Введите число а:");
  } while (!isFinite(a));

  if ((a === null) || (a === "")) {
    return null;
  }
  return +a;

}

console.log(readNumber());

