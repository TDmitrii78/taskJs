"use strict";

/*
const prici = 80;
const hourDay = 5;
const dayWeek = 5;
const zakazHour = 40;
const ostalosDay = 11;
const weekEnd =2;

console.log( (ostalosDay-weekEnd)*hourDay >= zakazHour )
console.log(zakazHour * prici);
*/

// -----------------------------------------------

/*
const deposit$ = 12000;
const rate = 0.07;
const month = 24;
const cost$ = 13500
let sum$;

sum$ = deposit$ * (1 + rate/12) ** month

if (sum$ >= cost$) {
    console.log(`Вася купит дом за ${cost$} $`);
    console.log(`Вася заработает ${sum$} $`);
    console.log(`Остаток после покупки ${sum$ - cost$} $`);
} else {
    console.log("Вася собирай еще)");
}
*/

// -------------------------------------------------


/*
let summ = prompt("Сколько будет 7 + или - 15");

switch(summ) {
    case "Я не робот":
    case "23":
    case "-8":
        console.log("Успех!");
        break;
    default:
        console.log("Вы робот!");
}
*/

// ---------------------------------------------

/*
let isBanned = false;
let isExist = false;
let isSelling = true;
let balance = 1100;
let bonuseBalance = 0;

let bay = ( balance > 1000 || bonuseBalance >110) && !isBanned && !isExist && isSelling;
console.log(`Купить игру ${bay ? "Да":"Нет"}`)
*/

// --------------------------------------------------


/*
function toPower(num, power) {
    const res = num ** power;
    return res;
}

console.log(toPower(2, 3));

const toPowerArrow = (num, power) => num ** power;
console.log(toPowerArrow(2, 3));
*/

// ----------------------------------------------------

/*
const age = 24;
const isWork = false;
const cash$ = 1900;
const cost$ = 2000;

function credit(age1, isWork1) {
    return (age1 < 24) ? 0 : isWork1 ? 500 : 100;
}

const canBay = (cash1$, cost1$, age1, isWork1) => cash1$ + credit(age1, isWork1) >= cost1$;

console.log(canBay(cash$, cost$, age, isWork));
*/


// -----------------------------------------------------

/*

const tasks = ["Задача1"];
const task = "Задача2";
const nameT = "Задача2";

function add(tasks1, task1) {
    tasks1.push(task1);
}

function del(tasks1, nameTask) {

    let indexTask = tasks1.indexOf(nameTask);

    if (indexTask >= 0) {
        return tasks1.splice(indexTask, 1);
    } else {
        console.log("Нет такой задачи");
        return;
    }
}

function transferStart(tasks1, nameTask) {
    let res = del(tasks1, nameTask);
    if (res) {
        tasks1.unshift(nameTask);
    }
}




console.log(tasks);

add(tasks, task);

console.log(tasks);

del(tasks, nameT);

console.log(tasks);

add(tasks, task);

add(tasks, "Задача3");

add(tasks, "Задача4");

console.log(tasks);

transferStart(tasks, "Задача2");

console.log(tasks);

*/


// ---------------------------------------------

/*

let array = ["Вася" ,"Петя", "Саша"];

console.log(array);

console.log(array[1]);

let [user1, user2, user3, user4] = array;
console.log(user1);
console.log(user4);

*/


// ---------------------------------------------

/*

const url = 'https://learn.javascript.ru/function-basics';
let protocol;
let host;
let path1;


function parsingUrl (urlString) {

    let arr = urlString.split('/');

   [protocol,, host, ...path] = arr;
   protocol = protocol.split(":")[0];

    if (path.length > 1) {

        path1 = path.join("/");

   } else {
        path1 = path[0];
    }

}

parsingUrl(url);

console.log(protocol);
console.log(host);
console.log(path1);

*/

// ---------------------------------------------------

/*

const array = ["!", "JS", "люблю", "Я"];
let item;
const newArray = [];

for(let i = array.length - 1; i >= 0; i--) {
    item = array[i];
    newArray.push(item);
}

item = newArray.join(" ");
console.log(item);

*/

// ---------------------------------------------------

/*
const operations = [1000, -700, 300, -500, 10000];
const startBalance = 100;

function balance(operatArray, startB) {
    let summ = startB;

    for (let value of operatArray) {
        summ += value;
    }

    return summ;
}

function negativeBalance(operatArray, startB) {
    let summ = startB;

    for (let value of operatArray) {
        summ += value;

        if (summ < 0) {
            return false;
        }

    }

    return true;
}

function averageIC(operatArray, startB) {
    let avIncome = startB;
    let avConsumption = 0;

    for (let value of operatArray) {

        if (value > 0) {
            avIncome += value;
        } else {
            avConsumption += value;
        }
            
    }

    return [avIncome, avConsumption];
}


console.log(balance(operations, startBalance));
 
console.log(negativeBalance(operations, startBalance));

console.log(averageIC(operations, startBalance));
*/

