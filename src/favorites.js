import quotes from "./quotes.js";

let currentQuoteIndex;
let quoteElement, favoriteBtn, favoritesContainer;

export function initApp(elements) {
  quoteElement = elements.quoteElement;
  favoriteBtn = elements.favoriteBtn;
  favoritesContainer = elements.favoritesContainer;

  // Привязываем обработчик нажатия на кнопку
  favoriteBtn.addEventListener("click", toggleFavorite);
}

export function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  quoteElement.textContent = `${randomQuote.quote} - ${randomQuote.author}`;
  updateFavoriteButton();
}

export function toggleFavorite() {
  if (currentQuoteIndex === undefined) return;

  const quote = quotes[currentQuoteIndex];
  quote.isFavorite = !quote.isFavorite;

  if (quote.isFavorite) {
    addFavoriteCard(quote);
  } else {
    removeFavoriteCard(quote);
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
  if (document.getElementById(`favorite-${quote.id}`)) return;

  const card = document.createElement("div");
  card.className = "favorite-card";
  card.id = `favorite-${quote.id}`;
  card.textContent = `${quote.quote} - ${quote.author}`;

  favoritesContainer.appendChild(card);
}

function removeFavoriteCard(quote) {
  const card = document.getElementById(`favorite-${quote.id}`);
  if (card) card.remove();
}
