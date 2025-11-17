// 🧠 Завдання 1:

// Створи об’єкт JavaScript car з полями:

// brand — назва авто

// year — рік випуску

// isElectric — чи електромобіль

// 👉 Потім перепиши його у форматі JSON (як текст).

// const car = {
//   brand: "Renault",
//   year: 2017,
//   isElectric: false,
// };

// const jsonCar = JSON.stringify(car);
// console.log(jsonCar);

// 🧠 Завдання 2:

// Створи об’єкт book з властивостями title, author, year і перетвори його у JSON за допомогою JSON.stringify().
// Потім виведи результат у консоль.

// const book = {
//   title: "Sinderella",
//   author: "Michael Elliott",
//   year: 1987,
// };

// const jsonBook = JSON.stringify(book);
// console.log(jsonBook);

// 🧠 Завдання 3:

// Створи об’єкт person з властивостями name, age, і методом greet(), який виводить "Hello".
// Перетвори цей об’єкт у JSON і перевір, що сталося з методом greet().

// const person = {
//   name: "Jane",
//   age: 25,
//   greet() {
//     console.log("Hello");
//   },
// };

// const jsonPerson = JSON.stringify(person);
// console.log(jsonPerson);

// 🧠 Завдання 4:

// Створи змінну jsonBook з рядком:

// {"title":"Harry Potter","author":"J.K. Rowling","year":1997}

// const jsonBook = '{ "title": "Harry Potter", "author": "J.K. Rowling", "year": 1997 }';

// Розпарсь її в об’єкт і виведи назву книги (title).

// const book = JSON.parse(jsonBook);
// console.log(book.title);

// 🧠 Завдання 5:

// Спробуй виконати:

// JSON.parse("{age:30}");

// Що сталося?
// Поясни, чому з’явилася помилка.

// age - зробити рядком

// ✅ Завдання 6

// Створи try...catch, який обробляє неправильний JSON і виводить:

// тип помилки (name),

// текст помилки (message).

// try {
//   // JSON з помилкою (немає лапок навколо Igor)
//   const user = JSON.parse('{"name":Igor, "age": 29}');
//   console.log("Успішно розпарсено:", user);
// } catch (error) {
//   console.log("❌ Сталася помилка під час парсингу JSON!");

//   if (error.name === "SyntaxError") {
//     console.log("Причина: неправильний формат JSON. Перевір лапки та коми.");
//   } else {
//     console.log("Невідома помилка:", error.message);
//   }

//   // Деталі для розробника
//   console.log("--- Debug Info ---");
//   console.log("Тип:", error.name);
//   console.log("Повідомлення:", error.message);
// }

// ✅ Завдання 7

// Напиши приклад помилки compile time (синтаксичної).

// const animal - "dog";

// Напиши приклад помилки runtime (логічної).
// function foo(makeLogicError) {
//   console.log("Error");
// }

// makeLogicMistake();

// Поясни, чому одна не дає запустити код, а інша з’являється під час виконання.

// 1. Замість "=" стоїть "-".
// 2. Виклик не існуючої функції

// ⚡ Міні-практика для повторення

// Створи об’єкт user з властивостями name, email, isAdmin.

// const user = {
//   name: "Magdalena",
//   email: "magdalena1975@gmail.com",
//   isAdmin: true,
// };

// Перетвори його у JSON.

// const jsonUser = JSON.stringify(user);
// console.log(jsonUser);

// Розпарси цей JSON назад у об’єкт.

// const parsedUser = JSON.parse(jsonUser);

// Виведи властивість email у консоль.

// console.log(parsedUser.email);

// Спробуй розпарсити неправильний JSON, використовуючи try...catch, і виведи error.name та error.message.

// try {
//   JSON.parse('{planet:"Earth", "population":7000000000}');
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }
