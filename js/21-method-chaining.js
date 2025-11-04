// 1️⃣ Рядки: видалити пробіли і привести текст до верхнього регістру
// Завдання: З рядка "   hello world   " зробити "HELLO WORLD"
// const text1 = "   hello world   ";

// const result1 = text1.trim().toLocaleUpperCase();

// console.log(result1); // 👉 "HELLO WORLD"

// 2️⃣ Масиви: отримати подвоєні парні числа
// Завдання: З масиву [1, 2, 3, 4, 5] залишити парні числа та помножити їх на 2
// const numbers2 = [1, 2, 3, 4, 5];

// const result2 = numbers2
//   .filter((number) => number % 2 === 0)
//   .map((number) => number * 2);
// console.log(result2); // 👉 [4, 8]

// 3️⃣ Масив об’єктів: імена користувачів старших 20 років, відсортувати за алфавітом
// Завдання: З масиву об’єктів користувачів отримати масив імен тих,
// кому більше 20 років, і відсортувати
// const users3 = [
//   { name: "Anna", age: 25 },
//   { name: "Oleh", age: 19 },
//   { name: "Ivan", age: 30 },
//   { name: "Marta", age: 22 },
// ];

// const result3 = users3
//   .filter((user) => user.age > 20)
//   .map((users) => users.name)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(result3); // 👉 ['Anna', 'Ivan', 'Marta']

// 4️⃣ Масиви: підрахунок суми чисел більше 10
// Завдання: З масиву [5, 12, 18, 7, 20] залишити числа > 10 і підсумувати
// const numbers4 = [5, 12, 18, 7, 20];

// const result4 = numbers4
//   .filter((number) => number > 10)
//   .reduce((sum, number) => sum + number, 0);

// console.log(result4); // 👉 50

// 5️⃣ Рядки: очистити текст і замінити пробіли дефісом
// Завдання: З рядка "  JavaScript is fun  " зробити "JavaScript-is-fun"
// const text5 = "  JavaScript is fun  ";

// const result5 = text5.trim().replace(/\s+/g, "-");

// або

// const result5 = text5.trim().split(" ").join("-");

// console.log(result5); // 👉 "JavaScript-is-fun"

// 6️⃣ Масив об’єктів: список активних продуктів, об’єднати в рядок
// Завдання: З масиву об’єктів отримати рядок з назв активних продуктів через кому
// const products6 = [
//   { name: "Laptop", active: true },
//   { name: "Mouse", active: false },
//   { name: "Keyboard", active: true },
// ];

// const result6 = products6
//   .filter((product) => product.active === true)
//   .map((product) => product.name)
//   .join(", ");

// console.log(result6); // 👉 "Laptop, Keyboard"

// =============
