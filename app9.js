"use strict";

// function productFib(prod){
//     let arrayFib = [0, 1];
//     for (let i = 0; i < prod; i++) {
//         let res = arrayFib.reduce((acc, el, index, arr) => {
//             acc += el;
//             arr[0] = arr[1];
//             arr[1] = acc;
//             return acc;
//         })
//         if (res === prod) {
//             arrayFib.push(true);
//             return arrayFib;
//         }
//         if (res > prod) {
//             arrayFib.push(false);
//             return arrayFib;
//         }
//     }
// }

// console.log(productFib(832040));

// ----------------------------------------------------------------

// function incrementString (strng) {
//     let strArr = [];
//     let strngArr = strng.split("");
//     for (let i = strngArr.length - 1; i >= 0; i--) {
//         if (isFinite(strngArr[i])) {
//             strArr.push(strngArr.splice([i], 1)[0]);
//         } else {
//             break;
//         }
//     }
//     let res = (+strArr.reverse().join("")+1).toString();
//     let rep = strArr.length - res.length;
//     if (rep <= 0) {
//         rep = 0;
//     }
//     return strngArr.join("") + "0".repeat(rep) + res
// }

// console.log(incrementString("foobar001"));

// --------------------------------------------------------

// function solution(number){
//     if (number <= 0) {
//         return 0;
//     }
//     let arr = [];
//     let five = Math.floor(number / 5); 
//     if (!(number % 5)) {
//         five = five - 1;
//     } 
//     let three = Math.floor(number / 3); 
//     if (!(number % 3)) {
//         three = three - 1;
//     } 
//     for (let i = 1; i <= five; i++) {
//         arr.push(5 * i);
//     }  
//     for (let i = 1; i <= three; i++) {
//         arr.push(3 * i);
//     }
//     let numSet = new Set(arr);
//     arr=[];
//     numSet.forEach(el => arr.push(el));
//     return arr.reduce((acc, el) => acc + el, 0);
// }

// function solution(number){
//     var sum = 0;
//     for (var i = 3; i < number; i++) {
//       if (i % 3 == 0 || i % 5 == 0) {

//         sum += i;
//         console.log(sum);
//       }
//     }
//     return sum;
//   }

// console.log(solution(10));

// ------------------------------------------------------------

// fetch(`https://api.github.com/users/TDmitrii78`)
// .then(response => response.json())
// .then(githubUser => {
//   let img = document.createElement('img');
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);
// })
// .catch(error => console.log("error"));

// -------------------------------------------------------------

// function digPow(n, p){
//   let arr =[];
//   if (n < 9) {
//     arr.push(n.toString());
//   } else {
//     arr = n.toString().split("");
//   }
//   let res = arr.reduce((acc, el, index, arr) => acc + el ** (p + index), 0);
//   if ((res < 1) || (res % n)) {
//     return -1;
//   }
//   res = res/n;
//   return res;
// }

// console.log(digPow(-4, 3));

// --------------------------------------------------------------

// function isPangram(string) {

//   let stringSet = new Set(string.toLowerCase().split("").filter(el => {
//     if ((el.codePointAt(0) >= 97) && (el.codePointAt(0) <= 122)) {
//       return true;
//     }
//     return false;
//   }));
//   if (stringSet.size === 26) {
//     return true;
//   }
//   return false;
// }
// console.log(isPangram("The quick brown fox jumps over the lazy dog."));

// -------------------------------------------------------------------

// document.body.style.background = 'red'; // сделать фон красным

// setTimeout(() => document.body.style.background = '', 3000);
// 
// ------------------------------------------------------------

// let promise = new Promise(function(resolve, reject) {
 
//     setTimeout(() => resolve("Its OK"), 1000);
// })
// .then(result2 => console.log(result2));

// console.log(promise);


// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//   .then(response => response.json())
//   .then(commits => console.log(commits));


// fetch('https://jsonplaceholder.typicode.com/posts/1')

// .then(response => console.log(response.blob()));


fetch('https://avatars.githubusercontent.com/u/118843499?v=4')
.then(response => response.blob)
.then(pict => {
let img = document.createElement('img')
img.style = 'position:fixed;top:10px;left:10px;width:100px';
document.body.append(img);

img.src = pict;
  setTimeout(() => { 
  img.remove();
  URL
 }, 3000
)
})
.catch(error => console.log("error"));
