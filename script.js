

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 10,
    rating: 4,
    amount: 0,
    category: 'sweet',
    img: {
      url: 'pictures/lettuce.jpg',
      width: 1000,
      height: 450,
      alt: 'Donut'
    },
  },

  {
    id: 2,
    name: 'Product 2',
    price: 20,
    rating: 1.5,
    amount: 0,
    category: 'sweet',
    img: {
      url: 'pictures/lettuce.jpg',
      width: 1000,
      height: 450,
      alt: 'Donut'
    },
  },

  {
    id: 3,
    name: 'Product 3',
    price: 30,
    rating: 3.5,
    amount: 0,
    category: 'sweet',
    img: {
      url: 'pictures/lettuce.jpg',
      width: 1000,
      height: 450,
      alt: 'Donut'
    },
  },
];



/*~*:._.:*~*:._.:*~*:._.:*~*:.HTML-ELEMENTS.:*~*:._.:*~*:._.:*~*:._.:*~*/

const productsListDiv = document.querySelector('#products-list');

/*~*:._.:*~*:._.:*~*:._.:*~*:.HTML-ELEMENTS.:*~*:._.:*~*:._.:*~*:._.:*~*/


/*~*:._.:*~*:._.:*~*:._.:*~*:.PRINT-HTML.:*~*:._.:*~*:._.:*~*:._.:*~*/
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
        <img src="${product.img.url}" alt="${product.img.alt}">

        <div class="buttons">
          <button class="decrease" id="decrease-${product.id}">-</button>
          <input type="number" min="0" value="${product.amount}">
          <button class="increase" id="increase-${product.id}">+</button> <!--detta id ges till target i consolen-->
        </div
      <article>
    `;
  });


  //Increase
  const increaseButtons = document.querySelectorAll('button.increase');
  increaseButtons.forEach(button=>{
    button.addEventListener('click', increaceProductCount);
  });

  //Decrease
  const decreaseButtons = document.querySelectorAll('button.decrease');
  decreaseButtons.forEach(button=>{
    button.addEventListener('click', decreaceProductCount);
  });
}

  printProductsList();

  //Increase
  function increaceProductCount(e){
  const productId = Number(e.target.id.replace('increase-', ''));
  console.log('clicked on ', productId);
  /*  console.log(e.target.id);/* <button class="increase" id="increase-${product.id}">+</button> <!--detta id ges till target i consolen-->*/

  const selectedProductIndex = products.findIndex(product=>product.id===productId);
  console.log('Varan har index: ', selectedProductIndex);

  if(selectedProductIndex === -1){ //Vald produkt måste ha minst index 0
    console.error('Det finns inte i listan');
    return;
  }
  products[selectedProductIndex].amount +=1;
  console.log(products[selectedProductIndex]);

  printProductsList();
  }

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
}
/**
 * 
 * DEN HÄR FUNKTIONEN LOOPAR OCH SKRIVER UT ÄVEN HALVA STJÄRNOR SOM HELA, PLUS DEN HALVA.
 * ÅTGÄRDA!
 * 
 */
/*~*:._.:*~*:._.:*~*:._.:*~*:.STAR RATING.:*~*:._.:*~*:._.:*~*:._.:*~*/

/*~*:._.:*~*:._.:*~*:._.:*~*:.PRINT-HTML.:*~*:._.:*~*:._.:*~*:._.:*~*/