// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(script);
//     document.head.append(script);
//   }
  
//   loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//     alert(`Здорово, скрипт ${script.src} загрузился`);
//     alert( _ ); 
//   }
//   -----------------------------------------------

// let promise = new Promise(function(resolve, reject) {
//   alert("123");
//   setTimeout(() => resolve("done"), 1000);
// });

// let myPromise = new Promise((resolve, reject) => {
//     //resolve("Done");
//     reject("Error");
// })

// myPromise
//     .then(value => alert("done"))
//     .catch(error => alert("Error"))

// console.log(myPromise);

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => {
//     console.log(response);
//     return response.json()})
//   .then((json) => console.log(json));


// ------------------------------------

// function findEvenIndex(arr) {
//   if (arr.length < 3) {
//     return -1;
//   }
//   for (let i = 1; i < arr.length - 2; i++) {
//     let arrLeft = [];
//     let arrRight = [];
//     arr.forEach((element, index) => {
//       if (index < i) {
//         arrLeft.push(arr[index]);
//       }
//       if (index > i) {
//         arrRight.push(arr[index]);
//       }
//     });
//     if (arrLeft.reduce((acc, el) => acc + el, 0) === arrRight.reduce((acc, el) => acc + el, 0)) {
//       return i;
//     }
//   }
//   return -1;
// }

// //console.log(findEvenIndex([20,10,-80,10,10,15,35]));
// console.log(findEvenIndex([1,2,3,4,3,2,1]));
// console.log(findEvenIndex([1,100,50,-51,1,1]));
// console.log(findEvenIndex([1,2,3,4,5,6]));
// console.log(findEvenIndex([20,10,30,10,10,15,35]));

// --------------------------------------------------

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => response.json())
// .then(json => console.log(json.body))

// ---------------------------------------------------

// function XO(str) {
//     let resX = 0;
//     let resO = 0;
//     str = str
//     .toLowerCase()
//     .split("")
//     .forEach(el => {
//         if (el === "x") {
//             ++resX;
//         }
//         if (el === "o") {
//             ++resO;
//         }
//     })
//     if ((resX === resO)  || ((!resX) && (!resO))){
//         return true;
//     }
//     return false;
// }

// console.log(XO('xo'));    //,true);
// console.log(XO("xxOo"));  //,true);
// console.log(XO("xxxm"));  //,false);
// console.log(XO("Oo"));    //,false);
// console.log(XO("ooom"));  //,false);

// ---------------------------------------------------

// String.prototype.toJadenCase = function (str) {
//     return str.split(" ").map(el => el[0].toUpperCase() + el.slice(1)).join(" ");
//   };

//   var str = "How can mirrors be real if our eyes aren't real";

//   console.log(String.prototype.toJadenCase(str));

// -------------------------------------------------------------

// fetch('https://jsonplaceholder.typicode.com/posts/')
// .then(response => response.json())
// .then(json => {for (let i = 0; i < json.length; i++) {
//      console.log(json[i].body) 
// }})
// .catch(error => console.log(error));

// --------------------------------------------------------------

// function DNAStrand(dna) {
//     let arrRes = dna.split("");
//     arrRes.forEach((el, index, arr) => {
//         let res;
//         switch(el) {
//             case "T": 
//                 res = "A";
//                 break;
//             case "A":
//                 res = "T";
//                 break;
//             case "C":
//                 res = "G";
//                 break;
//             case "G":
//                 res = "C";
//                 break;
//         }
//         arr[index] = res;   
//     })
//     return arrRes.join("");
// }


// console.log(DNAStrand("AAAA")); //,"TTTT","String AAAA is")
// console.log(DNAStrand("ATTGC")); //,"TAACG","String ATTGC is")
// console.log(DNAStrand("GTAT")); //,"CATA","String GTAT is")  

// -----------------------------------------------

// function longest(s1, s2) {
//    s1 = s1 + s2;
//    let strSet = new Set(s1.split("").sort());
//    return Array.from(strSet).join("");;
// }

// console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));

// -------------------------------------------------

// function getSum(a, b) {
//     let arr = [];
//     let a1;
//     let b1;
//     if (a <= b) {
//         a1 = a;
//         b1 = b;
//     } else {
//         a1 = b;
//         b1 = a;
//     }
//     for (let i = a1; i <= b1; i++) {
//         arr.push(i);
//     }
//     return arr.reduce((acc, el) => acc + el, 0);
// }

