// Практичні завдання
// 🧩 Завдання 1

// Є масив чисел. Отримай новий масив, де кожне число збільшене на 10.

const nums = [5, 10, 15];

// 👉 Результат має бути: [15, 20, 25]

const newArr = nums.map((num) => num + 10);
console.log(newArr);

// 🧩 Завдання 2

// Є масив слів:

const words = ["apple banana", "pear orange"];

// Отримай масив окремих слів (тобто без вкладених масивів).

// 👉 Результат має бути:
// ['apple', 'banana', 'pear', 'orange']

const flattened = words.flatMap((word) => word.split(" "));
console.log(flattened);

// 🧩 Завдання 3 (просунуте)

// Є масив користувачів:

const users = [
  { name: "Іван", skills: ["JS", "HTML"] },
  { name: "Оля", skills: ["CSS", "JS", "React"] },
  { name: "Максим", skills: ["Node.js"] },
];

// 👉 Отримай масив усіх унікальних навичок користувачів:
// ['JS', 'HTML', 'CSS', 'React', 'Node.js']

const allSkills = users.flatMap((user) => user.skills);
console.log(allSkills);

const uniqueSkills = allSkills.filter(
  (skill, index, array) => array.indexOf(skill) === index
);
console.log(uniqueSkills); // ['JS', 'HTML', 'CSS']
