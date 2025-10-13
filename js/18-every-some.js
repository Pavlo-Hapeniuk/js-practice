// Завдання 1 — Перевірка температур
// Умова: Чи всі дні були тепліше за 0°C
const temperatures = [2, 5, 8, 0, 3, 7, 1];
const warmedDays = temperatures.every((temperature) => temperature > 0);
console.log(warmedDays);

// Завдання 2 — Пошук імені
// Умова: Чи є серед користувачів ім’я "Олег"
const users = ["Марія", "Іван", "Олег", "Катерина"];
const someUser = users.some((user) => user === "Олег");
console.log(someUser);

// Завдання 3 — Перевірка непарних чисел
// Умова: Чи всі числа непарні
const numbers = [1, 3, 5, 7, 9];
const oddNums = numbers.every((number) => number % 2 !== 0);
console.log(oddNums);

// Завдання 4 — Перевірка цін товарів
// Умова: Чи є хоча б один предмет з ціною більше 1000
const items = [
  { name: "Ноутбук", price: 950 },
  { name: "Телефон", price: 1200 },
  { name: "Миша", price: 200 },
];
const itemExpensive1000 = items.some((item) => item.price > 1000);
console.log(itemExpensive1000);

// Завдання 5 — Перевірка оцінок студентів
// Умова: 1) Чи всі оцінки не менші за 3
//        2) Чи є хоча б один відмінник (оцінка 5)
const scores = [3, 4, 5, 4, 3];
const checkedScoresLower3 = scores.every((score) => score >= 3);
console.log(checkedScoresLower3);
const checkedScore5 = scores.some((score) => score === 5);
console.log(checkedScore5);
