// Практичне завдання №1

// Створи код, який:

// виводить "Починаю варити яйця...",

// через 3 секунди виводить "Готово!",

// але між цим виводить "Чекаю...".

// console.log("Починаю варити яйця...");
// setTimeout(() => {
//   console.log("Готово!");
// }, 3000);
// console.log("Чекаю...");

// =============================================

// console.log("Замовляю піцу...");

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((data) => console.log("Піцу доставили:", data));

// console.log("Поки чекаю — мию посуд");

// =============================================

// Практичне завдання №3

// Напиши програму, де:

// головний потік виводить "Починаю день"

// console.log("Починаю день");

// “фоновий модуль” через setTimeout виводить "Кава готова" через 1 секунду

// setTimeout(() => {
//   console.log("Кава готова");
// }, 1000);

// одразу після цього головний потік виводить "Перевіряю пошту"

// console.log("Перевіряю пошту");

// ============================================

// Практичне завдання №4

// Зроби тайм-аут на 5 секунд, після якого виведи "5 секунд пройшло".

// setTimeout(() => {
//   console.log("5 секунд пройшло");
// }, 5000);

// =================================================

// Практичне завдання №5

// Створи тайм-аут на 4 секунди, але скасуй його через 2 секунди.
// У консоль нічого не повинно вивестись.

// const timeoutId = setTimeout(() => {
//   console.log("Це ніхто не побачить...");
// }, 4000);

// setTimeout(() => {
//   clearTimeout(timeoutId);
// }, 2000);

// ====================================================

// Практичне завдання №6

// Зроби інтервал, який кожну секунду виводить "Тік".
// Нехай він працює 5 разів, після чого зупини його вручну через clearInterval.

// let count = 0;

// const intervalId = setInterval(() => {
//   console.log("Tik");
//   count++;

//   if (count === 5) {
//     setInterval(() => {
//       clearInterval(intervalId);
//     });
//   }
// }, 1000);

// ====================================================

// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let intervalId = null;

// startBtn.addEventListener("click", () => {
//   intervalId = setInterval(() => {
//     console.log(`Interval ID: ${intervalId}, ${Math.random()}`);
//   }, 1000);
// });

// stopBtn.addEventListener("click", () => {
//   clearInterval(intervalId);
//   console.log(`Interval with id ${intervalId} has stopped!`);
// });

// ===================================================

// Практичне завдання №7

// Створи інтервал, який кожні 2 секунди виводить поточний час.
// Через 10 секунд зупини його.

// const intervalId = setInterval(() => {
//   const now = new Date();
//   console.log(now.toLocaleTimeString());
// }, 2000);

// // Зупиняємо інтервал через 10 секунд
// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Інтервал зупинено");
// }, 10000);
