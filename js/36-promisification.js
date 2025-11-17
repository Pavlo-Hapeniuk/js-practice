// Приклад з колбеком
// function getData(callback) {
//   setTimeout(() => {
//     callback("Дані отримано");
//   }, 1000);
// }

// getData((message) => {
//   console.log(message);
// });

// Приклад з промісом

// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Дані отримано");
//     }, 1000);
//   });
// }

// getData().then(console.log);

// ==================================

// ✅ Завдання 1

// Перепиши функцію з колбеками у проміси:

// function doTask(callback) {
//   setTimeout(() => {
//     callback("Завдання виконано");
//   }, 1500);
// }

// функція з промісом
// function doTask() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Завдання виконано");
//     }, 1500);
//   });
// }

// doTask().then(console.log);

// ======================================

// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess("success value");
//     } else {
//       onError("error");
//     }
//   }, 2000);
// };

// fetchUserFromServer(
//   "Mango",
//   (user) => console.log(user),
//   (error) => console.error(error)
// );

// Промісифікація
// const fetchUserFromServer = (username) => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = false;

//       if (isSuccess) {
//         resolve("success value"); // значенням параметра resolve буде колбек-функція методу then()
//       } else {
//         reject("error"); // значенням параметра reject буде колбек-функція методу catch()
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer("Mango")
//   .then((user) => console.log(user))
//   .catch((error) => console.error(error));

// =======================================

// ✅ Завдання 2

// Є функція:

// function getUser(id, callback) {
//   setTimeout(() => {
//     if (id > 0) callback(null, { id, name: "User" });
//     else callback("ID не валідний");
//   }, 1000);
// }

// // Промісіфікуй її.

// function getUserPromise(id) {
//   return new Promise((resolve, reject) => {
//     getUser(id, (error, data) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// getUserPromise(1)
//   .then((user) => console.log("Користувач:", user))
//   .catch((err) => console.error("Помилка:", err));

// getUserPromise()
//   .then((user) => console.log("Користувач:", user))
//   .catch((err) => console.error("Помилка:", err));

// ==========================================

// Promise.resolve(42).then(console.log);
// // 42

// Promise.reject("Помилка").catch(console.error);
// // Помилка

// ===========================================

// ✅ Завдання 3

// Створи функцію:

// function checkAge(age)

// яка повертає:

// Promise.resolve("OK") якщо age ≥ 18

// Promise.reject("Малолітка!") якщо age < 18

// function checkAge(age) {
//   return age >= 18 ? Promise.resolve("OK") : Promise.reject("Малолітка!");
// }

// checkAge(21).then(console.log).catch(console.error);
// checkAge(11).then(console.log).catch(console.error);

// ============================================

// Синхронна функція
// const makeGreeting = (guestName, onSuccess, onError) => {
//   if (!guestName) {
//     onError("Guest name must not be empty");
//   } else {
//     onSuccess(`Welcome ${guestName}`);
//   }
// };

// makeGreeting(
//   "Mango",
//   (greeting) => console.log(greeting),
//   (error) => console.error(error)
// );

// Промісифікація синхронної ф-ції
// const makeGreeting = (guestName) => {
//   return new Promise((resolve, reject) => {
//     if (!guestName) {
//       reject("Guest name must not be empty");
//     } else {
//       resolve(`Welcome ${guestName}`);
//     }
//   });
// };

// makeGreeting("Mango")
//   .then((greeting) => console.log(greeting))
//   .catch((error) => console.error(error));

// використаємо методи класу Promise, щоб скоротити кількість коду.
// const makeGreeting = (guestName) => {
//   if (!guestName) {
//     return Promise.reject("Guest name must not be empty");
//   } else {
//     return Promise.resolve(`Welcome ${guestName}`);
//   }
// };

// makeGreeting("Mango")
//   .then((greeting) => console.log(greeting))
//   .catch((error) => console.error(error));

// ===================================

// ✅ Завдання 4

// Є функція: function parseJSON(str) { return JSON.parse(str); }

// Створи parseJSONAsync(str), яка повертає проміс і обробляє помилки.

// function parseJSONAsync(str) {
//   return new Promise((resolve, reject) => {
//     try {
//       const result = JSON.parse(str);
//       resolve(result);
//     } catch (err) {
//       reject(err);
//     }
//   });
// }

// // Приклади використання

// parseJSONAsync('{"name":"Павло"}')
//   .then((data) => console.log("Успіх:", data))
//   .catch((err) => console.error("Помилка:", err.message));

// parseJSONAsync("невалідний JSON")
//   .then((data) => console.log("Успіх:", data))
//   .catch((err) => console.error("Помилка:", err.message));

// ======================================

// const makePromise = ({ value, delay, shouldResolve = true }) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     }, delay);
//   });
// };

// makePromise({ value: "A", delay: 1000 })
//   .then((value) => console.log(value)) // "A"
//   .catch((error) => console.log(error));

// makePromise({ value: "B", delay: 3000 })
//   .then((value) => console.log(value)) // "B"
//   .catch((error) => console.log(error));

// makePromise({ value: "C", delay: 2000, shouldResolve: false })
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error)); // "C"

// =====================================================

// ✅ Завдання 5

// Створи функцію waitAndReturn(value, ms)
// яка повертає проміс, що через ms мілісекунд повертає отримане значення.

// Приклад:

// waitAndReturn("Hello", 1500).then(console.log);
// через 1.5 сек: "Hello"

// function waitAndReturn(value, ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(value);
//     }, ms);
//   });
// }

// waitAndReturn("Привіт", 1000).then(console.log); // через 1 сек: "Привіт"
// waitAndReturn(42, 2000).then(console.log); // через 2 сек: 42
// waitAndReturn({ name: "Pavlo" }, 1500).then(console.log); // через 1.5 сек: { name: "Pavlo" }
