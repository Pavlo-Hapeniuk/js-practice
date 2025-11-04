// Завдання

// Створи прототип person з властивостями species = "Homo sapiens" і методом sayHello().
// const person = {
//   species: "Homo sapiens",
//   sayHello() {
//     console.log("Hello", this.species);
//   },
// };

// Створи новий об'єкт alex на основі person.
// const alex = Object.create(person);

// Викликай метод sayHello() через alex і виведи species.
// alex.sayHello();
// console.log(alex.species);

// =======================

// Створи об’єкт carPrototype з властивостями wheels = 4 та doors = 4.
// const carPrototype = {
//   wheels: 4,
//   doors: 4,
// };

// Створи об’єкт myCar на основі carPrototype.
// const myCar = Object.create(carPrototype);

// Виведи myCar.wheels і перевір, чи це власна властивість.
// console.log(myCar.wheels);
// console.log(myCar.hasOwnProperty("wheels"));
// console.log(carPrototype.hasOwnProperty("doors"));

// ========================

// Створи об’єкт phonePrototype з властивістю brand.
// const phonePrototype = {
//   brand: "Apple",
// };

// Створи об’єкт myPhone на основі phonePrototype.
// const myPhone = Object.create(phonePrototype);

// Перевір, чи phonePrototype є прототипом myPhone
// console.log(phonePrototype.isPrototypeOf(myPhone));

// ========================

// Створи об’єкт bookPrototype з властивістю type = 'paperback'.
// const bookPrototype = {
//   type: "paperback",
// };

// Створи об’єкт myBook на його основі і додай власну властивість title = 'JavaScript for Beginners'.
// const myBook = Object.create(bookPrototype);
// myBook.title = "JavaScript for Beginners";

// Виведи власні та невласні властивості myBook.

// console.log(myBook.hasOwnProperty("type"));
// console.log(myBook.hasOwnProperty("title"));

// for (let key in myBook) {
//   if (myBook.hasOwnProperty(key)) {
//     console.log(`${key} – власна властивість`);
//   } else {
//     console.log(`${key} – успадкована властивість`);
//   }
// }

// =======================

// Створи об’єкт computerPrototype з властивістю cpu = 'Intel'.
// const computerPrototype = {
//   cpu: "Intel",
// };

// Створи myComputer на його основі і додай ram = '16GB'.
// const myComputer = Object.create(computerPrototype);
// myComputer.ram = "16GB";

// Перебери всі властивості і виведи лише власні.
// for (let key in myComputer) {
//   if (myComputer.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// ========================

// Створи vehiclePrototype з властивістю hasWheels = true.
// const vehiclePrototype = {
//   hasWheels: true,
// };

// Створи carPrototype, який успадковує vehiclePrototype і додай doors = 4.
// const carPrototype = Object.create(vehiclePrototype);
// carPrototype.doors = 4;
// console.log(carPrototype);

// Створи myCar на основі carPrototype і додай brand = 'Toyota'.
// const myCar = Object.create(carPrototype);
// myCar.brand = "Toyota";
// console.log(myCar);

// Виведи всі властивості myCar (власні та з прототипів).
// for (let key in myCar) {
//     if (myCar.hasOwnProperty(key)) {
//         console.log(`Власна властивість - ${key}`);
//     } else {
//         console.log(`Властивість з прототипів - ${key}`);
//     }
// }

// =======================

// Створи порожній об’єкт emptyObj.
// const emptyObj = {};

// Виведи його прототип та прототип прототипу.
// console.log(Object.getPrototypeOf(emptyObj));

// Перевір, що ланцюжок закінчується null.
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(emptyObj)));
