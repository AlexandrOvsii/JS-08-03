// ========= alert ==========

// console.log('before');
// alert('alert');
// console.log('after');

// ========= confirm ==========

// const shouldRenew = confirm('бажаєте продовжити підписку?');
// console.log(shouldRenew);

// ========= confirm с переменной ==========

// const message = 'бажаєте продовжити підписку?';
// const shouldRenew = confirm(message);
// console.log(shouldRenew);

// ========= promt ==========
// let quantity = prompt("введіть кількість товарів");
// console.log(quantity);
// console.log(typeof quantity);

// ========= promt з переводом стринг у намбер ==========

// let quantity = prompt("введіть кількість товарів");
// quantity = Number(quantity); //йде преобразування типу і воно переведе у намбер, якщо буде можливість для цього
// console.log(quantity);
// console.log(typeof quantity);

// ------------------------------------------------------------------------------------------------------------------------------

//!!!Цифри
// ====parseInt===== робимо из '50px' число 50 -> parseInt Парсити цілочисленну частину (тільки ціле число) ==========
// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth); //воно буде парсити тільки ціле число

// console.log(result); //результатом typeof буде number

//? якщо нам потрібно у цю змінну присвоїти нове значення ?

// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth); //а тепер на цьому рядку, в нього ж, запиши результат parseInt над його попереднім значенням
// console.log('elementWidth: ', elementWidth); //тепер 50 як число.

// ====parseFloat===== робимо из '50px' число 50 -> parseFloat Парсити числову і дробову частину (до символів (до літер)) ==========

// let elementHeight = '200.74px'
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight: ', elementHeight);

//=====toFixed=====
// const salary = 1300.1654;
// //треба відсікти цифри після крапки і зробити їх дві.
// //викликається на самому числі (парсе викликаються на намбері)
// console.log(salary.toFixed()); //значення змінилося і стало без дробу і залишилося строкою (стрінг)
// console.log(salary); //значення змінилося тільки в консолі

//змінюємо данні саларі

// let salary = 1300.1654;
// salary = salary.toFixed(2); //ми конкретно змінили і задали кількість цифр після крапки
// salary = Number(salary); // ми конкретно змінили строку на намбер

// console.log(salary);

//оптимізовуємо останню задачу по принципу "мотрі, починаючи з самої маленької". Принцип читання коду інтерпретатором: код читається з глубини (інфо)
// let salary = 1300.1645;
// salary = Number(salary.toFixed(2)); //salary.toFixed(2) - порахується як 1300.16, потім на цьому ж рядку викликається намбер і в саларі запишеться 1300.16
// console.log(salary);

//=====ПРИВЕДЕННЯ РЯДКА ДО ЧИСЛА =====

// let quantity = '30';
// let value = 'цей рядок неможливо привести до числа';

// console.log(Number(quantity)); //цей рядок перевів рядок 30 у число 30
// console.log(Number(value)); //цей рядок написав НаН, оскільки літерний рядок неможливо перевести у цифри.

//=====ПРИВЕДЕННЯ ДО СТУПЕНЯ Math.pow()=====

// const base = 2; // base - це число, яке хочемо привести до ступеня
// const power = 5; // power - це ступень, до якої ми хочемо привести число (base)

// const result = Math.pow(2, 5); //(замість цифр сюди можна підставити слова base i power); (замість коми можна записати 2 ** 5 - це експонент)
// console.log(result); //(замість result можна записати 2 ** 5 (base ** power) - це експонент, який повністю заміняє Math.pow(2, 5))

//===== ЗАДАЧА РЕПЕТИ 1 =====
//напиши скрипт, який просить користувача ввести число і ступень, возводить число в цю ступень і виводить результат в консоль.

//алгоритм роботи
// 1. попросити ввести число і зберегти в змінну
// let base = prompt('введи число');
// base = Number(base); //переводимо зі строки у намбер.
// // 2. попросити ввести ступень і зберегти в змінну
// let power = prompt('введи ступінь');
// power = Number(power);
// // 3. взвести введені дані в ступень і вивести
// const result = base ** power;
// console.log(result);

//===== ГЕНЕРУЄМО ЧИСЛО =====
//формула генерації чисел = Math.random() * (max - min) + min

// const max = 50;
// const min = 20;

// const result = Math.random() * (max - min) + min;  //спочатку те, що у дужках, потім Math.random() * (max - min), потім + min (принцип морті) і потім результат цього всього округлюється Math.round

// console.log(result);

//щоб зробити, щоб число рандомилось цілим - використовуємо Math.round

// const max = 50;
// const min = 20;

// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);

// ------------------------------------------------С-Т-Р-О-К-И-------------------------------------------------------------------------

//КОНКАТЕНАЦІЯ СТРОК
// const firstName = 'Sasha';
// const lastName = 'Ovsiy';

// const fullName = firstName + ' ' + lastName; //добавляємо ' ' між двома змінними, оскільки без такого пустого момента фулнейм буде написан разом.
// console.log(fullName);

//АЛЕ КРАЩЕ БУДЕ ЦЕ ЗРОБИТИ ЧЕРЕЗ TEMPELATE STRING

// const fullName = `${firstName} ${lastName}`;
// console.log(fullName);

//З А Д А Ч А
//НАПИШИ СКРИПТ, ЯКИЙ ВИВЕДЕ РЯДОК У ФОРМАТІ: "ГІСТЬ Х У ПОСЕЛЯЄТЬСЯ У Z НОМЕР Q", ПІДСТАВИВ ЗАМІСТЬ X Y Z Q ЗНАЧЕННЯ ЗМІННИХ.

