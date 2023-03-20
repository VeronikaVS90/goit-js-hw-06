const categoriesList = document.querySelector('#categories');
const categoriesCounter = categoriesList.querySelectorAll('li.item').length;
console.log(`Number of categories: ${categoriesCounter}`);

categoriesList.querySelectorAll('li.item').forEach(category => {
    const categoryHeading = category.querySelector('h2').textContent;
    const elementCount = category.querySelectorAll('li').length;

    console.log(`Category: ${categoryHeading}`);
    console.log(`Elements: ${elementCount}`);
});