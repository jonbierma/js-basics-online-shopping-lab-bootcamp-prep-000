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
    var str=`In your cart, you have ${keys[0]} at $${cart[0][keys[0]]}.`
    console.log(str)
  } else {
    var cartString = `In your cart, you have `
    for (var i = 1; i< cart.length; i++){

      cartString += `, ${str[0]} at $${str[1]},`
    }
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
