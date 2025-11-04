// Створи програму, яка:

// оголошує три змінні: carBrand, carModel, carYear
// const carBrand = "Renault";
// const carModel = "Kangoo";
// const carYear = 2017;

// має функцію showCarInfo(brand, model, year), яка виводить "Моя машина - [brand] [model], [year] року."
// function showCarInfo(brand, model, year) {
//   console.log(`Моя машина - ${brand} ${model}, ${year} року.`);
// }

// викличи функцію з власними даними.
// showCarInfo(carBrand, carModel, carYear);

// ========================

// Створи об’єкт car, у якого є:

// властивості: brand, model, year

// метод start(), який виводить "Машина [brand] [model] заведена!"

// Виклич цей метод.

// const car = {
//   brand: "Toyota",
//   model: "RAV4",
//   year: 2025,
//   start() {
//     console.log(`Машина ${this.brand} ${this.model} заведена!`);
//   },
// };
// car.start();

// ===============================

// Створи клас Car з властивостями brand, model, year
// і методом info(), який виводить "Це [brand] [model], [year] року."
// Потім створи 2 різні машини і виклич info() для кожної.

// class Car {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   info() {
//     console.log(`Це ${this.brand} ${this.model}, ${this.year} року.`);
//   }
// }

// const car1 = new Car("BMW", "X5", 2025);
// const car2 = new Car("AUDI", "RS6", 2024);

// car1.info();
// car2.info();

// ==============================

// Створи клас User з властивостями login і email.
// Додай метод showInfo(), який виводить "Користувач: [login], email: [email]".
// Створи 2 екземпляри з різними даними.

// class User {
//   constructor(login, email) {
//     this.login = login;
//     this.email = email;
//   }

//   showInfo() {
//     console.log(`Користувач: ${this.login}, email: ${this.email}`);
//   }
// }

// const user1 = new User("Taras", "taras1990@gmail.com");
// const user2 = new User("Panas", "panas1993@gmail.com");

// user1.showInfo();
// user2.showInfo();

// ==============================

// Створи клас CoffeeMachine з:

// властивістю isOn (початково false)

// методами turnOn(), turnOff() і makeCoffee()

// якщо кавомашина вимкнена — makeCoffee() має вивести "Спочатку увімкни кавомашину!"

// class CoffeeMachine {
//   constructor() {
//     this.isOn = false;
//   }

//   turnOn() {
//     this.isOn = true;
//   }

//   turnOff() {
//     this.isOn = false;
//   }

//   makeCoffee() {
//     if (this.isOn === false) {
//       console.log("Спочатку увімкни кавомашину!");
//     } else {
//       console.log(`Готуємо каву... ☕`);
//     }
//   }
// }

// const delonghi = new CoffeeMachine();
// delonghi.makeCoffee();
// delonghi.turnOn();
// delonghi.makeCoffee();
// delonghi.turnOff();
// delonghi.makeCoffee();
// delonghi.turnOn();
// delonghi.makeCoffee();

// ====================================

// Практичне завдання:

// Створи клас Book (книга).

// Поки не додавай нічого всередину.

// Додай конструктор до класу Book, щоб він приймав title (назва) та author (автор).

// Створи 2 книги і виведи їх назви.

// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }
// }

// const book1 = new Book("Fight club");
// const book2 = new Book("Lord of the rings");

// console.log(book1.title);
// console.log(book2.title);

// Зроби конструктор класу Book так, щоб приймав об’єкт { title, author, year }.

// Створи книгу і виведи рік видання.

// class Book {
//   constructor({ title, author, year }) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
// }

// const newBook = new Book({
//   title: "Ugly duckling",
//   author: "Andersen",
//   year: 1988,
// });

// console.log(newBook.year);

// ================================

// Практичне завдання:
// Створи клас Person.
// Поки що він може бути пустим.

// Додай до класу Person конструктор з параметрами name і age.
// Створи об'єкт person1 і виведи його властивості.

// Перероби конструктор класу Person так, щоб він приймав один об'єкт { name, age }.
// Створи нового об'єкта person2.

