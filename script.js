const products = [
  {
    id: 1,
    name: 'Karamellmunk',
    price: 25,
    rating: 4,
    amount: 0,
    category: 'Crunchy',
    img: {
      url: 'pictures/caramell.png',
      width: 400,
      height: 400,
      alt: 'Karamellmunk'
    },
  },

  {
    id: 2,
    name: 'Hallonmunk',
    price: 20,
    rating: 1.5,
    amount: 0,
    category: 'Fruity',
    img: {
      url: 'pictures/rasberry.png',
      width: 400,
      height: 400,
      alt: 'Hallonmunk'
    },
  },

  {
    id: 3,
    name: 'Chokladmunk',
    price: 30,
    rating: 3.5,
    amount: 0,
    category: 'sweet',
    img: {
      url: 'pictures/chokolat.jpg',
      width: 400,
      height: 400,
      alt: 'Chokladmunk'
    },
  },

  {
    id: 4,
    name: 'Lunchmunk',
    price: 70,
    rating: 4,
    amount: 0,
    category: 'meal',
    img: {
      url: 'pictures/sushi_donut.jpg',
      width: 400,
      height: 400,
      alt: 'Lunchmunk'
    },
  },

  {
    id: 5,
    name: 'Jordgubbsmunk',
    price: 25,
    rating: 5,
    amount: 0,
    category: 'Fruity',
    img: {
      url: 'pictures/strawberry.jpg',
      width: 400,
      height: 400,
      alt: 'Jordgubbsmunk'
    },
  },

  {
    id: 6,
    name: 'Sockermunk',
    price: 10,
    rating: 0.5,
    amount: 0,
    category: 'sweet',
    img: {
      url: 'pictures/sugar.jpg',
      width: 400,
      height: 400,
      alt: 'Sockermunk'
    },
  },

  {
    id: 7,
    name: 'Munk med chokladglasyr',
    price: 35,
    rating: 1,
    amount: 0,
    category: 'sweet',
    img: {
      url: 'pictures/chokolat_frosting.jpg',
      width: 400,
      height: 400,
      alt: 'Munk med chokladglasyr'
    },
  },

  {
    id: 8,
    name: 'Blåbärsmunk',
    price: 15,
    rating: 4.5,
    amount: 0,
    category: 'Fruity',
    img: {
      url: 'pictures/blueberry.jpg',
      width: 400,
      height: 400,
      alt: 'Blåbärsmunk'
    },
  },

  {
    id: 9,
    name: 'Ägglikörsmunk',
    price: 50,
    rating: 1.5,
    amount: 0,
    category: 'Christmas special',
    img: {
      url: 'pictures/christmas_donut_1.jpg',
      width: 400,
      height: 400,
      alt: 'Ägglikörsmunk'
    },
  },

  {
    id: 10,
    name: 'Äpplemunk',
    price: 35,
    rating: 4.5,
    amount: 0,
    category: 'Fruity',
    img: {
      url: 'pictures/appel.jpg',
      width: 400,
      height: 400,
      alt: 'Äppelmunk'
    },
  },

  {
    id: 11,
    name: 'Kärleksmunk',
    price: 50,
    rating: 3.5,
    amount: 0,
    category: 'Lovely',
    img: {
      url: 'pictures/love.jpg',
      width: 400,
      height: 400,
      alt: 'Kärleksmunk'
    },
  },

  {
    id: 12,
    name: 'Dietmunk',
    price: 35,
    rating: 0.5,
    amount: 0,
    category: 'diet',
    img: {
      url: 'pictures/diet.jpg',
      width: 400,
      height: 400,
      alt: 'Dietmunk'
    },
  },
];

