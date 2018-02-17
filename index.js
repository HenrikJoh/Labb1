let food = [{
    name: "Hamburger",
    price: "85kr",
    description: "Big hamburger",
    url: "burger.jpg"
},
{
    name: "Pizza",
    price: "90kr",
    description: "Big pizza",
    url: "pizza.jpg"
},
{
    name: "Pasta",
    price: "200kr",
    description: "good pasta",
    url: "pasta.jpg"
}];

function uploadFood () {
    for(i = 0; i < food.length; i++){
        console.log(food[i].name);
   
   let existDiv = document.getElementById('container');
   let sect = document.createElement('div');
   existDiv.appendChild(sect);
   
   let header = document.createElement("h3");
   let paraPrice = document.createElement("p");
   let paraDescribe = document.createElement("p");
   let pic = document.createElement('IMG');
   
   let heading = document.createTextNode(food[i].name);
   header.appendChild(heading);
   let price = document.createTextNode(food[i].price);
   paraPrice.appendChild(price);
   let describe = document.createTextNode(food[i].description);
   paraDescribe.appendChild(describe); 
   pic.setAttribute('src',food[i].url);
   
   sect.appendChild(header);
   sect.appendChild(paraPrice);
   sect.appendChild(paraDescribe);
   sect.appendChild(pic);
   
   }
}
uploadFood();


