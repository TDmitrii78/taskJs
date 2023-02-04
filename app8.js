"use strict";

// function findOutlier(integers){
//     let Even = [];
//     let Odd = [];
//     integers.forEach((el) => (el % 2) ? Odd.push(el) : Even.push(el));
//     if (Even.length < Odd.length) {
//       return Even[0];
//     }
//     return Odd[0];
//   }

//   console.log( findOutlier([1, 3, 5, 7, 4]));

//   ----------------------------------------------------------------

// function validParentheses(parens) {
//     let flag = 0;
//     for (let value of parens) {
//         if (value === `(`) {
//             flag++
//         } 
//         if (value === `)`) {
//             flag--
//         }
//         if (flag < 0) {
//             return false;
//         }
//     }
//     if (flag > 0) {
//         return false;
//     }
//     return true;
// }

// -----------------------------------------------------------

// function validParentheses(parens){
//   var indent = 0;

//   for (var i = 0 ; i < parens.length && indent >= 0; i++) {
//     indent += (parens[i] == '(') ? 1 : -1;    
//   }

//   return (indent == 0);
// }


// console.log(validParentheses("(()))("));

// ------------------------------------------------------------

// function moveZeros(arr) {
//     let zero = [];
//     for (let i = 0; i < arr.length; i++) {
//         if ((arr[i] === 0) || (arr[i] === "+0")) {
//           zero.push(arr.splice(i, 1)[0]);
//         }
//     }
//     return arr.concat(zero);
// }

// let arrrr = [false, +0, 1, 0, 1, "+0", 2, 0, 1, 3, "a"];



// console.log((arrrr));
// console.log(arrrr.length);
// console.log(moveZeros(arrrr));

// -------------------------------------------------------------
// function findShort(s){
//   return s.split(" ").sort((a, b) => a.length - b.length)[0].length;
// }

// console.log(findShort("sf gsrgrg rgg ggfghfhfhf er"));

// -------------------------------------------------------------------

// function maskify(cc) {
//   cc = cc.toString();
//   let arr = [];
//   if (cc.length > 4) {
//   (arr = cc.split("")).splice(0, cc.length - 4, "#".repeat(cc.length-4));
//   return arr.join("");
//   }
//   return cc;
// }

// console.log(maskify("116"));

// ------------------------------------------------------------------

// function sumTwoSmallestNumbers(numbers) {  
//   numbers.sort((a, b) => a - b);
//   return numbers[0] + numbers[1];
// }
// -------------------------------------

// function say(phrase) {
//   alert(this.name + ': ' + phrase);
// }

// let user = { name: "John" };

// // 'user' становится 'this', и "Hello" становится первым аргументом
// say.call(user, "Hello" ); 

// ---------------------------------------

// function duplicateCount(text){
//   let charSet = new Set(text.toLowerCase().split(""));
//   let arr = text.toLowerCase().split("");
//   let res;
//   let arrRes =[];
//   for (let char of charSet) {
//     res = 0;
//     for (let cherT of arr) {
//       if (char === cherT) {
//         res++
//       }
//     }
//     arrRes.push(res);
//   }
//   console.log(arrRes);
//   return arrRes.filter(el => el > 1).length;
// }

// console.log(duplicateCount("asdf"));

// -------------------------------------------------------

// function duplicateEncode(word) {
//   let charSet = new Set(word.toLowerCase().split(""));
//   let arreyChar = [];
//   function CharObj(name, value, index) {
//     this.name = name,
//       this.value = value,
//       this.index = index
//   }
//   for (let char of charSet) {
//     let value = 0;
//     let index = [];
//     word.toLowerCase().split("").forEach((el, i) => {
//       if (el === char) {
//         ++value
//         index.push(i);
//       }
//     });
//     let charObj = new CharObj(char, value, index);
//     arreyChar.push(charObj);
//     console.log(charObj);
//   }
//   let arr = word.toLowerCase().split("");
//   for (let obj of arreyChar) {
//     if (obj.value >= 2) {
//       for (let index of obj.index ) {
//         arr.splice(index, 1, ")");  
//       }
//     } else {
//     arr.splice(obj.index[0], 1, "(");
//     }
//   }
//   return arr.join("");
// }

// function duplicateEncode(word){
//   return word
//     .toLowerCase()
//     .split('')
//     .map( function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//     })
//     .join('');
// }



// console.log(duplicateEncode("un)uuaOFufbuuu"));

// ----------------------------------------------------

// function alphabetPosition(text) {
//   return text.toLowerCase().split("")
//   .filter((el) => (el.codePointAt(0) > 96) && (el.codePointAt(0) <= 122))
//   .map(el => el.codePointAt(0)-96).join(" ");
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// -----------------------------------------------------

