const categoriesList = document.querySelectorAll(`ul#categories .item`);
console.log(`Number of categories: ${categoriesList.length}`);
for (let category of categoriesList) {
  const categoryItemsCount= category.querySelector(`ul`).children.length;
  const categoryName = category.querySelector(`h2`).textContent;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItemsCount}`);
}