let food = [{
    name: "Hamburger",
    price: "85kr",
    description: "Big hamburger",
    url: "images/burger.jpg",
    btn: "btnburger"
},
{
    name: "Pizza",
    price: "90kr",
    description: "Big pizza",
    url: "images/pizza.jpg",
    btn: "btnpizza"
},
{
    name: "Pasta",
    price: "200kr",
    description: "Good pasta",
    url: "images/pasta.jpg",
    btn: "btnpasta"
}];

function uploadFood () {
    for(i = 0; i < food.length; i++){
   
   let existDiv = document.getElementById('container');
   let sect = document.createElement('div');
   existDiv.appendChild(sect);
   
   let header = document.createElement("h3");
   let paraPrice = document.createElement("p");
   let paraDescribe = document.createElement("p");
   let pic = document.createElement('IMG');
   let btnAddToCart = document.createElement('button');
   btnAddToCart.setAttribute('id', food[i].btn);

   let heading = document.createTextNode(food[i].name);
   header.appendChild(heading);
   let price = document.createTextNode(food[i].price);
   paraPrice.appendChild(price);
   let describe = document.createTextNode(food[i].description);
   paraDescribe.appendChild(describe); 
   pic.setAttribute('src',food[i].url);
   let addToCart = document.createTextNode('Add to cart');
   btnAddToCart.appendChild(addToCart);
   
   sect.appendChild(header);
   sect.appendChild(paraPrice);
   sect.appendChild(paraDescribe);
   sect.appendChild(pic);
   sect.appendChild(btnAddToCart);
   
   }
}
uploadFood();


let burgerBtn = document.getElementById('btnburger');
let pizzaBtn = document.getElementById('btnpizza');
let pastaBtn = document.getElementById('btnpasta');

let test = 1;

let cartArr = [];

/*
    FUNKAR MEN SKIT!
burgerBtn.addEventListener('click', () => {
    let item = document.getElementById('cart-items').innerHTML = test;
    if(burgerBtn){
        cartArr.push('Burger');
        test++;
        console.log(cartArr);
        console.log(test);
    }
   
    
});

pizzaBtn.addEventListener('click', () => {
    let item = document.getElementById('cart-items').innerHTML = test;
    if(pizzaBtn){
        cartArr.push('Pizza');
        test++;
        console.log(cartArr);
        console.log(test);
    }
   
   
});

pastaBtn.addEventListener('click', () => {
    let item = document.getElementById('cart-items').innerHTML = test;
    if(pastaBtn){
        cartArr.push('pasta');
        test++;
        console.log(cartArr);
        console.log(test);
    }
   
    
}); */


/* function productArr(e) {
  
    console.log(this === e.target);
    
}

burgerBtn.addEventListener('click', productArr);
pizzaBtn.addEventListener('click', productArr);
 */
/* let test = 1;
function testArr() {
    
    
    if(burgerBtn){
        cartArr.push('burger');
        test++;
        console.log(cartArr);
        console.log(test);
    }
    else if(pizzaBtn){
        cartArr.push('pizza');
        test++;
        console.log(cartArr);
        console.log(test);
    }
    
    else if(pastaBtn){
        cartArr.push('pasta');
        test++;
        console.log(cartArr);
        console.log(test);
    }
    
}

burgerBtn.addEventListener('click', testArr);
pizzaBtn.addEventListener('click', testArr);
pastaBtn.addEventListener('click',testArr); */