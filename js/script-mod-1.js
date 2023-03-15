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

const firstName = "X";
const lastName = "Y";
const room = 716;
const type = "VIP";

// /в №1 = йде перевизначення месседж
// let message = `ГІСТЬ ${firstName} ${lastName} ПОСЕЛЯЄТЬСЯ У ${room} НОМЕР ${type}`;
// message = message.toLowerCase();
// console.log(message);

//в №2 = йде ловеркейсом тільки у консоль, без перевизначення.
const message = `ГІСТЬ ${firstName} ${lastName} ПОСЕЛЯЄТЬСЯ У ${room} НОМЕР ${type}`;
console.log(message.toLowerCase());
