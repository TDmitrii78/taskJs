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

