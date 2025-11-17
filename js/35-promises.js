// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// console.log(promise); // Об'єкт промісу

// =================================

// Створи проміс, який через 3 секунди поверне resolve("Готово!").

// const newPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Готово!");
//   }, 3000);
// });
// console.log(newPromise);

// ==================================

// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// Registering promise callbacks
// promise.then(
//   (value) => {
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   (error) => {
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// ===================================

// Завдання після теми 4

// Є проміс:

// const p = new Promise((resolve) => {
//   resolve(10);
// });

// Виведи в консоль число, помноживши його на 5, використавши then().

// p.then((num) => {
//   const sum = num * 5;
//   console.log(sum);
// });

// ===================================

// const isSuccess = false;

// Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// Registering promise callbacks
// promise
//   .then((value) => {
//     console.log(value); // "Success! Value passed to resolve function"
//   })
//   .catch((error) => {
//     console.log(error); // "Error! Error passed to reject function"
//   });

// ===================================

// Завдання після теми 5

// Створи проміс, який одразу викликає reject("Щось пішло не так"),
// і оброби це через catch().

// const prom = new Promise((resolve, reject) => {
//   reject("Щось пішло не так");
// });

// prom.catch((error) => console.log(error));

// ====================================

// const isSuccess = true;

// Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// Registering promise callbacks
// promise
//   .then((value) => console.log(value)) // "Success! Value passed to resolve function"
//   .catch((error) => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log("Promise settled")); // "Promise settled"

// ======================================

// Завдання після теми 6

// Візьми будь-який проміс і додай до нього finally() з текстом "Виконання завершено".

// const pr = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("OK");
//   } else {
//     reject("Bad");
//   }
// });

// pr.then((value) => console.log(value))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("We have what we have"));

// ========================================

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then((value) => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then((value) => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then((value) => {
//     console.log(value); // 30
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// =========================================

// Завдання після теми 7

// Створи ланцюжок промісів, який:

// Повертає число 5

// Множить його на 3

// Додає 10

// Виводить фінальний результат

// const promiseNew = new Promise((resolve, reject) => {
//   resolve(5);
// });

// promiseNew
//   .then((value) => {
//     console.log(value);
//     return value * 3;
//   })
//   .then((value) => {
//     console.log(value);
//     return value + 10;
//   })
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("the end"));

// =========================================

// ПІДСУМКОВЕ ЗАГАЛЬНЕ ЗАВДАННЯ

// Створи функцію makeOrder(product) яка:

// Повертає проміс

// Через 2 секунди:

// якщо product не пустий рядок → resolve("Замовлення прийнято: " + product)

// якщо порожній → reject("Помилка: товар не вказано")

// Оброби результат:

// через then() виведи повідомлення

// через catch() виведи помилку

// через finally() виведи "Дякуємо, що користуєтесь сервісом!"

// function makeOrder(product) {
//   const orderPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof product === "string" && product.trim() !== "") {
//         resolve("Замовлення прийнято: " + product);
//       } else reject("Помилка: товар не вказано");
//     }, 2000);
//   });

//   return orderPromise;
// }

// makeOrder("PC")
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Дякуємо, що користуєтесь сервісом!"));

// makeOrder()
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Дякуємо, що користуєтесь сервісом!"));
