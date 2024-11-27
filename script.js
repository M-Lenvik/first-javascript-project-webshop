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
const sumDiv = document.querySelector('#sum');
const totalsumDiv = document.querySelector('#totalsum');
const productsListDiv = document.querySelector('#products-list');
const shoppingListDiv = document.querySelector('#shopping-list');
const orderPageDiv = document.querySelector("#order_page");
/*~*:._.:*~*:._.:*~*:._.:*~*:.HTML-ELEMENTS.:*~*:._.:*~*:._.:*~*:._.:*~*/


/*~*:._.:*~*:._.:*~*:._.:*~*:.SPECIALREGLER.:*~*:._.:*~*:._.:*~*:._.:*~*/

const day = new Date();
const hour = day.getHours(); // Hämta timmen som ett heltal
const minutes = day.getMinutes(); // Hämta minuter som ett heltal
const dayOfWeek = day.getDay(); // Hämta veckodag (0 = söndag, 6 = lördag)
console.log ('Klockan är ' + hour +':'+ minutes);

/*************************Måndagsrabatt*************************/
//Kontrollera att det är måndag och att klockan är efter 10:00
const mondayDiscount = dayOfWeek === 1 && ((hour > 18 || (hour === 18 && minutes > 1)) && ((hour < 19 ) || (hour === 19 && minutes < 0)));
if (mondayDiscount) {
  products.forEach(product => {
    product.price = Math.round(product.price * 0.9); //Minska priset med 10%
  }); //console.log('Måndagspriser tillämpade:', products);
}
/*************************Måndagsrabatt*************************/

/*************************Helgpåslag*************************/
  //Kontrollera om det är helgpriser. Fredagar efter kl. 15 och fram till natten mellan söndag och måndag kl. 03.00 tillkommer ett helgpåslag på 15 % på alla munkar. 
const isWeekend =
  (dayOfWeek === 5 && (hour > 15 || (hour === 15 && minutes > 0))) || //Fredag efter 15:00
  (dayOfWeek === 6) || //Hela lördagen
  (dayOfWeek === 0) || //Hela sönagen
  (dayOfWeek === 1 && (hour < 3 || (hour === 3 && minutes === 0))); //Natt mot måndag till kl. 03:00

if (isWeekend) { //Tillämpa helgpåslag på priserna
  products.forEach(product => {
    product.price = Math.round(product.price * 1.15); // Öka priset med 15 %
  });

  //console.log("Helgpåslag tillämpat:", products);
} 
else {
  //console.log("Inget helgpåslag på vardagen.");
}
//*************************Helgpåslag*************************/
/*~*:._.:*~*:._.:*~*:._.:*~*:.SPECIALREGLER.:*~*:._.:*~*:._.:*~*:._.:*~*/


/*~*:._.:*~*:._.:*~*:._.:*~*:.PRINT-HTML.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:.SORTERA KNAPPARNA.:*~*:._.:*~*:._.:*~*:._.:*~*/
function printRatings() {
  ratingsDiv.innerHTML += `
  <button class="sortByName" id="sortByName">Sortera på namn</button>
  <button id="sortByPrice">Sortera på pris</button>
  <button id="sortByRating">Sortera på betyg</button>
  <button id="sortByCategory">Sortera på kategori</button>

  <div>Filtrera</div>
`;
}
printRatings();

function sortFocus(){
  this.focus();
}

/*********************Sort by Name********************/
const sortNameButton = document.querySelector('#sortByName');
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
    }); //console.log("Stigande namnordning:", products);
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
    }); //console.log("Fallande namnordning:", products);
  }
  nameIsDescending = !nameIsDescending; // Växla sorteringsordning för nästa gång
  printProductsList();
}
/*********************Sort by Price********************/
console.log("munklista:", products);
const sortPriceButton = document.querySelector('#sortByPrice');
sortPriceButton.addEventListener('click', sortProductsByPrice);
let priceIsDescending = false; // Håller koll på nuvarande sorteringsordning