/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:.HTML-ELEMENTS.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
const ratingsDiv = document.querySelector('#rating');
const sumDiv = document.querySelector('#sum'); //Summa nere
const totalsumDiv = document.querySelector('#total-sum'); //Summa uppe
const productsListDiv = document.querySelector('#products-list');
let shoppingProductCount = document.querySelector('#shopping-list');
const shoppingListDiv = document.querySelector('#shopping-list');
const orderPageDiv = document.querySelector('#order-page');
const cancelOrderButton = document.querySelector('#cancel-order-button');
const cancelButton = document.querySelector('#cancel-button');
const mondayDiscountDiv = document.querySelector('#monday-discount');
const orderDiv = document.querySelector('#order');
const confirmationButtonDiv = document.querySelector('#confirm-order-button');
const orderConfirmationSumDiv = document.querySelector('#order-confirmation-sum');
const orderConfirmationDiv = document.querySelector('#order-confirmation');
const shopingCartBasket = document.querySelector('#shoping-cart');
const sortNameButton = document.querySelector('#sort-by-name');
const sortPriceButton = document.querySelector('#sort-by-price');
const sortRatingButton = document.querySelector('#sort-by-rating');
const sortCategoryButton = document.querySelector('#sort-by-category');
const orderButton = document.querySelector('#order-button');
const cardCheckbox = document.querySelector('#card');
const cardInformationInput = document.querySelector('#card-information');
const discountButton = document.querySelector('#discount-button');
const discountInput = document.querySelector('#discount-information');
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:.HTML-ELEMENTS.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/


/*~*:._.:*~*:._.:*~*:._.:*~*:.TID.:*~*:._.:*~*:._.:*~*:._.:*~*/
const day = new Date();
const hour = day.getHours(); // Hämta timmen som ett heltal
const minutes = day.getMinutes(); // Hämta minuter som ett heltal
const dayOfWeek = day.getDay(); // Hämta veckodag (0 = söndag, 6 = lördag)
console.log('Klockan är ' + hour + ':' + minutes + ', och det är dag: ' + dayOfWeek);
/*~*:._.:*~*:._.:*~*:._.:*~*:.TID.:*~*:._.:*~*:._.:*~*:._.:*~*/


/*~*:._.:*~*:._.:*~*:._.:*~*:.PRINT-HTML.:*~*:._.:*~*:._.:*~*:._.:*~*/

/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:.SORTERA KNAPPARNA.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/********************************Sort by Name******************************/
sortNameButton.addEventListener('click', sortProductsByName);
let nameIsDescending = false; // Håller koll på nuvarande sorteringsordning

function sortProductsByName() {
  if (nameIsDescending === false) {
    const sorted = products.sort((product1, product2) => {
      if (product1.name < product2.name) {
        return -1;
      }
      if (product1.name > product2.name) {
        return 1;
      }
      return 0;
    }); //console.log('Stigande namnordning:', products);
  }
  else {
    const sorted = products.sort((product1, product2) => {
      if (product1.name < product2.name) {
        return 1;
      }
      if (product1.name > product2.name) {
        return -1;
      }
      return 0;
    }); //console.log('Fallande namnordning:', products);
  }
  nameIsDescending = !nameIsDescending; //Växla sorteringsordning för nästa gång
  printProductsList();
}

/*******************************Sort by Price******************************/
sortPriceButton.addEventListener('click', sortProductsByPrice);
let priceIsDescending = false; //Håller koll på nuvarande sorteringsordning

function sortProductsByPrice() {
  if (priceIsDescending === true) { // Sortera i stigande ordning
    products.sort((product1, product2) => product1.price - product2.price);
    //console.log('Omsorterat i stigande ordning:', products);
  }
  else { // Sortera i fallande ordning
    products.sort((product1, product2) => product2.price - product1.price);
    //console.log('Omsorterat i fallande ordning:', products);
  }
  priceIsDescending = !priceIsDescending; //Växla sorteringsordning för nästa gång
  printProductsList();
}

/*******************************Sort by Rating******************************/
sortRatingButton.addEventListener('click', sortProductsByRating);
let ratingIsDescending = false;

function sortProductsByRating() {
  if (ratingIsDescending === true) {
    products.sort((product1, product2) => product1.rating - product2.rating);
    //console.log('Omsorterat i stigande ordning:', products);
  }
  else {
    products.sort((product1, product2) => product2.rating - product1.rating);
    //console.log('Omsorterat i fallande ordning:', products);
  }
  ratingIsDescending = !ratingIsDescending;
  printProductsList();
}

/*******************************Sort by Category******************************/
sortCategoryButton.addEventListener('click', sortProductsByCategory);
let categoryIsDescending = false;

