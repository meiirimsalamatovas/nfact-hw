//task1
let userAge = prompt('Введите ваш возраст:', '');
function checkAge(age) {
    return age > 18 || confirm('Родители разрешили?');
}
  if (checkAge(userAge)) {
    alert('Доступ разрешён');
  } else {
    alert('Доступ запрещён');
  }

  
//task2
// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   console.log(pow(3, 2)); 

//task3
// function ask (question, yes, no){
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
// );

// task4
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert(arr); // 8, 5, 2, 1, -10

//task5
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map(user => user.name);

// alert(names); // Вася, Петя, Маша

// task6
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));


// alert( usersMapped[0].id ); 
// alert( usersMapped[0].fullName );

// task7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(users) {
  return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

alert(getAverageAge(arr)); 






  

  
  