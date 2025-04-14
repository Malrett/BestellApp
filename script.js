function init() {
  renderMainDishes();
  renderSideDishes();
}

function renderMainDishes() {
  let mainDishesRef = document.getElementById("dishes_container");
  mainDishesRef.innerHTML = "";
  for (let indexDishes = 0; indexDishes < mainDishes.length; indexDishes++) {
    mainDishesRef.innerHTML += getDishTemplate(mainDishes, indexDishes);
  }
}

function renderSideDishes() {
  let sideDishesRef = document.getElementById("side_dishes_container");
  sideDishesRef.innerHTML = "";
  for (
    let indexSideDishes = 0;
    indexSideDishes < sideDishes.length;
    indexSideDishes++
  ) {
    sideDishesRef.innerHTML += getDishTemplate(sideDishes, indexSideDishes);
  }
}