function sortProductsByCategory() {
  if (categoryIsDescending === true) {
    const sorted = products.sort((product1, product2) => {
      return product1.category === product2.category ? 0 : product1.category < product2.category ? -1 : 1;
    });
    //console.log('Omsorterat i stigande ordning:', products);
  }
  else {
    const sorted = products.sort((product1, product2) => {
      return product1.category === product2.category ? 0 : product1.category < product2.category ? 1 : -1;
    });
    //console.log('Omsorterat i fallande ordning:', products);
  }
  categoryIsDescending = !categoryIsDescending;
  printProductsList();
}
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:.SORTERA KNAPPARNA SLUT.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/


/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:.SPECIALREGLER.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/***********************************Måndagsrabatt***********************************/
//Kontrollera att det är måndag och att klockan är efter 10:00
let mondayDiscountHour = false;

if (day.getDay() === 1 &&
  ((hour > 0 || (hour === 0 && minutes > 0)) &&
    ((hour < 9) || (hour === 9 && minutes < 59)))) {
  mondayDiscountHour = true;
}

function mondayDiscount(products) {
  const day = new Date();
  if (mondayDiscountHour) {
    products.forEach(product => {
      product.price = Math.round(product.price * 0.9); //Minska priset med 10%
    });
    console.log('idag är det måndag');
  }
  else {
    return;
  }
}
const mondayDiscountHours = mondayDiscount(products);

/***********************************Helgpåslag***********************************/
let weekendPrices = false;
//Kontrollera om det är helgpriser. Fredagar efter kl. 15 och fram till natten mellan söndag och måndag kl. 03.00 tillkommer ett helgpåslag på 15 % på alla munkar.
if (
  (day.getDay() === 5 && (hour > 15 || (hour === 15 && minutes > 0))) || //Fredag efter 15:00
  day.getDay() === 6 || // Hela lördagen
  day.getDay() === 0 || // Hela söndagen
  (day.getDay() === 1 && (hour < 3 || (hour === 3 && minutes === 0)))) { //Natt till måndag fram till kl. 03:00
  weekendPrices = true;
}

function applyWeekendPrices(products) {
  const dayOfWeek = day.getDay();
  if (weekendPrices) { //Tillämpa helgpåslag på priserna
    products.forEach(product => {
      product.price = Math.round(product.price * 1.15); //Öka priset med 15 %
    });
  }
  else {
    return;
    //console.log('Inget helgpåslag på vardagen.');
  }
  console.log('Helgpåslag tillämpat:');
}
weekendPrices = applyWeekendPrices(products);

//***********************************Rabatt vid storköp***********************************/
let bulkSum = 0;
function bulkPurchaseDiscount(item) {
  let discountedPrice = item.price;
  if (item.amount >= 10) {
    discountedPrice = Math.round(item.price * 0.9);
  }

  bulkSum = item.amount * discountedPrice; //Lägg till kostnaden (med eventuell storköpsrabatt) till totalSumman
  console.log('Beställning på ' + item.amount + ' st av ', item.name + ' ger 10% rabatt. Totalpris: ' + item.amount * item.price + ' Pris per enhet efter rabatt st: ' + discountedPrice + ' bulk: ' + bulkSum);
  return bulkSum;
}
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:.SPECIALREGLER.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/


/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:.MUNKARNA I HTML.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
function printProductsList() { //funktion för att skriva ut munkarna vid inläsning av sidan
  productsListDiv.innerHTML = ''; //Rensa div:en före utskrift, annars blir det dubbelt vid knapptryck

  products.forEach(product => {
    mondayDiscountHours; //om det är måndag så aktiveras måndagspriser
    weekendPrices; //om det är helg så aktiveras helgpriser
    productsListDiv.innerHTML += `
      <div class="donut" class="border">
      <h2>${product.name}</h2>
        <div class="donut_description">
          
          <p>${product.price}kr</p>
          <p>${product.amount} st i varukorgen</p>
          <span class="rate">${getRatingHtml(product.rating)}</span>
        </div>
        <div class="pic">
          <img src="${product.img.url}" alt="${product.img.alt}">
        </div>

        <div class="buttons">
          <button class="decrease" class="amount" class="border" id="decrease-${product.id}">-</button>
          <div class="number" id="number"><p>${product.amount}</p></div>
          <button class="increase" class="amount" id="increase-${product.id}">+</button> <!--detta id ges till target i consolen-->
        </div>
      </div>
    `;
  });

  /*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
  /*~*:._.:*~*:._.:*~*:._.:*~*:.PLUS & MINUS KNAPPARNA.:*~*:._.:*~*:._.:*~*:._.:*~*/
  /*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
  //*******************Increase för varje knapp*******************//
  const increaseButtons = document.querySelectorAll('button.increase');
  increaseButtons.forEach(button => {
    button.addEventListener('click', increaceProductCount);
    console.log('ökat antal');
  });

  //*******************Decrease för varje knapp*******************//
  const decreaseButtons = document.querySelectorAll('button.decrease');
  decreaseButtons.forEach(button => {
    button.addEventListener('click', decreaceProductCount); //console.log('minskat antal');
  });

}
printProductsList(); //skriver ut munkarna