// console.log(getSum(1, 0));
// console.log(getSum(1, 2));
// console.log(getSum(0, 1));
// console.log(getSum(1, 1));
// console.log(getSum(-1, 0));
// console.log(getSum(-1, 2));

// console.log(getSum(5, -1));

// ------------------------------------------------

// function friend(friends){
//     return friends.filter(el => (el.length === 4) && !(isFinite(el)));
// }

// console.log(friend(["Omar", "Rachel", "Jam", "Bruce", "Boris", "Ryan", "Arnold", "Lisa", "Claire", "Tim", "Alex", "Bart", "Ivan"]),);

// --------------------------------------------------

// function printerError(s) {
//   return `${s.split("").filter(el => ((el < "a") || (el > "m"))).length}/${s.length}`;   
// }

// console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));

// --------------------------------------------------

// function openOrSenior(data){
//   return data.map(el => ((el[0] >= 55) && (el[1] > 7)) ? "Senior" : "Open");
// }

// ---------------------------------------------------

// function towerBuilder(nFloors) {
//   let arr = [];
//   let num = 1;
//   for (let i = 0; i < nFloors; i++) {
//     arr.push("*".repeat(num));
//     num += 2;
//   }
//   arr = arr.reverse().map((el, index) => {
//     return (" ".repeat(index) + el + " ".repeat(index));
//   }).reverse();
//   return arr;
// }

// console.log(towerBuilder(5));

// -------------------------------------

// function high(x) {
//   return x.split(" ")
//   .sort((a, b) => b.split("").reduce((acc, el) => acc + el.codePointAt(0) - 96, 0) - a.split("").reduce((acc, el) => acc + el.codePointAt(0) - 96, 0))[0];
// }

// console.log(high('man i need a taxi up to ubud'));
// console.log(high('what time are we climbing up the volcano'));

// ---------------------------------------
// const promise = new Promise((resolve, reject) => {
//   resolve(15)
// })
// .then(item => item = 17)
// .then(el => {
//   el = 1978;
//   console.log(promise.state)
// })

// ---------------------------------------

// function generateHashtag(str) {
//   if ((str === "") || (str.length >= 140)) {
//     return false;
//   }
//   console.log(str.length);
//   return "#" + str.trim().split(" ").map(el => el[0].toUpperCase() + el.slice(1)).join("");
// }

// console.log(generateHashtag("code" + " ".repeat(140) + "ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));

// ---------------------------------------

// fetch('/article/promise-chaining/user.json')
//   .then(response => response.json())
//   .then(user => fetch(`https://api.github.com/users/${user.name}`))
//   .then(response => response.json())
//   .then(githubUser => new Promise((resolve, reject) => {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => {
//       img.remove();
//       resolve(githubUser);
//     }, 3000);
//   }))
//   .catch(error => alert(error.message));

// -----------------------------------------

// async function asd() { 
//   let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
//   let response = await fetch(url);
//   console.log(response.headers);
//   for (let [key, value] of response.headers) {
//     console.log(`${key} ${value}`);
//   }
//   let commits = await response.json(); 
//   alert(commits[0].author.login);
// }

// console.log(asd());

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// let formData = new FormData();
// formData.append('key1', 'value1');
// formData.append('key2', 'value2');

// // Список пар ключ/значение
// for(let [name, value] of formData) {
//   alert(`${name} = ${value}`); // key1=value1, потом key2=value2
// }

// console.log(formData);


// // -------------------------------------------------

// // fetch("https://earthquake.usgs.gov/fdsnws/event/1/")
// // .then(response => {
// //   console.log(response);
// // })

// // // -------------------------------------------------


// // Для каждого пункта:

// // Запрашивайте содержимое пункта у пользователя с помощью prompt.
// // Создавайте элемент <li> и добавляйте его к <ul>.
// // Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).

// // Все элементы должны создаваться динамически.

// // for (;;) {
// //   let str = prompt("Введите значение");
// //   if (!str) {
// //     break;
// //   }
// //   const li = document.createElement("li");
// //   li.textContent= str
// //   const ul = document.querySelector("ul");
// //   ul.append(li);
// // }

