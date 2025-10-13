// Практичні завдання

// 1️⃣ Перепиши функцію на стрілочну:

// function greet(name) {
//   return `Hello, ${name}!`;
// }

const greet = (name) => `Hello, ${name}!`;
console.log(greet("Pavlo"));

// 2️⃣ Напиши стрілочну функцію, яка:

// приймає число,

// повертає true, якщо воно парне, і false — якщо непарне.

// const findNumber = (number) => {
//   if (number % 2 === 0) {
//     return true;
//   } else if (number % 2 !== 0) {
//     return false;
//   }
// };

// або

// const findNumber = (number) => number % 2 === 0;

// або

// const findNumber = (number) => (number % 2 === 0 ? true : false);

// console.log(findNumber(293847));
// console.log(findNumber(10092));
// console.log(findNumber());

// 3️⃣ Є масив:

const prices = [100, 200, 300];

// Створи новий масив із цінами після знижки 20% за допомогою map() і стрілочної функції.

const discount = prices.map((price) => price * 0.8);
console.log(discount);

// 4️⃣ Напиши стрілочну функцію max(a, b), яка повертає більше з двох чисел.

const max = (a, b) => Math.max(a, b);
console.log(max(100, 1));