// Додай метод greet() до класу Person, який виводить Привіт, мене звати ${name}.
// Виклич цей метод для свого об'єкта.

// class Person {
//   constructor({ name, age }) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Привіт, мене звати ${this.name}`);
//   }
// }

// const person1 = new Person({ name: "Pavlo", age: 37 });
// console.log(person1);
// person1.greet();

// const person2 = new Person({ name: "Sia", age: 35 });
// console.log(person2);
// person2.greet();

// ==========================================

// Практичне завдання:

// Створи клас Animal з конструктором { name, type }.

// Додай метод sound(), який виводить:

// ${this.name} робить звук!

// class Animal {
//   constructor({ name, type }) {
//     this.name = name;
//     this.type = type;
//   }

//   sound() {
//     console.log(`${this.name} робить звук!`);
//   }
// }

// Створи кілька тварин (наприклад dog і cat).
// const dog = new Animal({ name: "Muhtar", type: "Terier" });
// dog.sound();
// const cat = new Animal({ name: "Musya", type: "Scotish Fold" });
// cat.sound();

// Перевір, чи мають вони спільний прототип:
// console.log(Object.getPrototypeOf(dog) === Object.getPrototypeOf(cat));

// ================================================

// 🧩 Практичне завдання:

// Створи клас User з:

// публічною властивістю name

// приватною властивістю #password

// Додай метод checkPassword(pass), який перевіряє правильність пароля:

// if (pass === this.#password) console.log("Доступ дозволено!");
// else console.log("Невірний пароль!");

// class User {
//   name;
//   #password;

//   constructor(name, password) {
//     this.name = name;
//     this.#password = password;
//   }

//   checkPassword(pass) {
//     if (pass === this.#password) console.log("Доступ дозволено!");
//     else console.log("Невірний пароль!");
//   }

//   updatePassword(oldPass, newPass) {
//     if (oldPass === this.#password) {
//       this.#password = newPass;
//       console.log("Пароль успішно змінено!");
//     } else {
//       console.log("Невірний старий пароль!");
//     }
//   }
// }

// Створи об'єкт користувача і протестуй перевірку з правильним і неправильним паролем.

// const user3 = new User("John", 1111);
// user3.checkPassword(1111);
// user3.checkPassword(1110);

// user3.updatePassword(1111, 1110);
// user3.checkPassword(1110);

// ===============================

// 🧩 Практичне завдання:

// Створи клас Bank із публічним методом transfer(amount) — який ініціює переказ коштів.

// Додай приватний метод #validate(amount), який перевіряє, чи сума більша за 0.

// Якщо перевірка проходить — виведи Переказано ${amount} грн,
// інакше — Помилка: некоректна сума!.

// Виклич метод transfer() кілька разів із різними сумами (наприклад 1000, -50, 0).

// class Bank {
//   transfer(amount) {
//     this.#validate(amount);
//   }

//   #validate(amount) {
//     if (amount > 0) {
//       console.log(`Переказано ${amount} грн`);
//     } else {
//       console.log(`Помилка: некоректна сума!`);
//     }
//   }
// }

// const myBank = new Bank();
// myBank.transfer(1000);
// myBank.transfer(-50);
// myBank.transfer(0);

// ================================================

// 🧩 Практичне завдання:

// Створи клас UserProfile з приватною властивістю #age.

// Додай геттер age, який повертає значення віку.

// Додай сетер age, який:

// приймає нове значення,

// перевіряє, чи це число більше за 0,

// якщо так — змінює вік,

// інакше виводить "Некоректний вік!".

// class UserProfile {
//   #age;

//   constructor(age) {
//     this.#age = age;
//   }

//   get age() {
//     return this.#age;
//   }

//   set age(newAge) {
//     if (newAge > 0) {
//       this.#age = newAge;
//     } else {
//       console.log(`Некоректний вік!`);
//     }
//   }
// }

