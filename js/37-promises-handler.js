// ================ 1. Promise.all =====================

// const promise1 = fetch("/data1.json");
// const promise2 = fetch("/data2.json");

// Promise.all([promise1, promise2])
//   .then(([result1, result2]) => {
//     console.log("Data 1:", result1);
//     console.log("Data 2:", result2);
//   })
//   .catch((error) => {
//     console.error("Щось пішло не так:", error);
//   });

// =========================

// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("Rejected promise 2");
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
//   .then((values) => console.log(values))
//   .catch((error) => console.log(error)); // "Rejected promise 2"

// ================ 2. Promise.allSettled =====================
// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("Rejected promise 2");
// const p3 = Promise.resolve(3);

// Promise.allSettled([p1, p2, p3]).then((values) => console.log(values));

// =======================================

// const promise1 = fetch("/data1.json");
// const promise2 = fetch("/data2.json");

// Promise.allSettled([promise1, promise2]).then((results) => {
//   results.forEach((result, index) => {
//     if (result.status === "fulfilled") {
//       console.log(`Проміс ${index} успішний:`, result.value);
//     } else {
//       console.log(`Проміс ${index} відхилено:`, result.reason);
//     }
//   });
// });

// ================ 3. Promise.race =====================

// Кейс 1

// Створимо кілька промісів з різним часом виконання.

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(2), 2000);
// });

// Promise.race([p1, p2])
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

//   Кейс 2

// Створимо кілька промісів з різним часом виконання.

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 2000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(2), 1000);
// });

// Promise.race([p1, p2])
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error)); // 2

// ============== 4. Promise.any ===================

// const promise1 = Promise.reject("Помилка");
// const promise2 = Promise.resolve("Успіх");

// Promise.any([promise1, promise2])
//   .then((result) => console.log("Перший успішний результат:", result))
//   .catch((error) => console.log("Всі проміси відхилені:", error));

// ==========================================

// Завдання: «Завантаження даних з декількох джерел»

// Уяви, що у тебе є три асинхронні функції, які повертають проміси (імітують запити до серверу):

function fetchUser() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ name: "Павло", age: 30 }), 1000)
  );
}

function fetchOrders() {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject("Не вдалося завантажити замовлення"), 1500)
  );
}

function fetchProducts() {
  return new Promise((resolve) =>
    setTimeout(() => resolve(["Товар 1", "Товар 2"]), 500)
  );
}

// Завдання:

// Використати Promise.all, щоб отримати всі дані. Обробити помилку через catch.

// Promise.all([fetchUser(), fetchOrders(), fetchProducts()])
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

// Використати Promise.allSettled, щоб отримати результати всіх промісів та вивести у консоль, які успішно виконалися, а які ні.

// Promise.allSettled([fetchUser(), fetchOrders(), fetchProducts()]).then(
//   (value) => console.log(value)
// );

// Використати Promise.race, щоб дізнатися, який проміс завершиться першим.

// Promise.race([fetchUser(), fetchOrders(), fetchProducts()])
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

// Використати Promise.any, щоб отримати перший успішний результат.

// Promise.any([fetchUser(), fetchOrders(), fetchProducts()])
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

// Бонус:

// Після отримання результатів allSettled, виведи повідомлення:

// «Усі дані успішно завантажені», якщо немає відхилених промісів.

// «Деякі дані не вдалося завантажити», якщо є відхилені проміси.

// Promise.allSettled([fetchUser(), fetchOrders(), fetchProducts()])
//   .then((results) => {
//     // Виводимо результати кожного промісу
//     results.forEach((result, index) => {
//       if (result.status === "fulfilled") {
//         console.log(`Проміс ${index + 1} виконано:`, result.value);
//       } else {
//         console.log(`Проміс ${index + 1} відхилено:`, result.reason);
//       }
//     });

//     // Перевірка бонусного умовного виводу
//     const hasRejected = results.some((result) => result.status === "rejected");

//     if (hasRejected) {
//       console.log("Деякі дані не вдалося завантажити");
//     } else {
//       console.log("Усі дані успішно завантажені");
//     }
//   })
//   .catch((error) => console.log(error));
