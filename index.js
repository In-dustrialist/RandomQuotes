import quotes from "./src/quotes.js";

const generateBtn = document.getElementById("generateBtn");
const quoteElement = document.getElementById("quote");
const favoriteBtn = document.getElementById("favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

let currentQuoteIndex;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  quoteElement.textContent = `${randomQuote.quote} - ${randomQuote.author}`;
  updateFavoriteButton();
}

function toggleFavorite() {
  if (currentQuoteIndex === undefined) return;

  const quote = quotes[currentQuoteIndex];
  quote.isFavorite = !quote.isFavorite;

  if (quote.isFavorite) {
    addFavoriteCard(quote);
  } else {
    removeFavoriteCard(currentQuoteIndex);
  }

  updateFavoriteButton();
}

function updateFavoriteButton() {
  if (currentQuoteIndex === undefined) return;

  favoriteBtn.textContent = quotes[currentQuoteIndex].isFavorite
    ? "❌ Remove Quote"
    : "⭐ Add to Favorite";
}

function addFavoriteCard(quote) {
  // проверяем, нет ли уже такой карточки
  if (document.getElementById(`favorite-${currentQuoteIndex}`)) return;

  const card = document.createElement("div");
  card.className = "favorite-card";
  card.id = `favorite-${currentQuoteIndex}`;
  card.textContent = `${quote.quote} - ${quote.author}`;

  favoritesContainer.appendChild(card);
}

function removeFavoriteCard(index) {
  const card = document.getElementById(`favorite-${index}`);
  if (card) card.remove();
}

generateBtn.addEventListener("click", generateRandomQuote);
favoriteBtn.addEventListener("click", toggleFavorite);
generateRandomQuote();
