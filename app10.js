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

function findEvenIndex(arr) {
  if (arr.length < 3) {
    return -1;
  }
  for (let i = 1; i < arr.length - 2; i++) {
    let arrLeft = [];
    let arrRight = [];
    arr.forEach((element, index) => {
      if (index < i) {
        arrLeft.push(arr[index]);
      }
      if (index > i) {
        arrRight.push(arr[index]);
      }
    });
    if (arrLeft.reduce((acc, el) => acc + el, 0) === arrRight.reduce((acc, el) => acc + el, 0)) {
      return i;
    }
  }
  return -1;
}

//console.log(findEvenIndex([20,10,-80,10,10,15,35]));
console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([1,100,50,-51,1,1]));
console.log(findEvenIndex([1,2,3,4,5,6]));
console.log(findEvenIndex([20,10,30,10,10,15,35]));