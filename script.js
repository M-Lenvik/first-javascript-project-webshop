

const products = [
  {
    id: 1,
    name: 'Karamell',
    price: 25,
    rating: 4,
    amount: 0,
    category: 'Crunchy',
    img: {
      url: 'pictures/munk1.png',
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
      url: 'pictures/munk2.png',
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
      url: 'pictures/munk3.png',
      width: 400,
      height: 400,
      alt: 'Chokladmunk'
    },
  },

  {
    id: 4,
    name: 'Vanilj',
    price: 40,
    rating: 2,
    amount: 0,
    category: 'sweet',
    img: {
      url: 'pictures/munk3.png',
      width: 400,
      height: 400,
      alt: 'Vaniljmunk'
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
      url: 'pictures/munk3.png',
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
      url: 'pictures/munk3.png',
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
      url: 'pictures/munk3.png',
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
      url: 'pictures/munk3.png',
      width: 400,
      height: 400,
      alt: 'Blåbärsmunk'
    },
  },

  {
    id: 9,
    name: 'Saffran',
    price: 50,
    rating: 1.5,
    amount: 0,
    category: 'Christmas special',
    img: {
      url: 'pictures/munk3.png',
      width: 400,
      height: 400,
      alt: 'Saffransmunk'
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
      url: 'pictures/munk3.png',
      width: 400,
      height: 400,
      alt: 'Äppelmunk'
    },
  },
];


const basket = []

/*~*:._.:*~*:._.:*~*:._.:*~*:.HTML-ELEMENTS.:*~*:._.:*~*:._.:*~*:._.:*~*/
const ratingsDiv = document.querySelector('#rating');
const productsListDiv = document.querySelector('#products-list');
const shoppingListDiv = document.querySelector('#shopping-list');
/*~*:._.:*~*:._.:*~*:._.:*~*:.HTML-ELEMENTS.:*~*:._.:*~*:._.:*~*:._.:*~*/


/*~*:._.:*~*:._.:*~*:._.:*~*:.PRINT-HTML.:*~*:._.:*~*:._.:*~*:._.:*~*/

/*~*:._.:*~*:._.:*~*:._.:*~*:.SORTERA KNAPPARNA.:*~*:._.:*~*:._.:*~*:._.:*~*/

/*
products.sort((product1, product2)=> product1.price - product2.price); //sorterar på pris
console.table('sorterat på pris');
console.table(products);
/*
const startingSum = 0; //denna behövs egentligen inte. då skrivs 0 på staringSum nedan
const sum = products.reduce((sumOfProducts, currentProduct)=> sumOfProducts + currentProduct.price, startingSum); //reduce=summera
console.table(sum);
*/

 //ska sortera på namn, funkar inte?


//products.sort((product1, product2) => product2.name < product1.name);
//products.sort((product1, product2) => product2.name.localeCompare(product1.name));
//console.table('sorterat på namn');
//console.table(products);