// ------------------------------------------

/*

const power =(pow) => (num) => {return num**pow;};

console.log(power(3)(3));
*/

// --------------------------------------------

/*

const prices = [[100, 200], [120, 100], [200, 350]];

const result = prices.map(product => product[1]- product[0])
.filter(res => res > 0);

console.log(prices);
console.log(result);

*/

// ----------------------------------------------

/*
const arr = [1, 4, 4, 10]

let res = (arr.reduce((acc, el) => (acc += el)))/arr.length;

console.log(res);



const arr2 = [1, 4, 4, 10]

let res2 = arr.reduce((acc, el, i) => {

    if (i < arr.length) {
        acc += el;
    } else {
        acc += el/arr.length;
    }
});

console.log(res);

*/

// ---------------------------------------

/*

const arr = [2, 4, 4, 10, 20];

let item1 = +prompt("Введите элемент:");

function findElement(array, item) {
for (let el of array) {
    if (item === el) 
        return true;
    }
return false;
}

console.log(findElement(arr, item1));


const arr2 = [2, 4, 4, 10, 20];

let item3 = +prompt("Введите элемент");

let res = arr2.find((el) => el === item3);
if (res >= 0) {
    console.log(true);
} else {
    console.log(false);
}
*/

// ------------------------------------------

/*
let mass = [];
console.log(mass);

let mass2 = new Array(5);
mass2.fill(5);
console.log(mass2);
*/

// ------------------------------------------

/*
let str = "Черный чай";

let str2 = str.slice(3, 5);

console.log(str2);
console.log(str);
*/

// ------------------------------------------

/*
let str = "Черный 123456789 чай";

let strNew = str.slice(0, str.indexOf(" ")) + str.slice(str.lastIndexOf(" "), str.length);

console.log(strNew);
*/

// -------------------------------------------

/*

const card = "4178512215245615";

let cardHide = card.slice(card.length - 4);


let cardHide1 = cardHide.padStart(card.length, "*");


console.log(card);
console.log(cardHide1);



*/
// -----------------------------------------------------------------


/*
const num1 = "+79107572511";
const num2 = "+7(910)7572511";
const num3 = "+7(910) 757-25-11";
const num4 = "  +7(910) 757-25-11  ";;
const num5 = "   89107572511";

const num6 = "+791sgsg07572511";
const num7 = "+791075";


function isNumber(numFone) {
    numFone = numFone.trim();
    numFone = numFone.replaceAll("+7", "8");
    numFone = numFone.replaceAll(" ","");
    numFone = numFone.replaceAll("-","");
    numFone = numFone.replaceAll("(","");
    numFone = numFone.replaceAll(")","");

    if ((numFone.length == 11) && (numFone.startsWith("8"))){
        return true;
    } else {
        return false;
    }
}

console.log(isNumber(num1));
console.log(isNumber(num2));
console.log(isNumber(num3));
console.log(isNumber(num4));
console.log(isNumber(num5));
console.log(isNumber(num6));
console.log(isNumber(num7));
*/

// --------------------------------------------------------

/*
const user = [
    {name: "Вася", age: 30},
    {name: "Катя", age: 18},
    {name: "Аня", age: 40},
    {name: "Петя", age: 25},
];

console.log(user.sort((a,b) => a.age - b.age));
console.log(user[1].name);
console.log(user[1]);
*/

// ---------------------------------------------------------

/*
const user = [
{
    name: "Вася",
    surname: "Пупкин",
    age: 30,
    skills: ["Разработка", "DevOps"]
},
{
    name: "Катя",
    surname: "Белова",
    age: 18,
    skills: ["Дизайн"]
}
];

const user2 = user.map((usrObj) => {
    return {
        fullName: usrObj["name"] + " " + usrObj["surname"], 
        skills: usrObj.skills.length
    }
}
)

console.log(user);
console.log(user2);
*/

// ------------------------------------------------------------

