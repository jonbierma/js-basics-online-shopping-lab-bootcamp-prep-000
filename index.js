var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100)
 cart.push({[item]: price})
 console.log(item + " has been added to your cart.")
 return cart
}

function viewCart() {
  var cart=getCart()
  var keys=Object.keys(cart)
  if (cart.length < 1){
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    for (var item in cart[0]){
      if (cart[0].hasOwnProperty(item)){
        console.log("In your cart, you have " + item + " at $"+ cart[0][item] + ".")
      }
    }
  } else if (cart.length === 2){
    var str
    var cartString = "In your cart, you have "
    for (var item in cart[0]){
      if (cart[0].hasOwnProperty(item)){
        str="In your cart, you have " + item + " at $"+ cart[0][item]
      }
    }
    for (var item in cart[1]){
      if (cart[1].hasOwnProperty(item)){
        str += " and " + item + " at $" + cart[1][item] +"."
      }
    }

      console.log(str)
    }

}

function total() {
  let sum=0
  var keys = Object.keys(cart)
  for (var i = 0; i < cart.length; i++){

    sum += parseInt(cart[i][keys[i]])
  }
  return sum
}

function removeFromCart(item) {
  var keys = Object.keys(cart)
  for (var i=0; i<cart.length;i++){


  }
}

function placeOrder(cardNumber) {
  // write your code here
}
