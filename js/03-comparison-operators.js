// =======================Оператори порівняння=============

// Завдання 1. Порівняння чисел

// Створи дві змінні:

// const a = 10;
// const b = 20;

// Використовуючи оператори >, <, >=, <=, ==, ===, !=, !==,
// виведи всі можливі порівняння цих чисел у консоль.

// Підказка:

// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a !== b);

// Завдання 2. Порівняння рядків

// Створи дві змінні:

// const str1 = "Hello";
// const str2 = "hello";

// Перевір:

// чи str1 рівне str2 (== і ===),

// чи str1 більше за str2 (лексикографічне порівняння),

// чи str1.toLowerCase() рівне str2.toLowerCase().

// console.log(str1 == str2);
// console.log(str1 === str2);

// console.log(str1 > str2);

// console.log(str1.toLowerCase() == str2.toLowerCase());
// console.log(str1.toLowerCase() === str2.toLowerCase());

// Завдання 3. Змішані типи

// Створи змінні:

// const num = 5;
// const strNum = "5";

// Перевір:

// console.log(num == strNum);

// console.log(num === strNum);

// console.log(num != strNum);

// console.log(num !== strNum);

// Пояснення: тут відпрацьовує різниця між строгим і нестрогим порівнянням.

// Завдання 4. Логічні комбінації

// Створи змінні:

// const x = 7;
// const y = 10;

// Виведи в консоль вирази:

// console.log(x < y && x > 5);

// console.log(x < y || x > 5);

// console.log(!(x === 7));

// Завдання 5. Практика з умовами

// Створи змінну age.

// Напиши умову if, яка виводить:

// "Дорослий", якщо age >= 18

// "Підліток", якщо age >= 13 && age < 18

// "Дитина", якщо age < 13

// let age = 18;
// age = 15;
// age = 10;
// if (age >= 18) {
//   console.log("Дорослий");
// } else if (age >= 13 && age < 18) {
//   console.log("Підліток");
// } else {
//   console.log("Дитина");
// }

//======================Перетворення рядків у числа============================

// console.log(Number(" 123 ")); // 123
// console.log(Number("3.14abc")); // NaN
// console.log(Number("-42")); // -42
// console.log(Number("+7")); // 7
// console.log(Number("0xF")); // 15
// console.log(Number("")); //0
// console.log(Number("Infinity")); // Infinity
// console.log(Number(" ")); // 0

// console.log(parseInt("123abc")); // 123
// console.log(parseFloat("3.14abc")); // 3.14
// console.log(parseInt("-42px")); // -42
// console.log(parseInt("+7")); // 7
// console.log(parseInt("0xF")); // 15
// console.log(parseFloat("")); // NaN
// console.log(parseInt("  10  ")); // 10

//==================================================

// Завдання 1. Абсолютне значення

// Є змінна x, яка може бути додатньою або від’ємною.
// Завдання: Вивести її абсолютне значення.

// let x = -8;

// Твій код тут
// console.log(Math.abs(x));

// Пояснення: Math.abs(x) повертає число без знаку.

// Завдання 2. Округлення

// Є число y = 4.6.
// Завдання: Вивести його округлене до найближчого цілого, округлене вниз і округлене вгору.

// let y = 4.6;

// округлення до найближчого цілого
// console.log(Math.round(y));

// округлення вниз
// console.log(Math.floor(y));

// округлення вгору
// console.log(Math.ceil(y));

// Пояснення:

// Math.round — найближче ціле.

// Math.floor — вниз.

// Math.ceil — вгору.

// Завдання 3. Квадратний корінь

// Є число z = 25.
// Завдання: Знайти його квадратний корінь.

// let z = 25;

// Твій код тут
// console.log(Math.sqrt(z));

// Пояснення: Math.sqrt(z) повертає число, яке потрібно помножити на себе, щоб отримати z.

// Завдання 4. Максимум і мінімум

// Є числа 3, 7, 1, 9.
// Завдання: Вивести найбільше та найменше число.

