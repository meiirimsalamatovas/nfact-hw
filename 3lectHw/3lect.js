//alert / confirm / prompt.
let user = {};
user.name = prompt('как вас зовут ?');
user.age = prompt('сколько вам лет ?');
let isMale= confirm('вы мужчина?');
user.gender = isMale ? "мужчина" : "женщина";
 console.log(user);


//Работа с операторами.
// let number = prompt('Введите число:');
// if(number === null ){
//     alert('Вы ничего не ввели.');
// }
// else if (isNaN(number)){
//     alert('Это не число!' );
// }
// else{
//     alert(`Вы ввели число: ${number}`);
// }




//Работа с условиями.
// let a = +prompt('a?', '');
// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert('2,3');
//     break;
//   default:
//     alert('nothing');
// }



// Работа с циклами(loops).
// let sum =0;
// for(let i =2; i<=100; i+=2){
//     sum +=i;
// }
// console.log(sum);

// let i =0;
// while(i<3){
//     alert(`number ${i}!`);
//     i++;
// }