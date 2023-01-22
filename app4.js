"use strict";

// let str = "ghgjkghj";

// function ucFirst(str) {
//     if (!str) {
//         return str;
//     }
//     return str = str[0].toUpperCase() + str.slice(1);
// }


// console.log(ucFirst(str));

// -------------------------------------------------

// Напишите функцию checkSpam(str), возвращающую true,
//  если str содержит 'viagra' или 'XXX', а иначе false.

// let str = "XXX, fghsdh, wetwy"

// function checkSpam(str) {
//     if ((str.toLowerCase().includes("xxx")) || (str.toLowerCase().includes("viagra"))) {
//         return true;
//     }
//     return false;
// }

// // str = str.toLowerCase().includes("xxx");

// console.log(str);
// console.log(checkSpam(str));


// --------------------------------------------------

// Усечение строки
// важность: 5

// Создайте функцию truncate(str, maxlength), которая проверяет 
// длину строки str и, если она превосходит maxlength, заменяет 
// конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение 
// не требуется, либо, если необходимо, усечённая строка.

// let str = "j446fsrgnlknj";
// let maxlength = 11;

// function truncate(str, maxlength) {
//     if (str.length <= maxlength) {
//         return str;
//     } else {
//         return str = str.slice(0, (maxlength - 1)) + "…";
//     }
// }

// function truncate2(str, maxlength) {
//     return (str.length <= maxlength) ? str : str = str.slice(0, (maxlength - 1)) + "…";
// }

// console.log(truncate(str, maxlength));
// console.log(truncate2(str, maxlength));

// -----------------------------------------------------------

// Выделить число
// важность: 4

// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), 
// которая будет из такой строки выделять числовое значение и возвращать его.

function extractCurrencyValue(str) {
    return str = +str.slice(1);
}

console.log(extractCurrencyValue("$156"));