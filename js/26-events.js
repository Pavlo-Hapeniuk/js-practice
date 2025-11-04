// ===========1️⃣ Метод addEventListener()============

// ✅ Завдання 1 (для новачка):

// Створи кнопку з текстом “Змінити фон”.

// При кліку нехай змінюється колір фону сторінки на випадковий.

// (Підказка: document.body.style.backgroundColor = 'red')

// const newBtnEl = document.createElement("button");
// newBtnEl.textContent = "CHANGE COLOR";
// newBtnEl.classList = "btnBackgroundColor";
// newBtnEl.style.width = "200px";
// newBtnEl.style.height = "200px";
// newBtnEl.style.background = "yellow";
// newBtnEl.style.borderRadius = "10px";
// newBtnEl.style.position = "absolute";
// newBtnEl.style.top = "50%";
// newBtnEl.style.left = "50%";
// newBtnEl.style.transform = "translate(-50%, -50%)";

// document.body.appendChild(newBtnEl);
// console.log(newBtnEl);

// / Функція для випадкового кольору
// function getRandomColor() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// Функція зміни фону
// function changeBackgroundColor() {
//   const randomColor = getRandomColor();
//   document.body.style.backgroundColor = randomColor;
//   console.log("Новий колір:", randomColor);
// }

// newBtnEl.addEventListener("click", changeBackgroundColor);

// ===========2️⃣ Метод removeEventListener()============

// ✅ Завдання 2:

// Створи кнопку “Секрет”.

// При натисканні виводь alert("Секрет розкрито!").

// Зроби так, щоб вона працювала лише один раз.

// const secretBtn = document.createElement("button");
// secretBtn.id = "secret-btn";
// secretBtn.textContent = "PUSH";
// secretBtn.classList = "btnBackgroundColor";
// secretBtn.style.width = "200px";
// secretBtn.style.height = "200px";
// secretBtn.style.background = "yellow";
// secretBtn.style.borderRadius = "10px";
// secretBtn.style.position = "absolute";
// secretBtn.style.top = "50%";
// secretBtn.style.left = "50%";
// secretBtn.style.transform = "translate(-50%, -50%)";
// document.body.appendChild(secretBtn);
// console.log(secretBtn);

// function handleClick() {
//   alert("Секрет розкрито!");
//   secretBtn.removeEventListener("click", handleClick);
// }

// secretBtn.addEventListener("click", function handleClick() {
//   alert("Секрет розкрито!");
//   secretBtn.removeEventListener("click", handleClick);
// });

// або

// secretBtn.addEventListener("click", function handleClickOnce() {
//   alert("Секрет розкрито!");
//   secretBtn.removeEventListener("click", handleClickOnce);
// });

// ===========3️⃣ Об’єкт події============

// ✅ Завдання 3:

// Створи 3 кнопки.
// Коли натискаєш будь-яку — виводь у консоль текст:

// Натиснуто кнопку з текстом: <тут текст кнопки>

// (Підказка: event.target.textContent)

// const btnEl1 = document.createElement("button");
// btnEl1.textContent = "Button 1";
// const btnEl2 = document.createElement("button");
// btnEl2.textContent = "Button 2";
// const btnEl3 = document.createElement("button");
// btnEl3.textContent = "Button 3";
// document.body.appendChild(btnEl1);
// document.body.appendChild(btnEl2);
// document.body.appendChild(btnEl3);

// const handleClickBtn = (event) => {
//   console.log(
//     (event.target.textContent = `Натиснуто кнопку
//          з текстом: ${event.target.textContent}`)
//   );
// };

// btnEl1.addEventListener("click", handleClickBtn);
// btnEl2.addEventListener("click", handleClickBtn);
// btnEl3.addEventListener("click", handleClickBtn);

// Створи кнопку.

// При кліку виводь у консоль:

// тип події (type);

// координати кліку (clientX, clientY);

// текст усередині кнопки (target.textContent).

// const btnEl4 = document.createElement("button");
// btnEl4.textContent = "Button 4";
// document.body.appendChild(btnEl4);

// function handleClickBtn4(event) {
//   console.log(event.type);
//   console.log(event.clientX);
//   console.log(event.clientY);
//   console.log(event.target.textContent);
// }

// btnEl4.addEventListener("click", handleClickBtn4);

// ===========🧩 4. Події клавіатури============

// 🧠 Завдання 4:

// Створи <input> для введення тексту.

// Коли користувач щось вводить — показуй у консолі "Ти натиснув: <клавіша>".

