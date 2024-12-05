const products = [
  {
    id: 1,
    name: 'Karamell',
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
    name: 'Hallon',
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
    name: 'Jordgubb',
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
    name: 'Socker',
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
    name: 'Chokladglasyr',
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
    name: 'Blåbär',
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
    name: 'Ägglikör',
    price: 50,
    rating: 1.5,
    amount: 0,
    category: 'Christmas special',
    img: {
      url: 'pictures/christmas_donut_1.jpg',
      width: 400,
      height: 400,
      alt: 'Ägglikör'
    },
  },

  {
    id: 10,
    name: 'Äpple',
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
    name: 'Diet',
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


/*~*:._.:*~*:._.:*~*:._.:*~*:.HTML-ELEMENTS.:*~*:._.:*~*:._.:*~*:._.:*~*/
const ratingsDiv = document.querySelector('#rating');
const sumDiv = document.querySelector('#sum'); //Summa nere
const totalsumDiv = document.querySelector('#totalsum'); //Summa uppe
const productsListDiv = document.querySelector('#products-list');
let shoppingProductCount = document.querySelector('#shopping_list');
const shoppingListDiv = document.querySelector('#shopping-list');
const orderPageDiv = document.querySelector('#order_page');
const cancelOrderButton = document.querySelector('#cancel_order_button');
const cancelButton = document.querySelector('#cancel_button');
const mondayDiscountDiv = document.querySelector('#mondayDiscount');
const orderDiv = document.querySelector('#order');
const confirmationButtonDiv = document.querySelector('#confirm_order_button');
const orderConfirmationSumDiv = document.querySelector('#order_confirmation_sum');
const orderConfirmationDiv = document.querySelector('#order_confirmation');
const shopingCartBasket = document.querySelector('#shoping_cart');
const sortNameButton = document.querySelector('#sortByName');
const sortPriceButton = document.querySelector('#sortByPrice');
const sortRatingButton = document.querySelector('#sortByRating');
const sortCategoryButton = document.querySelector('#sortByCategory');
const orderButton = document.querySelector('#order_button');
const cardCheckbox = document.querySelector('#card');
const cardInformationInput = document.querySelector('#card_information');

const discountButton = document.querySelector('#discount_button');
const discountInput = document.querySelector('#discount_information');


/*~*:._.:*~*:._.:*~*:._.:*~*:.HTML-ELEMENTS.:*~*:._.:*~*:._.:*~*:._.:*~*/


/*~*:._.:*~*:._.:*~*:._.:*~*:.TID.:*~*:._.:*~*:._.:*~*:._.:*~*/
const day = new Date();
const hour = day.getHours(); // Hämta timmen som ett heltal
const minutes = day.getMinutes(); // Hämta minuter som ett heltal
const dayOfWeek = day.getDay(); // Hämta veckodag (0 = söndag, 6 = lördag)
console.log ('Klockan är ' + hour +':'+ minutes + ', och det är dag: ' + dayOfWeek);
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
  nameIsDescending = !nameIsDescending; // Växla sorteringsordning för nästa gång
  printProductsList();
}

/*******************************Sort by Price******************************/
sortPriceButton.addEventListener('click', sortProductsByPrice);
let priceIsDescending = false; // Håller koll på nuvarande sorteringsordning

function sortProductsByPrice() {
  if (priceIsDescending === true) { // Sortera i stigande ordning
    products.sort((product1, product2) => product1.price - product2.price);
    //console.log('Omsorterat i stigande ordning:', products);
  }
  else { // Sortera i fallande ordning
    products.sort((product1, product2) => product2.price - product1.price);
    //console.log('Omsorterat i fallande ordning:', products);
  }
  priceIsDescending = !priceIsDescending; // Växla sorteringsordning för nästa gång
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
((hour < 9 ) || (hour === 9 && minutes < 59)))) {
    mondayDiscountHour = true;
  }

  function mondayDiscount(products){
    const day = new Date();
    if (mondayDiscountHour){
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
  (day.getDay() === 1 && (hour < 3 || (hour === 3 && minutes === 0))) //Natt till måndag fram till kl. 03:00
){
  weekendPrices = true;
}

function applyWeekendPrices(products){
  const dayOfWeek = day.getDay();
  if (weekendPrices) { //Tillämpa helgpåslag på priserna
    products.forEach(product => {
      product.price = Math.round(product.price * 1.15); // Öka priset med 15 %
    });
  }
  else {
    return;
  // console.log('Inget helgpåslag på vardagen.');
  }
  console.log('Helgpåslag tillämpat:');
}
weekendPrices = applyWeekendPrices(products); 

//***********************************Rabatt vid storköp***********************************/
let bulkSum = 0;
function bulkPurchaseDiscount(item){
  let discountedPrice = item.price;
  if (item.amount >= 10) {
    discountedPrice = Math.round(item.price * 0.9);
  }

  bulkSum = item.amount * discountedPrice; //Lägg till kostnaden (med eventuell storköpsrabatt) till totalSumman
  console.log('Beställning på '+ item.amount + ' st av ',  item.name +' ger 10% rabatt. Totalpris: ' + item.amount*item.price + ' Pris per enhet efter rabatt st: ' + discountedPrice  + ' bulk: ' + bulkSum);
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
      <article class="donut">
        <div class="donut_description">
          <h3>${product.name}</h3>
          <p>${product.price}kr</p>
          <p>${product.amount} st i varukorgen</p>
          <span class="rate">Betyg: ${product.rating} = ${getRatingHtml(product.rating)}</span>
        </div>
        <div class="pic">
          <img src="${product.img.url}" alt="${product.img.alt}">
        </div>

        <div class="buttons">
          <button class="decrease" class="amount" id="decrease-${product.id}">-</button>
          <div class="number" id="number"><p>${product.amount}</p></div>
          <button class="increase" class="amount" id="increase-${product.id}">+</button> <!--detta id ges till target i consolen-->
        </div
      <article>
    `;
  });

  
  /*~*:._.:*~*:._.:*~*:._.:*~*:.PLUS & MINUS KNAPPARNA.:*~*:._.:*~*:._.:*~*:._.:*~*/
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

function sortFocus(){ //funktion för att behålla fokus på aktuell knapp vid tangentbordsanvändning
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
  const shoppingProductCount = document.querySelector('#shopping_list'); //Talar om var den ska skrivas ut
  const existedProduct = (basket.findIndex(index => index.id === article.id)); //console.log('kolla om det finns i basket sedan tidigare. undefined betyder negativt, annars skrivs arrayen ut:', basket[existedProduct]);

  if (existedProduct === -1) {
    basket.push(article); //console.log('lagt till EN gång kundkorg', basket);
  }
  else {
    basket[existedProduct].amount + 1; //console.log('plussat på i kundkorg', basket);
  }

  shoppingProductCount.innerHTML = '';
  basket.forEach(item => {
    let bulkSumForItem = bulkPurchaseDiscount(item); // Få rabatterad summa
    totalSum += bulkSumForItem; // Lägg till i totalSumman

    if (item.amount > 0) { //skriv bara ut i shoppingkorgen om det fatiskt finns munkar i den
      shoppingProductCount.innerHTML += `
        <div class="shopping_list">
          <div class="product">${item.name} ${item.amount} st</div>     
          <div class="pic">
            <img src="${item.img.url}" alt="${item.img.alt}">
          </div> 
          <div class="price">Styckpris: ${item.price}</div>
          <div class="cost">Summa: ${bulkSumForItem} lägg till en text om rabatterat pris om så är fallet</div>
          <div class="line"></div>
          <div id="shopping_cart_buttons"></div>
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
    <div id="totalsum">Du har köpt munkar för: ${totalSum}kr</div>
  `;

  sumDiv.innerHTML = '';
  sumDiv.innerHTML += `
    <div id="sum">`;
  if (mondayDiscountHour){
    sumDiv.innerHTML += `
      <p>Idag är det måndag! Det firar vi med 10% på alla munkar!</p>
  `;}
  sumDiv.innerHTML += `      
    <div id="totalsum">Totalt (exkl. frakt): ${totalSum} kr</div>
    <div id="shipping">Fraktkostnad: ${shippingFee} kr</div>
    <div id="totalcost">Totalt att betala: ${totalCost} kr</div>
    </div>
  `; 
  
  const invoiceDiv = document.querySelector('#invoice');
  if (totalSum>800){
    invoiceDiv.style.display = 'none'; //console.log('ej fakturaköp');
  }
} 
function printShoppinglist() {
  shoppingListDiv.innerHTML += `
    <div id="shopping_list">
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
cancelButton.addEventListener('click', function() { //Avbryt i varukorgen
  //location.reload(); 
  
  const shoppingProductCount = document.querySelector('#shopping_list');
  shoppingProductCount.innerHTML = '';
    
  shoppingListDiv.innerHTML += `
    <div id="shopping_list">
      <p>Varukorgen är tom</p>
    </div>
  `;
  totalsumDiv.innerHTML = '';
  sumDiv.innerHTML = '';
   
  console.log('avrbyt');  
});

/*~*:._.:*~*:._.:*~*:._.:*~*:.BESTÄLLNINGSFORMULÄR.:*~*:._.:*~*:._.:*~*:._.:*~*/
/************************FORMULÄR********************/
const userNameInput = document.querySelector('#first_name');    
const lastNameInput = document.querySelector('#last_name');    
const adressInput = document.querySelector('#adress');    
const zipCodeInput = document.querySelector('#zip_code');    
const postalAddressInput = document.querySelector('#postal_address');    
const portCodeInput = document.querySelector('#port_code');    
const phoneInput = document.querySelector('#phone');    
const emailInput = document.querySelector('#email');    
const cardInput = document.querySelector('#card');    
const invoiceInput = document.querySelector('#invoice');    
const invoiceCheckbox = document.querySelector('#invoice');

const invoiceInformationInput = document.querySelector('#invoice_information');
const personInput = document.querySelector('#personnummer');

const nameRegex = new RegExp (/\w{2,}/); //Minst två tecken krävs
const lastNameRegex = new RegExp (/\w{2,}/); //Minst två tecken krävs
const adressRegex = new RegExp (/^((.){1,}(\d){1,}(.){0,})$/); //Gatuadress inkl gatunummer
const zipCodeReggex = new RegExp (/^\d{3} \d{2}$/); //Postnummer av typen 123 45
const zipCodeRegex = new RegExp (/^[0-9]{3}\s?[0-9]{2}$/); //Postnummer av typen 123 45
const postalAdressRegex = new RegExp (/\w{2,}/); //Minst två tecken krävs
const phoneRegex = new RegExp (/^((\+|00)46|0)7[02369][0-9]{7}$/); //Mobilnummer av typen: +467*xxxxxxx, 00467*xxxxxxx och 07*xxxxxxx
const emailRegex = new RegExp (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/); //Epostadress
const personIdRegex = new RegExp (/^(\d{10}|\d{12}|\d{6}-\d{4}|\d{8}-\d{4}|\d{8} \d{4}|\d{6} \d{4})/);

let userName = '';
let lastName = '';
let adress = '';
let zipCode = '';
let postalAddress = '';
let phone = '';
let email = '';
let card = '';
let invoice = '';
let personId = '';
let requirePersonnummer = false;


function registerUser(){
  userName = userNameInput.value;
  lastName = lastNameInput.value;
  adress = adressInput.value;
  zipCode = zipCodeInput.value;
  postalAddress = postalAddressInput.value;
  portCode = portCodeInput.value;
  phone = phoneInput.value;
  email = emailInput.value;
  card = cardInput.value;
  invoice = invoiceInput.value;
  personId = personInput.value;
}



cardCheckbox.addEventListener('click', handleCard);
function handleCard() {
  cardInformationInput.innerHTML += `
    <input type="number" placeholder="Kortnummer"><br>
    <input type="number" placeholder="MM//ÅÅ"><br>
    <input type="number" placeholder="CVC"><br>
  `;
  /************************SE TILL ATT OM MAN KLICKAR IGEN SÅ TÖMS INPUTFÄLTEN, OCH TILLBAKA IGEN OSV*************/
}

const fieldsToValidate = [
  { input: userNameInput, regex: nameRegex, flag: '_userNameCheck', message: 'namn' },
  { input: lastNameInput, regex: lastNameRegex, flag: '_lastNameCheck', message: 'efternamn' },
  { input: adressInput, regex: adressRegex, flag: '_adressCheck', message: 'adress' },
  { input: zipCodeInput, regex: zipCodeRegex, flag: '_zipCodeCheck', message: 'postnummer' },
  { input: postalAddressInput, regex: postalAdressRegex, flag: '_postalAddressCheck', message: 'postadress' },
  { input: phoneInput, regex: phoneRegex, flag: '_phoneCheck', message: 'telefonnummer' },
  { input: emailInput, regex: emailRegex, flag: '_emailCheck', message: 'e-post' },
  { input: personInput, regex: personIdRegex, flag: '_okPersonnummer', message: 'personnummer' },
];


// Objekt för att lagra valideringsstatus
const validationStatus = {
  _userNameCheck: false,
  _lastNameCheck: false,
  _adressCheck: false,
  _zipCodeCheck: false,
  _postalAddressCheck: false,
  _phoneCheck: false,
  _emailCheck: false,
  _okPersonnummer: true, // Börjar som true om faktura inte är vald

};

// Lyssna på när faktura-radio-knappen klickas
invoiceCheckbox.addEventListener('click', () => {
  const requirePersonnummer = invoiceCheckbox.checked; // Kontrollera om faktura är vald
  if (requirePersonnummer) {
  invoiceInformationInput.innerHTML += `
      <label for="personnummer" class="input">Personnummer: </label>
      <input id="personnummer" type="text" placeholder="YYYYMMDD-XXXX"><br>
    `;
  /************************SE TILL ATT OM MAN KLICKAR IGEN SÅ TÖMS INPUTFÄLTEN, OCH TILLBAKA IGEN OSV*************/
  //Jag tog mycket hjälp av chatGPT för att få detta rätt.

// Lägg till validering för personnummer
const personInput = document.querySelector('#personnummer');
if (personInput) {
  validateField(personInput, personIdRegex, '_okPersonnummer', 'personnummer');
}
} else {
// Ta bort input-fält om faktura inte är vald
invoiceInformationInput.innerHTML = '';
validationStatus._okPersonnummer = true; // Återställ personnummer-kontroll till godkänd
clikableButton(); // Uppdatera knappens status
}
});

// Funktion för att validera ett fält
function validateField(input, regex, flag, message) {
  input.addEventListener('input', () => {
    const value = input.value.trim();
    if (regex.test(value)) {
      validationStatus[flag] = true;
      input.style.borderColor = 'green'; // Indikera att inmatningen är giltig
      console.log(`Giltig ${message}:`, value);
    } else {
      validationStatus[flag] = false;
      input.style.borderColor = 'red'; // Indikera att inmatningen är ogiltig
      console.log(`Ogiltig ${message}`);
    }
    // Kontrollera knappens status efter varje inmatning
    clikableButton();
  });
}

// Lägg till validering på varje fält
fieldsToValidate.forEach(({ input, regex, flag, message }) => {
  if (input) {
    validateField(input, regex, flag, message);
  } else {
    console.warn(`Element för ${message} saknas i DOM.`);
  }
});

// Funktion för att uppdatera knappens status
function clikableButton() {
  const allValid = Object.values(validationStatus).every(status => status);
  confirmationButtonDiv.disabled = !allValid; // Aktivera knappen endast om alla fält är giltiga
  console.log(allValid ? 'Alla fält är giltiga' : 'Vissa fält är ogiltiga');
}


/*************************Rabattkod*************************/
discountButton.addEventListener('click', handleDiscount);
function handleDiscount() {
alert('Du har använt rabattkoden ' + discountInput.value);
}

/*~*:._.:*~*:._.:*~*:._.:*~*:.KNAPPAR I FORMULÄRET.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*************************Avbryt*************************/
cancelOrderButton.addEventListener('click', function() { //Avbryt där formuläret visas
  location.reload();
  /**
   *Jag gjorde function clearOrder nedan, som återställer allt på sidan.
   Men jag tänkte att med reload säkerställer jag att allt verkligen töms.
   Är det ok att göra så?
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
orderButton.addEventListener('click', function() { //Eventlyssnare för button order_button
  showFormPage(); //Visar formuläret och sammanställning av kundkorgen
  orderDiv.innerHTML = '';
  orderDiv.innerHTML = `
    <div>Du har beställt: </div> `;

  basket.forEach(item => {
    orderDiv.innerHTML += `
      <div>${item.amount} st ${item.name}. Totalkostnad ${item.name} är ${item.amount*item.price}kr</div>
    `;
    console.log('produktlista' + item.name);
  });

  orderDiv.innerHTML += `
    <div"><p>Totalt (exkl. frakt): ${totalSum} kr</p>
    <p">Fraktkostnad: ${shippingFee} kr</p>
    </p>Totalt att betala: ${totalCost} kr</p>
    </div>
  `;
  showTooSlowMessage();
});
/*~*:._.:*~*:._.:*~*:._.:*~*:.KNAPPAR I FORMULÄRET.:*~*:._.:*~*:._.:*~*:._.:*~*/


function showFormPage() {
  orderPageDiv.style.display = 'block'; //Först när knappen orderButton trycks på visas formuläret och sammanställning av kundkorgen
}

function showTooSlowMessage() {
  setTimeout(clearBasket, 900000);
}

function clearBasket(){
  location.reload();
  alert('Du är för långsam');
}

function orderSum() {
  orderConfirmationDiv.style.display = 'block'; //Först när knappen order_page trycks på visas formuläret
}









/****************************Bekräfta beställning***************************/
confirmationButtonDiv.disabled = true; // Gör knappen utgråad
confirmationButtonDiv.addEventListener('click', function() { //Eventlyssnare för button order_button
    orderSum(); //visar <div> med id order_confirmation. innen detta är den dold. Då visas beställningsbekräftelse och inmatade kunddata
    registerUser(); //läser in input data från formuläret genom function registerUser
    orderConfirmationSumDiv.innerHTML = '';
    orderConfirmationSumDiv.innerHTML = `
      <div id="order_confirmation_sum">
      <p>Orderbekräftelse:</p>
      <p>Hej ${userName} ${lastName}, du har köpt munkar idag!</p>
      </div>
  `;
  basket.forEach(item => {
    orderConfirmationSumDiv.innerHTML += `
      <div>
      <p>${item.name}, ${item.amount}st, ${item.amount*item.price}kr</p>
      </div>
    `;
  });
  orderConfirmationSumDiv.innerHTML += `
    <div id="totalsum">Totalt (exkl. frakt): ${totalSum} kr</div>
    <div id="shipping">Fraktkostnad: ${shippingFee} kr</div>
    <div id="totalcost">Totalt att betala: ${totalCost} kr</div>
  
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



/*~*:._.:*~*:._.:*~*:._.:*~*:.STAR RATING.:*~*:._.:*~*:._.:*~*:._.:*~*/
function getRatingHtml(rating) {
  // Dela upp rating i heltals- och decimaldelar
  const fullStars = Math.floor(rating); // Antal hela stjärnor
  const isHalfStar = rating % 1 !== 0;  // Kontrollera om det finns en halv

  let star = ''; // Loopa för att skapa hela stjärnor
  for (let i = 0; i < fullStars; i++) {
    star += `<span><img src="pictures/star.png" width="20" height="18" loading="lazy" alt="helt stjärna"></span>`;
  }

  if (isHalfStar) { // Lägg till en halv stjärna om det behövs
    star += `<span><img src="pictures/star_half.png" width="20" height="18" loading="lazy" alt="halv stjärna"></span>`;
  }
  return star;
}
/*~*:._.:*~*:._.:*~*:._.:*~*:.STAR RATING.:*~*:._.:*~*:._.:*~*:._.:*~*/
