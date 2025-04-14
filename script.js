let basketContent = [];

function init() {
  renderDishes(mainDishes, "dishes_container");
  renderDishes(sideDishes, "side_dishes_container");
  renderBasket();
}

function renderDishes(dishes, container) {
  let dishesRef = document.getElementById(container);
  dishesRef.innerHTML = "";
  for (let indexDishes = 0; indexDishes < dishes.length; indexDishes++) {
    dishesRef.innerHTML += getDishTemplate(dishes, indexDishes);
  }
}

function addToBasket(dish, price) {
  basketContent.push({ "name": dish, "price": price });
  renderBasket();
}

function renderBasket() {
  let basketContentRef = document.getElementById("basket");
  basketContentRef.innerHTML = "";

  for (let indexBasket = 0; indexBasket < basketContent.length; indexBasket++) {
    basketContentRef.innerHTML += getBasketTemplate(basketContent, indexBasket);
  }
}

//function removeFromBasket

//function addDeliveryCost

//function changeAmount

//function orderItems
