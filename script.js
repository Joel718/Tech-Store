
/* GLOBAL VARIABLES */
var listOfProducts;
// add more global variables when needed..

var count = 0;
var step = 1;

/* Get products from the json file and store it in a javascript variable */
fetch("./products.json")
.then(function(response) {
    return response.json();
})
.then(function(products) {
    listOfProducts = products;
    createUIFromLoadedProducts();
});

/** Uses the loaded products data to create a visible product list on the website */
function createUIFromLoadedProducts() {
    /* Check your console to see that the products are stored in the listOfProducts varible */
    console.log(listOfProducts);

     //Vi skapar function, lista och loop

            var adressBook = document.createElement("div");
            adressBook.className = 'adressBookClass';
            
                // Loopa genom listan
                for(var index = 0; index < listOfProducts.length; index++) {
            
                 var adressCard = createAdressCard(listOfProducts[index]);
                 adressBook.appendChild(adressCard);
            
            // Vi skriver ut 
        }
         document.body.appendChild(adressBook);
    
    }
    // Vi skapar vår funktion. Detta gör vi utanför/efter vår tidigare funktion
    
    function createAdressCard(listOfProducts) {
        var adressCard = document.createElement("div");
      
        // name
        var getTitle = document.createElement("h3");
         getTitle.innerText = listOfProducts.title;
         adressCard.appendChild(getTitle);
         adressCard.className = "adressCardClass";
    
        // Epost
        var getDescription = document.createElement("h4");
        getDescription.innerText = listOfProducts.description
        adressCard.appendChild(getDescription);
    
        // Image 
    
        var getImage = document.createElement("img");
        getImage.src = "bild/" + listOfProducts.image;
        adressCard.appendChild(getImage);
    
        // Pris 

        var getPrice = document.createElement("h3");
        getPrice.innerText = "Price: " + listOfProducts.price
        adressCard.appendChild(getPrice);


       // add buttons

       var buttonElement = document.createElement("button");
       buttonElement.onclick = function() {positive()};    
       buttonElement.innerHTML = '<i class="fa fa-shopping-cart fa-1x"></i>' + " " + "Lägg till i kundvagn";
       adressCard.appendChild(buttonElement);  
       
       // Counter

       var span =  document.querySelector("span");
       span.innerText = count;
            
       function negative() {
        if (count - step > 0) {
        
        count = count - step;
        span.innerText = count;
        }
       }
      
      function positive() { 
          
          if (count + step > 4) {
              return;
          }
          count = count + step;
          span.innerText = count;
        }
      
       // adressCard.getElementsByClassName("knapp").appendChild("adressCardClass");

        return adressCard;
        // med return skriver vi ut vad funktionen har skapat

    }


