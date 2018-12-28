
var chokerPrice = 25;
var redNecklacePrice = 30;
var mookitePrice = 20;
var ankletPrice = 15;
var gflNecklacePrice = 18;
var greenAndPurplePrice = 40;

var arrayI = []; //arrayItemsPurchased;
var arrayP = []; //arrayPurchasePrices;
var display = document.getElementById("display");
var price = document.getElementsByClassName("itemprice");
// var testThis = document.getElementById("testThis");
// var removeChoker = document.getElementById("chokerRemove");
// var totalSum = document.getElementById("totalSum");
var x;

function removeFromCart(){
//1. delete row  2. delete item from cart array  3. change total sum
document.getElementById("htmlTable").deleteRow(this);
alert("item removed");
//NEED TO UPDATE TOTAL PRICE WHEN AN ITEM IS REMOVED.
// document.getElementById("totalSum");
// totalSum.innerHTML = "$0";
//1. DELETE ITEM FROM ARRAY:
//how to do this:

}



/*old function:
function addChokerToCart(){

  var a = document.getElementById("chokerItem");
  var b = document.getElementById("chokerPrice");
  arrayI.push(a.innerHTML);
  arrayP.push(b.innerHTML);										
  alert(arrayI + ", " + arrayP);
}*/

//new function:
function addChokerToCart(){

  var a = document.getElementById("chokerItem");
  arrayI.push(a.innerHTML);
  arrayP.push(chokerPrice);                   
  alert(arrayI + ", " + arrayP);
}

/*old function:
function addRedNecklaceToCart(){
  var a = document.getElementById("redNecklaceItem");
  var b = document.getElementById("redNecklacePrice");
  arrayI.push(a.innerHTML);
  arrayP.push(b.innerHTML);
  alert(arrayI + ", " + arrayP);
}*/

//new function:
function addRedNecklaceToCart(){
  var a = document.getElementById("redNecklaceItem");
  arrayI.push(a.innerHTML);
  arrayP.push(redNecklacePrice);
  alert(arrayI + ", " + arrayP);
}					


function addMookiteToCart(){
  var a = document.getElementById("mookiteItem");
  arrayI.push(a.innerHTML);
  arrayP.push(mookitePrice);
  alert(arrayI + ", " + arrayP);
}				


function addAnkletToCart(){
  var a = document.getElementById("ankletItem");
  arrayI.push(a.innerHTML);
  arrayP.push(ankletPrice);
  alert(arrayI + ", " + arrayP);
}						


function addGFLNecklaceToCart(){
  var a = document.getElementById("gflNecklaceItem");
  arrayI.push(a.innerHTML);
  arrayP.push(gflNecklacePrice);
  alert(arrayI + ", " + arrayP);					
}

function addGreenAndPurpleToCart() {
  var a = document.getElementById("greenAndPurpleItem");
  arrayI.push(a.innerHTML);
  arrayP.push(greenAndPurplePrice);
  alert(arrayI + ", " + arrayP);
}


function sumPrices(){
  var sumTotal = 0;
  // var arrayTotal = [];
  for(var i = 0; i < arrayI.length; i++) {
    // arrayTotal.push(arrayP[i]);
    sumTotal = sumTotal + arrayP[i];
  }
return sumTotal;

}

function newSum(){
  //if at least one delete button has been clicked, execute function.
  //else, sumPrices(). ????

  //this function is for when a row is deleted. Need to update the total...
  //which means the whole array needs to be modified.
  var sumTotal = 0;
  // var arrayTotal = [];
  for(var i = 0; i < arrayI.length; i++) {
    // arrayTotal.push(arrayP[i]);
    sumTotal = sumTotal - arrayP[i];
  }
return sumTotal;

}



function yesOk(){
  alert("Yay! Congrats on your purchases.");
}



function displayShoppingCart(){

  var newArray = []
  for(var i = 0; i < arrayI.length; i++){
    newArray.push(" " + arrayI[i]);
    newArray.push(" " + "$" + arrayP[i]);
  }



// function deleteRow(r){ //FIX ME - THIS STILL DOESN'T WORK
//   //delete row
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("htmlTable").deleteRow(i);
// }



x = "<table id='htmlTable' border='1|1'>";
for (var i = 0; i < arrayI.length; i++) {
    x+="<tr>";
    x+="<td>"+arrayI[i]+"</td>";
    x+="<td>"+ "$" + arrayP[i]+"</td>";
    // html+="<td>"+rows[i].age+"</td>";
    x+="<td>"+ "<button onclick = 'removeFromCart()'>Delete</button>" +"</td>";

    x+="</tr>";

}

x+="</table>";

 


display.innerHTML = "<p>Here are the items you are purchasing: </p>" + x + "<p>Total: </p>" + "$" + sumPrices() 
 + "<p><button onclick='yesOk()'>Purchase</button></p>";


// totalSum.innerHTML = "newSum()";//this should only happen on-click of delete button

}
















//delete if necessary (added 10/26/18):

/*function clearCart() {
  display.innerHTML = ("There is nothing in your shopping cart.");
}*/