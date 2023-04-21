// const add = function (x, y){
// console.log(x);
// console.log(y);

// const result = x + y;
// console.log('result x + y: ', result);
// console.log('виконується ф-ція add')
// return result;
// }

// add(5, 3);
// add(10, 30);
// add(50, 30);

// function multiply(x, y, z) {
//     console.log("Код до return виконується звичайним чином");
  
//     // Повертаємо результат виразу множення
//     return x * y * z;
  
//     console.log("Цей лог ніколи не виконається, він стоїть після return");
//   }
  
//   // Результат роботи функції можна зберегти у змінну
//   let result = multiply(2, 3, 5);
//   console.log(result); // 30
  
//   result = multiply(4, 8, 12);
//   console.log(result); // 384
  
//   result = multiply(17, 6, 25);
//   console.log(result); // 2550

//НАПИШИ Ф-ЦІЮ calculateTotalPrice(items), яка приймає масив цін (чисел) і повертає їхню сумму.==============================================
//FOR OF

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart){
//     total = total + value; //total += value
// }

// console.log('total: ', total);

//FUNCTION

// const calculateTotalPrice = function(items){
//     console.log(items);
//     let total = 0;
//     for(const item of items){
//         total = total + item;
//     }
//     return total;
// }

// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 10, 15]));
// console.log(calculateTotalPrice([100, 200, 300]));

//===================================================================================
// ЧЕРЕЗ INCLUDES + ТЕРНАРНИЙ ОПЕРАТОР
// const logins = ['mmmmomommo', 'kokokokoko', 'tutututut', 'popopopopo'];
// const loginToFind = 'tutututut';

// const message = logins.includes(loginToFind) ? `пользователь ${loginToFind} найден` : `пользователь ${loginToFind} НЕ найден`;

// console.log(message);

// ЧЕРЕЗ FUNCTION ЗАМІСТЬ INCLUDES
// const logins = ['mmmmomommo', 'kokokokoko', 'tutututut', 'popopopopo'];

// const findLogin = function (allLogins, loginToFind){
//      //прибираємо цей рядок let message = `Користувач ${loginToFind} не найден.`; і замість ретюрн месседж ставимо ретюрн і цю фразу
//     for (const login of allLogins){
//         if (login === loginToFind){
//             return `Користувач ${loginToFind} найден.`;
//         }
//     }
//     return `Користувач ${loginToFind} не найден.`;
// }

// console.log(findLogin(logins, 'mmmmomommo'));
// console.log(findLogin(logins, 'kokokokoko'));
// console.log(findLogin(logins, 'huy sobachiy'));

// ЧЕРЕЗ ТЕРНАРНИЙ ОПЕРАТОР У FUNCTION.===============================================================================
// const logins = ['mmmmomommo', 'kokokokoko', 'tutututut', 'popopopopo'];

// const findLogin = function (allLogins, loginToFind){
//     return allLogins.includes(loginToFind) ? `Користувач ${loginToFind} найден.` : `Користувач ${loginToFind} не найден.`;
    
// }
// console.log(findLogin(logins, 'mmmmomommo'));
// console.log(findLogin(logins, 'kokokokoko'));
// console.log(findLogin(logins, 'huy sobachiy'));


//================================ НАПИШИ СКРИПТ ПОШУКА САМОГО МАЛЕНЬКОГО ЧИСЛА В МАСИВІ, ПРИ УМОВІ, ЩО ЧИСЛА УНІКАЛЬНІ
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers){
//   if (number < smallestNumber){
//     smallestNumber = number;
//   }
// }
// console.log(`smallestNumber: `, smallestNumber) 

// ЧЕРЕЗ ФУНКЦІЮ

// const findSmallestNumber = function (numbers){
//     let smallestNumber = numbers[0];

//     for (const number of numbers){
//           if (number < smallestNumber){
//             smallestNumber = number;
//           }
//         }
//         return smallestNumber;
// }

// console.log(findSmallestNumber([3, 8, 15, 2, 6, -2]));
// console.log(findSmallestNumber([258, 356, 184, 223, 234, 549]))


//===================КОНКАТЕНАЦІЯ============= НАПИШИ СКРИПТ КОТРИЙ ЗАМІНЯЄ РЕГІСТР КОЖНОГО СИМВОЛА В РЯДКУ НА ПРОТИЛЕЖНИЙ.
// const string = 'JavaScript';
// const letters = string.split(''); //перетворює рядок в масив, «розбиваючи» його роздільником. 
// //Якщо роздільник - це порожній рядок, то створиться масив окремих символів
// let invertedString = '';
// console.log(letters);
// for (const letter of letters){
//   console.log(letter);
//   // invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// const isEqual = letter === letter.toLowerCase();
// invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase()
// }


// ЧЕРЕЗ ФУНКЦІЮ

// const changeCase = function (string){
// let invertedString = '';
// const letters = string.split('');

// for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();

//     invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
// }

// return invertedString;
// }

// console.log(changeCase('qWeRTY'));
// console.log(changeCase('SOBAKA ohuevaka'));


//===================SLUG====2:03:00========= РОБИМО СЛАГ В ЮРЛ З НАЗВИ СТАТТІ. ЗАГОЛОВОК ПОВИНЕН СОСТОЯТИ ТІЛЬКИ З БУКВ І ПРОБІЛІВ
//нормалізуємо строку
//розбиваємо по словам
//зшиваємо в строку з роздільниками
// const title = 'Top 10 benefits of React framework';
// // const normalizedTitle = title.toLowerCase()
// // console.log(normalizedTitle);
// // const words = normalizedTitle.split(' ');
// // console.log(words);
// // const slug = words.join('-');
// // console.log(slug);

// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);

// ЧЕРЕЗ ФУНКЦІЮ

// const slugify = function(string) {
//     const normalizedString = string.toLowerCase();
//     const words = normalizedString.split(' ');
//     const slug = words.join('-');

//     return slug;
// }

// console.log(slugify('Top 10 benefits of framework'));

// ЧЕРЕЗ ФУНКЦІЮ МАКСИМАЛЬНО СКОРОЧЕНО ЧЕРЕЗ ЧЕЙНІНГ
// const slugify = function(string) {
// return string.toLowerCase().split(' ').join('-');

// }

// console.log(slugify('Top 10 benefits of framework'));


//=================== ARGUMENTS ...ARGS ===================
// const fn = function(...args){
//     console.log(args);
// }

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

///==========НАПИШИ Ф-ЦІЮ ADD для сложенія проізвольної кількості аргументів (чисел). операція ...rest

    // const add = function (...args){
    //     console.log(args);
    //     let total = 0;

    //     for (const arg of args){
    //         total += arg;
    //     }

    //     return total;
    // }

    // console.log(add(1, 2, 3));
    // console.log(add(1, 2, 3, 4, 5, 6));

//написали ф-цію, яка приймає любу кількість чисел як аргументів і повертає їхню загальну суму. В ЗОШИТІ

// let counter = 10;
// console.log(++counter)
// console.log(++counter)


// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }



// function sum(a, b){
//   return a + b;
// }
// console.log(sum(5, 10))

// function filterArray(numbers, value) {
//   // Change code below this line
// const array = [];
//  for (const number of numbers){
//    if (number > value){
//     array.push(number)
//    }
//  }

// return array;
//  // Change code above this line
// }

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[fruits.length - 1];
// console.log(lastElementIndex);
// console.log(lastElement);


//======================================================================================

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
// const word = message.split(' ');
//  console.log(word);
//  const quantity = word.length;
// console.log(quantity);

//   // Change code above this line
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);


// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
// const word = message.split(' ');
//  return word.length * pricePerWord;
//  // const quantity = word.length;
//  // const total = quantity * pricePerWord;
//  // return total;


//   // Change code above this line
// }


// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
// let newArray = firstArray.concat(secondArray);
// if (newArray.length > maxLength){
// newArray = newArray.slice(0, maxLength)
// }
// console.log(newArray);
//   // Change code above this line
// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)  //["Mango", "Poly", "Ajax"]
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) // ["Mango", "Poly", "Houston", "Ajax"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)

// function multiply(a, b, c){
//   console.log(a * b * c);
// }

// multiply(2, 3, 5); // Результат множення дорівнює 30


// // 1. Оголошення параметрів x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// // 2. Передача аргументів
// multiply(2, 3, 5); // Результат множення дорівнює 30
// multiply(4, 8, 12); // Результат множення дорівнює 384
// multiply(17, 6, 25); // Результат множення дорівнює 2550


// function calculateTotal(number) {
//   // Change code below this line
//  let totalNumber = 0;
//    for(let i = 1; i <= number; i += 1){
//      totalNumber += i;
//    }
//  return totalNumber
 
//    // Change code above this line
//  }
//  console.log(calculateTotal(7)) //повертає 1

// const clients = ["Mango", "Ajax", "Poly", 'Julia', 'Alex'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (const value of order){
//   total += value;
// }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]))

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// function findLongestWord(string) {
//   // Change code below this line
// const wordsArray = string.split(' ');
// // console.log(wordsArray);

// let longestWord = '';// чтобы было с чем сравнивать, мы задаем лонгестворд для этого, и будем начинать сравнение с нулевого индекса
// // console.log(longestWord)
// for(const word of wordsArray){
//   if (longestWord.length < word.length){
//     longestWord = word;
//   }
  
// }
// console.log(longestWord)
//   // Change code above this line
// }

// findLongestWord("The quick brown fox jumped over the lazy dog")

//===============================================================================================

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for(let i = min; i <= max; i += 1){
//     if (i <= max) {
//       numbers.push(i)
//     }
// }
//   // Change code above this line
//   return numbers;
// }



// //1.делаю цикл фор, которій будет перебирать масив поелеметно от мин до макс.
// //2.на кожній ітерації до масиву намбер додається число (елемент) з циклу, використовуючи метод пуш
// //
// //


//===============================================================================================


//=======================20/32========================================================================

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//   for (let i = 0; i < order.length; i += 1 ){
//     total += order[i];
//   }
  
//     // Change code above this line
//     return total;
//   }
  