function sortFocus() { //funktion för att behålla fokus på aktuell knapp vid tangentbordsanvändning
  this.focus();
}
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:.MUNKARNA I HTML.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/



/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:LÄGG TILL & DRA IFRÅN MUNKAR.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
//*******************Increase för antal knapptryckningar*******************//
function increaceProductCount(e) {
  const productId = Number(e.target.id.replace('increase-', '')); //console.log('clicked on ', productId);
  const selectedProductIndex /*foundProductIndex i lektionsdemo*/ = products.findIndex(product => product.id === productId); //console.log('Varan har index: ', selectedProductIndex);
  const clickedButtonId = e.target.id; //variabel för att kunna behålla fokus på knappen
  shopingCartBasket.style.display = "block"; //först näär man lägger till första munken visas varukorgen

  if (selectedProductIndex === -1) { //Vald article måste ha minst index 0
    console.error('Det finns inte i listan');
    return;
  }

  const amountOfProduct = products[selectedProductIndex];
  amountOfProduct.amount += 1; //öka antalet med 1 för varje knapptryck //console.log('du vill köpa munkar: ' + (products[selectedProductIndex].amount));

  adjustArticle(products[selectedProductIndex]); //lägger till i den tomma arrayen när functionen adjustArticle nedan körs //console.log((products[selectedProductIndex])+(products[selectedProductIndex].amount)); //lägger till i den tomma arrayen när functionen adjustArticle nedan körs

  printProductsList();
  document.querySelector(`#${clickedButtonId}`).focus(); //fokus ligger kvar på knappen vid tryck med enter
}

//*******************Decrease för antal knapptryckningar******************* //
function decreaceProductCount(e) {
  const productId = Number(e.target.id.replace('decrease-', '')); //console.log('clicked on ', productId); /*console.log(e.target.id);/* <button class="increase" id="increase-${product.id}">+</button> <!--detta id ges till target i consolen-->*/
  const selectedProductIndex = products.findIndex(product => product.id === productId); //console.log('Varan har index: ', selectedProductIndex);
  const clickedDecreaseButton = e.target.id;

  if (products[selectedProductIndex].amount <= 0) { //kontrollera att det inte finns negativt antal i listan
    products[selectedProductIndex].amount = 0; //om det av någon anledning skulle hamna på minus antal sätts det tillbaka till 0.
    console.error('Det går inte att köpa negativt antal av munkar');
    return;
  }

  else {
    products[selectedProductIndex].amount -= 1; //console.log(products[selectedProductIndex]);

    adjustArticle(products[selectedProductIndex]); //lägger till i den tomma arrayen när functionen adjustArticle nedan körs
  }
  printProductsList();
  document.querySelector(`#${clickedDecreaseButton}`).focus();
}
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:LÄGG TILL & DRA IFRÅN MUNKAR.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/


