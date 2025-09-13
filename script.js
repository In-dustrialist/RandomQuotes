// Массив с цитатами
const quotes = [
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    author: "Steve Jobs",
  },
  {
    quote: "Don't let yesterday take up too much of today.",
    author: "Steve Jobs",
  },
  {
    quote: "You learn more from failure than from success.",
    author: "Steve Jobs",
  },
  {
    quote: "It's not whether you get knocked down, it's whether you get up.",
    author: "Steve Jobs",
  },
];

// Находим элементы
const generateBtn = document.getElementById("generateBtn"); // кнопка
const quoteElement = document.getElementById("quote"); // место для цитаты

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex]; // выводим цитату в <p>

  quoteElement.textContent = randomQuote.quote + " -" + randomQuote.author;
}

generateBtn.addEventListener("click", generateRandomQuote);

const themeBtn = document.getElementById("themeBtn");
