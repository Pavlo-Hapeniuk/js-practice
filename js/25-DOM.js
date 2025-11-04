// 🔹 Завдання 1. Пошук елементів

// Знайди заголовок з id="main-title" і виведи його текст у консоль.

// const mainTitle = document.querySelector("#main-title");
// console.log(mainTitle.textContent);

// Знайди усі параграфи з класом intro і виведи їх текст у консоль.

// const allParagraphs = document.querySelectorAll(".intro");
// allParagraphs.forEach((paragraph) => {
//   console.log(paragraph.textContent);
// });

// ===============================================

// 🔹 Завдання 2. Зміна тексту

// Змініть текст заголовка на: "DOM тренажер пройдено!"

// mainTitle.textContent = "DOM тренажер пройдено!";
// console.log(mainTitle.textContent);

// Змініть текст першого параграфа на: "Вітаю! Ти навчився знаходити елементи!"

// const firstParagraph = document.querySelector(".intro");
// firstParagraph.textContent = "Вітаю! Ти навчився знаходити елементи!";
// console.log(firstParagraph.textContent);

// ===============================================

// 🔹 Завдання 3. Навігація по DOM

// Знайди список ul#fruits
// const fruitsList = document.querySelector("ul#fruits");
// console.log(fruitsList.textContent);

// Виведи в консоль перший та останній елемент списку (li) через навігацію по DOM
// console.log(fruitsList.firstElementChild.textContent);
// console.log(fruitsList.lastElementChild.textContent);

// ===============================================

// 🔹 Завдання 4. Робота з усіма елементами списку

// Зроби так, щоб кожен елемент списку(li) отримав приставку "Фрукт: " перед назвою,
//     використовуючи forEach і textContent.

// const listItems = fruitsList.children; // отримуємо HTMLCollection (подібне до масиву)

// Array.from(listItems).forEach((li) => {
//   li.textContent = `Фрукт: ${li.textContent}`;
//   console.log(li.textContent);
// });

// ===============================================

// Практичне завдання (1 завдання по навігації)

// Виконай його самостійно в тому ж HTML, що вище.

// Умова:

// Знайди елемент з текстом "Молоко" (відомо, що це другий <li>).

// const secondLiElem = document.querySelectorAll("li")[1];
// console.log(secondLiElem.textContent);

// Через навігацію по DOM:

// виведи в консоль текст його батька (тобто тег батька — ul → напиши назву тега),

// console.log(secondLiElem.parentElement);
// console.log(secondLiElem.parentElement.id);

// зміни текст попереднього сусіда (тобто "Хліб") на "Чорний хліб",
// secondLiElem.previousElementSibling.textContent = "Чорний хліб";
// const firstLiElem = document.querySelector("li");
// console.log(firstLiElem.textContent);
// const listElem = document.querySelector("#items");
// console.log(listElem.textContent);

// дода йому (батькові) клас "checked",
// firstLiElem.parentElement.classList.add("checked");
// console.log(firstLiElem.parentElement.matches(".checked"));

// знайди індекс "Молоко" серед всіх .item і виведи цей індекс у консоль (рахунок від 0).

// const allItems = Array.from(document.querySelectorAll(".item"));
// const item = allItems[1]; // "Молоко"
// const index = allItems.indexOf(item); // 1
// console.log(index);

// Підказки:

// Використовуй querySelectorAll або children щоб знайти другий <li>.

// Щоб змінити текст сусіда — previousElementSibling.textContent = ....

// Щоб додати клас батьку — parentElement.classList.add("checked").

// Для індексу — перетвори NodeList/HTMLCollection в масив через Array.from(...) і застосуй indexOf.

// =======================Властивість classList========================

// ✅ Практичне завдання №1

// Створи HTML:

// <p id="status" class="info">Вітаю!</p>

// І зроби в JS наступне:

// Виведи текст елемента в консоль.

// const paragraphElem = document.querySelector(".info");
// console.log(paragraphElem.textContent);

// Заміни текст на “Гарного дня!”.
// paragraphElem.textContent = "Гарного дня!";
// console.log(paragraphElem.textContent);

// Додай клас highlight.
// paragraphElem.classList.add("highlight");
// console.log(paragraphElem.textContent);

// Перевір, чи є клас info.
// console.log(paragraphElem.classList);

// Видали клас info і додай success.
// paragraphElem.classList.remove("info");
// paragraphElem.classList.add("success");
// console.log(paragraphElem.classList);

// Заміни success на done.
// paragraphElem.classList.replace("success", "done");
// console.log(paragraphElem.classList);

