// ✅ Завдання 1:

// Створи cookie з ім’ям користувача (username) і будь-яким значенням.

// Виведи його у консоль.

// Потім зміни значення cookie і перевір результат.

// Створили cookie
// document.cookie =
//   "username=Andriy; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// Змінили cookie
// document.cookie =
//   "username=Oleh; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// Перевіряємо
// console.log(document.cookie);

// ✅ Завдання 2:

// Уяви, що ти створюєш сайт ToDo.

// Опиши (на словах або в коментарі) — які дані зручно зберігати в Local Storage, а які — у Session Storage?

// 🧱 Local Storage

// Зберігає дані на постійній основі — навіть після закриття браузера.

// Використовується для даних, які користувач очікує бачити завжди.

// Приклади для ToDo-сайту:

// Список завдань (todos), щоб не зникав після перезавантаження сторінки.

// Обрана тема (dark/light).

// Ім’я користувача або мова інтерфейсу.

// 🧳 Session Storage

// Зберігає дані тільки поки відкрита вкладка.

// Після закриття — все очищається.

// Приклади для ToDo-сайту:

// Тимчасові фільтри (наприклад, “Показати тільки незавершені”).

// Пошуковий запит, який не потрібно зберігати назавжди.

// Дані форми, якщо користувач заповнює її, але ще не натиснув “Зберегти”.

// ✅ Завдання 3:

// Відкрий будь-який сайт → DevTools → Application → Local Storage.

// Подивися, які ключі там зберігаються.

// Видали будь-який запис.

// Спробуй створити свій новий вручну.

// ✅ Завдання 4:

// Збережи у Local Storage своє ім’я.

// Виведи його у консоль.

// Видали і перевір, що його більше немає.

// localStorage.setItem("name", "Pavlo");

// console.log(localStorage.getItem("name"));

// localStorage.removeItem("name");

// console.log(localStorage.getItem("name"));

// if (localStorage.getItem("name") === null) {
//   console.log("Імені більше немає у сховищі 🚫");
// }

// ✅ Завдання 5:

// Збережи ключ language зі значенням "JavaScript".

// Виведи всі ключі Local Storage у консоль:

// for (let i = 0; i < localStorage.length; i++) {
//   const key = localStorage.key(i);
//   console.log(key, localStorage.getItem(key));
// }

// localStorage.setItem("language", "JavaScript");
// localStorage.removeItem("language");
// localStorage.setItem("language1", "JavaScript");
// localStorage.setItem("language2", "HTML");
// localStorage.setItem("language3", "CSS");

// for (let i = 0; i < localStorage.length; i++) {
//   const key = localStorage.key(i);
//   console.log(key, localStorage.getItem(key));
// }

// ✅ Завдання 6:

// Створи об’єкт car з властивостями brand, model, year.

// Збережи його у Local Storage.

// Отримай і виведи модель у консоль.

// const car = {
//   brand: "Renault",
//   model: "Megane",
//   year: 2019,
// };

// localStorage.setItem("car", JSON.stringify(car));

// const parsedCar = JSON.parse(localStorage.getItem("car"));

// console.log(parsedCar.model);

// ✅ Завдання 7:

// Напиши код, який виводить повідомлення “Привіт, [ім’я]!”, якщо ім’я вже є у сховищі.

// Інакше просить користувача ввести ім’я через prompt() і зберігає його.

// const savedName = localStorage.getItem("name");
// if (savedName) {
//   alert(`Hi, ${savedName}`);
// } else {
//   const enteredName = prompt("Enter your name");
//   if (enteredName) {
//     localStorage.setItem("name", enteredName);
//     alert(`Welcome, ${enteredName}`);
//   }
// }

// ✅ Завдання 8:

// Зроби кнопку, яка видаляє всі дані Local Storage після натискання.
// Підказка:

// <button id="clear">Очистити</button>
// <script>
//   document.getElementById("clear").addEventListener("click", () => {
//     localStorage.clear();
//     alert("Сховище очищено!");
//   });
// </script>

// const btnEl = document.createElement("button");
// document.body.appendChild(btnEl);
// btnEl.classList.add("clear-storage-btn");
// btnEl.style.width = "70px";
// btnEl.style.height = "50px";
// btnEl.style.textAlign = "center";

// btnEl.textContent = "Clear storage";
// console.log(btnEl);

// btnEl.addEventListener("click", () => {
//   localStorage.clear;
//   alert("The storage is crear!");
// });

// ✅ Завдання 9:

// Створи ключ isLoggedIn зі значенням true у Session Storage.

// Перевір, що після оновлення сторінки дані залишаються,
// але після закриття вкладки — зникають.

sessionStorage.setItem("isLoggedIn", "true");
console.log(sessionStorage.getItem("isLoggedIn"));
