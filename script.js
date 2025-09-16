import quotes from "./quotes.js";

const generateBtn = document.getElementById("generateBtn"); // кнопка
const quoteElement = document.getElementById("quote"); // место для цитаты

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex]; // выводим цитату в <p>
  quoteElement.textContent = randomQuote.quote + " -" + randomQuote.author;
}

generateBtn.addEventListener("click", generateRandomQuote);

const themeBtn = document.getElementById("themeBtn");
