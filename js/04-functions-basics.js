// 📝 Практичні завдання

// Напиши функцію square(number), яка повертає квадрат числа.

// function square(number) {
//   console.log(number * number);
// }
// square(5);

//=========================================================

// Створи функцію greetUser(name, age), яка виводить рядок:
// "Привіт, Іван! Тобі 20 років."

// function greetUser(name, age) {
//   console.log(`Привіт, ${name}! Тобі  ${age} років.`);
// }
// greetUser("Іван", 20);

//=========================================================

// Напиши функцію min(a, b), яка повертає менше з двох чисел.

// 🔹 Варіант 1: через if...else
// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(min(3, 7)); // 3
// console.log(min(10, 4)); // 4

// 🔹 Варіант 2: скорочений через тернарний оператор
// function min(a, b) {
//   return a < b ? a : b;
// }

// console.log(min(8, 5));  // 5
// console.log(min(-2, -7)); // -7

// 🔹 Варіант 3: використати вбудовану функцію Math.min
// function min(a, b) {
//   return Math.min(a, b);
// }

// console.log(min(12, 20)); // 12
// console.log(min(100, 99)); // 99

//====================================================

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

//=======================return (повернення значення)==========

// 📝 Завдання для практики

// Напиши функцію double(num), яка повертає число, помножене на 2.

// function double(num) {
//   return num * 2;
// }

// console.log(double(4)); // 8

// Створи функцію greet(name), яка повертає рядок:
// "Привіт, NAME!"

// function greet(name) {
//   return `Привіт, ${name}!`;
// }

// console.log(greet("NAME"));

// Напиши функцію isAdult(age), яка повертає true, якщо вік ≥ 18, інакше false.

// function isAdult(age) {
//   return age >= 18;
// }

// console.log(isAdult(20)); // true
// console.log(isAdult(15)); // false

//==========================Порядок виконання коду==========

// 🔹 Приклад 1
// function a() {
//   console.log("A start");
//   b();
//   console.log("A end");
// }

// function b() {
//   console.log("B start");
//   c();
//   console.log("B end");
// }

// function c() {
//   console.log("C");
// }

// console.log("Start");

// a();

// console.log("Finish");

// Твоя відповідь:
// Start - A start - B start - C - B end - A end - Finish ✅ Правильно

// Пояснення:

// console.log("Start") → Start

// Виклик a() → console.log("A start") → A start

// Всередині a() виклик b() → console.log("B start") → B start

// Всередині b() виклик c() → console.log("C") → C

// Після c() → console.log("B end") → B end

// Після b() → console.log("A end") → A end

// Після a() → console.log("Finish") → Finish

// 🔹 Приклад 2 (з return)
// function double(num) {
//   console.log("Doubling", num);
//   return num * 2;
//   console.log("This will not run");
// }

// console.log("Before");
// let result = double(5);
// console.log("Result:", result);
// console.log("After");

// Твоя відповідь:
// Before - Doubling 5 - Result: 10 - After ✅ Правильно

// Пояснення:

// console.log("Before") → Before

// Виклик double(5) → console.log("Doubling", 5) → Doubling 5

// return 10 → результат зберігається в result

// console.log("Result:", result) → Result: 10

// console.log("After") → After

// Рядок після return не виконається.

// 🔹 Приклад 3
// function first() {
//   console.log("First");
//   return "Done with first";
// }

// function second() {
//   console.log("Second");
//   let r = first();
//   console.log(r);
// }

// console.log("Begin");
// second();
// console.log("End");

// Твоя відповідь:
// Begin - Second - First - Done with first - End ✅ Правильно

// Пояснення:

// console.log("Begin") → Begin

// Виклик second() → console.log("Second") → Second

// Усередині second(): виклик first() → console.log("First") → First

// first() повертає "Done with first" → зберігається в r

// console.log(r) → Done with first

// Після second() → console.log("End") → End

// 🔹 Приклад 4
// function x() {
//   console.log("X start");
//   y();
//   console.log("X end");
// }

// function y() {
//   console.log("Y start");
//   z();
//   console.log("Y end");
// }

// function z() {
//   console.log("Z");
// }

// x();

// Твоя відповідь:
// X start - Y start - Z - Y end - X end ✅ Правильно

// Пояснення:

// Виклик x() → X start

// Всередині x() виклик y() → Y start

// Всередині y() виклик z() → Z

// Повертаємося у y() → Y end

// Повертаємося у x() → X end

// 🔹 Приклад 5
// function add(a, b) {
//   console.log("Adding", a, b);
//   return a + b;
// }

// let sum1 = add(1, 2);
// let sum2 = add(3, 4);

// console.log("Total:", sum1 + sum2);

// Твоя відповідь:
// Adding 1 2 - Adding 3 4 - Total: 10 ✅ Правильно

// Пояснення:

// Виклик add(1, 2) → Adding 1 2, повертає 3 → зберігається в sum1

// Виклик add(3, 4) → Adding 3 4, повертає 7 → зберігається в sum2

// console.log("Total:", sum1 + sum2) → Total: 10

//=========================Область видимості функції================================

// 🔹 Приклад 1
let x = 10; // глобальна змінна

function addFive() {
  let y = 5; // локальна змінна
  console.log(x + y);
}

addFive();
console.log(x);
// console.log(y); // Що станеться, якщо раскоментувати цей рядок?

// Твої відповіді:

// 15 ✅

// 10 ✅

// nothing ✅

// Пояснення:

// x + y = 10 + 5 → 15

// console.log(x) → глобальна змінна x доступна → 10

// y існує лише всередині функції → при зверненні ззовні буде помилка ReferenceError, тобто нічого не виведе.

// 🔹 Приклад 2
let name = "Ivan";

function greet() {
  let name = "Petro";
  console.log("Hello,", name);
}

greet();
console.log("Global name:", name);

// Твої відповіді:

// Hello, Petro ✅

// Global name: Ivan ✅

// Пояснення:

// Усередині функції створюється локальна змінна name → вона перекриває глобальну тільки всередині функції.

// Глобальна name залишається "Ivan" і доступна поза функцією.

//========================
