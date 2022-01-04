// raw data, i have modified product names as they were same for few to
// avoid contradictions and I have given item tags as well.

var productCategories = {
    "data": [
    {
        "name": "Cosmetics",
        "productList": [
            {
                "name": "Hair Oil",
                "price": 122,
                "itemTag": "hairoil"
            },
            {
                "name": "Face wash",
                "price": 123,
                "itemTag": "facewash"
            }
        ]
    },
    {
        "name": "Household",
        "productList": [
            {
                "name": "Frying Pan",
                "price": 122,
                "itemTag": "fryingpan"
            },
            {
                "name": "Fan",
                "price": 123,
                "itemTag": "fan"
            }
        ]
    }]
}

// parsing json data to html list
buildList(productCategories.data);

function buildList(data) {
    var list = document.getElementById('productList');
    var product = document.getElementById('product');

    for(var i=0; i< data.length; i++) {

        var value = `<h2>${data[i].name}</h2>
        <div class="partitionLine"></div>
        <div class = "productContainer">`;

        for(var j=0; j<data[i].productList.length; j++) {

            value += 
            `<li>
                <div class = "listItem">
                    <p id="nameId">Name: ${data[i].productList[j].name}</p>
                    <p id="priceId">Price: ${data[i].productList[j].price}</p>
        
                    <div class="addButton button ${data[i].productList[j].itemTag}" id="addButton">Add to the cart</div>
                    <div class="removeButton button ${data[i].productList[j].itemTag}">Remove from cart</div>
                </div>
            </li>`
        }

        value += "</div>"
        product.innerHTML += value;
    }
}

var addButton = document.getElementsByClassName('addButton');
var removeButton = document.getElementsByClassName('removeButton');

var cart = [];

// event listeners for adding and removing from cart
for(var k=0; k<addButton.length; k++) {
    
    addButton[k].addEventListener('click', (res) => {
        console.log("Product Added to the cart.");

        var itemTag = res.target.classList[2];
        
        
        for(var i=0; i<productCategories.data.length; i++) {

            for(var j=0; j<productCategories.data[i].productList.length; j++) {

                
                if(productCategories.data[i].productList[j].itemTag == itemTag) {
                    cart.push({
                        name: productCategories.data[i].productList[j].name,
                        itemTag: productCategories.data[i].productList[j].itemTag
                    });
                    for(var l = 0; l<cart.length; l++) console.log(cart[l].name);
                }
            }
        }
    })
    
    removeButton[k].addEventListener('click', (res) => {

        var itemTag = res.target.classList[2];
        
        for(var i = 0; i<cart.length; i++) {
            if(cart[i].itemTag == itemTag) {
                console.log("Product removed from the cart.");
                cart.splice(i,1);
                for(var l = 0; l<cart.length; l++) console.log(cart[l].name);
            }
        }

    })
}