/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:KUNDKORGEN.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
//*******************Increase - lägg nya artiklar i ny array - handledning med Jenny*******************//
const basket = []
let totalSum = 0;
let totalCost = 0;
let shippingFee = 0;
function adjustArticle(article) { //Här läggs till i arrayen, de skrivs sedan ut som med alla munkar
  totalSum = 0;
  shippingFee = 0;
  totalCost = totalSum + shippingFee;
  const shoppingProductCount = document.querySelector('#shopping-list'); //Talar om var den ska skrivas ut
  const existedProduct = (basket.findIndex(index => index.id === article.id)); //console.log('kolla om det finns i basket sedan tidigare. undefined betyder negativt, annars skrivs arrayen ut:', basket[existedProduct]);

  if (existedProduct === -1) {
    basket.push(article); //console.log('lagt till EN gång kundkorg', basket);
  }
  else {
    basket[existedProduct].amount + 1; //console.log('plussat på i kundkorg', basket);
  }

  shoppingProductCount.innerHTML = '';
  mondayDiscountDiv.innerHTML = '';
  if (mondayDiscountHour) {
    mondayDiscountDiv.innerHTML += `
      <div class="monday_discount"><p>Idag är det måndag!</br>Det firar vi med 10% på alla munkar!</p></div></div>
  `;
  }
  basket.forEach(item => {
    let bulkSumForItem = bulkPurchaseDiscount(item); //Få rabatterad summa
    totalSum += bulkSumForItem; //Lägg till i totalSumman

    if (item.amount > 0) { //skriv bara ut i shoppingkorgen om det fatiskt finns munkar i den
      shoppingProductCount.innerHTML += `
        <div class="shopping_list">
        
          <div class="product"><p>${item.name}, ${item.amount} st</p></div>     
          <div class="pic">
            <img src="${item.img.url}" alt="${item.img.alt}">
          </div> 
          <div class="price"><p>${item.price}kr st</p></div>
          <div class="cost"><p>Totalt: ${bulkSumForItem}kr</p></div>
          <div class="line"></div>
          <div class="shopping_cart_buttons"></div>
        </div>
      `;
    }
  });
  //console.log('Totalpris för sorten', totalSum);


  /***************************************************************/
  /*************************Gratis frakt vid storköp*************************/
  /***************************************************************/
  let totalItems = 0;
  basket.forEach(item => {
    totalItems += item.amount;
  });

  // Kontrollera om antalet produkter ger gratis frakt
  if (totalItems >= 15) {
    shippingFee = 0;
    console.log('Fler än 15 ger gratis frakt. Fraktavgift:' + shippingFee);
  } else {
    shippingFee = Math.round(totalSum * 0.1) + 25; // Frakt = 10% av totalsumman + 25 kr
    console.log('Frakten är 10% + 25kr. Fraktavgift:' + shippingFee);
  }
  /***************************************************************/
  /*************************Gratis frakt vid storköp*************************/
  /***************************************************************/


  totalCost = totalSum + shippingFee;

  totalsumDiv.innerHTML = '';
  totalsumDiv.innerHTML += `
    <div class="sum"><p>Du har köpt munkar för: ${totalSum}kr</p></div>
  `;

  sumDiv.innerHTML = '';
  sumDiv.innerHTML += `
    <div class="sum">`;
  if (mondayDiscountHour) {
    sumDiv.innerHTML += `
      <p>Idag är det måndag! Det firar vi med 10% på alla munkar!</p>
  `;
  }
  sumDiv.innerHTML += `      
    <div><p>Totalt (exkl. frakt): ${totalSum} kr</p></div>
    <div><p>Fraktkostnad: ${shippingFee} kr</p></div>
    <div><p>Totalt att betala: ${totalCost} kr</p></div>
    </div>
  `;

  const invoiceDiv = document.querySelector('#invoice');
  if (totalSum > 800) {
    invoiceDiv.style.display = 'none'; //console.log('ej fakturaköp');
  }
}
function printShoppinglist() {
  shoppingListDiv.innerHTML += `
    <div class="shopping_list">
      <p>Varukorgen är tom</p>
    </div>
  `;
}
printShoppinglist();
/*********************Här tar function adjustArticle slut************************/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:KUNDKORGEN.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/



/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:ORDER CONFIRMATION.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*****************************Avbryt beställning***************************/
cancelButton.addEventListener('click', function () { //Avbryt i varukorgen
  //location.reload(); 

  const shoppingProductCount = document.querySelector('#shopping-list');
  shoppingProductCount.innerHTML = '';

  shoppingListDiv.innerHTML += `
    <div class="shopping_list">
      <p>Varukorgen är tom</p>
    </div>
  `;
  totalsumDiv.innerHTML = '';
  sumDiv.innerHTML = '';

  console.log('avrbyt');
});

