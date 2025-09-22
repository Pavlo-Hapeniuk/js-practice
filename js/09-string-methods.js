// Практичні завдання

// Створити рядок "JavaScript is fun" і:

// перевести його в верхній регістр;

// перевірити, чи містить рядок "fun";

// вивести слово "JavaScript" за допомогою slice().

// У рядку " Frontend Developer " прибрати зайві пробіли та замінити "Frontend" на "Fullstack".

// const string = "JavaScript is fun";
// const upperStr = string.toUpperCase();
// const includeStr = string.includes("fun");
// const slicedStr = string.slice(0, 10);
// console.log(string);
// console.log(upperStr);
// console.log(includeStr);
// console.log(slicedStr);

// const string2 = " Frontend Developer ";
// const changedStr2 = string2.trim().replace("Frontend", "Fullstack");
// console.log(changedStr2);

// ==============================================================

// Завдання 1

// Маєш рядок:

// const text = "I love JavaScript!";

// Переведи його в нижній регістр.
// console.log(text.toLowerCase());

// Перевір, чи він починається з "I love".
// console.log(text.startsWith("I love"));

// Перевір, чи він закінчується на "!".
// console.log(text.endsWith("!"));

// Завдання 2

// Маєш рядок:

// const fruits = "apple,banana,orange,grape";

// Виведи перше слово до першої коми.
// console.log(fruits.slice(0, fruits.indexOf(",")));

// Виведи останнє слово після останньої коми.
// console.log(fruits.slice(fruits.lastIndexOf(",") + 1));

// Виведи загальну кількість символів у рядку.
// console.log(fruits.length);

// Виведи слово між першою та другою комою.
// const firstComma = fruits.indexOf(",") + 1;
// console.log(firstComma);
// const secondComma = fruits.indexOf(",", firstComma);
// console.log(secondComma);
// const wordBetween = fruits.slice(firstComma, secondComma);
// console.log(wordBetween);

// Виведи слово між другою та третьою комою.
// const thirdComma = fruits.indexOf(",", secondComma + 1);
// console.log(thirdComma);
// const wordBetween2 = fruits.slice(secondComma + 1, thirdComma);
// console.log(wordBetween2);

// Виведи останнє слово після останньої коми.
// const lastWord = fruits.slice(thirdComma + 1);
// console.log(lastWord);

// Завдання 3

// Маєш рядок:

// const phrase = "   Learn JavaScript step by step   ";

// Прибери зайві пробіли на початку й у кінці.
// const trimmedPhrase = phrase.trim();
// console.log(trimmedPhrase);

// Замiни "JavaScript" на "Programming".
// const replacedPhrase = trimmedPhrase.replace("JavaScript", "Programming");
// console.log(replacedPhrase);

// Виріж слово "Learn".
// const slicedPhrase = replacedPhrase.slice(0, 5);
// console.log(slicedPhrase);

// =================================================================================

// ✨ Завдання

// Маєш рядок:

// const sentence = "JavaScript is the best programming language!";

// Знайди індекс, де починається слово "best".
// console.log(sentence.indexOf("best"));

// Маєш рядок:

// const email = "user123@gmail.com";

// Знайди індекс символа "@".
// console.log(email.indexOf("@"));

// Маєш рядок:

// const file = "document.pdf";

// Виведи розширення файлу (тобто "pdf") за допомогою lastIndexOf() та slice().
// console.log(file.slice(file.lastIndexOf(".") + 1));

// Маєш рядок:

// const code = "ABC-123-XYZ-789";

// Виведи другий блок символів (тобто "123") за допомогою indexOf() і slice().
// const firstIndx = code.indexOf("-") + 1;
// console.log(firstIndx);

// const secondIndx = code.indexOf("-", firstIndx);
// console.log(secondIndx);

// const codeBetween = code.slice(firstIndx, secondIndx);
// console.log(codeBetween);

// Маєш рядок:

// const url = "https://www.example.com/page";

// Виріж назву сайту "example" за допомогою indexOf(), lastIndexOf() і slice().

// const firstPoint = url.indexOf(".") + 1;
// console.log(firstPoint);

// const secondPoint = url.lastIndexOf(".");
// console.log(secondPoint);

// const wordBetweenPoints = url.slice(firstPoint, secondPoint);
// console.log(wordBetweenPoints);
