function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings:
      "Sift flour, baking powder, sugar, and salt together in a large bowl.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
