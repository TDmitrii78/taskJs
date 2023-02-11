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

console.log(towerBuilder(5));
