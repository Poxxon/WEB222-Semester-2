/**
 * WEB222 – Assignment 04
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
 *      Date:       12/07/24
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

// Get references to the HTML elements
const menu = document.getElementById("menu");
const selectedCategoryTitle = document.getElementById("selected-category");
const categoryProducts = document.getElementById("category-products");

// Function to create menu buttons for each category
function createMenuButtons() {
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category.name;
    button.addEventListener("click", () => displayCategory(category.id, category.name));
    menu.appendChild(button);
  });
}

// Function to display products of the selected category
function displayCategory(categoryId, categoryName) {
  selectedCategoryTitle.textContent = categoryName;
  categoryProducts.innerHTML = ""; // Clear the previous products

  products
    .filter((product) => product.categories.includes(categoryId))
    .forEach((product) => {
      const row = document.createElement("tr");

      const titleCell = document.createElement("td");
      titleCell.textContent = product.title;
      titleCell.classList.add("bold", "title");
      row.appendChild(titleCell);

      const descriptionCell = document.createElement("td");
      descriptionCell.textContent = product.description;
      descriptionCell.classList.add("description");
      row.appendChild(descriptionCell);

      const priceCell = document.createElement("td");
      priceCell.textContent = `$${(product.price / 100).toFixed(2)}`;
      priceCell.classList.add("price");
      row.appendChild(priceCell);

      const statusCell = document.createElement("td");
      statusCell.textContent = product.discontinued ? "Discontinued" : "Available";
      row.appendChild(statusCell);

      const imageCell = document.createElement("td");
      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.title;
      image.style.borderRadius = "5px";
      // image.style.height = '200px'
      imageCell.appendChild(image);
      row.appendChild(imageCell);

      categoryProducts.appendChild(row);
    });
}

// Initialize the app
createMenuButtons();
displayCategory(categories[0].id, categories[0].name); // Display the first category by default
