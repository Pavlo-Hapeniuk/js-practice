// Завдання 1 — numbers
const numbers = [5, 12, 8, 130, 44];

// 1. Використовуючи filter, отримати всі числа більше за 10
// умова: num > 10
const filteredNums = numbers.filter((num) => num > 10);
console.log(filteredNums);

// 2. Використовуючи find, знайти перше число більше за 10
// умова: num > 10

// Завдання 2 — слова
const words = ["apple", "banana", "grape", "kiwi", "mango"];

// 1. Використовуючи filter, отримати всі слова довші за 4 літери
// умова: word.length > 4
const filteredWords = words.filter((word) => word.length > 4);
console.log(filteredWords);

// 2. Використовуючи find, знайти перше слово довше за 4 літери
// умова: word.length > 4
const findedWord = words.find((word) => word.length > 4);
console.log(findedWord);

// Завдання 3 — об’єкти
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 35 },
];

// 1. Використовуючи filter, отримати усіх користувачів віком 25
// умова: user.age === 25
const users25Years = users.filter((user) => user.age === 25);
console.log(users25Years);

// 2. Використовуючи find, знайти першого користувача віком 30
// умова: user.age === 30
const user30Years = users.find((user) => user.age === 30);
console.log(user30Years);

// Завдання 4 — товари
const products = [
  { name: "Laptop", price: 1500 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 600 },
  { name: "Monitor", price: 300 },
];

// 1. Використовуючи filter, знайти всі товари дешевше 1000
// умова: product.price < 1000
const cheapestProducts = products.filter((product) => product.price < 1000);
console.log(cheapestProducts);

// 2. Використовуючи find, знайти перший товар дешевше 1000
// умова: product.price < 1000
const firstCheapestProducts = products.find((product) => product.price < 1000);
console.log(firstCheapestProducts);