/*

const wallet = {
    balance: 0,
    operations: [],

    income: function(sums, reasons) {
       
        this.balance += sums,
        this.operations.push({
            reason: reasons,
            sum: sums,
        });
        return true;    

    },

    expense: function(sums, reasons) {  
        if ((this.balance + sums) > 0) {
            
            this.balance += sums,
            this.operations.push({
                reason: reasons,
                sum: sums,
            });
            return true;

        } else {
            console.log("Недостаточно средств");
            return false;
        }
    },

    numberOperation: function() {
        return(this.operations.length);
    }
}

console.log(wallet.income(100,"Пополнение"));
console.log(wallet.income(500,"Перевод"));
console.log(wallet.expense(-100,"Оплата покупок"));
console.log(wallet.numberOperation());
console.log(wallet.expense(-900,"Оплата покупок"));

console.log(wallet);

*/

// ------------------------------------------------------

/*

let num = 9;
let numbr = 7;

console.log(num);
console.log(numbr);

function numb(num) {
    console.log(num);
    num = 5;
    numbr = 4;
    console.log(num);
}

numb(num);

console.log(num);
console.log(numbr);
*/

// -------------------------------------------------


/*
let user = {
    name: "Dima",
    toString() {
       return "ghgghg";
    },
    
};
let XXX;

XXX = user;

console.log(user + "text");

*/

// ----------------------------------------------------

/*

const man = {
    name: 'John',
    activity: { specialist: { engineer: 'tester' } },
    slogan: () => { console.log('Is only forward!') }
    };

const man1 = {};
    
function clonObj(newObj, oldObj) {

    for (let prop in oldObj) {

        if (typeof oldObj[prop] === 'object') {

            newObj[prop] = {};
            clonObj(newObj[prop], oldObj[prop])

        } else {

            newObj[prop] = oldObj[prop]
        };
    };
};

clonObj(man1, man);

console.log(man1);
*/

/*
const man = {
    name: 'John',
    activity: { specialist: { engineer: 'tester' } },
    slogan: () => { console.log('Is only forward!') }
    };

const newMan = {};

function cloneObject(oldMan, clonMan) {
    for (let key in oldMan) {
        console.log(key);
        clonMan[key] = oldMan[key];
    }

}

cloneObject(man, newMan);


console.log(man);

console.log(newMan);

console.log(newMan.activity.specialist.engineer);

*/

/*
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

let newArr = [...arr1, ...arr2];
console.log(newArr);
*/

// ----------------------------------------------------

/*
function changeBallance1() {
   
        let ballance = 50;
        console.log(ballance);
        
        return function(sum) {
            ballance += sum;
            console.log(ballance);
        }
    }
    const change1 = changeBallance1();
    
    
    change1(100);
    change1(150);
*/
// ------------------------------------------------------

/*
function changeBallance2(ballance) {
   
    console.log(ballance);

    return function(sum) {
        ballance += sum;
        console.log(ballance);
    }
}
const change2 = changeBallance2(50);


change2(100);
change2(150);


*/
// ---------------------------------------------------
/*




    function changeBallance3(ballance) {
   
            console.log(ballance);
        
            return (sum) => {
                ballance += sum;
                console.log(ballance);
            }
        }
    const change3 = changeBallance3(50);


        
        
    change3(100);
    change3(150);

*/
// ---------------------------------------------------------

   /*
    let ballance = 50;
    console.log(ballance);

    function summ(sum) {
        ballance += sum;
        console.log(ballance);
    }
    
    
    summ(100);
    console.log(ballance);

    summ(150);
    console.log(ballance);
    */
    // -----------------------------------------------
    /*

    const man = {
        name: 'John',
        activity: { specialist: { engineer: 'tester' } },
        slogan: () => { console.log('Is only forward!') }
        };
    
    const man1 = {};

    function copyObj(cloneObj, originalObj) {

        for (let key in originalObj) {
            if (typeof(key) === "object") {
                copyObj(,);
            } else { 

            cloneObj[key] = originalObj[key];
            }
        }

    }
    copyObj(man1, man);

    console.log(man);
    console.log(man1);

    man.activity.specialist.engineer = 'programmer';

    console.log(man);
    console.log(man1);

   */

    // ----------------------------------------------
/*

const company = {
    name: "ООО Рога и копыта",
    employees: [
        {
            name: "Света",
            nameEmployees: function() {
                return this.name;
            }
        }
    ],
    ceo: {
        name: "Вася",
        nameSeo: function() {
            return this.name;
        },
    },

    nameCompany: function() {
        return this.name;
    },
}

console.log(company.nameCompany());
console.log(company.ceo.nameSeo());
console.log(company.employees[0].nameEmployees());
console.log(company.employees.map(el => el.nameEmployees()
));

*/

let arr =[1, 2, 3, 4];
console.log(arr);
console.log(...arr);