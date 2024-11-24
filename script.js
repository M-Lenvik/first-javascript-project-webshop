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
const productsListDiv = document.querySelector('#products-list');
const shoppingListDiv = document.querySelector('#shopping-list');
/*~*:._.:*~*:._.:*~*:._.:*~*:.HTML-ELEMENTS.:*~*:._.:*~*:._.:*~*:._.:*~*/


/*~*:._.:*~*:._.:*~*:._.:*~*:.PRINT-HTML.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:.SORTERA KNAPPARNA.:*~*:._.:*~*:._.:*~*:._.:*~*/
function printRatings(){
  ratingsDiv.innerHTML += `
  <button class="sortByName" id="sortByName">Sortera på namn</button>
  <button id="sortByPrice">Sortera på pris</button>
  <button id="sortByRating">Sortera på betyg</button>
  <button id="sortByCategory">Sortera på kategori</button>

  <div>Filtrera</div>
`;
}
printRatings();

  /*
  if (evt.keyCode==13){ //detta är koden för enter
  console.log('ratingButton trycks på'); //DETTA MÅSTE FUNGERA
  }*/

/*********************Sort by Name********************/
const sortNameButton = document.querySelector('#sortByName');
sortNameButton.addEventListener('click', sortProductsByName);
let nameIsDescending = false; // Håller koll på nuvarande sorteringsordning

function sortProductsByName() {
  if (nameIsDescending===false) {
    const sorted = products.sort((product1, product2) => {
      if (product1.name < product2.name) {
        return -1;
      }
      if (product1.name > product2.name) {
        return 1;
      }
      return 0;
    });
    console.log("Stigande namnordning:", products);
  }
  else{
    const sorted = products.sort((product1, product2) => {
      if (product1.name < product2.name) {
        return 1;
      }
    if (product1.name > product2.name) {
      return -1;
    }
    return 0;
    });
  console.log("Fallande namnordning:", products);
  }
  nameIsDescending = !nameIsDescending;
  printProductsList();
}
/*********************Sort by Price********************/
console.log("munklista:", products);
const sortPriceButton = document.querySelector('#sortByPrice');
sortPriceButton.addEventListener('click', sortProductsByPrice);
let priceIsDescending = false; // Håller koll på nuvarande sorteringsordning

function sortProductsByPrice() {
  if (priceIsDescending===true) { // Sortera i stigande ordning
    products.sort((product1, product2) => product1.price - product2.price);
    console.log("Omsorterat i stigande ordning:", products);
  } 
  else { // Sortera i fallande ordning
    products.sort((product1, product2) => product2.price - product1.price);
    console.log("Omsorterat i fallande ordning:", products);
  }
  priceIsDescending = !priceIsDescending; // Växla sorteringsordning för nästa gång
  printProductsList();
}
/*********************Sort by Rating********************/
const sortRatingButton = document.querySelector('#sortByRating');
sortRatingButton.addEventListener('click', sortProductsByRating);
let ratingIsDescending = false;

function sortProductsByRating() {
  if (ratingIsDescending===true) {
    products.sort((product1, product2) => product1.rating - product2.rating);
    console.log("Omsorterat i stigande ordning:", products);
  } 
  else {
    products.sort((product1, product2) => product2.rating - product1.rating);
    console.log("Omsorterat i fallande ordning:", products);
  }
  ratingIsDescending = !ratingIsDescending;
  printProductsList();
}
/*********************Sort by Category********************/
const sortCategoryButton = document.querySelector('#sortByCategory');
sortCategoryButton.addEventListener('click', sortProductsByCategory);
let categoryIsDescending = false;

function sortProductsByCategory() {
  if (categoryIsDescending===true) {
    const sorted = products.sort((product1, product2) => {
      return product1.category === product2.category ? 0 : product1.category < product2.category ? -1 : 1;
    });
    console.log("Omsorterat i stigande ordning:", products);
  } 
  else {
    const sorted = products.sort((product1, product2) => {
      return product1.category === product2.category ? 0 : product1.category < product2.category ? 1 : -1;
    });
    console.log("Omsorterat i fallande ordning:", products);
  }
  categoryIsDescending = !categoryIsDescending;
  printProductsList();
}
/*~*:._.:*~*:._.:*~*:._.:*~*:.SORTERA KNAPPARNA.:*~*:._.:*~*:._.:*~*:._.:*~*/

