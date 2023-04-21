// // 1. Оголошення функції multiply
// function multiply(hello) {
//     // Тіло функції
//     console.log("Це лог на момент виклику функції multiply");
//   }
  
//   // 2. Виклики функції multiply
//   multiply(); // 'Це лог на момент виклику функції multiply'
//   multiply(); // 'Це лог на момент виклику функції multiply'
//   multiply(); // 'Це лог на момент виклику функції multiply'

//========================ПОВЕРНЕННЯ ЗНАЧЕННЯ==============================
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

//========================ПСЕВДОМАСИВ ARGUMENTS==============================

// function multiply() {
//     let total = 1;
  
//     for (const argument of arguments) {
//       total *= argument;
//     }
  
//     return total;
//   }
  
//   console.log(multiply(1, 2, 3)); //  6
//   console.log(multiply(1, 2, 3, 4)); //  24
//   console.log(multiply(1, 2, 3, 4, 5)); //  120

//========================ПАТТЕРН РАННЕ ПОВЕРНЕННЯ ==============================

// function withdraw(amount, balance) {
//     // Якщо умова виконується, викликається console.log
//     // і вихід із функції. Код після тіла if не виконається.
//     if (amount === 0) {
//       console.log("Для проведення операції введіть суму більшу за нуль");
//       return;
//     }
  
//     // Якщо умова першого if не виконалась, його тіло пропускається
//     // та інтерпретатор доходе до другого if.
//     // Якщо умова виконується, викликається console.log і вихід із функції.
//     // Код, що знаходиться після тіла if, не виконається.
//     if (amount > balance) {
//       console.log("Недостатньо коштів на рахунку");
//       return;
//     }
  
//     // Якщо жоден із попередніх if не виконався,
//     // інтерпретатор доходить до цього коду і виконує його.
//     console.log("Операція зняття коштів проведена");
//   }
  
//   withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
//   withdraw(500, 300); // "Недостатньо коштів на рахунку"
//   withdraw(100, 300); // "Операція зняття коштів проведена"

//========================Глобальна область видимості ==============================
// const globalValue = 10;

// console.log(globalValue); // 10

// function foo() {
//   console.log(globalValue); // 10
// }

// for (let i = 0; i < 5; i++) {
//   console.log(globalValue); // 10

//   if (i === 2) {
//     console.log(globalValue); // 10
//   }
// }

//========================БЛОКОВА область видимості ==============================
// function foo() {
//     const a = 20;
//     console.log(a); // 20
  
//     for (let i = 0; i < 5; i++) {
//       console.log(a); // 20
  
//       if (i === 2) {
//         console.log(a); // 20
//       }
//     }
//   }
  
// //   // ❌ Помилка! Змінна a - недоступна у глобальній області видимості
// //   console.log(a);
  
// //   for (let i = 0; i < 3; i++) {
// //     // ❌ Помилка! Змінна a - недоступна в цій області видимості
// //     console.log(a);
// //   }

//========================Стек викликів ==============================
// function fnA() {
//     console.log("Лог всередині функції fnA до виклику fnB");
//     fnB();
//     console.log("Лог всередині функції fnA після виклику fnB");
//   }
  
//   function fnB() {
//     console.log("Лог всередині функції fnB");
//   }
  
//   console.log("Лог до виклику fnA");
//   fnA();
//   console.log("Лог після виклику fnA");
  
  // "Лог до виклику fnA"
  // "Лог всередині функції fnA до виклику fnB"
  // "Лог всередині функції fnB"
  // "Лог всередині функції fnA після виклику fnB"
  // "Лог після виклику fnA"

  //======================== М А С И В И ==============================

  // const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
  // console.table(friends);
  // const lastIndex = friends.length - 1;
  // console.log(lastIndex);

  // friends[0] = 'Bananas'; //записуємо в масив банан замість Полі

  // console.table(friends);


  // let a = 10;
  // let b = a;

  // console.log('log a: ', a);
  // console.log('log b: ', b);

  // a = 20;

  // console.log('log a: ', a);
  // console.log('log b: ', b);

    //======================== ЦИКЛ FOR ==============================

    // const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
    // const lastIndex = friends.length - 1;
    // for (let i = 0; i <= lastIndex; i += 1){
    //   console.log(friends[i]);
    // }
    
    //======================== ЦИКЛ FOR OF==============================
    // const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
    // for(const friend of friends){
    //   console.log(friend);
    // }

    //======================== ЗДЧ ПОРАХУВАТИ ЗАГАЛЬНУ СУММУ ПОКУПОК У КОРЗИНІ ч-з FOR ==============================