// Створи користувача, зміни йому вік кілька разів і перевір результат через console.log.
// const user4 = new UserProfile(81);
// console.log(user4);
// user4.age = 80;
// console.log(user4);
// user4.age = 0;
// console.log(user4);
// user4.age = -5;
// console.log(user4);

// =====================================

// class MyClass {
//   static b = 5;

//   constructor(value) {
//     this.a = value;
//   }
// }

// const instance = new MyClass(10);
// console.log(instance.b);
// console.log(MyClass.b);

// ====================================================

// 🧩 Практичне завдання:

// Створи клас Car зі статичною властивістю numberOfWheels = 4.

// Додай конструктор з параметром brand.

// class Car {
//   static numberOfWheels = 4;

//   constructor(brand) {
//     this.brand = brand;
//   }
// }

// Створи два об’єкти автомобілів і виведи:

// - їхню марку

// - кількість коліс через клас (Car.numberOfWheels)

// const car1 = new Car("Renault");
// console.log(car1.brand);
// console.log(Car.numberOfWheels);

// const car2 = new Car("Volvo");
// console.log(car2.brand);
// console.log(Car.numberOfWheels);

// ================================================

// 🧩 Практичне завдання:

// Створи клас MathUtils.

// Додай статичний метод sum(a, b), який повертає суму двох чисел.

// class MathUtils {
//   static sum(a, b) {
//     return a + b;
//   }
// }

// Використай метод, не створюючи екземпляр класу:

// console.log(MathUtils.sum(5, 7)); // 12

// =================================================

// 🧩 Практичне завдання:

// Створи клас Vehicle з конструктором { brand, wheels } і методом drive().

// Створи дочірній клас ElectricVehicle, який успадковує Vehicle і додає метод charge().

// class Vehicle {
//   constructor({ brand, wheels }) {
//     this.brand = brand;
//     this.wheels = wheels;
//   }

//   drive() {
//     console.log(`🚗 ${this.brand} їде на ${this.wheels} колесах`);
//   }
// }

// class ElectricVehicle extends Vehicle {
//   charge() {
//     console.log(`🔋 Заряджаю ${this.brand}`);
//   }
// }

// Створи екземпляр електромобіля і виклич обидва методи: drive() і charge().

// Тепер передаємо і кількість коліс
// const car5 = new ElectricVehicle({ brand: "Tesla", wheels: 4 });
// car5.drive(); // 🚗 Tesla їде на 4 колесах
// car5.charge(); // 🔋 Заряджаю Tesla

// =========================================

// 🧩 Практичне завдання:

// Створи клас Animal з параметрами { name, type } і методом speak().

// class Animal {
//   constructor({ name, type }) {
//     this.name = name;
//     this.type = type;
//   }

//   speak() {
//     console.log(`${this.name} ${this.type} speaks`);
//   }
// }

// Створи дочірній клас Dog, який має додаткову властивість breed.

// У конструкторі Dog обов’язково виклич super().

// class Dog extends Animal {
//   constructor({ name, type, breed }) {
//     super({ name, type });
//     this.breed = breed;
//   }

//   speak() {
//     console.log(`${this.name} ${this.type} speaks like a ${this.breed}`);
//   }
// }

// Створи об’єкт собаки та виклич обидва методи.

// const dog1 = new Dog({ name: "Chuvy", type: "dog", breed: "Shepard" });
// dog1.speak();

// ===================================

// Практичне завдання:

// Створи клас Vehicle з методом start(), який виводить "Машина запущена".

// class Vehicle {
//   start() {
//     console.log(`Машина запущена`);
//   }
// }

// Створи дочірній клас ElectricCar, який розширює цей метод:

// викликає super.start()

// і додає "Електродвигун працює тихо 🔋".

// class ElectricCar extends Vehicle {
//   start() {
//     super.start();
//     console.log(`Електродвигун працює тихо 🔋`);
//   }
// }

// Створи об’єкт і виклич метод start().
// const car4 = new ElectricCar();
// car4.start();
// const car4 = new Vehicle();
// car4.start();

// ==========================================