// Відслідковуй обидві події: keydown і keyup.

// const inputEl = document.createElement("input");
// inputEl.placeholder = "Введи щось і натисни Enter";
// document.body.appendChild(inputEl);

// inputEl.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     console.log("Підтверджено введення!");
//   } else {
//     console.log(`Ти натиснув: ${event.key}`);
//   }
// });

// inputEl.addEventListener("keyup", function (event) {
//   console.log(`Ти натиснув: ${event.key}`);
// });

// ===========🧩 5. Властивості key і code============

// 🧠 Завдання 5:

// Створи поле введення.

// Якщо користувач натиснув Enter, виведи в консоль "Введення підтверджено!".

// Для інших клавіш — просто показуй "Натиснуто: <key>".

// const inputEl2 = document.createElement("input");
// inputEl2.placeholder = "Введи щось і натисни Enter";
// document.body.appendChild(inputEl2);

// document.addEventListener("keydown", function (event) {
//   if (event.code === "Enter") {
//     console.log("Введення підтверджено!");
//   } else {
//     console.log(`Натиснуто: ${event.key}`);
//   }
// });

// ===========🔹 6. Події елементів форм============

// ===========Подія submit=====================

// 🧠 Завдання №6.1:

// Створи форму з двома полями: ім’я і email.

// При натисканні “Відправити”:

// зупини стандартну поведінку;

// виведи в консоль значення обох полів;

// очисти форму.

// const formEl = document.createElement("form");
// document.body.appendChild(formEl);

// const inputNameEl = document.createElement("input");
// inputNameEl.classList = "name";
// inputNameEl.name = "name";
// formEl.appendChild(inputNameEl);

// const inputEmailEl = document.createElement("input");
// inputEmailEl.classList = "email";
// inputEmailEl.name = "email";
// formEl.appendChild(inputEmailEl);

// const btnElement = document.createElement("button");
// btnElement.textContent = "Click here";
// btnElement.classList = "form-button-js";
// btnElement.type = "submit";
// formEl.appendChild(btnElement);

// console.log(formEl);

// formEl.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log(`Username: ${event.target.elements.name.value}`);
//   console.log(`Email: ${event.target.elements.email.value}`);
//   formEl.reset();
// });

// ===========Подія change=====================

// Завдання 6.2:

// Створи випадаючий список з кольорами.

// Зміна вибору повинна змінювати колір тексту заголовка.

const titleEl = document.createElement("h1");
titleEl.textContent = "T I T L E";
titleEl.classList.add("title");
titleEl.style.marginRight = "10px";
titleEl.style.fontSize = "50px";
document.body.appendChild(titleEl);

const colors = ["red", "green", "blue"];
const selectEl = document.createElement("select");
document.body.append(selectEl);

colors.forEach((color) => {
  const option = document.createElement("option");
  option.value = color;
  option.textContent = color.toUpperCase();
  selectEl.append(option);
});

selectEl.addEventListener("change", (e) => {
  titleEl.style.color = e.target.value;
});

// ===========Подія input=====================

// Завдання 6.3:

// Створи поле введення і під ним p-тег.

// Коли користувач вводить текст — цей текст має з’являтися в p у реальному часі.

// const newInputEl = document.createElement("input");
// document.body.appendChild(newInputEl);
// newInputEl.type = "text";

// const newParagraphEl = document.createElement("p");
// document.body.appendChild(newParagraphEl);
// newParagraphEl.textContent = "Text field value: ";
// newParagraphEl.insertAdjacentHTML("beforeend", '<span class="output"></span>');
// console.log(newParagraphEl);
// const spanEl = document.querySelector(".output");

// newInputEl.addEventListener("input", (e) => {
//   spanEl.textContent = e.currentTarget.value;
// });

// ===========Подія focus & blur=====================

// Завдання 6.4:

// Зроби, щоб при фокусі поле підсвічувалося зеленим.

// При втраті фокусу — поверталося до початкового стилю.

// const inputEl2 = document.createElement("input");
// document.body.appendChild(inputEl2);
// inputEl2.type = "text";
// inputEl2.style.border = "5px solid gray";
// inputEl2.style.borderRadius = "5px";
// inputEl2.style.padding = "8px";
// inputEl2.style.outline = "none"; // щоб не було синьої рамки браузера

// inputEl2.addEventListener("focus", () => {
//   inputEl2.style.borderColor = "green";
// });

// inputEl2.addEventListener("blur", () => {
//   inputEl2.style.borderColor = "grey";
// });