//1 перебрати масив поелементно через фор
//2 зробити змінну тотал до цикла
//3 кожний ел-т приплюсувати до тотал

//     const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1){
//   console.log(cart[i])
//   total = total + cart[i]; //total += cart[i]
// }

// console.log('Total: ', total)

    //======================== ЗДЧ ПОРАХУВАТИ ЗАГАЛЬНУ СУММУ ПОКУПОК У КОРЗИНІ ч-з FOR OF ==============================
    // const cart = [54, 28, 105, 70, 92, 17, 120];
    // let total = 0;
    // for (const value of cart){
    //   total += value;
    // }
    // console.log('Total: ', total);

        //======================== ЗДЧ ПОРАХУВАТИ ЗАГАЛЬНУ СУММУ ПОКУПОК У КОРЗИНІ ДОДАТИ ПОДАТОК ==============================
        // const cart = [54, 28, 105, 70, 92, 17, 120];
        // for(let i = 0; i < cart.length; i += 1){
        //   cart[i] = Math.round(cart[i] *= 1.1);
          
        // }
        // console.log(cart);

                //======================== ЗДЧ НАПИШИ СКРИПТ, який підраховує сумму всіх чотних чисел в масиві  ==============================

//1. робимо змінну тотал, щоб починати з нуля і мати привязку до цифр
//2. перебираємо масив
//3. на кожній ітерації перевірити елемент на четность
//4. якщо елемент чотний - записуємо в тотал
// const numbers = [1, 5 , 8, 9, 12, 4, 15, 27, 30, 8, 11, 14];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1){
//   const number = numbers[i]; //щоб код був більш читабельнішим задаемо numbers[i] назву number і використовуємо її
//   console.log(number);
//   if (number % 2 === 0){
//     console.log('четное');
//     total = total + number;
//   }
// }

// console.log(total)

//======================== ЗДЧ НАПИШИ СКРИПТ, який підраховує сумму всіх чотних чисел в масиві  =======Ч-З FOR OF=======================
// const numbers = [1, 5 , 8, 9, 12, 4, 15, 27, 30, 8, 11, 14];
// let total = 0;

// for(const number of numbers){
//   // console.log(number); //цей консоль лог буде виконуватись на кожній ітерації, оскільки умова "четное" стоїть тільки нижче у іф
//   if (number % 2 === 0){
//         console.log(`${number} - четное`);
//         total = total + number;
// }
// }
// console.log('Total: ', total)

//============ПОПЕРЕДНЯ ЗДЧ "ЛОГІКА ВІД ОБРАТНОГО"===========
// const numbers = [1, 5 , 8, 9, 12, 4, 15, 27, 30, 8, 11, 14];
// let total = 0;

// for (const number of numbers){
//   if (number % 2 !== 0){
//     console.log("НЕ ЧЕТНОЕ - ПРОПУСКАЕМ", number);
//     total += number;
//     continue;
//   }
//   console.log("ЧЕТНОЕ - ЗАПИСЫВАЕМ", number)
//   total += number;
// }

// console.log(total);

//================================ ЗДЧ 11/32 модуль 2================
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
// const vasia = message.split(" ");//вася создал массив из слов (разбил предложение на слова и сделал массив из слов)
// console.log(vasia);
// const petia = vasia.length; //петя узнает длину массива. длина массива - это кол-во наших элементов (слов)
// console.log(petia);
// const kolia = petia * pricePerWord;
// console.log(kolia);
// return kolia;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10))

//================================ ЗДЧ модуль 2 1:14:00
//напиши скрипт логина поиска.
//если логина нет - пользователь ... не найден
//если логин есть - пользователь ... найден

// ЧЕРЕЗ FOR

// const logins = ['mmmmomommo', 'kokokokoko', 'tutututut', 'popopopopo'];
// const loginToFind = 'kokokokoko';
// let message = `пользователь ${loginToFind} не найден`; //якщо одразу є негативне повідомлення - вписуємо його одразу. 

