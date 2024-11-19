

const products = [
  {
    id: 1,
    name: 'A Product 1',
    price: 25,
    rating: 4,
    amount: 0,
    category: 'sweet',
    img: {
      url: 'pictures/munk1.png',
      width: 400,
      height: 400,
      alt: 'Donut'
    },
  },

  {
    id: 2,
    name: 'B Product 2',
    price: 20,
    rating: 1.5,
    amount: 0,
    category: 'sweet',
    img: {
      url: 'pictures/munk2.png',
      width: 400,
      height: 400,
      alt: 'Donut'
    },
  },

  {
    id: 3,
    name: 'C Product 3',
    price: 30,
    rating: 3.5,
    amount: 0,
    category: 'sweet',
    img: {
      url: 'pictures/munk3.png',
      width: 400,
      height: 400,
      alt: 'Donut'
    },
  },
];


const kundkorg = []

/*
products.sort((product1, product2)=> product1.price - product2.price); //sorterar på pris
console.table('sorterat på pris');
console.table(products);

const startingSum = 0; //denna behövs egentligen inte. då skrivs 0 på staringSum nedan
const sum = products.reduce((sumOfProducts, currentProduct)=> sumOfProducts + currentProduct.price, startingSum); //reduce=summera
console.table(sum);
*/

 //ska sortera på namn, funkar inte?


//products.sort((product1, product2) => product2.name < product1.name);
//products.sort((product1, product2) => product2.name.localeCompare(product1.name));
//console.table('sorterat på namn');
//console.table(products);



/*~*:._.:*~*:._.:*~*:._.:*~*:.HTML-ELEMENTS.:*~*:._.:*~*:._.:*~*:._.:*~*/
const ratingsDiv = document.querySelector('#rating');
const productsListDiv = document.querySelector('#products-list');
const shoppingListDiv = document.querySelector('#shopping-list');
/*~*:._.:*~*:._.:*~*:._.:*~*:.HTML-ELEMENTS.:*~*:._.:*~*:._.:*~*:._.:*~*/


/*~*:._.:*~*:._.:*~*:._.:*~*:.PRINT-HTML.:*~*:._.:*~*:._.:*~*:._.:*~*/
/*~*:._.:*~*:._.:*~*:._.:*~*:.SORTERA KNAPPARNA.:*~*:._.:*~*:._.:*~*:._.:*~*/
function printRatings(){
  ratingsDiv.innerHTML += `
  <div>A-Z</div>
  <button id="sortByRating">Sortera 1-2</button>
  <div>Filtrera</div>
`;
}
printRatings();

const ratingButton = document.querySelector('#sortByRating');
ratingButton.addEventListener('click', sortProductsByRating);
function sortProductsByRating (){
  products.sort((product1, product2)=> product1.rating - product2.rating); //sorterar på pris
  console.log('rating sorterar');
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
          <button class="decrease" id="decrease-${product.id}">-</button>
          <input type="number" min="0" value="${product.amount}">
          <button class="increase" id="increase-${product.id}">+</button> <!--detta id ges till target i consolen-->
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
  //  console.log('hej');
  });

  //Decrease
  const decreaseButtons = document.querySelectorAll('button.decrease');
  decreaseButtons.forEach(button=>{
    button.addEventListener('click', decreaceProductCount);
  //  console.log('hej då');
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
    /*  console.log(e.target.id);/* <button class="increase" id="increase-${product.id}">+</button> <!--detta id ges till target i consolen-->*/

    const selectedProductIndex = products.findIndex(product=>product.id===productId);
    //console.log('Varan har index: ', selectedProductIndex);

    if(selectedProductIndex === -1){ //Vald produkt måste ha minst index 0
      console.error('Det finns inte i listan');
      return;
    }
    products[selectedProductIndex].amount +=1;

    //console.log('du vill köpa munkar: ');
    //console.log(products[selectedProductIndex].amount);
    addArticle(products[selectedProductIndex]);    //lägger till i den tomma arrayen när functionen addArticle nedan körs
    //console.log((products[selectedProductIndex])+(products[selectedProductIndex].amount));    //lägger till i den tomma arrayen när functionen addArticle nedan körs
//Nu skrivs bara en munk ut i consolen, den måste räkna upp också

//för varje gång jag trycker + skickas toll produkt kundkorg.atfinns ingen sen innan läggs den till

//Om jag skriver .amount räknar den upp, men jag får undefined på namnet. Kan man göra som ovan?
//Ska man göra en forEach för att spara olika artiklar?
    
  printProductsList();
  }

  function addArticle(produkt){
    //här läggs till i arrayen
    //Skrivs sedan ut som med alla munkar
    //console.log('skicka till kundkorg:', produkt);
    
    //console.log('detta är nya kundkorgen', kundkorg);
    //console.log('kolla om det finns i kundkorg sedan tidigare. -1 betyder negativt, 0 betyder att det finns:', kundkorg.findIndex(index=>index.id===produkt.id));

    const existedProduct=(kundkorg.findIndex(index=>index.id===produkt.id));
    console.log('kolla om det finns i kundkorg sedan tidigare. undefined betyder negativt, annars skrivs arrayen ut:', kundkorg[existedProduct]);

    if (existedProduct === -1){ 
      kundkorg.push(produkt);
      console.log('lagt till EN gång kundkorg', kundkorg);
    }

    else {
      kundkorg[existedProduct].amount+1;
      console.log('PLUSSAT PÅ i kundkorg', kundkorg);
    }

    console.log('kundkorgen innehåller NU', kundkorg);
    console.log('vald munk i array:', produkt.name);

    //function för att skriva ut
    //kalla på funtionen fölr att skriva ut i html

    kundkorg.forEach(item => {
      console.log(item.name + " har " + item.amount + "st i varukorgen.");
    });

    const shoppingProductCount = document.querySelector('#utskriftDiv'); //Talar om var den ska skrivas ut
    console.log('Munkar vid +');
    //shoppingProductCount.innerHTML = 'Du har lagt ' + produkt.amount + 'st ' + produkt.name + ' i varukorgen'; 
    shoppingProductCount.innerHTML = ''; 

    kundkorg.forEach(item => {
      // Skapa ett nytt <p>-element för varje produkt
      const p = document.createElement('p');
      p.textContent = item.name + " har " + item.amount + "st i varukorgen.";
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