function sortProductsByPrice() {
  if (priceIsDescending === true) { // Sortera i stigande ordning
    products.sort((product1, product2) => product1.price - product2.price);
    //console.log("Omsorterat i stigande ordning:", products);
  }
  else { // Sortera i fallande ordning
    products.sort((product1, product2) => product2.price - product1.price);
    //console.log("Omsorterat i fallande ordning:", products);
  }
  priceIsDescending = !priceIsDescending; // Växla sorteringsordning för nästa gång
  printProductsList();
}
/*********************Sort by Rating********************/
const sortRatingButton = document.querySelector('#sortByRating');
sortRatingButton.addEventListener('click', sortProductsByRating);
let ratingIsDescending = false;

function sortProductsByRating() {
  if (ratingIsDescending === true) {
    products.sort((product1, product2) => product1.rating - product2.rating);
    //console.log("Omsorterat i stigande ordning:", products);
  }
  else {
    products.sort((product1, product2) => product2.rating - product1.rating);
    //console.log("Omsorterat i fallande ordning:", products);
  }
  ratingIsDescending = !ratingIsDescending;
  printProductsList();
}
/*********************Sort by Category********************/
const sortCategoryButton = document.querySelector('#sortByCategory');
sortCategoryButton.addEventListener('click', sortProductsByCategory);
let categoryIsDescending = false;

function sortProductsByCategory() {
  if (categoryIsDescending === true) {
    const sorted = products.sort((product1, product2) => {
      return product1.category === product2.category ? 0 : product1.category < product2.category ? -1 : 1;
    });
    //console.log("Omsorterat i stigande ordning:", products);
  }
  else {
    const sorted = products.sort((product1, product2) => {
      return product1.category === product2.category ? 0 : product1.category < product2.category ? 1 : -1;
    });
    //console.log("Omsorterat i fallande ordning:", products);
  }
  categoryIsDescending = !categoryIsDescending;
  printProductsList();
}
/*~*:._.:*~*:._.:*~*:._.:*~*:.SORTERA KNAPPARNA SLUT.:*~*:._.:*~*:._.:*~*:._.:*~*/


