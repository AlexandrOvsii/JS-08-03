// ========== IF instruction =========== //

// let cost = 0;
// const subscription = "pro";

// if (subscription === "pro"){
//     cost = 100;
// }

// console.log (`prise :`, cost);

// let cost = 0;
// const subscription = "pro";

// if (subscription === "pro"){
//     cost = 100;
// }

// console.log (cost);

// ========== IF...else instruction =========== //

// let cost;
// const subscription = `free`;
// if (subscription === `pro`){
//     cost = 100;
// }
// else {
//     cost = 0;
// }

// console.log(cost);

// let cost;
// const subscription = `pro`;
// if (subscription === `pro`){
//     cost = 100;
// }
// else {
//     cost = 0;
// }

// console.log(cost);

// ========== else....if instruction =========== //

// let cost;
// const subscription = `premium`;
// if (subscription === `free`){
//     cost = 0;
// }
// else if (subscription === `pro`){
//     cost = 100;
// }
// else if (subscription === `premium`){
//     cost = 500;
// }
// else {
//     console.log(`Invalid subscription type`)
// }

// console.log(cost);

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//   if (available === 100 && ordered === 50){
//     message = 'Order is processed, our manager will contact you.'
//   }

//     // Change code above this line
//     return message;
//   }

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = `Insufficient funds!`;
//   } else {
//     customerCredits -= totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//   }
//   // Change code above this line
//   return message;
// }

// function getSubstring(string, length) {
//   const substring = ; // Change this line

//   return substring;
// }

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line

//   /// Change code above this line
//   return result;
// }

// ======== пример Тани ========== //
// // 1. Оголошення функції multiply
// let result;
// function multiply(x, y) {
//   // Тіло функції
// result = x * y;
// console.log(result);
// }

// // 2. Виклики функції multiply
// multiply(5, 3); // multiply function invocation

// ======== / пример Тани ========== //

// ======== створили лічильник ========== //
// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter > maxClients){
//   console.log(clientCounter);
//   clientCounter +=1;
// }

// const target = 25;
// let sum = 0;

// for (let i = 0; i <=target; i += 1) {
//   sum += 1;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");

// const number = 10;
// for(let i = 0; i < number; i += 1){
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log("Neparne i :", i);
// }

// var a = 10;
// console.log(a);

// var a = 6;
// console.log(a);

// let b = 15;
// console.log(b);

// let b = 24;
// console.log(b);

// =================== задача мод1. зан. 2 - годинник ================ //
// const hours = 14;
// const minutes = 5;
// let res;

// ============варіант з іф елсе =======//
// if (minutes > 0) {
//   res = `${hours} г. ${minutes} хв.`
// } else {
//   res = `${hours}`
// }
// console.log(res);

// ============варіант з тернарним оператором =========//
// res = `${hours} г. ${minutes ? ' ' + minutes + ' хв.' : ''}`;
// console.log(res);

// ============варіант з (+inputValue) =========//
// const inputValue = prompt('Введіть число')

// if (+inputValue > 0) {
//   console.log("Це позитивне число")
// } else if (+inputValue === 0) {
//   console.log("Це нуль");
// } else if (+inputValue < 0) {
//   console.log("Це негативне число")
// }

// console.log(inputValue);

// ============варіант задачі з (Switch) =========//

// const days = 3;
// switch (days) {
//   case 0:
//     console.log("Сьогодні");
//     break;

//   case 1:
//     console.log("Завтра");
//     break;

//   case 2:
//     console.log("Післязавтра");
//     break;

//     default:
//         console.log("Дата у майбутньому");
// }

// ============варіант задачі з (Цикл for) =========//
// const max = 25;

// for (let min = 0; min <= max; min++){
//     if (min === 0) continue;
//     if (min % 5 === 0){
//         console.log(min)
//     }
// }

// const clients = ["Mango", "Poly", "Ajax"];

// for (let i = 0; i < clients.length; i += 1){
//     console.log(clients[i])
// }

// const clients = ["Mango", "Ajax", "Poly"];
// for (const client of clients){
//     console.log(client);
// }

// const string = "javaScript";
// for(const character of string){
//     console.log(character);
// }

// ======== Оператори break і continue =========

// const clients = ["Mango", "Ajax", "Poly"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//     if (client === clientNameToFind){
//         message = "Клієнт з таким іменем є у базі";
//         break;
//     }
//     message = "Клієнт з таким іменем відсутній у базі!";
// }

// console.log(message);

// const clients = ["Mango", "Ajax", "Poly"];
// const clientNameToFind = "Poly";
// let message = "Клієнт з таким іменем ВІДСУТНІЙ у базі";

// for(const client of clients){
// if (client === clientNameToFind){
//     message = "Клієнт з таким іменем є у базі";
//     break;
// }
// }

// console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1){
//     if(numbers [i] < threshold){
//         continue;
//     }
//     console.log(`Число більше за ${threshold} : ${numbers[i]}`);
// }

// ========== Усі примітивні типи ===========
// let a = 5;
// let b = 5;

// console.log(a);
// console.log(b);

// a = 10;
// console.log(a);
// console.log(b);

// const a = ["Mango"];
// const b = a;

// console.log(a);
// console.log(b);

// a.push("Poly");
// console.log(a);
// console.log(b);

// b.push("Ajax");
// console.log(a);
// console.log(b);

// Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(2)); // ["Poly", "Kiwi"]

//     const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

// function checkStorage(available, ordered) {
//   // Change code below this line
//   let message;

//   if (ordered === 0) {
//     console.log("Your order is empty!");
//     return;
//   }
//   if (ordered > available) {
//     console.log("Your order is too large, not enough goods in stock!");
//     return;
//   }
//   if (available > ordered) {
//     console.log("The order is accepted, our manager will contact you");
//     return;
//   }
//   // Change code above this line
// }

// const fruits = ["apple", "plum", "pear", "orange"];
// firstElement[apple];
// secondElement[1];
// lastElement[3];

// console.log(fruits);

// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// // Change code below this line

// console.log(fruits.length);
