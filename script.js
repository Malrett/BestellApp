let basketContent = [];

function init() {
  renderDishes(mainDishes, "dishes_container");
  renderDishes(starters, "starters_container");
  renderBasket();
}

function renderDishes(dishes, container) {
  let dishesRef = document.getElementById(container);
  dishesRef.innerHTML = "";
  for (let indexDishes = 0; indexDishes < dishes.length; indexDishes++) {
    dishesRef.innerHTML += getDishTemplate(dishes, indexDishes);
  }
}

function showMenu(showContainer, hideContainer) {
  document.getElementById(showContainer).classList.remove("d_none");
  document.getElementById(hideContainer).classList.add("d_none");
}

function addToBasket(dish, price) {
  if (basketContent.some((item) => item.name === dish) == true) {
    let basketIndex = basketContent.findIndex((item) => item.name === dish);
    basketContent[basketIndex].amount++;
  } else {
    basketContent.push({ "name": dish, "price": price, "amount": 1 });
  }

  renderBasket();
  calculateTotal();
}

function reduceAmount(basketIndex) {
  if (basketContent[basketIndex].amount >= 2) {
    basketContent[basketIndex].amount--;
    renderBasket();
    calculateTotal();
  } else {
    deleteItem(basketIndex);
  }
}

function addAmount(basketIndex) {
  basketContent[basketIndex].amount++;
  renderBasket();
  calculateTotal();
}

function deleteItem(basketIndex) {
  basketContent.splice(basketIndex, 1);
  renderBasket();
  calculateTotal();
}

function calculateTotal() {
  let sumTotalRef = document.getElementById("sumTotal");
  //sumTotalRef.innerHTML = "";
  let sumItems = 0;
  let deliveryCost = 5;
  let sumTotal = 0;
  for (let i = 0; i < basketContent.length; i++) {
    sumItems += basketContent[i].price * basketContent[i].amount;
  }
  sumTotal = sumItems + deliveryCost;
  sumTotalRef.innerHTML = sumTotal.toFixed(2).replace(".", ",") + " €";
}

function renderBasket() {
  let basketContentRef = document.getElementById("basket");
  basketContentRef.innerHTML = "";

  for (let indexBasket = 0; indexBasket < basketContent.length; indexBasket++) {
    basketContentRef.innerHTML += getBasketTemplate(basketContent, indexBasket);
  }
}