/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:.BESTÄLLNINGSFORMULÄR.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/************************FORMULÄR********************/
const userNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const adressInput = document.querySelector('#adress');
const zipCodeInput = document.querySelector('#zip-code');
const postalAddressInput = document.querySelector('#postal-address');
const phoneInput = document.querySelector('#phone');
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('email-error');
const errorMessage = document.querySelector('#error-message');
const cardInput = document.querySelector('#card');
const invoiceInput = document.querySelector('#invoice');
const invoiceCheckbox = document.querySelector('#invoice');
const invoiceInformationInput = document.querySelector('#invoice-information');
const personInput = document.querySelector('#person-id-number');
const nameRegex = new RegExp(/\w{2,}/); //Minst två tecken krävs
const lastNameRegex = new RegExp(/\w{2,}/); //Minst två tecken krävs
const adressRegex = new RegExp(/^((.){1,}(\d){1,}(.){0,})$/); //Gatuadress inkl gatunummer
const zipCodeReggex = new RegExp(/^\d{3} \d{2}$/); //Postnummer av typen 123 45
const zipCodeRegex = new RegExp(/^[0-9]{3}\s?[0-9]{2}$/); //Postnummer av typen 123 45
const postalAdressRegex = new RegExp(/\w{2,}/); //Minst två tecken krävs
const phoneRegex = new RegExp(/^((\+|00)46|0)7[02369][0-9]{7}$/); //Mobilnummer av typen: +467*xxxxxxx, 00467*xxxxxxx och 07*xxxxxxx
const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/); //Epostadress
const personIdRegex = new RegExp(/^(\d{10}|\d{12}|\d{6}-\d{4}|\d{8}-\d{4}|\d{8} \d{4}|\d{6} \d{4})/);

let userName = '';
let lastName = '';
let adress = '';
let zipCode = '';
let postalAddress = '';
let phone = '';
let email = '';
let personId = '';

function registerUser() {
  console.warn(`Element för registerUser saknas i DOM.`)
  userName = userNameInput.value;
  lastName = lastNameInput.value;
  adress = adressInput.value;
  zipCode = zipCodeInput.value;
  postalAddress = postalAddressInput.value;
  phone = phoneInput.value;
  email = emailInput.value;
  console.log(`User: ${userName} ${lastName}`);
}

//Ny funktion för att kontrollera om ett betalsätt är valt
function validatePaymentMethod() {
  const isCardSelected = cardInput.checked;
  const isInvoiceSelected = invoiceInput.checked;

  if (isCardSelected || isInvoiceSelected) {
    validationStatus._paymentMethodCheck = true;
    errorMessage.innerHTML = ''; //Rensa eventuellt felmeddelande
    console.log('Betalsätt är valt.');
  }
  else {
    validationStatus._paymentMethodCheck = false;
    console.log('Inget betalsätt är valt.');
  }
}

//Lägg till event-lyssnare på radioknappar för att uppdatera betalningsstatus
cardInput.addEventListener('change', clikableButton);
invoiceInput.addEventListener('change', clikableButton);
//Lägg till event-lyssnare på båda radioknapparna
cardInput.addEventListener('change', handlePaymentChange);
invoiceInput.addEventListener('change', handlePaymentChange);

function handlePaymentChange() {
  if (cardInput.checked) { //Om kort är valt visas kortinput och fakturainput tas bort
    cardInformationInput.innerHTML += `
      <input type="number" placeholder="Kortnummer"><br>
      <input type="number" placeholder="MM//ÅÅ"><br>
      <input type="number" placeholder="CVC"><br>
    `;
    invoiceInformationInput.innerHTML = ''; //Ta bort fakturafält
  }

  else if (invoiceInput.checked) {//Om faktura är valt visas fakturainput och kortinput tas bort
    const requirePersonIdNumber = invoiceCheckbox.checked; //Kontrollera om faktura är vald som betalsätt
    if (requirePersonIdNumber) {
      invoiceInformationInput.innerHTML = `
        <label for="person-id-number" class="input">Personnummer: </label></br>
        <input id="person-id-number" type="text" placeholder="YYYYMMDD-XXXX"><br>
      `;
      cardInformationInput.innerHTML = ''; //Ta bort kortfält
    }

    //Lägg till validering för personnummer
    const personInput = document.querySelector('#person-id-number');
    if (personInput) {
      validationStatus._validPersonIdNumber = false;
      validateFieldsInForm(personInput, personIdRegex, '_validPersonIdNumber', 'personnummer');
    }
  }

  else {
    //Ta bort input-fält om faktura inte är vald
    invoiceInformationInput.innerHTML = '';
    validationStatus._validPersonIdNumber = true; //Återställ personnummer-kontroll till godkänd
  }

  validatePaymentMethod();
  clikableButton(); //Uppdatera knappens status
}