// ===============================================

// 💡 Практичне завдання №2 — для закріплення

// HTML:

/* <div id="card" class="box blue">Привіт!</div> */

// JS-завдання:

// Виведи в консоль текст елемента.
// const divElem = document.querySelector(".box");
// console.log(divElem.textContent);

// Замінити текст на "Ти молодець!".
// divElem.textContent = "Ти молодець!";

// Перевір, чи має елемент клас blue.
// console.log(divElem.classList.contains("blue"));

// Якщо має — заміни blue на green.
// divElem.classList.replace("blue", "green");
// console.log(divElem.classList);

// Додай клас bordered.
// divElem.classList.add("bordered");
// console.log(divElem.classList);

// Перемкни клас hidden (додай, якщо його нема).
// divElem.classList.toggle("hidden");

// Виведи фінальний список класів у консоль.
// console.log(divElem.classList);

// ===============================================

// Завдання:

// Створи HTML: <div id="square"></div>

// Через JS зроби:

// Червоний фон
// const divEl = document.querySelector("#square");
// divEl.style.backgroundColor = "red";
// console.log(divEl.style);

// Розмір 150x150px
// divEl.style.width = "150px";
// divEl.style.height = "150px";

// Кутові рамки 10px (borderRadius)
// divEl.style.borderRadius = "10px";
// console.log(divEl.style);

// ===============================================

// Завдання:

// Створи HTML: <img id="photo" src="pic.jpg">

// Через JS:

// Перевір, чи є атрибут alt
// const imgEl = document.querySelector("#photo");
// console.log(imgEl.hasAttribute("alt"));

// Додай атрибут alt зі значенням "Моя картинка"
// imgEl.setAttribute("alt", "Моя картинка");
// console.log(imgEl.getAttribute("alt"));

// Видали атрибут src
// imgEl.removeAttribute("src");
// console.log(imgEl.getAttribute("src"));

// ===============================================

// 🧩 Практичне завдання: "Картка користувача"
// 🔹 HTML (створи цей код у файлі)
// <div class="user-card" data-id="101" data-status="new">
//   <h2 class="user-name">Ім'я користувача</h2>
//   <p class="user-info">Статус: <span class="status">Новий</span></p>
//   <img class="avatar" src="avatar.jpg">
// </div>

// 🔹 Завдання в JavaScript

// Знайди елемент .user-card і збережи в змінну.
// const userElem = document.querySelector(".user-card");

// Перевір, чи має він атрибут data-id.
// console.log(userElem.dataset.id);

// Виведи це в консоль (true / false).
// console.log(userElem.hasAttribute("data-id"));

// Отримай значення data-status через dataset і виведи його в консоль.
// console.log(userElem.dataset.status);

// Зміни значення data-status на "active"
// userElem.dataset.status = "active";

// Також зміни текст усередині елемента .status на "Активний"
// const statusElem = document.querySelector(".status");
// statusElem.textContent = "Активний";
// console.log(statusElem.textContent);

// Підтверди зміну, вивівши нове значення в консоль.
// console.log(userElem.dataset.status);

// Попрацюй із класами (classList)

// Додай новий клас "highlight"
// userElem.classList.add("highlight");

// Перевір, чи додався цей клас через classList.contains()
// console.log(userElem.classList.contains("highlight"));

// Потім заміни "highlight" на "selected"
// userElem.classList.replace("highlight", "selected");

// І виведи в консоль фінальний список класів (console.log(userElem.classList))
// console.log(userElem.classList);

// Зміни стилі через властивість style:

// Зроби фон картки світло-блакитним
// userElem.style.backgroundColor = "lightblue";

// Додай внутрішні відступи (padding: 20px)
// userElem.style.padding = "20px";

// Зроби рамку навколо (border: 2px solid blue)
// userElem.style.border = "2px solid blue";

// Задай кутові заокруглення (borderRadius: "10px")
// userElem.style.borderRadius = "10px";

// Працюй з атрибутами зображення

// Знайди елемент .avatar
// const imgElem = document.querySelector(".avatar");

// Перевір, чи має атрибут alt
// console.log(imgElem.hasAttribute("alt"));

// Якщо немає — додай його зі значенням "Аватар користувача"
// imgElem.setAttribute("alt", "Аватар користувача");
// console.log(imgElem.getAttribute("alt"));

// Потім видали атрибут src
// imgElem.removeAttribute("src");

// Перевір через getAttribute('src'), що він справді видалений (повертає null)
// console.log(imgElem.getAttribute("src"));

