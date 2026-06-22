// Recipes data
const recipes = [
  {
    name: "Apple Crisp",
    description: "A simple yet delicious fall dessert.",
    image: "images/apple-crisp.jpg",
    rating: 4,
    tags: ["dessert", "fruit"],
    ingredients: ["apples", "sugar", "oats"]
  },
  {
    name: "Chocolate Cake",
    description: "Rich, moist, and covered in chocolate frosting.",
    image: "images/chocolate-cake.jpg",
    rating: 5,
    tags: ["dessert", "baking"],
    ingredients: ["flour", "cocoa", "eggs"]
  }
];

// Utility functions
function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  return list[random(list.length)];
}

// Templates
function tagsTemplate(tags) {
  return `
    <ul class="recipe__tags">
      ${tags.map(tag => `<li>${tag}</li>`).join("")}
    </ul>
  `;
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    html += i <= rating
      ? `<span aria-hidden="true" class="icon-star">⭐</span>`
      : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
  }
  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `
    <figure class="recipe">
      <img src="${recipe.image}" alt="Image of ${recipe.name}" />
      <figcaption class="recipe-info">
        ${tagsTemplate(recipe.tags)}
        <h2><a href="#">${recipe.name}</a></h2>
        ${ratingTemplate(recipe.rating)}
        <p class="recipe__description">${recipe.description}</p>
      </figcaption>
    </figure>
  `;
}

// Rendering
function renderRecipes(recipeList) {
  const container = document.querySelector("main");
  if (recipeList.length === 0) {
    container.innerHTML = `<p>No recipes found.</p>`;
    return;
  }
  container.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join("");
}

// Initialize random recipe on load
function init() {
  const randomRecipe = getRandomListEntry(recipes);
  renderRecipes([randomRecipe]);
}

// Wait for DOM to load before running init
document.addEventListener("DOMContentLoaded", () => {
  init();

  const searchForm = document.querySelector(".search-form");
  const searchInput = searchForm.querySelector("input");

  searchForm.addEventListener("submit", event => {
    event.preventDefault();
    const query = searchInput.value.trim().toLowerCase();

    const filtered = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
      recipe.ingredients.some(ing => ing.toLowerCase().includes(query))
    );

    renderRecipes(filtered);
  });
});