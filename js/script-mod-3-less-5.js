// const propName = "name";
// const user = {
//   age: 25,
//   // Ім'я цієї властивості буде взяте зі значення змінної propName
//   [propName]: "Генрі Сибола",
// };

// console.log(user.name); // 'Генрі Сибола'
// console.log(user.age);

// // ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     console.log("Цей метод буде повертати всі книги - властивість books");
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
// };

// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook("Нова книга");

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед крапкою знаходиться об'єкт bookShelf,
// // тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }



// const animal = {
//     legs: 4,
//   };
//   const dog = Object.create(animal);
//   dog.name = "Манго";
  
//   console.log(dog); // {name: 'Манго'}
//   console.log(dog.name); // 'Манго'
//   console.log(dog.legs); // 4

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     // Якщо це власна властивість - виконуємо тіло if
//     if (book.hasOwnProperty(key)) {
//       console.log(key);
//       console.log(book[key]);
//     }
  
//     // Якщо це невласна властивість - нічого не робимо
//   }

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'genres', 'rating']


//   const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
  
//   for (const key of keys) {
//     // Ключ
//     console.log(key);
//     // Значення властивості
//     console.log(book[key]);
//   }
  
  //Ми перебираємо масив ключів об'єкта і на кожній ітерації отримуємо значення властивості з таким ключем.


//   const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На березі спокійних вод",
//       author: "Роберт Шеклі",
//       rating: 8.51,
//     },
//     {
//       title: "Сон смішної людини",
//       author: "Федір Достоєвський",
//       rating: 7.75,
//     },
//   ];


//   for (const book of books) {
//     // Об'єкт книги
//     console.log(book);
//     // Назва
//     console.log(book.title);
//     // Автор
//     console.log(book.author);
//     // Рейтинг
//         console.log(book.rating);
//   }


//=============================================ЗАДАЧА З КОНСПЕКТУ ===========================================
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На березі спокійних вод",
//       author: "Роберт Шеклі",
//       rating: 8.51,
//     },
//     {
//       title: "Сон смішної людини",
//       author: "Федір Достоєвський",
//       rating: 7.75,
//     },
//   ];

// //===========================Для перебирання такого масиву використовується стандартний цикл for...of. 

//   for (const book of books) {
//     // Об'єкт книги
//     console.log(book);
//     // Назва
//     console.log(book.title);
//     // Автор
//     console.log(book.author);
//     // Рейтинг
//     console.log(book.rating);
//   }

// //===========================Наприклад, отримаємо список назв усіх книг в колекції books.
// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames); // ["The Last Kingdom", "На березі спокійних вод", "Сон смішної людини"]


// //===========================Дізнаємося середній рейтинг усієї нашої колекції.
// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2


//==================================================
// const temps = [14, -4, 25, 8, 11];

// // В консолі буде масив
// console.log(temps);
// console.log(...temps); // // В консолі буде набір окремих чисел
// console.log(Math.max(...temps)); // 25 // ✅ Розподілимо колекцію елементів у якості окремих аргументів

//==================================================
// function multiply(...args) {
//     console.log(args); // масив усіх аргументів
//   }
  
//   multiply(1, 2);
//   multiply(1, 2, 3);
//   multiply(1, 2, 3, 4);
//==================================================
// function multiply(firstNumber, secondNumber, ...otherArgs) {
//     console.log(firstNumber); // Значення першого аргументу
//     console.log(secondNumber); // Значення другого аргументу
//     console.log(otherArgs); // Масив інших аргументів
//   }
  
//   multiply(1, 2);
//   multiply(1, 2, 3);
//   multiply(1, 2, 3, 4);

//==================================================
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   // Деструктуризуємо
//   const { title, author, isPublic, rating, coverImage } = book;
//   console.log(coverImage); // undefined
  
//   const accessType = isPublic ? "публічному" : "закритому";
//   const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;
//   console.log(message)

//==================================================

//   const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   const accessType = book.isPublic ? "публічному" : "закритому";
//   const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType} доступі.`;
//   console.log(message)

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//   };
  
//   // Додамо зображення обкладинки, якщо воно відсутнє в об'єкті книги
//   const {
//     title,
//     coverImage = "https://via.placeholder.com/640/480",
//     author,
//   } = book;
  
//   console.log(title); // The Last Kingdom
//   console.log(author); // Bernard Cornwell
//   console.log(coverImage); // https://via.placeholder.com/640/480

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   }, 
//   owner = {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   };


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for(const keys in apartment){
//   console.log(keys);
// console.log(apartment[keys]);
// }



  // const book = {
  //   title: "The Last Kingdom",
  //   author: "Bernard Cornwell",
  //   genres: ["historical prose", "adventure"],
  //   rating: 8.38,
  // };
  
  // for (const key in book) {
  //   // Ключ
  //   console.log(key);
  //   // Значення властивості з таким ключем
  //   console.log(book[key]);
  // }


  // const apartment = {
  //   descr: "Spacious apartment in the city center",
  //   rating: 4,
  //   price: 2153,
  // };
  // const values = [];
  // // Change code below this line
  // const keys = Object.keys(apartment);
  // console.log(keys)
  // for (const value of values){

  //  console.log(value);
  //   console.log(apartment[value]);
  // }
  
//   const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   console.log(apartment);

//   for (const value of values){
//   console.log(value);
//   }
  

//   const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   // console.log(book.title);
//   // console.log(book.author);
//   // console.log(book.rating);
// }

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }


// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line


//   for (const key in salaries) {
//     // Ключ
//     console.log(key);
//     // Значення властивості з таким ключем
//     console.log(salaries[key]);
//   }
//   // Change code above this line
//   return totalSalary;
// }

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 })


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for (const name of products){
//   console.log(name)
// }

// return price;
//   // Change code above this line
// }

// const propName = "UserName";
// const user = {
//   age: 25,
//   [propName]: "Henry Sibola",
// }

// console.log(user); 

// const user = {
//   name: 'John',
//   surname: 'Smith',
//   age: 29,
// }

// for(const values in user){
//   console.log(values, user[values])
// }

// const user = {
//   name: 'Mango',
//   age: 28,
//   hobby: 'html',
//   premium: true,
// }

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = 'false';

// const userKeys = Object.keys(user);
// for (const userKey of userKeys){
// console.log(`${userKey} : ${user[userKey]}`)
// }



// const stones = [
//   {name: 'Smaragd', price: 1300, quantity: 4},
//   {name: 'Diamant', price: 2700, quantity: 3},
//   {name: 'Sapfir', price: 400, quantity: 7},
//   {name: 'Shebin', price: 200, quantity: 2},
// ];

// calcTotalPrice(stones, 'Diamant');

// function calcTotalPrice (stones, stoneName){
//   let stoneTarget;

//   for (const stone of stones){
//     if (stone.name === stoneName){
//       stoneTarget = stone;
//       break;
      
//     }
    
//   }
//   console.log(stoneTarget)
// }



// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {colors: hex, colors: rgb} of colors) {
 
//   // hexColors.push(color.hex);
//   // rgbColors.push(color.rgb);
// }

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
// ];

// for (const {title, author, rating} of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }


//======================================= 24 /41 =======================================
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }


//==============================destructurisation

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {
 
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

//============================

// function foo ({ username } = {
  
// }){
//   console.log(username);
// }

// foo({username})

// function foo (a, b, c, ...args){
//   // console.log(args)
// }
// foo(1, 2, 3, 4, 5)


//============================

