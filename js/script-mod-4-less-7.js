// function greet(name) {
//     return `Ласкаво просимо ${name}.`;
//   }
  
//   // Викликаємо функцію greet і виводимо результат у консоль
//   console.log(greet("Манго")); // Ласкаво просимо Манго.
  
//   // Виводимо функцію greet у консоль, не викликаючи її
//   console.log(greet); // ƒ greet() { return `Ласкаво просимо ${name}.`; }

// function greet (name){
//     return `welcome ${name}`
// }
// console.log(greet);
// console.log(greet("Sobaka"));

// Колбек-функція
// function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
//   }
  
//   // Функція вищого порядку
//   function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
//   }
  
//   registerGuest("Манго", greet);

// function processCall(recipient) {
//     // Імітуємо доступність абонента випадковим числом
//     const isRecipientAvailable = Math.random() > 0.5;
  
//     if (!isRecipientAvailable) {
//       console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//       // Логіка активації автовідповідача
//     } else {
//       console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//       // Логіка прийняття дзвінка
//     }
//   }
  
//   processCall("Манго");

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// const add = (...args) => {
//     console.log(args);
//   };
  
//   add(1, 2, 3); // [1, 2, 3]

// function greet(name) {
//   console.log(`Ласкаво просимо ${name}`);
// }

// function registerGuest(name, callback){
//   console.log(`Реєструємо гостя ${name}`);
//   callback(name);
// }
// registerGuest("Mango", greet)

// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall("Манго");

// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(15);

// const numbers = [5, 10, 15, 20, 25];

// // Оголошення функції
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });


// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);


//=============================== example 1 callback of function

// function createPtoduct(obj, callback){
//     const newObj ={
//         ...obj,
//         id: Math.random()
//     }
//     callback(newObj);
// }

// function logProduct(product){
//     console.log(product);
// }

// function logTotalPrice(product){
// //product - { name: 'Apple', price: 20, quantity: 5 }
// console.log(product.price * product.quantity);
// }

// createPtoduct({ name: 'Apple', price: 20, quantity: 5 }, logProduct);
// createPtoduct({ name: 'Apple', price: 20, quantity: 5 }, logTotalPrice);




// function createProduct (obj, callback){
//     const newObj = {
//         ...obj,
//         id: Math.random()
//     }
//     callback(newObj);
// }

// function logProduct(product){
//     console.log(product);
// }

// function logTotalPrice(product){
//     console.log(product.price * product.quantity);
// }



// createProduct({name: 'apple', price: 20, quantity: 5}, logProduct);
// createProduct({name: 'apple', price: 20, quantity: 5}, logTotalPrice);

// Колбек-функція
// function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
//   }
  
//   // Функція вищого порядку
//   function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
//   }
  
//   registerGuest("Манго", greet);

// console.log(
//     each([64, 49, 36, 25, 16], function (value) {
//         return Math.sqrt(value);
//     }),
// );

// console.log(
//     each([64, 49, 36, 25, 16], value => Math.sqrt(value)),
// );

// console.log(
//         each([64, 49, 36, 25, 16], function (value) {
//             return value - 10;
//         }),
//             );

//             console.log(each([64, 49, 36, 25, 16], value => value - 10),);
         

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
//   // Change code below this line
  
//   const result = makePizza();
//   const pointer = (makePizza);
// console.log(pointer);  

// const fnA = function (message, callback){
//     // console.log(message);
//     // console.log(callback);
//     callback(100);
// }

// const fnB = function(number) {
//     console.log('лог при вызове fnB:', number);
// }


// fnA('qweqwe', fnB)

// const doMath = function (a, b, callback){
//     const result = callback(a, b);
//     console.log(result);
// }

// const add = function (x, y){
//     return x + y;
// }

// doMath (2, 3, add)

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
//   // Change code below this line
  
//   const result = makePizza();
//   const pointer = makePizza;
  
//   console.log(result);
//   console.log(pointer);


// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   // Chande code below this line
//   function makeMessage(pizzaName, callback) {
//     console.log(callback(pizzaName));
//     return callback(pizzaName);
//   }
//   makeMessage("Royal Grand", makePizza)
//   makeMessage("Ultracheese", deliverPizza)

// const filter = function (array){
// for(const el of array)
// console.log(el);
// }



// filter ([1, 2, 3, 4, 5])
// filter ([1, 2, 3, 4, 5, 6, 7, 8])


// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return bookShelf.books;
//   },
//   addBook(bookName) {
//     bookShelf.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']


// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
// firstArray.forEach(function (firstArray){
//   if(secondArray.includes(firstArray){
//     commonElements.push(firstArray)
//   })
// })
  
//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   return commonElements;
//   // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 1, 17, 19])

// const dirtyMultiply = (array, value) => {
//     for (let i = 0; i < array.length; i += 1) {
//       array[i] = array[i] * value;
//     }
//   };
  
//   const numbers = [1, 2, 3, 4, 5];
//   dirtyMultiply(numbers, 2);
//   // Відбулася мутація вихідних даних - масиву numbers
//   console.log(numbers); // [2, 4, 6, 8, 10]

// const users = [{
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }];
// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//     // return users.filter(user => user.friends.includes(friendName))
//     return users.filter(user => user['friends'].includes(friendName))
// };
// // Change code above this line

// console.log(getUsersWithFriend(users, "Briana Decker"));


// Change code below this line
// const getFriends = (users) => {
//     const allFriends = users.flatMap(user => user.friends)

//     const uniqueFriends = allFriends.filter((friend, index, array) => array.indexOf(friend) === index);  
//     return uniqueFriends
// };
//   // Change code above this line
//   console.log(getFriends(users));

// Change code below this line
// const getActiveUsers = (users) => {
//     return users.filter(user => user.isActive)
//  };
//  // Change code above this line
//  console.log(getActiveUsers(users));

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);


// console.log(firstArray);

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//       title: "The Dreams in the Witch House",
//       author: "Howard Lovecraft",
//       rating: 8.67,
//     },
//   ];
//   const MIN_BOOK_RATING = 8;
//   // Change code below this line
  
//   const names = [...books]
//   console.log(names);
    
  

// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ]

// // Change code below this line
// const getNamesSortedByFriendCount = users => {
//     return [...users].sort((a, b) => a.friends.localeCompare(b.friends));
//  };
//  // Change code above this line

//  getNamesSortedByFriendCount(users)


// const planets = ["Земля", "Марс", "Венера", "Юпітер"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']

// // const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// // console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпітер']

// // Оригінальний масив не змінився
// // console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпітер']\\\


// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//   ];
  
//   for (const book of books) {
//     // console.log(book.title);
//     // console.log(book.author);
//     // console.log(book.rating);
//   }

//   for(const book of books){
//     const {title, author, rating} = book;
//     console.log(title);
//     console.log(author);
//     console.log(rating);
//   }

// for (const {title, author, rating} of books){
//     //     console.log(title);
//     // console.log(author);
//     // console.log(rating);
// }


// const user = {
//     fullName: 'Mango',
//     showName() {
//         console.log('this is: ', this);
//         console.log('name is: ', this.fullName);
//     const inner = () => {
//         console.log('this is inner:', this.fullName);
//     }
//     inner()
//     }
// }

// user.showName()

// Петя біжить швидко, тому що Петя намагається зловити поїзд.
// const petya = {
//     username: "Petya",
//     showName() {
//       console.log(this.username);
//     },
//     addname(newName){
//         this.username.push(newName);
//     },
//   };
  
//   petya.showName();
  