// // ------------------------------------------------------------

// function arraysSimilar(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1.sort()[i] !== arr2.sort()[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// const arr3 = [1, 2, 2, 3, 4],
// arr4 = [2, 1, 2, 4, 3],
// arr1 = [1, 2, 3, 4],
// arr2 = [1, 2, 3, "4"]

// console.log(arraysSimilar(arr1, arr2));

// console.log(document.documentElement.clientWidth);

// -----------------------------------------------
// Дочерние элементы в DOM
// важность: 5

// Для страницы:

// <html>
// <body>
//   <div>Пользователи:</div>
//   <ul>
//     <li>Джон</li>
//     <li>Пит</li>
//   </ul>
// </body>
// </html>

// Напишите код, как получить…

//     элемент <div>?
//     <ul>?
//     второй <li> (с именем Пит)?

// const div = document.querySelector("div");
// const div = document.body.firstElementChild;
// const div = document.body.childNodes[1];
// const div = document.body.children[0];
// console.log(div);
// 

// ---------------------------------------------------------

// Вот документ с таблицей и формой.

// Как найти?…

//     Таблицу с id="age-table".
//     Все элементы label внутри этой таблицы (их три).
//     Первый td в этой таблице (со словом «Age»).
//     Форму form с именем name="search".
//     Первый input в этой форме.
//     Последний input в этой форме.

// Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.

// 1)
// console.log(document.getElementById('age-table'));
// console.log(document.querySelector('#age-table'));

// 2)
// console.log(document.getElementById('age-table').querySelectorAll("label"));
// console.log(document.querySelector('#age-table').querySelectorAll("label"));

// 3)
// console.log(document.querySelector('#age-table').querySelector("td"));

// 4)
// console.log(document.querySelector('form'));
// console.log(document.querySelectorAll('form')[0]);
// console.log(document.body.children[0]);

// --------------------------------------------------------------

// function missingWord(nums, str) {
//     nums = nums.sort((a, b) => a - b);
//     if (nums.at(-1) > str.length - 1) {
//         return "No mission today";
//     };
//     let arrStr = str.replaceAll(" ","").split("");
//     let res = [];
//     for (let key of nums) {
//       res.push(arrStr[key]);
//     }
//     return res.join("").toLowerCase();
//   }

//   console.log(missingWord([5, 0, 3], "I love you"));
//   console.log(missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog"));
//   console.log(missingWord([12, 4, 6], "Good Morning"));

// --------------------------------------------------------------

// function cyclops(n) {
//     n = n.toString(2);
//     let index = n.indexOf("0");
//     let indexLast = n.lastIndexOf("0");
//     if ((index !== indexLast) || (index === -1) || !(n % 2)){
//         return false;
//     }
//     if (Math.ceil(n.length/2 - 1) === index) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(cyclops(549755289598));

// console.log(cyclops(1));
// console.log(cyclops(5));
// console.log(cyclops(3));
// console.log(cyclops(13));
// console.log(cyclops(23));
// console.log(cyclops(27));
// console.log(cyclops(2015));
// console.log(cyclops(666));
// console.log(cyclops(42));

// ------------------------------------------------

// function sayHi() {
//   alert(this.name);
// }

// let user = { name: "John" };
// let admin = { name: "Admin" , 
//                 sHi() {
//                 alert(this.name)
//             } };

//используем 'call' для передачи различных объектов в качестве 'this'
//sayHi.call( user ); // John
//sayHi.call( admin ); // Admin

//console.log(user.name);

//admin.sHi.call(user);
//sayHi.call(user);
//let asd = admin.sHi;
//asd.call(user);
//admin.sHi.call(this);
//sayHi.call(user);

// --------------------------------------

// let user = {
//     firstName: "Вася",
//     sayHi() {
//       alert(`Привет, ${this.firstName}!`);
//     }
//   };
  
//   setTimeout(user.sayHi.call(user), 1000); // Привет, undefined!

// ---------------------------------------

// let user = {
//     //_name: "John",
//     get name() {console.log("1")},
//     set name(value) {console.log("2")}
//   };

  
//   let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  
//   console.log(descriptor);
//   arr = [];
//   console.log(user.__proto__);

// ------------------------------------------

// let user = {}

// function test() {
//     console.log("test");
// }