/*~*:._.:*~*:._.:*~*:._.:*~*:.MUNKARNA I HTML.:*~*:._.:*~*:._.:*~*:._.:*~*/
function printProductsList(){ //Rensa div:en före utskrift, annars blir det dubbelt vid knapptryck
  productsListDiv.innerHTML='';

  products.forEach(product=>{
    productsListDiv.innerHTML += `
      <article class="donut">
        <div class="donut_description">
          <h3>${product.name}</h3>
          <p>${product.price} kr</p>
          <span class="rate">Betyg: ${product.rating} = ${getRatingHtml(product.rating)}</span>
        </div>
        <div class="pic">
          <img src="${product.img.url}" alt="${product.img.alt}">
        </div>

        <div class="buttons">
          <button class="decrease" class="amount" id="decrease-${product.id}">-</button>
          <input type="number" min="0" value="${product.amount}">
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
  increaseButtons.forEach(button=>{
    button.addEventListener('click', increaceProductCount);
    //console.log('ökat antal');
  });
  
  
  //*******************Decrease för varje knapp*******************//
  const decreaseButtons = document.querySelectorAll('button.decrease');
  decreaseButtons.forEach(button=>{
    button.addEventListener('click', decreaceProductCount); //console.log('minskat antal');
  });

}
printProductsList();

//*******************Increase för antal knapptryckningar*******************//
function increaceProductCount(e){
  const productId = Number(e.target.id.replace('increase-', ''));
  //console.log('clicked on ', productId);

  const selectedProductIndex = products.findIndex(product=>product.id===productId);
  //console.log('Varan har index: ', selectedProductIndex);

  if(selectedProductIndex === -1){ //Vald article måste ha minst index 0
    console.error('Det finns inte i listan');
    return;
  }
  products[selectedProductIndex].amount +=1; //öka antalet med 1 för varje knapptryck
  //console.log('du vill köpa munkar: ');
  //console.log(products[selectedProductIndex].amount);
    
  adjustArticle(products[selectedProductIndex]); //lägger till i den tomma arrayen när functionen adjustArticle nedan körs
  //console.log((products[selectedProductIndex])+(products[selectedProductIndex].amount)); //lägger till i den tomma arrayen när functionen adjustArticle nedan körs
  //Nu skrivs bara en munk ut i consolen, den måste räkna upp också
    
  printProductsList();
  //event.target.focus();
}

//Jag får inte detta att fungera var jag än lägger koden. Fokuset ligger vissserlugen kvar, men knappen slutar att lägga till artiklar.
/*function increaceProductCount(){
this.focus();
}*/


//*******************Decrease för antal knapptryckningar******************* //
//Decrease
function decreaceProductCount(e){
  const productId = Number(e.target.id.replace('decrease-', ''));
  console.log('clicked on ', productId);
  /*  console.log(e.target.id);/* <button class="increase" id="increase-${product.id}">+</button> <!--detta id ges till target i consolen-->*/
    
  const selectedProductIndex = products.findIndex(product=>product.id===productId);
  console.log('Varan har index: ', selectedProductIndex);

  //KONTROLLERA ATT DET INTE ÄR NEGATIVT ANTAL I LISTAN, DET SKA INTE GÅ
  if(selectedProductIndex === -1){
    console.error('Det finns inte i listan');
    return;
  }
  products[selectedProductIndex].amount -=1;
  console.log(products[selectedProductIndex]);

  adjustArticle(products[selectedProductIndex]); //lägger till i den tomma arrayen när functionen adjustArticle nedan körs

  printProductsList();
}

//*******************Increase - lägg nya artiklar i ny array*******************//
const basket = []
function adjustArticle(article){
  //här läggs till i arrayen
  //Skrivs sedan ut som med alla munkar
  //console.log('skicka till basket:', article);
    
  //console.log('detta är nya kundkorgen', basket);
  //console.log('kolla om det finns i basket sedan tidigare. -1 betyder negativt, 0 betyder att det finns:', kundkorg.findIndex(index=>index.id===article.id));

  const existedProduct=(basket.findIndex(index=>index.id===article.id));
  console.log('kolla om det finns i basket sedan tidigare. undefined betyder negativt, annars skrivs arrayen ut:', basket[existedProduct]);

  if (existedProduct === -1){ 
    basket.push(article);
    console.log('lagt till EN gång kundkorg', basket);
  }

  else {
    basket[existedProduct].amount+1;
    console.log('PLUSSAT PÅ i kundkorg', basket);
  }

  console.log('kundkorgen innehåller NU', basket);
  console.log('vald munk i array:', article.name);

  //function för att skriva ut
  //kalla på funtionen fölr att skriva ut i html
  basket.forEach(item => {
    console.log(item.name + " har " + item.amount + "st i varukorgen.");
  });

  //const shoppingProductCount = document.querySelector('#utskriftDiv'); //Talar om var den ska skrivas ut
  const shoppingProductCount = document.querySelector('#shopping_list'); //Talar om var den ska skrivas ut
  console.log('Munkar vid +');
  //shoppingProductCount.innerHTML = 'Du har lagt ' + article.amount + 'st ' + article.name + ' i varukorgen'; 
  shoppingProductCount.innerHTML = ''; 

  basket.forEach(item => {
    // Skapa ett nytt <p>-element för varje article
    
    shoppingProductCount.innerHTML+=`
      <div class="shopping_list">
        <div class="product"> Vald munk: ${item.name}</div>     
        <div class="pic">
          <img src="${item.img.url}" alt="${item.img.alt}">
        </div> 
        <div class="antal">Antal av munksorten: ${item.amount}</div>
        <div class="price">Pris: ${item.price}</div>
        <div class="cost">Summa: ${item.price*item.amount}</div>
        <div class="line"></div>
      </div>
    `;
    
    /*
    sumDiv.innerHTML += `
    <div id="sum">Summa: ${item.price*item.amount}</div>
    `;
    */
  });
}

//<div id="product">${item.name}</div>
function printShoppinglist(){
  shoppingListDiv.innerHTML += `
    <div id="shopping_list">
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
/****************************:.LÄGG TILL I VARUKORG.:/***************************/


/*~*:._.:*~*:._.:*~*:._.:*~*:.PLUS & MINUS KNAPPARNA.:*~*:._.:*~*:._.:*~*:._.:*~*/


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
/*~*:._.:*~*:._.:*~*:._.:*~*:.PRINT-HTML.:*~*:._.:*~*:._.:*~*:._.:*~*/