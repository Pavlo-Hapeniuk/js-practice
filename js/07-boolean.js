// 🏋️‍♂️ Практичні завдання
// Завдання 1

// Який результат буде виведено?

// console.log(Boolean("false")); // true
// console.log(Boolean(false)); // false
// console.log(Boolean("")); // false
// console.log(Boolean(" ")); // true

// Завдання 2

// Є змінна:

// let num = 0;

// Напишіть перевірку:

// якщо num truthy → "число істинне"

// якщо falsy → "число хибне"

// if (num) {
//   console.log("число істинне");
// } else {
//   console.log("число хибне");
// }

// Завдання 3

// Є змінна:

// let text = "Привіт";

// Використайте подвійне заперечення (!!), щоб вивести, чи є text truthy або falsy.

// text = !!"Привіт";

// console.log(text);

// Завдання 4

// Що виведе цей код?

// console.log(!!undefined); //false
// console.log(!!null); // false
// console.log(!!"JS"); // true
// console.log(!!123); // true

// Завдання 5 ⭐

// Напишіть функцію isEmpty(value), яка:

// повертає true, якщо значення при приведенні до Boolean є false

// інакше повертає false

// Приклади:

// function isEmpty(value) {
//   return !value;
// }

// console.log(isEmpty(0)); // true
// console.log(isEmpty("")); // true
// console.log(isEmpty("hi")); // false
// console.log(isEmpty(123)); // false
