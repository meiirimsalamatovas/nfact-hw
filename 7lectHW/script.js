// task1
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(3000).then(() => alert('выполнилось через 3 секунды'));


// task2
// let promise = new Promise(function(resolve, reject) {
//   resolve(1);

//   setTimeout(() => resolve(2), 1000);
// });

// promise.then(alert);
// //  вывод: 1 
// // Промис завершится значением 1 после вызова resolve(1).
// // Вызов resolve(2) через секунду будет проигнорирован.
// // Метод then выведет 1.

// task3
// Нет, эти фрагменты не эквивалентны
promise.then(f1).catch(f2);
//f1 обрабатывает успешное выполнение промиса.
// f2 обрабатывает любую ошибку, возникающую в промисе или в f1.
promise.then(f1, f2);
// f1 обрабатывает успешное выполнение промиса.
// f2 обрабатывает только ошибку, возникающую в самом промисе (до then).