// for(let i = 0; i < logins.length; i += 1){
//   const login = logins[i];
//   if (login === loginToFind){
//     message = `пользователь ${loginToFind} найден`;
//     break;
//   }
// }

// console.log(message)

// ЧЕРЕЗ FOR OF

// const logins = ['mmmmomommo', 'kokokokoko', 'tutututut', 'popopopopo'];
// const loginToFind = 'tutututut';
// let message = `пользователь ${loginToFind} не найден`; //якщо одразу є негативне повідомлення - вписуємо його одразу. 

// for (const login of logins){
// console.log(`login: `, login);
// console.log(`${login} === ${loginToFind}: `, login === loginToFind);
// if (login === loginToFind){
//   message = `пользователь ${loginToFind} найден`;
//   break;
// }
// }
// console.log(message);

// ЧЕРЕЗ INCLUDES + ТЕРНАРНИЙ ОПЕРАТОР
// const logins = ['mmmmomommo', 'kokokokoko', 'tutututut', 'popopopopo'];
// const loginToFind = 'tutututut';

// const message = logins.includes(loginToFind) ? `пользователь ${loginToFind} найден` : `пользователь ${loginToFind} НЕ найден`;

// console.log(message);

//================================ НАПИШИ СКРИПТ ПОШУКА САМОГО МАЛЕНЬКОГО ЧИСЛА В МАСИВІ, ПРИ УМОВІ, ЩО ЧИСЛА УНІКАЛЬНІ
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers){
//   if (number < smallestNumber){
//     smallestNumber = number;
//   }
// }
// console.log(`smallestNumber: `, smallestNumber) 

//================================ НАПИШИ СКРИПТ ПОШУКА САМОГО МАЛЕНЬКОГО ЧИСЛА В МАСИВІ, ПРИ УМОВІ, ЩО ЧИСЛА УНІКАЛЬНІ
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers){
//   if (number < smallestNumber){
//     smallestNumber = number
//   }
// }

// console.log(smallestNumber)

//================================ НАПИШИ СКРИПТ КОТРИЙ ОБЄДНУЄ ВСІ ЕЛ-ТИ МАСИВА В ОДНЕ СТРОКОВЕ ЗНАЧЕННЯ
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for(const friend of friends){
//   string += friend + ',';
// }
// string = string.slice(0, string.length - 1);

// console.log(string)


//===================JOIN============= НАПИШИ СКРИПТ КОТРИЙ ОБЄДНУЄ ВСІ ЕЛ-ТИ МАСИВА В ОДНЕ СТРОКОВЕ ЗНАЧЕННЯ
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// const string = friends.join(',');
// console.log(string)


//===================FOR OF============= НАПИШИ СКРИПТ КОТРИЙ ЗАМІНЯЄ РЕГІСТР КОЖНОГО СИМВОЛА В РЯДКУ НА ПРОТИЛЕЖНИЙ.
// const string = 'JavaScript';
// const letters = string.split(''); //розбиваемо джаваскрипт на літери (розбиваємо строку на масиви)
// let invertedString = '';

// console.log(letters)

// for(const letter of letters){
//   console.log(letter)
//   if (letter === letter.toLowerCase()){
//     console.log('ця буква в нижньому регістрі: ', letter);
//     invertedString += letter.toUpperCase();
//   } else {
//     console.log('ця буква в верхньому регістрі: ', letter);
//     invertedString += letter.toLowerCase();
//   }
// }

// console.log(invertedString);

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

// console.log('invertedString:', invertedString);

//можна цю строку записати більш правильно //   invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
//const isEqual = letter === letter.toLowerCase();
// invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();

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

//===========concat + for of===================== НАПИШИ СКРИПТ КОТРИЙ ПОРАХУЄ СУМУ ЕЛ-ТІВ ДВУХ МАСИВІВ
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers){
//   total = total + number;
// }

// console.log(total);

//===========indexOf===================== ВИДАЛЕННЯ ПО ІНДЕКСУ
// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
// ];

// console.table(cards);

// const cardToRemowe = 'Карточка-3';
// const index = cards.indexOf(cardToRemowe);
// console.log(index)

// cards.splice(index, 1);
// console.table(cards);

