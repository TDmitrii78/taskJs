// Создайте калькулятор при помощи конструктора, new Calculator
// важность: 5

// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

//     read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
//     sum() возвращает сумму этих свойств.
//     mul() возвращает произведение этих свойств.

// Например:

"use strict";

/*
function Calculator() {
    this.read = function() {
        this.a = +prompt("a?");
        this.b = +prompt("b?");
    },
    this.sum = function(a, b) {
        return this.a + this.b;
    },
    this.mul = function(a, b) {
        return this.a*this.b;
    }
}

let calculator = new Calculator();

calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
console.log(calculator);

*/

// Создайте new Accumulator
// важность: 5

// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

//     Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
//     Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.


function Accumulator(startValue) {
    this.value = startValue,
    this.read = function() {
        this.value += +prompt("a?");
    }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений

console.log(accumulator);