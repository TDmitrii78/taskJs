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

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}



console.log(duplicateEncode("un)uuaOFufbuuu"));