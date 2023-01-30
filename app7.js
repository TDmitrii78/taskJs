


"use strict";


// class sumArray extends Array {
//     sumArr() {
//       return this.reduce((acc, item) => acc +item);
//     }
//   }
  
//   let arr = new sumArray(25, 7, 8, 11);
  
//   console.log(arr.sumArr()); 
  
  
//   let  newArr = new sumArray();
  
//   newArr.push(1, 22, 5);
  
//   console.log(newArr.sumArr());
  
// ----------------------------------------------------

// class MyTravels {
//     constructor() {
//         this.name = "Dmitriy";
//         this.age = 44;
//         this.Citizenship = "RF";
//         this.IveBeenTo = "Russia";
//         this.location_now = "Russia";
//     }

//     personalData() {
//         return `Hello! \nЯ путешествую) \nМеня зовут: ${this.name}.\nВозраст: ${this.age}, Гражданство: ${this.Citizenship}, Приехал в ${this.location_now} из: ${this.IveBeenTo}`;
//     }

//     get location() {
//         return `Был в ${this.IveBeenTo}, сейчас находитесь в ${this.location_now}`;
//     }

//     set location(country) {
//         this.IveBeenTo = this.location_now;
//         this.location_now = country;
//     }
// }

// class countryObj extends MyTravels {
//     constructor(country, city) {
//         super();
//         this.country = country;
//         this.city = city;

//     }
// }
 
// function dialogYesNo(question, yesNo) {
//     for (;;) {
//         let word = prompt(question, yesNo);
//         if (word === "Да") {
//             return true;
//         } else if (word ==="Нет" || word === null) {
//             return false;
//         } else {
//             alert("Ошибка. Введите корректно Да или Нет(отмена)");
//         }
//     }
// }

// function addCountry() {
//     let str;
//     for (;;) {
//         str = prompt("Введите название страны и города в формате страна/город"); 
//         if ((str != "") && (str != null) && (str.includes("/"))) {
//             break;
//         }
//         alert("Введите в верном формвте");
//     }
//     let [country, city] = str.replaceAll(" ","").split("/");
//     MyTrvls.location = country;
//     visitCountry.list.push(new countryObj(country, city));
// }

// class VisitCountry {
//     constructor(list) {
//         this.list = list
//     }

//     get countCountry() {
//         return this.list.length;
//     }

//     get nameCountry() {
//         return this.list.map((item) =>  item.country + " " + item.city).join(", ");
//     }
// }

// function listVisitCountry() {
//     alert(`Я посетил ${visitCountry.countCountry} страны(у). \nЭто ${visitCountry.nameCountry}.`);
// }

// let MyTrvls = new MyTravels();

// let visitCountry = new VisitCountry([]);

// visitCountry.list.push(new countryObj("Rusia", "Kamensk"));

// let flag;

// for (;;) {

//     alert(MyTrvls.personalData());
//     flag = dialogYesNo(`${MyTrvls.location}. \nПереезжаем или останемся здесь? Да или Нет (отмена)`,"Да");
   
//     if (!flag) {
//         let flag2 = dialogYesNo(`Показать список посещенных стран? Да или Нет (отмена)`,"Да");

//         if (flag2) {
//             listVisitCountry();
//         }
        
//     } else {

//         addCountry(); // Вводим название страны
//         listVisitCountry();
//     }
    
//     if (confirm("Завершить работу?")) {
//         break;
//     }    
// }

// --------------------------------------------------------------------



// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
    
//       alert(this.name);
//     }
  
//   };
  
//   user.sayHi(); 



// ---------------------------------------------

// let str = "Hello";

// // делает то же самое, что и
// // for (let char of str) alert(char);

// let iterator = str[Symbol.iterator]();
// console.log(iterator);

// while (true) {
//   let result = iterator.next();
//   console.log(result);
//   if (result.done) break;
//   alert(result.value); // выводит символы один за другим
// }

// ----------------------------------------------

// let str = "dfdsgsgs";
// console.log(Array.from(str));

// let user = {     // объект
//     name: "John",  // под ключом "name" хранится значение "John"
//     age: 30        // под ключом "age" хранится значение 30
// };

// console.log(Array.from(user));

// let arrayLike = { // есть индексы и свойство length => псевдомассив
//     0: "Hello",
//     1: "World",
//     length: 2
//   };

// console.log(Array.from(arrayLike));

// -------------------------------------------------------

// let recipeMap = new Map([
//     ["огурец", 500],
//     ["помидор", 350],
//     ["лук",    50]
// ]);

// console.log(recipeMap.keys());

// ------------------------------------

// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
//   };
  
//   let json = JSON.stringify(student);
  
//   alert(typeof json); 
  
//   alert(json);

// ------------------------------------

// let dat = new Date();
// let dat2 = new Date(365 * 24 * 3600 * 1000);
// let date = new Date("2017-01-26");


// alert(dat.getTimezoneOffset());

// alert(dat);
// alert(dat2);
// alert(date);

// console.log(dat);
// console.log(dat2);
// console.log(date);

// ----------------------------------------

// let arr = [1, 2, 3, 4, 5];
// let [a, b, ...arr2] = arr;


// console.log(arr);
// console.log(a);
// console.log(b);
// console.log(arr2);
// console.log(...arr2);

// ------------------------------

// function asd() {
//     return function() {
//         alert("hello");
//     };
    
// }

// let asd2 = asd();
// console.log(asd2());
// console.log(asd2());

// function getCount(str) {
//     let arr = ["a", "e", "i", "o", "u"];
//     let res = 0;
//     for (let key of arr) {
//         res += str.split("").reduce((acc, item) => (item === key) ? acc + 1 : acc + 0, 0)
//     }
//     return res;
//   }
     
// console.log(getCount("aaase    fafvakvn"));
 
// ----------------------------------

// function disemvowel(str) {
//     let arr = ["a", "e", "i", "o", "u"];
//     for (let key of arr) {
//         str = str.replaceAll(key,"").replaceAll(key.toUpperCase(),"");
//     }
//     return str;
// }

// console.log(disemvowel("dasAeart fdhdfh  OOO eeerette"));

// --------------------------------------------

// function spinWords(string){
//     return string.split(" ").map(item => (item.length >= 5) ? item.split("").reverse().join("") : item).join(" ");
// }

// console.log(spinWords("Hey fellow warriors"));

// ---------------------------------------------

// function digitalRoot(n) {
//     n = n.toString();
//     if (n.length == 1) {
//         return +n;
//     } else {
//         n = n.split("").reduce((acc, el) => (acc + +el), 0);
//         return digitalRoot(n);
//     }
// }


// console.log(digitalRoot(456));