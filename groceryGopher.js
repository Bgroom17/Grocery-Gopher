/*eslint-env browser*/
//This is the Model, code that deals with the data

var groceryList = [];

function getGroceryList(){
    const listTest = JSON.parse(window.localStorage.getItem('GroceryList'))
    if(listTest != null){
        
    
    
        
        
        
    };
    
    
    
    
}





//this is for the control
  window.addEventListener('load', getGroceryList)
        




//this is where I will build information for building my view


//adding item
{
    document.getElementById('addNew').ontouchend = function () {

        //add item
        var itemDes = document.getElementById('itemD').value;
        var desLi = "<li>" + itemDes + "</li>";
        document.getElementById('itemDescriptionList').innerHTML += desLi;

       ;


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
}
