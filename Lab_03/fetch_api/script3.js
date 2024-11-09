const apiURL = "https://dummyjson.com/products";
let allProducts = [];
let originalProducts = [];

async function fetchData() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    allProducts = data.products.slice(0, 30);
    originalProducts = allProducts;
    displayProducts(allProducts);
  } catch (error) {
    console.error("Błąd w pobieraniu danych:", error);
  }
}

function displayProducts(products) {
  const tableBody = document
    .getElementById("productTable")
    .querySelector("tbody");
  tableBody.innerHTML = "";

  products.forEach((product) => {
    const row = document.createElement("tr");

    const imgCell = document.createElement("td");
    const img = document.createElement("img");
    img.src = product.thumbnail;
    img.alt = product.title;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const titleCell = document.createElement("td");
    titleCell.textContent = product.title;
    row.appendChild(titleCell);

    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = product.description;
    row.appendChild(descriptionCell);

    tableBody.appendChild(row);
  });
}

function filterProducts() {
  const searchTerm = document.getElementById("filter").value.toLowerCase();
  const filteredProducts = allProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
  );
  originalProducts = filteredProducts;
  sortAndDisplayProducts(filteredProducts);
}

function sortAndDisplayProducts(products) {
  const sortValue = document.getElementById("sortSelect").value;

  if (sortValue === "ascending") {
    products.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === "descending") {
    products.sort((a, b) => b.title.localeCompare(a.title));
  } else {
    products = originalProducts;
  }

  displayProducts(products);
}

document.getElementById("filter").addEventListener("input", filterProducts);
document
  .getElementById("sortSelect")
  .addEventListener("change", filterProducts);

document.addEventListener("DOMContentLoaded", fetchData);
