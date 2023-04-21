// let salary = 1500.26485
// salary = salary.toFixed(2);//кол-во символов после ,
// salary = Number(salary);//назначает переменную салари, и преобразуй, чтобы она теперь была намбер
// console.log(salary);

// let brand = 'SaMsUnG';
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

// const min = 0;
// const max = 5;
// let total = 0;

// for(let i = min; i <= max; i += 1){
//     if (i % 2 === 0){
//         total += i;
//     }
// }

// console.log(total);

// let balance = 500;
// const payment = 2000;

// console.log(`общая стоимость заказа ${payment}`);

// if(payment <= balance){
// balance -= payment;
//    console.log(`на счету осталось ${balance} кредитов`);
// } else {
// console.log('на счету недостаточно средств');}

// console.log(`операция завершена`);

// const totalSpend = 50;
// let payment = 100;
// let discount = 0;

// if(totalSpend >= 100 && totalSpend < 1000) {
//    discount = 0.02;
//    console.log('партнерская скидка 2%');
// } else if(totalSpend >= 1000 && totalSpend < 5000){
//    discount = 0.05;
//    console.log('партнерская скидка 5%');
// } else if (totalSpend >= 5000){
//    discount = 0.1;
//    console.log('партнерская скидка 10%');
// } else {
//    console.log('no partner');
// }
// Петя бежит быстро, потому что он (this) пытается поймать поезд.
// const petya = {
//    username: "Petya",
//    showName() {
//      console.log('username is:', this.username);
//    },
//  };

//  petya.showName();

// const animal = {
//    legs: 4,
//  };
//  const dog = Object.create(animal);
//  dog.name = "Mango";

//  console.log(dog); // { name: 'Mango', __proto__: animal }
//  console.log(animal.isPrototypeOf(dog)); // true

// const customer = {
//    firstName: "Jacob",
//    lastName: "Mercer",
//    getFullName() {
//      return `${this.firstName} ${this.lastName}`;
//    },
//  };

//  function makeMessage(callback) {
//    // callback() это вызов метода getFullName без объекта
//    console.log(`Обрабатываем заявку от ${callback()}.`);
//  }

// // ✅ Стало
// makeMessage(customer.getFullName.bind(customer)); // Обрабатываем заявку от Jacob Mercer.

// // Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

// class Storage{
//   constructor(items){
//     this.items = items;
//   }
//   getItems(){
//    return this.items
//   }
//   addItem(newItem){
//     this.items.push(newItem)
//   }

//   removeItem(itemToRemove){
//     let index = this.items.indexOf("Prolonger");
//     console.log(index);
//     this.items.splice(1, 1)
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// const string = 'JavaScript';
// const letters = string.split('')
// console.log(letters);

// let invertedString = '';

// for (const letter of letters){
//   if (letter === letter.toLowerCase()){
//     invertedString += letter.toUpperCase();
//     // console.log(invertedString);
//   } else {
//     invertedString += letter.toLowerCase();
//     // console.log(invertedString);
//   }
// }console.log(invertedString);

// const string = 'JavaScript';
// const letters = string.split('')

// let invertedString = '';
// for (const letter of letters){
// invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(invertedString);

// const string = "SashaSedan";
// const letters = string.split("");
// console.log(letters);
// let invertedString = "";

// for (const letter of letters){
//   if (letter === letter.toLowerCase()) {
//     invertedString += letter.toUpperCase();
//   } else {
//     invertedString += letter.toLowerCase();
//   }
// }
// console.log(invertedString);


// const string = "SashaSedan";
// const letters = string.split("");
// console.log(letters);
// let invertedString = "";

// for (const letter of letters){
//   invertedString = letter === letter.toLowerCase() ? invertedString += letter.toUpperCase() : invertedString += letter.toLowerCase();
// }
// console.log(invertedString);

// const fnA = function(x, y, z){
//   return x * y + z;
// }

// // const result = fnA(5, 55, 154)
// // console.log(result);

// console.log(fnA(5, 4, 2));


// function switchOfStuff(val) {
//   let answer = "";
//   // Змініть код лише під цим рядком
// switch (val){
//   case "a":
//   answer = 'apple';
//   break;
  
//   case "b":
//   answer = 'bird';
//   break;

//   case "c":
//   answer = 'cat';
//   break;

//   default:
//     answer = 'stuff';
//     break;
// }


//   // Змініть код лише над цим рядком
//   return answer;
// }

// console.log(answer);
// ;

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// }

// const keys = Object.keys(feedback)
// console.log(keys);

// for (const key of keys){
//   console.log(key);
//   console.log(feedback[key])
// }

// let totalFeedback = 0;

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// }

// const values = Object.values(feedback);
// console.log(feedback);
// let totalValue = 0;

// for (const value of values){
//   console.log(value);
//   totalValue += value;
// }

// console.log(`totalValue: `, totalValue);


// const number = 1 + 1 + 1 === 3;
// console.log(number);

// const authors = {
//     kiwi: 2,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// }

// const values = Object.values(authors);
// for (const value of values){
//     console.log(value);
// const maxValue = Math.max(value);
// console.log(maxValue);
// console.log(Math.max(...authors));
// } 

// const {kiwi, poly, ...hren} = authors;
// console.log(kiwi, poly);
// console.log(hren);

// function doStuffWithBook({ title, numberOfPages, downloads, rating, isPublic }) {
//     // Делаем что-то со свойствами объекта

//     console.log(numberOfPages);
//     console.log(rating);
//     console.log(isPublic);

//     // И так далее
//   }

//   // ✅ Всё понятно, вызов аргумента функции
// doStuffWithBook({
//     title: "The Last Kingdom",
//     numberOfPages: 736,
//     downloads: 10283,
//     rating: 8.38,
//     isPublic: true,
//   });

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log('это ключ:' ,key);
//   // Значение свойства с таким ключом
//   console.log('это св-во ключа:' ,book[key]);
// }

// const fnA = function (message, callback){
//   console.log('с fnA:' ,message);
//   callback()
// }

// const fnB = function(){
//   console.log('this is fnB');
// }

// fnA('hello', fnB)

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

function multiply(...args) {
  console.log(args); // массив всех аргументов
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