const fieldsToValidate = [
  { input: userNameInput, regex: nameRegex, flag: '_userNameCheck', message: 'namn' },
  { input: lastNameInput, regex: lastNameRegex, flag: '_lastNameCheck', message: 'efternamn' },
  { input: adressInput, regex: adressRegex, flag: '_adressCheck', message: 'adress' },
  { input: zipCodeInput, regex: zipCodeRegex, flag: '_zipCodeCheck', message: 'postnummer' },
  { input: postalAddressInput, regex: postalAdressRegex, flag: '_postalAddressCheck', message: 'postadress' },
  { input: phoneInput, regex: phoneRegex, flag: '_phoneCheck', message: 'telefonnummer' },
  { input: emailInput, regex: emailRegex, flag: '_emailCheck', message: 'e-post', errorElement: 'emailError' },
];


//Objekt för att lagra valideringsstatus
const validationStatus = {
  _userNameCheck: false,
  _lastNameCheck: false,
  _adressCheck: false,
  _zipCodeCheck: false,
  _postalAddressCheck: false,
  _phoneCheck: false,
  _emailCheck: false,
  _validPersonIdNumber: true, // Börjar som true om faktura inte är vald
};

//Funktion för att validera ett fält
function validateFieldsInForm(input, regex, flag, message) {

  input.addEventListener('input', () => {
    //if else för ökad tillgänglighet
    if (!regex.test(input.value.trim())) {
      input.classList.add('input-error');
    }
    else {
      input.classList.remove('input-error');
      input.removeAttribute('aria-describedby');
    }

    const value = input.value.trim();
    if (regex.test(value)) {
      validationStatus[flag] = true;
      input.style.borderColor = 'green'; //Indikera att inmatningen är giltig
      errorMessage.innerHTML = ``;
      console.log(`Giltig ${message}:`, value);
    }

    else {
      let errorMessage = document.querySelector('#error-message');
      if (!errorMessage) {
        errorMessage = document.createElement('div');
        errorMessage.id = 'error-message';
        document.body.appendChild(errorMessage); //Eller lägg till det vid fältet
      }

      validationStatus[flag] = false;
      input.style.borderColor = 'red'; //Indikera att inmatningen är ogiltig
      errorMessage.innerHTML = `
      <span><p>Felaktigt inmatad ${message}. Korrekt  ${message} måste anges.</p></span>
    `;
      console.log(`Ogiltig ${message}`);
    }
    clikableButton(); //Kontrollera knappens status efter varje inmatning
  });
}

//Lägg till validering på varje fält
fieldsToValidate.forEach(({ input, regex, flag, message }) => {
  if (input) {
    validateFieldsInForm(input, regex, flag, message);
  } else {
    console.warn(`Element för ${message} saknas i DOM.`);
  }
});

// Lägg till valideringsflagga för betalsätt
validationStatus._paymentMethodCheck = false;
//Funktion för att uppdatera knappens status
function clikableButton() {
  validatePaymentMethod();

  const allValid = Object.values(validationStatus).every(status => status);
  confirmationButtonDiv.disabled = !allValid; //Aktivera knappen endast om alla fält är giltiga
  console.log(allValid ? 'Alla fält är giltiga' : 'Vissa fält är ogiltiga');
}

/*************************Rabattkod*************************/
discountButton.addEventListener('click', handleDiscount);
function handleDiscount() {
  alert('Du har använt rabattkoden ' + discountInput.value);
}

/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:.KNAPPAR I FORMULÄRET.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*************************Avbryt*************************/
cancelOrderButton.addEventListener('click', function () { //Avbryt där formuläret visas
  location.reload();
  /**
   * Jag fick veta i feedbacken att det inte är uppskattat att göra reload. 
   * Men jag har behållit det för nu, och jag behåller också funktionen clearOrder jag gjort som återställer allt på sidan:
    */
  //clearOrder();
});

