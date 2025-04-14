function getDishTemplate(dish, index) {
  return `
    <div class="dish">
        <div class="left_side">
            <h2>${dish[index].name}</h2>
            <p>${dish[index].description}</p>
            <p>${dish[index].price}</p>
        </div>
        <p onclick="addToBasket('${dish[index].name}', '${dish[index].price}')" class="right_side">+</p>
        
</div>
    `;
}

function getBasketTemplate(dish, index) {
  return `
    <div class="dish">
        <div class="left_side">
            <h2>${dish[index].name}</h2>
            <p>${dish[index].price}</p>
        </div>
    </div>
`;
}
