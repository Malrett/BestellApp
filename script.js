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

function showMenu(showContainer, hideContainer, showImg, hideImg) {
  document.getElementById(showContainer).classList.remove("d_none");
  document.getElementById(hideContainer).classList.add("d_none");
  document.getElementById(showImg).classList.remove("d_none");
  document.getElementById(hideImg).classList.add("d_none");
}

function addToBasket(dish, price) {
  if (basketContent.some((item) => item.name === dish) == true) {
    let basketIndex = basketContent.findIndex((item) => item.name === dish);
    basketContent[basketIndex].amount++;
  } else {
    basketContent.push({ "name": dish, "price": price, "amount": 1 });
  }
  renderBasket();
}

function reduceAmount(basketIndex) {
  if (basketContent[basketIndex].amount >= 2) {
    basketContent[basketIndex].amount--;
    renderBasket();
  } else {
    deleteItem(basketIndex);
  }
}

function addAmount(basketIndex) {
  basketContent[basketIndex].amount++;
  renderBasket();
}

function deleteItem(basketIndex) {
  basketContent.splice(basketIndex, 1);
  renderBasket();
}

function calculateTotal(sumTotalRef) {
  let sumItems = 0;
  let subTotal = 0;
  let deliveryCost = 5.0;
  let sumTotal = 0;
  for (let i = 0; i < basketContent.length; i++) {
    sumItems += basketContent[i].price * basketContent[i].amount;
  }
  subTotal = sumItems;
  sumTotal = sumItems + deliveryCost;
  sumTotalRef.innerHTML += getCostTemplate(subTotal, deliveryCost, sumTotal);
}

function confirmOrder() {
  let = basketOverlayRef = document.getElementById("basket_overlay_container");
  basketOverlayRef.classList.add("d_none");
  let = respBasketButtonRef = document.getElementById("respBasketButton");
  respBasketButtonRef.classList.remove("d_none");
  document.body.classList.remove("hide");
  renderBasket();
}

function renderBasket() {
  updateBasket("basket", "sumTotal");
  updateBasket("basket_overlay", "sumTotal_overlay");
}

function updateBasket(basket, sumTotal) {
  let basketContentRef = document.getElementById(basket);
  basketContentRef.innerHTML = "";
  let sumTotalRef = document.getElementById(sumTotal);
  sumTotalRef.innerHTML = "";
  if (basketContent.length === 0) {
    basketContentRef.innerHTML += getEmptyBasketTemplate();
    sumTotalRef.innerHTML = "";
    sumTotalRef.classList.remove("border_top");
  } else {
    updateFilledBasket(basketContentRef, sumTotalRef);
  }
}

function updateFilledBasket(basketContentRef, sumTotalRef) {
  for (let indexBasket = 0; indexBasket < basketContent.length; indexBasket++) {
    basketContentRef.innerHTML += getBasketTemplate(basketContent, indexBasket);
  }
  sumTotalRef.classList.add("border_top");
  sumTotalRef.classList.remove("d_none");
  calculateTotal(sumTotalRef);
}

function orderItems() {
  basketContent.length = 0;
  renderOrderConfirmation("basket", "sumTotal");
  renderOrderConfirmation("basket_overlay", "sumTotal_overlay");
}

function renderOrderConfirmation(basket, sumTotal) {
  let basketContentRef = document.getElementById(basket);
  basketContentRef.innerHTML = "";
  basketContentRef.innerHTML += getConfirmationTemplate();
  let sumTotalRef = document.getElementById(sumTotal);
  sumTotalRef.innerHTML = "";
  sumTotalRef.classList.remove("border_top");
}

function toggleBasketOverlay() {
  let = basketOverlayRef = document.getElementById("basket_overlay_container");
  basketOverlayRef.classList.toggle("d_none");
  let = respBasketButtonRef = document.getElementById("respBasketButton");
  respBasketButtonRef.classList.toggle("d_none");
  document.body.classList.toggle("hide");
}

function showImprint() {
  let legalInformationRef = document.getElementById("legal_overlay_container");
  legalInformationRef.classList.remove("d_none");
  legalInformationRef.innerHTML = "";
  legalInformationRef.innerHTML += getImprintTemplate();
}

function showPolicy() {
  let legalInformationRef = document.getElementById("legal_overlay_container");
  legalInformationRef.classList.remove("d_none");
  legalInformationRef.innerHTML = "";
  legalInformationRef.innerHTML += getPolicyTemplate();
}

function closeOverlay() {
  let legalInformationRef = document.getElementById("legal_overlay_container");
  legalInformationRef.classList.add("d_none");
}
