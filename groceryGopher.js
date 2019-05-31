/*eslint-env browser*/
//This is the Model, code that deals with the data

var groceryList = [];

function getGroceryList() {
    const getList = JSON.parse(window.localStorage.getItem('GroceryList'))
    if (getList != null) {

        groceryList = getList;
console.log(groceryList)
        var length = groceryList.length;
        for (var i = 0; i < length; i++) {
            createStoredList(groceryList[i]);
        }
    };

}


//this is for the control
window.addEventListener('load', getGroceryList)


//this is where I will build information for building my view


//adding item


function createStoredList(groceryItem){
    
    var storedDescription = "<li>" + groceryItem.description + "</li>";
    document.getElementById('itemDescriptionList').innerHTML += storedDescription;
    
    var storedQuantity = "<li>" + groceryItem.quantity + "</li>";
    document.getElementById('itemQuantityList').innerHTML += storedQuantity;
    
    var storedPrice = "<li>" + groceryItem.price + "</li>";
    document.getElementById('itemPriceList').innerHTML += storedPrice;
    
}

function createList() {
    
    console.log()

    //add item
    var itemDes = document.getElementById('itemD').value;
    var desLi = "<li>" + itemDes + "</li>";
    document.getElementById('itemDescriptionList').innerHTML += desLi;

    //add quantity
    var itemQ = document.getElementById('quantity').value;
    var quantityLi = "<li>" + itemQ + "</li>";
    document.getElementById('itemQuantityList').innerHTML += quantityLi;

    //add price
    var itemP = document.getElementById('price').value;
    var priceLi = "<li>" + itemP + "</li>";
    document.getElementById('itemPriceList').innerHTML += priceLi;



    //adding an item to the array
    let newItem = {
        description: itemDes,
        quantity: itemQ,
        price: itemP
    }

    groceryList.push(newItem);

    //adding the array to local storage
    window.localStorage.setItem('GroceryList', JSON.stringify(groceryList));
    JSON.parse(window.localStorage.getItem('GroceryList'))

    console.log(newItem);
}

    document.getElementById('addNew').addEventListener('touchend', function(){
        createList();
    }) 
