


"use strict";


// class sumArray extends Array {
//     sumArr() {
//       return this.reduce((acc, item) => acc +item);
//     }
//   }
  
//   let arr = new sumArray(25, 7, 8, 11);
  
//   console.log(arr.sumArr()); 
  
  
//   let  newArr = new sumArray();
  
//   newArr.push(1, 22, 5);
  
//   console.log(newArr.sumArr());
  
// ----------------------------------------------------

class MyTravels {
    constructor() {
        this.name = "Dmitriy";
        this.age = 44;
        this.Citizenship = "RF";
        this.IveBeenTo = "Russia";
        this.location_now = "Russia";
    }

    personalData() {
        return `Hello! \nЯ путешествую) \nМеня зовут: ${this.name}.\nВозраст: ${this.age}, Гражданство: ${this.Citizenship}, Приехал в ${this.location_now} из: ${this.IveBeenTo}`;
    }

    get location() {
        return `Был в ${this.IveBeenTo}, сейчас находитесь в ${this.location_now}`;
    }

    set location(country) {
        this.IveBeenTo = this.location_now;
        this.location_now = country;
    }
}

class countryObj extends MyTravels {
    constructor(country, city) {
        super();
        this.country = country;
        this.city = city;

    }
}
 
function dialogYesNo(question, yesNo) {
    for (;;) {
        let word = prompt(question, yesNo);
        if (word === "Да") {
            return true;
        } else if (word ==="Нет" || word === null) {
            return false;
        } else {
            alert("Ошибка. Введите корректно Да или Нет(отмена)");
        }
    }
}

function addCountry() {
    let str;
    for (;;) {
        str = prompt("Введите название страны и города в формате страна/город"); 
        if ((str != "") && (str != null) && (str.includes("/"))) {
            break;
        }
        alert("Введите в верном формвте");
    }
    let [country, city] = str.replaceAll(" ","").split("/");
    MyTrvls.location = country;
    visitCountry.list.push(new countryObj(country, city));
}

class VisitCountry {
    constructor(list) {
        this.list = list
    }

    get countCountry() {
        return this.list.length;
    }

    get nameCountry() {
        return this.list.map((item) =>  item.country + " " + item.city).join(", ");
    }
}

function listVisitCountry() {
    alert(`Я посетил ${visitCountry.countCountry} страны(у). \nЭто ${visitCountry.nameCountry}.`);
}

let MyTrvls = new MyTravels();

let visitCountry = new VisitCountry([]);

visitCountry.list.push(new countryObj("Rusia", "Kamensk"));

let flag;

for (;;) {

    alert(MyTrvls.personalData());
    flag = dialogYesNo(`${MyTrvls.location}. \nПереезжаем или останемся здесь? Да или Нет (отмена)`,"Да");
   
    if (!flag) {
        let flag2 = dialogYesNo(`Показать список посещенных стран? Да или Нет (отмена)`,"Да");

        if (flag2) {
            listVisitCountry();
        }
        
    } else {

        addCountry(); // Вводим название страны
        listVisitCountry();
    }
    
    if (confirm("Завершить работу?")) {
        break;
    }    
}