// function persistence(num) {
//   let count = 0;
//   for (;;) {
//     if (+num <= 9) {
//       return count;
//     } else {
//       ++count
//       num = num.toString().split("").reduce((acc, el, index) => (index === 0) ? acc = el : acc * el, 0);
//     }
//   }
// }
// console.log(persistence(39));

// -----------------------------------------------------

// function order(words){
//   return words.split(" ").sort((a, b) => {
//     a = a.split("").sort().join("");
 
//     b = b.split("").sort().join("");
  
//     if (a > b) return +1;
//     if (a === b) return 0;
//     if (a < b) return -1;
//   })
//   .join(" ");
// }

// console.log(order("is2 Thi1s T4est 3a"));  //-->  "Thi1s is2 3a T4est"
// order("4of Fo1r pe6ople g3ood th5e the2");  //-->  "Fo1r the2 g3ood 4of th5e pe6ople"

// ------------------------------------------------------------------------------

// function tribonacci(signature, n){
//   let num;
//   if (n === 0) {return []}
//   if (n === 1) {return [1]}
//   for (let i = 4; i <= n; i++) {
//     num = (signature.slice(-3).reduce((acc, el) => acc + el));
//     signature.push(num);
//   }
//   return signature;
// }

  
// console.log(tribonacci( [300,200,100], 0)); //[0,0,1,1,2,4,7,13,24,44]   

// ------------------------------------------------------------------------------

// var uniqueInOrder=function(iterable){
//   if (!Array.isArray(iterable)) {
//     iterable = iterable.split("");
//   }
//   return iterable.filter((el, index, arr) => {
//     if (el != arr[index+1]) {
//       return el;
//     }
//   })
// }
// console.log(uniqueInOrder('AAAABBBCCDAABBB') );
// console.log(uniqueInOrder('ABBCcAD')); 
// console.log(uniqueInOrder([1,2,2,3,3])  );  

// -------------------------------------------

// function narcissistic(value) {
//   return !(value - value.toString().split("").map((el, index, array) => {
//     let res = el;
//     for (let i = 1; i < array.length; i++) {
//     res = res*el;
//     }
//     return res;
//   }).reduce((acc, el) => acc + el));
// }

// console.log(narcissistic( 153 ));

// ---------------------------------------------

// function toCamelCase(str) {
//   if (str === "") {
//     return "";
//   }
//   return str.replaceAll("_", "-").split("-").map((el, index, arr) => {
//     if ((arr.length === 3) && (arr[0].length === 1) && (arr[1].length === 1) && (arr[2].length === 1)) {
//       return el.toUpperCase();
//     } else {
//       if (index === 0) {
//         return el;
//       } else {
//         return el[0].toUpperCase() + el.slice(1);
//       }
//     }
//   }).join("");
// }


// console.log(toCamelCase("The_stealth-warrior"));
// console.log(toCamelCase("the_stealth_warrior"));
// console.log(toCamelCase("A_b_v"));
// console.log(toCamelCase(""));


// -----------------------------------------------------------

// function moveZeros(arr) {
//   let len = arr.length;
//   arr = arr.filter((el) => el !== 0); 
//   for (let i = arr.length; i < len; i++) {
//     arr.push(0);
//   }
//   return arr;
// }


// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));

// ----------------------------------------

// function pigIt(str){
//   return str.split(" ").map((el, index, arr) => {
//     if ((el === "!") || (el === ".") || (el === ",") || (el === "?")) {
//       return el;
//     }
//     return el.slice(1) + el[0] + "ay"
//   }).join(" ");
// }

// console.log(pigIt('Pig latin is cool'));
// console.log(pigIt('Hello world !'));

// ------------------------------------------

// function rgb(r, g, b){
//   return [r, g ,b].map((el) => {
//     if (el >= 255) {
//       return "FF";
//     }
//     if (el <= 0) {
//       return "00"
//     }
//     el = el.toString(16).toUpperCase();
//     return (el.length < 2) ? "0" + el : el;
//   }).join("");
// }

// console.log(rgb(173, 12, 25));

// ----------------------------------------

function rot13(message){
  return message.split(" ").map((el) => {
    let str = "";
    for (let i = 0; i < el.length; i++) {
    let charCod ="";
      if ((el.codePointAt(i) >= 65) && (el.codePointAt(i) <= 90)) {
        charCod = +el.codePointAt(i) - 64 + 13;
        if (charCod > 26) {
          charCod = charCod - 26;
        } 
        charCod += 64;  
      } else if ((el.codePointAt(i) >= 97) && (el.codePointAt(i) <= 122)) {
        charCod = +el.codePointAt(i) - 96 + 13;
        if (charCod > 26) {
          charCod = charCod - 26;
        }
        charCod += 96; 
      } else {
      charCod = +el.codePointAt(i);
      }
      str = str + String.fromCodePoint(charCod);
    }
    return str;
  }).join(" ");
}

console.log(rot13("Test failed with messsage."));
console.log(rot13("0+2 is twelve."));