// task1
const restaurantName='afisha';
let restaurantLocation='kabanbay batyra 111';
let openYear=2022;
const isOpen=true;
let _owner=null;
let _place;


let restaurant={
  name: restaurantName,
  location:restaurantLocation,
  year: openYear,
  open: isOpen,
  owner: _owner,
  place: _place
}

 restaurant.rating=4;
 restaurant['instagram']='afisha@inst';


delete restaurant.owner;

console.log(restaurant);

//task2
let vehicle={};
vehicle.brandName='Porshe';
vehicle.model='910';
vehicle.model='911';
delete vehicle.model;
console.log(vehicle);

//task3
let totalSalary=0;
let salaries ={
  Aroo: 100,
  Dalida: 160,
  Samat: 130
}
for(let key in salaries){
  totalSalary += salaries[key];
}
console.log(totalSalary);