/*~*:._.:*~*:._.:*~*:._.:*~*:.MUNKARNA I HTML.:*~*:._.:*~*:._.:*~*:._.:*~*/
function printProductsList() {
  productsListDiv.innerHTML = ''; //Rensa div:en före utskrift, annars blir det dubbelt vid knapptryck

  products.forEach(product => {
    productsListDiv.innerHTML += `
      <article class="donut">
        <div class="donut_description">
          <h3>${product.name}</h3>
          <p>${product.price} kr</p>
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
    /*  <div class="buttons">
        <button class="shopping_cart" id="shopping_cart">Lägg i varukorg</button>    
      </div
      <div>Räkna upp munkar: </div> */
  });

  /*~*:._.:*~*:._.:*~*:._.:*~*:.PLUS & MINUS KNAPPARNA.:*~*:._.:*~*:._.:*~*:._.:*~*/
  //*******************Increase för varje knapp*******************//
  const increaseButtons = document.querySelectorAll('button.increase');
  increaseButtons.forEach(button => {
    button.addEventListener('click', increaceProductCount); //console.log('ökat antal');
  });

  //*******************Decrease för varje knapp*******************//
  const decreaseButtons = document.querySelectorAll('button.decrease');
  decreaseButtons.forEach(button => {
    button.addEventListener('click', decreaceProductCount); //console.log('minskat antal');
  });
}
printProductsList();

//*******************Increase för antal knapptryckningar*******************//
function increaceProductCount(e) {
  const productId = Number(e.target.id.replace('increase-', '')); //console.log('clicked on ', productId);
  const selectedProductIndex = products.findIndex(product => product.id === productId); //console.log('Varan har index: ', selectedProductIndex);
  const clickedButtonId = e.target.id; //variabel för att kunna behålla fokus på knappen

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
//Decrease
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

//*******************Increase - lägg nya artiklar i ny array - handledning med Jenny*******************//
const basket = []

function adjustArticle(article) { //Här läggs till i arrayen, de skrivs sedan ut som med alla munkar

  const existedProduct = (basket.findIndex(index => index.id === article.id)); //console.log('kolla om det finns i basket sedan tidigare. undefined betyder negativt, annars skrivs arrayen ut:', basket[existedProduct]);

  if (existedProduct === -1) {
    basket.push(article); //console.log('lagt till EN gång kundkorg', basket);
  }
  else {
    basket[existedProduct].amount + 1; //console.log('PLUSSAT PÅ i kundkorg', basket);
  }
  //console.log('kundkorgen innehåller NU', basket, 'vald munk i array:', article.name);

  //😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫
  const shoppingProductCount = document.querySelector('#shopping_list'); //Talar om var den ska skrivas ut
  let totalSum = 0;

  shoppingProductCount.innerHTML = '';
  basket.forEach(item => {
    if (item.amount > 0) { //skriv bara ut i shoppingkorgen om det fatiskt finns munkar i den
      
      //*************************Rabatt vid storköp*************************/
      let discountedPrice = item.price;
      if (item.amount >= 10) {
        discountedPrice = Math.round(item.price * 0.9);
        console.log('Beställning på fler än 10st ger 10% rabatt på den sorten');
      }
      totalSum += item.amount * discountedPrice; //Lägg till kostnaden (med eventuell rabatt) till totalSumman
      //*************************Rabatt vid storköp*************************/

      //*************************Gratis frakt vid storköp*************************/
      let freeDelivery = basket.reduce((sum, item) => sum + Math.round(item.amount), 0);
      let shippingFee = 0;

      if (freeDelivery >= 15) {
        shippingFee += 0;
        console.log('Fler än 15 ger gratis frakt. Fraktavgift:' + shippingFee);
      }
      else {
        shippingFee = (totalSum * 0.1) + 25;
        console.log('Färre än 15 kostar frakten. Fraktavgift: ' + shippingFee);
      }
      //*************************Gratis frakt vid storköp*************************/

        //😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫
      shoppingProductCount.innerHTML += `
        <div class="shopping_list">
          <div class="product">${item.name} ${item.amount} st</div>     
          <div class="pic">
            <img src="${item.img.url}" alt="${item.img.alt}">
          </div> 
          <div class="price">Pris: ${item.price}</div>
          <div class="cost">Summa: ${item.amount*item.price}</div>
          <div class="line"></div>
        </div>
      `;



      /********************Jag vill lägga denna utanför function adjustArticle(article) men når då ej shoppingProductCount.innerHTML*/
      orderConfirmationDiv.innerHTML = '';
      orderConfirmationDiv.innerHTML += `
        <div class="mondayDiscount" id="mondayDiscount">Måndagsrabatt: 10 % på hela beställningen!</div>
        <div>Du har beställt ${item.amount} st ${item.name}. Dessa kostar ${item.price}kr st. Totalkostnad är ${item.amount*item.price}kr</div>
        <div>Fraktkostnad: ${shippingFee}</div>
        <div>Att betala: ${item.amount*item.price+shippingFee}</div>
      `;
      /********************Jag vill lägga denna utanför function adjustArticle(article) men når då ej shoppingProductCount.innerHTML*/
    }
  
    totalsumDiv.innerHTML = '';
    totalsumDiv.innerHTML += `
    <div id="totalsum">Summa: ${totalSum}</div>
    `;

    sumDiv.innerHTML = '';
    sumDiv.innerHTML += `
    <div class="mondayDiscount" id="mondayDiscount">Måndagsrabatt: 10 % på hela beställningen!</div>
    <div id="sum">Summa: ${totalSum}</div>
    `; 
  });

  /*************************Måndagsrabatt*************************/
  // Element för måndagsrabatt
  const mondayDiscountDiv = document.querySelector("#mondayDiscount");
  if (mondayDiscount) { // Visa rabattmeddelandet
    mondayDiscountDiv.style.display = "block"; // Visa div för måndagsrabatt //console.log('Måndagspriser SKA skrivas ut i varukorgen');
  }
  else { //Göm rabattmeddelandet
    mondayDiscountDiv.style.display = "none"; // Dölj div för måndagsrabatt //console.log('Måndagspriser ska INTE skrivas ut i varukorgen');
  }
  /*************************Måndagsrabatt*************************/
  /*************************Ej faktura*************************/
  const invoiceDiv = document.querySelector("#invoice");
  if (totalSum>800){
    invoiceDiv.style.display = "none"; //console.log('ej fakturaköp');
  }
  /*************************Ej faktura*************************/

  /********************Jag vill lägga dessa utanför function adjustArticle(article) men når då ej shoppingProductCount.innerHTML*/
  //const ticker = setInterval(showTooSlowMessage);
  const tooSlowNoticeDiv = document.querySelector("#too_slow_notice");
  showTooSlowMessage();

  function showTooSlowMessage() {
    console.log('<div class="too_slow_notice" id="too_slow_notice"><p>här<p/></div>');
    //tooSlowNoticeDiv.innerHTML='Du är för långsam';
    setTimeout(clearBasket, 100000);
  }

  function clearBasket(){
    shoppingProductCount.innerHTML = '';
    orderConfirmationDiv.innerHTML = '';
    alert('Du är för långsam');
  }

  /**********Denna görs dubbelt, jag vill lägga in rensningen av varukorgen i samma funktion som rensar formuläret*****/
  const cancelOrderButton = document.querySelector("#cancel_order_button");
  const form = document.querySelector("#form_page");
  cancelOrderButton.addEventListener("click", function() {
    clearOrder();
  });

  function clearOrder() {
    shoppingProductCount.innerHTML = '';
    orderConfirmationDiv.innerHTML = '';
  }/**********Denna görs dubbelt, jag vill lägga in rensningen av varukorgen i samma funktion som rensar formuläret*****/
  /********************Jag vill lägga dessa utanför function adjustArticle(article) men når då ej shoppingProductCount.innerHTML*/
}

const cancelOrderButton = document.querySelector("#cancel_order_button");
const form = document.querySelector("#form_page");

cancelOrderButton.addEventListener("click", function() {
  clearOrder();
});

function clearOrder() {
  //  shoppingProductCount.innerHTML = '';
  //  orderConfirmationDiv.innerHTML = '';
  //  orderFormDiv.innerHTML = '';
  if (form) {
    form.reset(); // Återställ formuläret
  }

  else {
    console.error("Formuläret hittades inte.");
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

/****************************:.LÄGG TILL I VARUKORG.:/*************************** /
function addedProduct (){
  const shoppingProductCount = document.querySelector('#utskriftDiv');
  console.log('Munkar');
  shoppingProductCount.innerHTML = 'Du har lagt X antal munkar i varukorgen'; 
}
/****************************:.LÄGG TILL I VARUKORG.:/***************************/
/*~*:._.:*~*:._.:*~*:._.:*~*:.PLUS & MINUS KNAPPARNA.:*~*:._.:*~*:._.:*~*:._.:*~*/


/*~*:._.:*~*:._.:*~*:._.:*~*:.BESTÄLLNINGSFORMULÄR.:*~*:._.:*~*:._.:*~*:._.:*~*/

//const orderPageDiv = document.querySelector("#order_page");
const orderButton = document.querySelector("#order_button");

orderButton.addEventListener("click", function() { //Eventlyssnare för button order_button
  showFormPage();
});

function showFormPage() {
  orderPageDiv.style.display = "block"; //Först när klappen order_page trycks på visas formuläret
}
/****************************:.BESTÄLLNINGSBEKRÄFTELSE.:/***************************/
/****************************:.FLYTTA DENNA --> FLYTTAS HIT.:/***************************/

/****************************:.BESTÄLLNINGSBEKRÄFTELSE.:/***************************/
  /****************************:.FLYTTA DENNA.:/***************************/
  const orderConfirmationDiv = document.querySelector("#order_confirmation");
  const confirmationButtonDiv = document.querySelector("#confirm_order_button");
  
  confirmationButtonDiv.addEventListener("click", handleClick);
  function handleClick() {
    showOrderPage();
    confirmationButtonDiv.removeEventListener("click", handleClick); // Ta bort lyssnaren
  }

  function showOrderPage() {
    orderConfirmationDiv.style.display = "block"; //Först när knappen order_page trycks på visas formuläret
    
    //😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫
    orderConfirmationDiv.innerHTML += `

      <div>SKRIV UT BESTÄLLNINGSBEKRÄFTELSEN HÄR</div>

        <div class="mondayDiscount" id="mondayDiscount">Måndagsrabatt: 10 % på hela beställningen!</div>
        <div>Du har beställt ${item.amount} st ${item.name}. Dessa kostar ${item.price}kr st. Totalkostnad är ${item.amount*item.price}kr</div>
        <div>Fraktkostnad: </div>
    `;
  }
  /****************************:.BESTÄLLNINGSBEKRÄFTELSE.:/***************************/
/****************************:.BESTÄLLNINGSBEKRÄFTELSE.:/***************************/

/********************************FORMULÄRALTERNATIV*************************/
const cardCheckbox = document.querySelector("#card");
const cardInformationInput = document.querySelector("#card_information");

cardCheckbox.addEventListener("click", handleCard);
function handleCard() {
  cardInformationInput.innerHTML += `
  <input type="number" placeholder="Kortnummer"><br>
  <input type="number" placeholder="MM//ÅÅ"><br>
  <input type="number" placeholder="CVC"><br>
    `;
    /************************SE TILL ATT OM MAN KLICKAR IGEN SÅ TÖMS INPUTFÄLTEN, OCH TILLBAKA IGEN OSV*************/
}

const invoiceCheckbox = document.querySelector("#invoice");
const invoiceInformationInput = document.querySelector("#invoice_information");

invoiceCheckbox.addEventListener("click", handleInvoice);
function handleInvoice() {
  invoiceInformationInput.innerHTML += `
  <input type="number" placeholder="Personnummer"><br>
    `;
    /************************SE TILL ATT OM MAN KLICKAR IGEN SÅ TÖMS INPUTFÄLTEN, OCH TILLBAKA IGEN OSV*************/
}

const discountButton = document.querySelector("#discount_button");
const discountInput = document.querySelector("#discount_information");

discountButton.addEventListener("click", handleDiscount);
function handleDiscount() {

alert('Du har använt rabattkoden ' + discountInput.value);
}

/********************************FORMULÄRALTERNATIV*************************/

/*~*:._.:*~*:._.:*~*:._.:*~*:.BESTÄLLNINGSFORMULÄR.:*~*:._.:*~*:._.:*~*:._.:*~*/


/*~*:._.:*~*:._.:*~*:._.:*~*:.STAR RATING.:*~*:._.:*~*:._.:*~*:._.:*~*/
function getRatingHtml(rating) {
  // Dela upp rating i heltals- och decimaldelar
  const fullStars = Math.floor(rating); // Antal hela stjärnor
  const isHalfStar = rating % 1 !== 0;  // Kontrollera om det finns en halv

  let star = ''; // Loopa för att skapa hela stjärnor
  for (let i = 0; i < fullStars; i++) {
    star += `<img src="pictures/star.png" width="20" height="18" loading="lazy" alt="helt stjärna">`;
  }

  if (isHalfStar) { // Lägg till en halv stjärna om det behövs
    star += `<img src="pictures/star_half.png" width="20" height="18" loading="lazy" alt="halv stjärna">`;
  }
  return star;
}
/*~*:._.:*~*:._.:*~*:._.:*~*:.STAR RATING.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:.PRINT-HTML.:*~*:._.:*~*:._.:*~*:._.:*~*/

/*~*:._.:*~*:._.:*~*:._.:*~*:.SPECIALREGLER.:*~*:._.:*~*:._.:*~*:._.:*~*/




/*~*:._.:*~*:._.:*~*:._.:*~*:.SPECIALREGLER.:*~*:._.:*~*:._.:*~*:._.:*~*/
