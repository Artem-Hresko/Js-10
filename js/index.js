// // // TASK 1

// const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
// const words = ["кіт", "собака", "миша", "папуга", "хомяк"];

// // Функція countItems тут

// // Умови для перевірки:
// const isEven = (num) => num % 2 === 0;
// const isLarge = (num) => num > 10;
// const isShort = (word) => word.length <= 3;

// function countItems(array, condition) {
//   let count = 0;
//   for (const element of array) {
//     if (condition(element)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countItems(numbers, isEven));
// console.log(countItems(numbers, isLarge));
// console.log(countItems(words, isShort));

// // Task 2

// const calculate = (a, b, operation) => operation(a, b);

// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => {
//   if (b === 0) {
//     throw new Error("Ділення на нуль неможливе!");
//   }
//   return a / b;
// };

// console.log(calculate(10, 5, add));
// console.log(calculate(10, 5, subtract));
// console.log(calculate(10, 5, multiply));
// console.log(calculate(10, 5, divide));
// console.log(calculate(10, 0, divide));

// // Task 3

// function repeatMessage(times, messageCreator) {
//   for (let i = 0; i < times; i++) {
//     messageCreator(i);
//   }
// }

// Task 4

// function processMovies(movies, action) {
//   for (let i = 0; i < movies.length; i++) {
//     action(movies[i], i);
//   }
// }

// // CALLBACK1

// function displayMovieInfo(movie, index) {
//   console.log(
//     `${index + 1}. "${movie.title}" (${movie.year}), рейтинг: ${
//       movie.rating
//     }/10`
//   );
// }

// // callback  2

// function highlightTopRated(movie, index) {
//   if (movie.rating >= 8) {
//     console.log(
//       `⭐ ${index + 1}. "${movie.title}" - ВИСОКИЙ РЕЙТИНГ! (${
//         movie.rating
//       }/10)`
//     );
//   } else {
//     console.log(`   ${index + 1}. "${movie.title}" (${movie.rating}/10)`);
//   }
// }

// // callback 3

// function analyzeMovieAge(movie, index) {
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - movie.year;
//   let ageCategory = "";

//   if (age < 5) ageCategory = "новий";
//   else if (age < 15) ageCategory = "середній вік";
//   else ageCategory = "класика";

//   console.log(`${index + 1}. "${movie.title}" - ${age} років (${ageCategory})`);
// }

// const movies = [
//   { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
//   { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action" },
//   { title: "Forrest Gump", year: 1994, rating: 8.8, genre: "Drama" },
// ];

// console.log("=== Всі фільми ===");
// processMovies(movies, displayMovieInfo);

// console.log("\n=== Фільми з високим рейтингом ===");
// processMovies(movies, highlightTopRated);

// console.log("\n=== Короткі описи ===");
// processMovies(movies, createMovieDescription);

// console.log("\n=== Драматичні фільми ===");
// processMovies(movies, filterByGenre("drama"));

// console.log("\n=== Науково-фантастичні фільми ===");
// processMovies(movies, filterByGenre("sci-fi"));

// // Додатковий приклад: використання анонімної функції
// console.log("\n=== Фільми після 2000 року ===");
// processMovies(movies, function (movie, index) {
//   if (movie.year > 2000) {
//     console.log(`${index + 1}. "${movie.title}" (${movie.year})`);
//   }
// });

// Основна функція для обробки фільмів
function processMovies(movies, action) {
  for (let i = 0; i < movies.length; i++) {
    action(movies[i], i);
  }
}

// Колбек-функція 1: Детальна інформація про фільм
function displayMovieDetails(movie, index) {
  console.log(`${index + 1}.  "${movie.title}"`);
  console.log(`    Рік: ${movie.year}`);
  console.log(`    Рейтинг: ${movie.rating}/10`);
  console.log(`    Жанр: ${movie.genre}`);
  console.log("---");
}

// Колбек-функція 2: Перевірка чи фільм класика (старше 20 років)
function checkIfClassic(movie, index) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - movie.year;
  const isClassic = age > 20;

  console.log(`${index + 1}. "${movie.title}" (${movie.year})`);
  console.log(`   Вік: ${age} років - ${isClassic ? " КЛАСИКА" : " НОВИЙ"}`);
  console.log("---");
}

// Колбек-функція 3: Рекомендація на основі рейтингу
function recommendMovie(movie, index) {
  let recommendation = "";
  let emoji = "";

  if (movie.rating >= 9) {
    recommendation = "ОБОВ'ЯЗКОВО до перегляду!";
    emoji = "🌟";
  } else if (movie.rating >= 8) {
    recommendation = "Висока рекомендація";
    emoji = "👍";
  } else if (movie.rating >= 7) {
    recommendation = "Гарний вибір";
    emoji = "✅";
  } else {
    recommendation = "На ваш розсуд";
    emoji = "🤔";
  }

  console.log(
    `${index + 1}. ${emoji} "${movie.title}" - ${recommendation} (${
      movie.rating
    }/10)`
  );
}

// Тестовий масив фільмів
const movies = [
  { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
  {
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    genre: "Drama",
  },
  { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action" },
  { title: "Pulp Fiction", year: 1994, rating: 8.9, genre: "Crime" },
  { title: "Forrest Gump", year: 1994, rating: 8.8, genre: "Drama" },
  { title: "The Matrix", year: 1999, rating: 8.7, genre: "Sci-Fi" },
];

// Тестування всіх callback-функцій
console.log("=== ДЕТАЛЬНА ІНФОРМАЦІЯ ПРО ФІЛЬМИ ===");
processMovies(movies, displayMovieDetails);

console.log("\n=== ПЕРЕВІРКА НА КЛАСИКУ ===");
processMovies(movies, checkIfClassic);

console.log("\n=== РЕКОМЕНДАЦІЇ ДО ПЕРЕГЛЯДУ ===");
processMovies(movies, recommendMovie);
