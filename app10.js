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


// -------------------------------------------------

// fetch("https://earthquake.usgs.gov/fdsnws/event/1/")
// .then(response => {
//   console.log(response);
// })

// // -------------------------------------------------


// Для каждого пункта:

// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).

// Все элементы должны создаваться динамически.

// for (;;) {
//   let str = prompt("Введите значение");
//   if (!str) {
//     break;
//   }
//   const li = document.createElement("li");
//   li.textContent= str
//   const ul = document.querySelector("ul");
//   ul.append(li);
// }

// ------------------------------------------------------------

function arraysSimilar(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.sort()[i] !== arr2.sort()[i]) {
      return false;
    }
  }
  return true;
}

const arr3 = [1, 2, 2, 3, 4],
arr4 = [2, 1, 2, 4, 3],
arr1 = [1, 2, 3, 4],
arr2 = [1, 2, 3, "4"]

console.log(arraysSimilar(arr1, arr2));