// let a = 3,
//   b = 7,
//   c = 1,
//   d = 9;

// Твій код тут
// console.log(Math.max(a, b, c, d)); // найбільше
// console.log(Math.min(a, b, c, d)); // найменше

// Пояснення: Math.max і Math.min швидко знаходять екстремальні значення серед чисел.

// Завдання 5. Випадкове число

// Зробимо просту гру: випадкове число від 1 до 10.

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomInt(1, 10)); // випадкове число від 1 до 10

// Пояснення:

// Math.random() дає число від 0 до 1.

// Множимо на потрібний діапазон (max - min + 1).

//     Math.floor округлює вниз, щоб отримати ціле число.

//===============================Метод toFixed()==============================

// Завдання для тебе

// Візьми число 5.6789

// Округли його до 2 знаків після коми і виведи результат.

// Округли те ж число до 0 знаків після коми (ціле) і виведи результат.

// let num = 5.6789;

// Округлення до 2 знаків після коми і перетворення на число
// let rounded = Number(num.toFixed(2));

// console.log(rounded); // 5.68

// rounded = Number(num.toFixed(0));

// console.log(rounded);

// // або

// num = Number(num.toFixed(2));
// console.log(num); // 5.68

// num = Number(num.toFixed(0));
// console.log(num); // 6

//============================================================================

// Станція з продажу ремонтних дроїдів готова до запуску,
//     залишилося написати програмне забезпечення для відділу продажів.

// Оголоси функцію makeTransaction, яка очікує два параметри,
//     значення яких будуть задаватися під час її виклику:
//     • quantity— перший параметр, число, що містить кількість замовлених дроїдів
//     • pricePerDroid — другий параметр, число, що містить вартість одного дроїда

// Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів:
// "You ordered <quantity> droids worth <totalPrice> credits!", де:
// • <quantity> — це кількість замовлених дроїдів
// • <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів

//     Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
//     У консоль будуть виведені результати її роботи.

// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

//============================================================================

// Оголоси функцію getShippingMessage, яка очікує три параметри,
//     значення яких будуть задаватися під час її виклику:
//     • country — перший параметр, рядок, що містить країну доставки
//     • price — другий параметр, число, що містить загальну вартість товару
//     • deliveryFee — третій параметр, число, що містить вартість доставки товару

// Доповни код функції так, щоб вона повертала рядок з повідомленням
// про доставку товару в країну користувача:
// "Shipping to <country> will cost <totalPrice> credits", де:
//     • <country> — це країни доставки
//     • <totalPrice> — це загальна вартість замовлення, що включає вартість товару і його доставки

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її роботи.

// function getShippingMessage(country, price, deliveryFee) {
//   const totalPrice = price + deliveryFee;
//   return `Shipping to ${country} will cost ${totalPrice} credits`;
// }

// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

//============================================================================

// Оголоси функцію getElementWidth, яка очікує три параметри,
// значення яких будуть задаватися під час її виклику:
//     • content— перший параметр, ширина контенту
//     • padding — другий параметр, значення горизонтального падінгу для кожної зі сторін
//     • border — третій параметр, значення товщини бордера для кожної зі сторін
// Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове.

// Доповни код функції так, щоб вона повертала число — загальну ширину елемента.
// При розрахунку загальної ширини орієнтуйся на те, що значення box - sizing дорівнює border - box.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її роботи.

// function getElementWidth(content, padding, border) {
//   const contentNumb = Number.parseFloat(content);
//   const paddingNumb = Number.parseFloat(padding);
//   const bothSidePadding = paddingNumb * 2;
//   const borderNumb = Number.parseFloat(border);
//   const bothSideBorder = borderNumb * 2;
//   return contentNumb + bothSidePadding + bothSideBorder;
// }

// або

function getElementWidth(content, padding, border) {
  return parseFloat(content) + 2 * parseFloat(padding) + 2 * parseFloat(border);
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

//=======================================================================
