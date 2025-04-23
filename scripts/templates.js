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

function getEmptyBasketTemplate() {
  return `
    <div class="empty_basket" >
      <h2>Suche dir etwas Leckeres von unserer Karte aus!</h2>
    </div>
  `;
}

function getBasketTemplate(dish, index) {
  return `
    <div class="basket_item">
        <h2>${dish[index].name}</h2>
        <div class="basket_details">
          <div class="change_amount">
            <p class="clickable" onclick="reduceAmount('${index}')" >-</p>
            <p>${dish[index].amount + "x"}</p>
            <p class="clickable" onclick="addAmount('${index}')">+</p>
          </div>
            <p>${(dish[index].price * dish[index].amount).toFixed(2).replace(".", ",") + " €"}</p>
            <img class="recycleBin clickable" onclick="deleteItem('${index}')" src="./assets/img/bin_888060.png" alt="bin">
        </div>
        
    </div>
`;
}

function getCostTemplate(subTotal, deliveryCost, sumTotal) {
  return `    
  <table>
    <tr>
      <td><p>Zwischensumme:</p></td>
      <td><p>${subTotal.toFixed(2).replace(".", ",") + " €"}</p></td>
    </tr>
    <tr>
      <td><p>Lieferkosten:</p></td>
      <td><p>${deliveryCost + ",00 €"}</p></td>
    </tr>
    <tr>
      <td><p><b>Gesamtsumme:</b></p></td>
      <td><p>${sumTotal.toFixed(2).replace(".", ",") + " €"}</p></td>
    </tr>  
  </table>
    `;
}

function getImprintTemplate() {
  return `
  <h1>Impressum</h1>
        <p>
          Malte Rettberg<br />
          Hauptstr. 71<br />
          76534 Baden-Baden
        </p>
        <h2>Kontakt</h2>
        <p>
          Telefon: +49 (0) 179 206 3114<br />
          E-Mail: malte.rettberg@web.de
        </p>
        <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>
        Created my free logo at <a href="https://logomakr.com" target="_blank">LogoMakr.com</a> <br /><br />
        The icons are provided by <a href="https://fontawesome.com/" rel="nofollow" target="_blank">FontAwesome</a> unter the
        <a href="https://fontawesome.com/license" target="_blank" rel="nofollow">Creative Commons Attribution 4.0 International license</a>.
  `;
}