// const firstName = "X";
// const lastName = "Y";
// const room = 716;
// const type = "VIP";

// /в №1 = йде перевизначення месседж
// let message = `ГІСТЬ ${firstName} ${lastName} ПОСЕЛЯЄТЬСЯ У ${room} НОМЕР ${type}`;
// message = message.toLowerCase();
// console.log(message);

//в №2 = йде ловеркейсом тільки у консоль, без перевизначення.
// const message = `ГІСТЬ ${firstName} ${lastName} ПОСЕЛЯЄТЬСЯ У ${room} НОМЕР ${type}`;
// console.log(message.toLowerCase());

//------------

// let brand = 'samSUng'; //our stroke
// console.log(brand[3]); //ми можемо звернутись до любого символа строки; вказуємо ім'я змінної - brand, ставимо після нього [] і в ньому прописуємо індекс.
//індекс, це під яким індексом стоїть літера
//робимо нормалізацію всього, окрім першої літери
// console.log(brand.slice(1).toLowerCase()); //спочатку у бренда викликався слайс, а потім все остальне окрім першого символа зробилось ловеркейс

// brand = brand[0] + brand.slice(1).toLowerCase(); //що ми вказуємо: бренд, спочатку зніми нам першу літеру + з наступною частиною ми робимо ловеркейс.
// console.log(brand);
//другими словами, взяли первый символ, его не меняем, а потом после первого, все приводим к нижнему регистру.

//-----ПОИСК В СТРОКЕ МЕТОДОМ INCLUDES()-------
// const blackListedWord1 = "спам";
// const blackListedWord2 = "распродажа";

// const string1 = "привет, заебал меня этот спам";
// const string2 = "привет, РАСПРОДАЖА - ДЕРЬМО";
// const string3 = "рекламная кампания";

// console.log(string1.includes(blackListedWord1)); //перевіряємо кожну строку на присутність слів, які ми записали собі у спам
// console.log(string1.includes(blackListedWord2)); //перевіряємо кожну строку на присутність слів, які ми записали собі у спам

// console.log(string2.includes(blackListedWord1)); //перевіряємо кожну строку на присутність слів, які ми записали собі у спам
// const normalizedString2 = string2.toLowerCase(); //нормалізуємо строку 2 у ловеркейс і переводимо його у нижній регістр.
// console.log(string2.toLowerCase().includes(blackListedWord2)); //перевіряємо кожну строку на присутність слів, які ми записали собі у спам

// console.log(string3.includes(blackListedWord1)); //перевіряємо кожну строку на присутність слів, які ми записали собі у спам
// console.log(string3.includes(blackListedWord2)); //перевіряємо кожну строку на присутність слів, які ми записали собі у спам

//-----------------------------------------ОПЕРАТОРИ ПОРІВНЯННЯ-------------------------------------------------------------------------------------

// console.log(!0);

//ЗАДАЧА РЕПЕТА 2:46:40
// let balance = 10000;
// const payment = 2000;

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 3;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1){
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
// console.log(`ЗП работника номер ${i} - ${salary}`);
// totalSalary += salary;
// }

// console.log('totalSalary: ', totalSalary)

//----------------------------Задача модуль 1, зан. 2 Репета 49:01----------------------------------------------------------
// //робимо змінні
// const min = 6;
// const max = 13;
// let total = 0;
// //фор от мин до мах з кроком 1
// for (let i = min; i <= max; i += 1){
//     console.log(i);
//     //перевіряємо залишок від ділення
//     if(i % 2 === 0){
//         console.log('четное: ', i);
//         total += i;
//     } if(i % 2 !== 0){
//         console.log('НЕчетное: ', i);
//     }
// }

// console.log('total: ', total);
// //пишемо в суму


// //робимо змінні
// const min = 6;
// const max = 13;
// let total = 0;
// //фор от мин до мах з кроком 1
// for (let i = min; i <= max; i += 1){
//     // console.log(i);
//     //перевіряємо залишок від ділення
//     if(i % 2 === 0){
//         console.log('четное: ', i);
//         //пишемо в суму
//         total += i;
//     }
// }

// console.log('total: ', total);

// ----------------------------Задача модуль 1, зан. 2 Репета 49:01 - ЛОГІКА ВІД ЗВОРОТНЬОГО----------------------------------------------------------
// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1){
// if (i % 2 !== 0){
//     console.log('Не четное: ', i);
//     continue;
// }
// console.log('Четное: ', i);
// total += i;
// }
// console.log('total: ', total);

// const number = 50;
// let total = 0;
// for (let i = 0; i < number; i += 1){
//     if (i % 2 === 0){ //цей іф буде виконуватись по парним числам
//         continue;//
//     }
//     console.log('НЕпарні і: ', i)//цей консоль покаже всі непарні
//     total += i;
// }
// console.log('total: ', total);

//якщо замінити у іф === на !==, то він буде показувати непарні числа, а у консолі навпаки парні (тільки треба змінити слово на парні)

// -------------------------------------------------------------------------------------------------------------------------------------

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const a = ["Mango"];
// // Оскільки a - це масив, в b записується посилання на вже існуючий
// // масив в пам'яті. Тепер a і b вказують на той самий масив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Змінимо масив, додавши ще один елемент, використовуючи вказівник з a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// // b також змінилось, тому що b, як і a,
// // просто містить посилання на те ж саме місце в пам'яті
// console.log(b); // ["Mango", "Poly"]

// // Результат повторюється
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]


// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(2, 3)); // ["Ajax", "Poly"]   