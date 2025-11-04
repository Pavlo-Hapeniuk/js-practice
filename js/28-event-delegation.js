// ✅ Завдання 1:

// Створи 3 вкладені елементи (div) і постав addEventListener('click') на кожен.
// Подивись у консолі, у якому порядку спрацьовують події при кліку на найвнутрішній div.

const parentElem = document.getElementById("parent");
const childElem = document.getElementById("child");
const descendantElem = document.getElementById("descendant");

parentElem.addEventListener("click", () => {
  console.log("Parent click handle");
});

childElem.addEventListener("click", () => {
  console.log("Child click handle");
});

descendantElem.addEventListener("click", () => {
  console.log("Descendant click handle");
});

// ================================================

// ✅ Завдання 2:

// Зроби список <ul><li>...</li></ul> і додай обробник тільки на <ul>.
// Перевір у консолі, що при кліку по будь-якому пункту — подія все одно спрацьовує на <ul>.

const listElem = document.querySelector("#parent-list");
listElem.addEventListener("click", handleClickList);

// function handleClickList() {
//   console.log("Parent list");
// }

// ================================================

// 🧩 Завдання:

// Створи ul з кількома li.

// Додай обробник події на ul.

// Виведи в консоль event.target і event.currentTarget.

// Подивись, як вони змінюються, якщо натискаєш на різні li.

function handleClickList(event) {
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
}

// ================================================

// 🧩 Завдання:

// Додай 3 рівні вкладеності (наприклад, div > div > button).

// На середньому рівні постав event.stopPropagation().

// Перевір, чи спрацюють інші обробники.

const mainElem = document.getElementById("main");
const middleElem = document.getElementById("middle");
const btnElem = document.getElementById("btn");

mainElem.addEventListener("click", () => {
  console.log("Main clicked");
});

middleElem.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Middle clicked");
});

btnElem.addEventListener("click", () => {
  console.log("Button clicked");
});

// ================================================

// 🧩 Завдання:

// Створи список завдань (ul > li).

// Додай один обробник події на ul.

// При кліку на li змінюй колір тексту або додавай клас “виконано”.

const tasksListElem = document.querySelector("#tasks-list");

tasksListElem.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
});

// ================================================

// 🧩 Завдання:

// Створи список покупок із кнопками “Видалити”.

// Реалізуй видалення елемента через делегування подій (один обробник на ul).

// Додай перевірку за допомогою classList.contains().

const toBuyList = document.getElementById("tobuy");
toBuyList.innerHTML +=
  '<li>New product<button class="delete">Delete</button></li>';

toBuyList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