// Підсумковий вивід

// У консоль виведи об’єкт userElem (щоб побачити всі зміни в DOM).
// console.log(userElem);

// 🧠 Підказка: порядок кроків
// 1. Знайди елемент
// const userCard = document.querySelector('.user-card');

// 2. Перевір атрибути
// 3. Отримай і зміни dataset
// 4. Робота з classList
// 5. Стилізація через style
// 6. Робота з атрибутами <img>
// 7. Вивід у консоль

// ===================== Створення та видалення елементів ==========================

// Завдання 1 (практика):
// Створи елемент <h1> і додай йому текст "Мій заголовок". Перевір у консолі, що елемент створився.

// const heading = document.createElement("h1");
// heading.textContent = "Мій заголовок";
// console.log(heading);
// console.log(heading.textContent);

// ===============================================

// Завдання 2 (практика):
// Створи < ul > у HTML і додай до нього 3 елементи < li > з текстом "Пункт 1", "Пункт 2", "Пункт 3",
//   використовуючи appendChild.

// const listElem = document.createElement("ul");

// const liElem1 = document.createElement("li");
// liElem1.textContent = "Пункт 1";
// listElem.appendChild(liElem1);

// const liElem2 = document.createElement("li");
// liElem2.textContent = "Пункт 2";
// listElem.appendChild(liElem2);

// const liElem3 = document.createElement("li");
// liElem3.textContent = "Пункт 3";
// listElem.appendChild(liElem3);

// document.body.appendChild(listElem);

// console.log(listElem);

// Завдання 3 (практика):
// Видали другий <li> зі списку, який створив у завданні 2, використовуючи removeChild.

// listElem.removeChild(liElem2);
// console.log(listElem);

// Завдання 4 (практика):
// Візьми контейнер зі списком <ul> і заміни його вміст через innerHTML на один абзац <p> зі своїм текстом.

// console.log(listElem.innerHTML);

// listElem.innerHTML =
//   "<p>Тут був список, який замінено на параграф через innerHTML</p>";

// console.log(listElem.innerHTML);

// Завдання 5 (практика):
// Створи <div id="box"></div> у HTML. Використовуй insertAdjacentHTML, щоб додати:

// "Початок" всередині диву на початку.

// "Кінець" всередині диву в кінці.

// "Перед" перед дивом.

// "Після" після диву.

// const containerElem = document.querySelector(".container");

// const box = document.createElement("div");
// box.id = "box";
// containerElem.appendChild(box);

// box.insertAdjacentHTML("beforebegin", "Перед");
// box.insertAdjacentHTML("afterbegin", "Початок");
// box.insertAdjacentHTML("beforeend", "Кінець");
// box.insertAdjacentHTML("afterend", "Після");

// console.log(containerElem);

// ========================================

// Загальне практичне завдання для закріплення

// Створи порожній <div id="gallery"></div> у HTML.

// const galleryElem = document.createElement("div");
// galleryElem.id = "gallery";
// console.log(galleryElem);
// document.body.appendChild(galleryElem);

// Створи 3 картинки <img> через createElement,
// додай їм атрибут src (можеш використовувати будь-які URL або placeholder).

// const imgElem1 = document.createElement("img");
// imgElem1.src =
//   "https://images.pexels.com/photos/34436313/pexels-photo-34436313.jpeg";

// const imgElem2 = document.createElement("img");
// imgElem2.src =
//   "https://images.pexels.com/photos/34436307/pexels-photo-34436307.jpeg";

// const imgElem3 = document.createElement("img");
// imgElem3.src =
//   "https://images.pexels.com/photos/34436304/pexels-photo-34436304.jpeg";

// Додай картинки в #gallery:

// першу через appendChild,
// galleryElem.appendChild(imgElem1);

// другу через prepend,
// galleryElem.prepend(imgElem2);

// третю через insertAdjacentHTML в кінець контейнера.
// galleryElem.insertAdjacentHTML(
//   "beforeend",
//   "<img src='https://images.pexels.com/photos/34436304/pexels-photo-34436304.jpeg'/>"
// );

// Прочитай innerHTML контейнера і виведи в консоль.
// console.log(galleryElem.innerHTML);

// Видали другу картинку (removeChild або remove).
// galleryElem.removeChild(imgElem1);
// console.log(galleryElem.innerHTML);

// Змініть innerHTML контейнера на один абзац <p> зі своїм текстом.
// galleryElem.innerHTML = `<p>Зінено на абзац</p>`;
// console.log(galleryElem.innerHTML);
