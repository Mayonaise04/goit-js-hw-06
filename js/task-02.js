const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

ingredientsList.insertAdjacentHTML('beforebegin', '<h1>Ingredients</h1>');

const ingredientsArr = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");

  ingredientItem.classList.add("item");
  ingredientItem.textContent = ingredient;

  return ingredientItem;
});

ingredientsList.append(...ingredientsArr);
