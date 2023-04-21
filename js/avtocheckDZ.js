
//======ЯК ПРАВИЛЬНО ЗРОБИТИ????============13/32 ==================== 
// function slugify(title) {
//   // Change code below this line
// const addaptArray = title.split(" ");
//     const slugify = slugify.toLowerCase();
//   const slug = addaptArray.join("-")
//   return slugify;
//   // Change code above this line
// }

//======РІШЕННЯ============13/32 ==================== 
// function slugify(title) {
//   // Change code below this line
//   const slug = title.toLowerCase().split(' ').join('-');
  
// return title.toLowerCase().split(' ').join('-');
//   // Change code above this line
// }

//==================16/32 ====================
//Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних 
//firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

//Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. 
//В іншому випадку функція повинна повернути новий масив повністю.

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
// const newArray = firstArray.concat(secondArray);
// if (newArray.length > maxLength){
//   return newArray.slice(0, maxLength);
// }
// return newArray

//   // Change code above this line
// }

//==================17/32 =====ЧОМУ ТРЕБА ВКАЗУВАТИ СТАРТ І ЕНД ЗАМІСТЬ 3 І 7?===============
//Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

//==================18/32 =====
//Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих 
//чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//     // Change code below this line
//    let totalNumber = 0;
//      for (let i = 1; i <= number; i += 1){
//        totalNumber += i;
//      }
//    return totalNumber;
   
//      // Change code above this line
//    }

//==================19/32 =====
//Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

//==================21/32 =====
// function findLongestWord(string) {
//     // Change code below this line
//       const stringSplit = string.split(' ');
//       let longestWord = '';
//       for (const word of stringSplit) {
//           if (word.length > longestWord.length) {
//               longestWord = word;
//           }
//       }
//       return longestWord;
//     // Change code above this line
//   }

//==================22/32 =====
//==================23/32 =====
//==================24/32 =====
//==================25/32 =====
//==================26/32 =====
//==================27/32 =====
//==================28/32 =====
//==================29/32 =====
//==================30/32 =====
//==================31/32 =====


    //========ПЕРЕПИСАТИ НЕ ЧЕРЕЗ isIt==========32/32 =====
    // function includes(array, value) {
    //     // Change code below this line
    //       let isIt = '';
    //       for (const checkingValue of array) {
    //           isIt = checkingValue == value;
    //           if (isIt) {
    //               break;
    //           }
    //       }
    //       return isIt;
    //     // Change code above this line
    //   }





//======================================================= MODULE 3 ============================================
//==================14/41 =====
// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
  
//     for (const key in object) {
//       if (object.hasOwnProperty(key)) {
//         propCount += 1;
//       }
//     }
  
//     return propCount;
//     // Change code above this line
//   }
  
// //===РЕШНИЕ======================
//     function countProps(object) {
//         // Change code below this line
      
//         return Object.keys(object).length
      
//         // Change code above this line
//       }

//======================================================= MODULE 2 ===Завдання 21/32=========================================
// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), 
//і повертає найдовше слово в цьому рядку.

// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення


// function findLongestWord(string) {
//     // Change code below this line
//   const wordsArray = string.split(' '); //задаємо нову константу масив слів wordsArray, що складається тільки зі слів зі строки, розділених пробілом 
  
//   let longestWord = wordsArray[0]; //задаємо найдовше слово longestWord, яке дорівнює масиву слів починаючи з першого ел-та масиву wordsArray[0]
  
//   for(const word of wordsArray){ //цикл фор оф - перебираємо слова з масиву слів
//     if (longestWord.length < word.length){//якшо довжина найдовшого слова більше довжини слова
//       longestWord = word;//то найдовше слово = слово.
//     }
//   }
//   return longestWord;
  
  
//     // Change code above this line
//   }

// function getCommonElements(array1, array2) {
//   // Change code below this line
// const newArray = [];
//   for (const number of array1){
//     if (array2.includes(number)){
//       newArray.push(number)
//     }
//   }
// return newArray

//  // Change code above this line
// }


// getCommonElements([1, 2, 3], [2, 1, 17, 19]) //[1, 2]


// //решить эту задачу через for

// function getCommonElements(array1, array2) {
//   // Change code below this line
// const newArray = [];
// for (let i = 0; i < array1.length; i += 1){
// console.log(i);
// if (array2.includes(array1[i])){
//   newArray.push(array1[i])
// }
// }

// }

// //  // Change code above this line
// // }


// getCommonElements([1, 2, 3], [2, 1, 17, 19]) //[1, 2]
// getCommonElements([1, 2, 3], [2, 4])


// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }


// function getEvenNumbers(start, end) {
//   // Change code below this line
//  let number = [];
// for (let i = start; i <= end; i += 1){
//  if (number % 2 === 0){
//    return number[i]
   
//  }
// }
// console.log(i);

//    // Change code above this line
//  }

//  getEvenNumbers(2, 5) //[2, 4]
// getEvenNumbers(3, 11) //[4, 6, 8, 10]

// const clients = ["Mango", "Ajax", "Poly"];
// console.log(clients.length);


//Маючи цілочисельний масив nums довжини n, потрібно створити масив ans довжини 2n where ans[i] == nums[i] і ans[i + n] == nums[i]for 0 <= i < n
//( індексований 0 ).
//Зокрема, ans це конкатенація двох nums масивів.
//Повернути масив ans .

// const nums = [1,2,1]
// //  Вихід: [1,2,1,1,2,1]
// //  Пояснення: масив ans формується таким чином:
// // - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// // - ans = [1,2,1,1,2,1]
// let result = [];
// for (let i = 0; i < nums.length * 2; i += 1){
// for (let i = 0; i < nums.length * 2; i += 1){
// result.push(nums[i])
// }
// }
// console.log(result);
