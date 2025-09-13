// Массив с цитатами
const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don't let yesterday take up too much of today.",
  "You learn more from failure than from success.",
  "It's not whether you get knocked down, it's whether you get up.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
];

// Находим элементы
const generateBtn = document.getElementById("generateBtn"); // кнопка
const quoteElement = document.getElementById("quote"); // место для цитаты

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex]; // выводим цитату в <p>
  quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener("click", generateRandomQuote);
