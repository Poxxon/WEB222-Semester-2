/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Pouya Rad
 *      Student ID: 164382228
 *      Date:       02/08/24
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

// Get references to the HTML elements
const menu = document.getElementById("menu");
const selectedCategoryTitle = document.getElementById("selected-category");
const productContainer = document.getElementById("product-container");

// Function to create menu buttons for each category
function createMenuButtons() {
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category.name;
    button.addEventListener("click", () => displayCategory(category.id, category.name));
    menu.appendChild(button);
  });
}

// Function to create a product card
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  // To display image
  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.title;
  card.appendChild(img);

  // To display Title
  const title = document.createElement("h3");
  title.textContent = product.title;
  card.appendChild(title);

  // To display Description
  const description = document.createElement("p");
  description.textContent = product.description;
  card.appendChild(description);

  // To display Price
  const price = document.createElement("div");
  price.className = "price";
  price.textContent = `$${(product.price / 100).toFixed(2)}`;
  card.appendChild(price);

  // To display Availability (color coordinated)
  const availability = document.createElement("div");
  availability.className = "availability";
  availability.textContent = product.discontinued ? "Discontinued" : "Available";
  availability.style.color = product.discontinued ? "red" : "green";
  card.appendChild(availability);

  return card;
}

// Function to display products of the selected category
function displayCategory(categoryId, categoryName) {
  selectedCategoryTitle.textContent = categoryName;
  productContainer.innerHTML = ""; // Clear the previous products

  products
    .filter((product) => product.categories.includes(categoryId))
    .forEach((product) => {
      const card = createProductCard(product);
      productContainer.appendChild(card);
    });
}

document.getElementById("newsletterForm").addEventListener("submit", function (event) {
  const email = document.getElementById("email").value;
  if (!email || !email.includes("@")) {
    event.preventDefault();
  }
});

// Initialize the app
createMenuButtons();
// Display the first category (all products first by default)
displayCategory(categories[0].id, categories[0].name);