/*
function clearOrder() {
  const shoppingProductCount = document.querySelector('#shopping_list');
  shoppingProductCount.innerHTML = '';
  orderDiv.innerHTML = '';
  shoppingListDiv.innerHTML += `
    <div id="shopping_list">
      <p>Varukorgen är tom</p>
    </div>
  `;
  totalsumDiv.innerHTML = '';
  sumDiv.innerHTML = '';
  orderPageDiv.style.display = 'none';
    //  orderFormDiv.innerHTML = '';
  if (form) {
    form.reset(); // Återställ formuläret
  }
  else {
    console.error('Formuläret hittades inte.');
  }
  console.log('avbryt gick bra');
}*/

/********************************ORDERBEKRÄFTELSE I FORMULÄR*************************/
orderButton.addEventListener('click', function () { //Eventlyssnare för button order-button
  showFormPage(); //Visar formuläret och sammanställning av kundkorgen
  orderDiv.innerHTML = '';


  basket.forEach(item => {
    orderDiv.innerHTML += `
      <div><p>${item.amount} st ${item.name}. Totalkostnad ${item.name} är ${item.amount * item.price}kr<p></div>
    `;
    console.log('produktlista' + item.name);
  });

  orderDiv.innerHTML += `
    <div><p>Totalt (exkl. frakt): ${totalSum} kr</p>
    <p>Fraktkostnad: ${shippingFee} kr</p>
    <p>Totalt att betala: ${totalCost} kr</p>
    </div>
  `;
  showTooSlowMessage();
});
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:.KNAPPAR I FORMULÄRET.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/


function showFormPage() {
  orderPageDiv.style.display = 'block'; //Först när knappen orderButton trycks på visas formuläret och sammanställning av kundkorgen
}

function showTooSlowMessage() {
  setTimeout(clearBasket, 900000);
}

function clearBasket() {
  location.reload();
  alert('Beställningen måste gå iväg inom 15 minuter. Din varukorg rensas.');
}

function orderSum() {
  orderConfirmationDiv.style.display = 'block'; //Först när knappen order_page trycks på visas formuläret
}

/****************************Bekräfta beställning***************************/
confirmationButtonDiv.disabled = true; // Gör knappen utgråad
confirmationButtonDiv.addEventListener('click', function () { //Eventlyssnare för button order-button
  orderSum(); //visar <div> med id order-confirmation. innen detta är den dold. Då visas beställningsbekräftelse och inmatade kunddata
  registerUser(); //läser in input data från formuläret genom function registerUser


  orderConfirmationSumDiv.innerHTML = '';
  orderConfirmationSumDiv.innerHTML = `
      <div class="order_confirmation_sum" style="border:none;">
      <h6>Orderbekräftelse:</h6>
      <p>Hej ${userName} ${lastName}, du har köpt munkar idag!</p>
      </div>
  `;
  basket.forEach(item => {
    orderConfirmationSumDiv.innerHTML += `
      <div>
      <p>${item.name}, ${item.amount}st, ${item.amount * item.price}kr</p>
      </div>
    `;
  });
  orderConfirmationSumDiv.innerHTML += `
  <div>
    <div><p>Totalt (exkl. frakt): ${totalSum} kr</p></div>
    <div><p>Fraktkostnad: ${shippingFee} kr</p></div>
    <div><p>Totalt att betala: ${totalCost} kr</p></div>
  
    <p>Din order kommer att skickas till:</p>
    <p>${userName} ${lastName}</p>
    <p>${adress} ${zipCode} ${postalAddress}</p>
    <p>Leveransbekräftelse skickas till ${email}</p>
    <p>Bud kommer att ringa dig före leverans på ${phone}</p>
    </div>    
    `;
});
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:ORDER CONFIRMATION.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/


/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:.STAR RATING.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
function getRatingHtml(rating) {
  // Dela upp rating i heltals- och decimaldelar
  const fullStars = Math.floor(rating); //Antal hela stjärnor
  const isHalfStar = rating % 1 !== 0;  //Kontrollera om det finns en halv

  let star = ''; // Loopa för att skapa hela stjärnor
  for (let i = 0; i < fullStars; i++) {
    star += `<span><img src="pictures/star.png" width="20" height="18" loading="lazy" alt="helt stjärna"></span>`;
  }

  if (isHalfStar) { //Lägg till en halv stjärna om det behövs
    star += `<span><img src="pictures/star_half.png" width="20" height="18" loading="lazy" alt="halv stjärna"></span>`;
  }
  return star;
}
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:.STAR RATING.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*/