function printRatings(){
  ratingsDiv.innerHTML += `
  <button id="sortByName">Sortera på namn</button>
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
        // Sortera i stigande ordning
        products.sort((product1, product2) =>  product1.name.localeCompare(product2.name));
        console.log("Omsorterat i stigande ordning:", products);
    } 
    else {
        // Sortera i fallande ordning
        products.sort((product1, product2) => product2.name.localeCompare(product1.name));
        console.log("Omsorterat i fallande ordning:", products);
    }
    nameIsDescending = !nameIsDescending; // Växla sorteringsordning för nästa gång
    printProductsList();
}
/*********************Sort by Price********************/

const sortPriceButton = document.querySelector('#sortByPrice');
sortPriceButton.addEventListener('click', sortProductsByPrice);
let priceIsDescending = false; // Håller koll på nuvarande sorteringsordning

function sortProductsByPrice() {
    if (priceIsDescending===true) {
        // Sortera i stigande ordning
        products.sort((product1, product2) => product1.price - product2.price);
        console.log("Omsorterat i stigande ordning:", products);
    } 
    else {
        // Sortera i fallande ordning
        products.sort((product1, product2) => product2.price - product1.price);
        console.log("Omsorterat i fallande ordning:", products);
    }
    priceIsDescending = !priceIsDescending; // Växla sorteringsordning för nästa gång
    printProductsList();
}

/*********************Sort by Rating********************/
const sortRatingButton = document.querySelector('#sortByRating');
sortRatingButton.addEventListener('click', sortProductsByRating);
let ratingIsDescending = false; // Håller koll på nuvarande sorteringsordning

function sortProductsByRating() {
    if (ratingIsDescending===true) {
        // Sortera i stigande ordning
        products.sort((product1, product2) => product1.rating - product2.rating);
        console.log("Omsorterat i stigande ordning:", products);
    } 
    else {
        // Sortera i fallande ordning
        products.sort((product1, product2) => product2.rating - product1.rating);
        console.log("Omsorterat i fallande ordning:", products);
    }
    ratingIsDescending = !ratingIsDescending; // Växla sorteringsordning för nästa gång
    printProductsList();
}

/*********************Sort by Category********************/
const sortCategoryButton = document.querySelector('#sortByCategory');
sortCategoryButton.addEventListener('click', sortProductsByName);
let categoryIsDescending = false; // Håller koll på nuvarande sorteringsordning

function sortProductsByName() {
    if (categoryIsDescending===true) {
        // Sortera i stigande ordning
        products.sort((product1, product2) =>  product1.category.localeCompare(product2.category));
        console.log("Omsorterat i stigande ordning:", products);
    } 
    else {
        // Sortera i fallande ordning
        products.sort((product1, product2) => product2.category.localeCompare(product1.category));
        console.log("Omsorterat i fallande ordning:", products);
    }
    categoryIsDescending = !categoryIsDescending; // Växla sorteringsordning för nästa gång
    printProductsList();
}

/*~*:._.:*~*:._.:*~*:._.:*~*:.SORTERA KNAPPARNA.:*~*:._.:*~*:._.:*~*:._.:*~*/

/*~*:._.:*~*:._.:*~*:._.:*~*:.PLUS & MINUS KNAPPARNA.:*~*:._.:*~*:._.:*~*:._.:*~*/
function printProductsList(){
  //Rensa div:en före utskrift, annars blir det dubbelt vid knapptryck
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
    /*         <div class="buttons">
          <button class="shopping_cart" id="shopping_cart">Lägg i varukorg</button>    
        </div

        <div>Räkna upp munkar: </div> */
  });


  //Increase
  const increaseButtons = document.querySelectorAll('button.increase');
  increaseButtons.forEach(button=>{
    button.addEventListener('click', increaceProductCount);
  //  console.log('ökat antal');
  });


  /****************************:.LÄGG TILL I VARUKORG.:/*************************** /
  const shopping_cart_button = document.querySelectorAll('button.shopping_cart');
  shopping_cart_button.forEach(button=>{
    button.addEventListener('click', addedProduct);
    //console.log('munkar i varukorg');
  });
  /****************************:.LÄGG TILL I VARUKORG.:/***************************/
}
  printProductsList();

  //Increase
  function increaceProductCount(e){

    const productId = Number(e.target.id.replace('increase-', ''));
    //console.log('clicked on ', productId);

    const selectedProductIndex = products.findIndex(product=>product.id===productId);
    //console.log('Varan har index: ', selectedProductIndex);

    if(selectedProductIndex === -1){ //Vald article måste ha minst index 0
      console.error('Det finns inte i listan');
      return;
    }
    products[selectedProductIndex].amount +=1;

    //console.log('du vill köpa munkar: ');
    //console.log(products[selectedProductIndex].amount);
    
    addArticle(products[selectedProductIndex]);    //lägger till i den tomma arrayen när functionen addArticle nedan körs
    //console.log((products[selectedProductIndex])+(products[selectedProductIndex].amount));    //lägger till i den tomma arrayen när functionen addArticle nedan körs
    //Nu skrivs bara en munk ut i consolen, den måste räkna upp också
    
  printProductsList();
  }

  function addArticle(article){
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

    const shoppingProductCount = document.querySelector('#utskriftDiv'); //Talar om var den ska skrivas ut
    console.log('Munkar vid +');
    //shoppingProductCount.innerHTML = 'Du har lagt ' + article.amount + 'st ' + article.name + ' i varukorgen'; 
    shoppingProductCount.innerHTML = ''; 

    basket.forEach(item => {
      // Skapa ett nytt <p>-element för varje article
      const p = document.createElement('p');
      p.textContent ="Du har lagt till " + item.name + " Du har " + item.amount + "st i varukorgen. De kostar " + item.price + " kr st. Total kostnad är: " + item.price*item.amount+ " kr";
          // Lägg till <p> till #utskriftDiv
    shoppingProductCount.appendChild(p);
  });
  }

    /****************************:.LÄGG TILL I VARUKORG.:/*************************** /
  function addedProduct (){
    const shoppingProductCount = document.querySelector('#utskriftDiv');
    console.log('Munkar');
    shoppingProductCount.innerHTML = 'Du har lagt X antal munkar i varukorgen'; 
  }
  /****************************:.LÄGG TILL I VARUKORG.:/***************************/

  function printShoppinglist(){
    shoppingListDiv.innerHTML += `
      <div id="utskriftDiv"></div>
  `;
  }
  printShoppinglist();

/****************************:.LÄGG TILL I VARUKORG.:/***************************/

  //Decrease
  const decreaseButtons = document.querySelectorAll('button.decrease');
  decreaseButtons.forEach(button=>{
    button.addEventListener('click', decreaceProductCount);
  //  console.log('minskat antal');
  });

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

    printProductsList();
  }

/*~*:._.:*~*:._.:*~*:._.:*~*:.PLUS & MINUS KNAPPARNA.:*~*:._.:*~*:._.:*~*:._.:*~*/


/*~*:._.:*~*:._.:*~*:._.:*~*:.STAR RATING.:*~*:._.:*~*:._.:*~*:._.:*~*/
function getRatingHtml(rating) {

  const halfStar = String(rating).indexOf('.');
  let star = '';
  for (let i = 0; i < rating; i++) {
    star += `<span><img src="pictures/star.png" width="20" height="18" loading="lazy" alt="chokolate caramel donut"></span>`;
  }
  if (halfStar !== -1){
    star += `<span><img src="pictures/star_half.png" width="20" height="18" loading="lazy" alt="chokolate caramel donut"></span>`;

  }
  return star;
  /**
 * 
 * DEN HÄR FUNKTIONEN LOOPAR OCH SKRIVER UT ÄVEN HALVA STJÄRNOR SOM HELA, PLUS DEN HALVA.
 * ÅTGÄRDA!
 * 
 */
}
/*~*:._.:*~*:._.:*~*:._.:*~*:.STAR RATING.:*~*:._.:*~*:._.:*~*:._.:*~*/

/*~*:._.:*~*:._.:*~*:._.:*~*:.PRINT-HTML.:*~*:._.:*~*:._.:*~*:._.:*~*/