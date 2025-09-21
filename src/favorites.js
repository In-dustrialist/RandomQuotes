import quotes from "./quotes.js";

let currentQuoteIndex;
let quoteElement, favoriteBtn, favoritesContainer;

export function initApp(elements) {
  quoteElement = elements.quoteElement;
  favoriteBtn = elements.favoriteBtn;
  favoritesContainer = elements.favoritesContainer;
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
    addFavoriteCard(quote, currentQuoteIndex);
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

function addFavoriteCard(quote, index) {
  if (document.getElementById(`favorite-${index}`)) return;

  const card = document.createElement("div");
  card.className = "favorite-card";
  card.id = `favorite-${index}`;
  card.textContent = `${quote.quote} - ${quote.author}`;

  favoritesContainer.appendChild(card);
}

function removeFavoriteCard(index) {
  const card = document.getElementById(`favorite-${index}`);
  if (card) card.remove();
}