// console.log(user.__proto__);
// console.log(user.prototype);
// console.log(test.__proto__);

// ----------------------------------------------

// function countZeros(n) {
//     let begin;
//     if (n % 2) {
//         begin = 1;
//     } else {
//         begin = 2
//     }
//     let res = 1n;
//     for (let i = begin; i <= n; i += 2) {
//         res *= BigInt(i);
//     }
//     res = res.toString()
//     let zero = 0;
//     for (let i = res.length - 1; i >= 0; i-- ) {
//         if (res[i] === "0") {
//             ++zero; 
//         } else {
//             return zero;
//         }
//     }
// }

// console.log(countZeros(30));

// -------------------------------------------------

// function chessBoard(rows, columns) {
//     let arrRes = [];
//     let sign = "O";
//     for (let i = 0; i < rows; i++) { 
//         let arr = [];
//         for (let j = 0; j < columns; j++) {
//             arr.push(sign);
//             if (j !== columns - 1) {
//                 (sign === "X") ? sign = "O" : sign = "X";
//             }
//         }
//         arrRes.push(arr);
//         (arr[0] === "X") ? sign = "O" : sign = "X";
//     }
//     return arrRes;
// }

// console.dir(chessBoard(8, 4));

// -------------------------------------------------

// function largest(n, array) {
//     return array.sort((a, b) => b - a).filter((el, i) => {
//         if (i < n) {
//             return true;
//         }
//         return false;
//     }).reverse();
// }

// console.log(largest(2, [7,6,5,4,3,2,1]));

// --------------------------------------------------

// function geometricSequenceElements(a, r, n){
//     let str = [];
//     for (let i = 0; i < n; i++) {
//         str.push(a);
//         a = a * r;
//     }
//     return str.join(", ");
//   }

//   console.log(geometricSequenceElements(2, 3, 5));

// ---------------------------------------------------

// function solve(s){
//     let lCase = 0;
//     let uCase = 0;
//     for (let i = 0; i < s.length; i++) {
//         if ((s.codePointAt(i) >= 65) && (s.codePointAt(i) <= 90)) {
//             uCase++;
//         }
//         if ((s.codePointAt(i) >= 97) && (s.codePointAt(i) <= 122)) {
//             lCase++;
//         }
//     }
//     if (uCase > lCase) {
//         return s.toUpperCase();
//     }
//     return s.toLowerCase();
// }

// console.log(solve("Code"));

// ----------------------------------------------------

// function sumNoDuplicates(numList) {
//      return numList.filter((el, index, arr) => {
//         return (arr.indexOf(el) === (arr.lastIndexOf(el))) ? true : false;
//     }).reduce((acc, el) => acc + el, 0);
// }
// console.log(sumNoDuplicates([0, 10, 8, 9, 7, 3, 3, 9, 3, 6, 0]));

// ------------------------------------------------------

// const removeConsecutiveDuplicates = s => { return s.split(" ")
// .filter((el, index, arr) => {
//     if (el === arr[index + 1]) {
//         return false;
//     }
//     return true;
// }).join(" ")}

// console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));

// ------------------------------------------------------

// function capitalize(s,arr) {
//     s = s.split("");
//     arr.forEach(el => {
//         if (el <= s.length - 1) {
//             s[el] = s[el].toUpperCase();
//         }
//     });
//     return s.join("");
//   };
// console.log(capitalize("codewars",[1,3,5,50]));
// console.log(capitalize("abcdef",[1,2,5]));  //,'aBCdeF')

// ------------------------------------------------------

const button = document.querySelector("#test");
button.onmousedown = e => console.log(event);

const input = document.querySelector("#inp");

input.addEventListener("keydown", event => console.log(event));

const img = document.querySelector("#pic");




pic.addEventListener("pointerdown", event => { 

    pic.style.position = 'absolute';
    pic.style.zIndex = 1000;

    document.body.append(pic);

    function handler(event) {
        pic.style.left = event.pageX - pic.offsetWidth / 2 + 'px';
        pic.style.top = event.pageY - pic.offsetHeight / 2 + 'px';      
    }

    document.addEventListener('pointermove', handler);

    function delListner() {
        document.removeEventListener('pointermove', handler);
    }

    pic.addEventListener("pointerup", delListner);
})
