function getDishTemplate(dish, index) {
  return `
    <div class="dish">
        <div class="left_side">
            <h2>${dish[index].name}</h2>
            <p>${dish[index].description}</p>
            <p class="price">${dish[index].price.toFixed(2).replace(".", ",")} €</p>
        </div>
        <p onclick="addToBasket('${dish[index].name}', '${dish[index].price}')" class="right_side clickable">+</p>
        
</div>
    `;
}

function getBasketTemplate(dish, index) {
  return `
    <div class="basket_item">
        <h2>${dish[index].name}</h2>
        <div class="basket_details">
            <p class="clickable" onclick="reduceAmount('${index}')" >-</p>
            <p>${dish[index].amount}</p>
            <p class="clickable" onclick="addAmount('${index}')">+</p>
            <p>${dish[index].price * dish[index].amount + " €"}</p>
            <img class="recycleBin clickable" onclick="deleteItem('${index}')" src="./assets/img/bin_888060.png" alt="bin">
        </div>
        
    </div>
`;
}
