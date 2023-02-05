function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
  }
  
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert(`Здорово, скрипт ${script.src} загрузился`);
    alert( _ ); // функция, объявленная в загруженном скрипте
  });

//   -----------------------------------------------

let promise = new Promise(function(resolve, reject) {
    // функция-исполнитель (executor)
    // "певец"
  });