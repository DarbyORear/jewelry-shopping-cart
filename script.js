var arrayI = []; //arrayItemsPurchased;
var arrayP = []; //arrayPurchasePrices;
var display = document.getElementById("display");
var price = document.getElementsByClassName("itemprice");


function addNecklaceToCart(){

  var a = document.getElementById("necklaceItem");
  var b = document.getElementById("necklacePrice");
  arrayI.push(a.innerHTML);
  arrayP.push(b.innerHTML);										
  alert(arrayI + ", " + arrayP);
}


function addBraceletToCart(){
  var a = document.getElementById("braceletItem");
  var b = document.getElementById("braceletPrice");
  arrayI.push(a.innerHTML);
  arrayP.push(b.innerHTML);
  alert(arrayI + ", " + arrayP);
  // var sum = arrayP[0] + arrayP[1];   //HOW DO I ADD THE PRICES TOEGETHER???
  // alert(sum);
}								


function addEarringsToCart(){
  var a = document.getElementById("earringsItem");
  var b = document.getElementById("earringsPrice");
  arrayI.push(a.innerHTML);
  arrayP.push(b.innerHTML);
  alert(arrayI + ", " + arrayP);
}				


function addAnkletToCart(){
  var a = document.getElementById("ankletItem");
  var b = document.getElementById("ankletPrice");
  arrayI.push(a.innerHTML);
  arrayP.push(b.innerHTML);
  alert(arrayI + ", " + arrayP);
}						


function addToeRingToCart(){
  var a = document.getElementById("toeRingItem");
  var b = document.getElementById("toeRingPrice");
  arrayI.push(a.innerHTML);
  arrayP.push(b.innerHTML);
  alert(arrayI + ", " + arrayP);					
}


function sumPrices(){
//add prices together and give user the total.
//prices should be in nums so we can add them. then present as string answer.
parsedPrice = parseFloat(price);
  alert(parsedPrice);
}


function displayShoppingCart(){

  var newArray = []
  for(var i = 0; i < arrayI.length; i++){
    newArray.push(" " + arrayI[i]);
    newArray.push(" " + arrayP[i]);
  }

  display.innerHTML = ("<p>Here are the items you are purchasing: </p>" + newArray + "<p>Amount OK?" + "<button>Yes</button>" + "  " + "<button>No</button></p>");

}

//delete if necessary (added 10/26/18):

/*function clearCart() {
  display.innerHTML = ("There is nothing in your shopping cart.");
}*/