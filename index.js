var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.random()*100
 cart.push({[item]: price})
 console.log(item + " has been added to your cart.")
 return cart
}

function viewCart() {
  if (cart.length === 0){
    console.log("Your shopping cart is empty")
  } else {
    var cartString = `In your cart, you have `
    for (var i = 1; i< cart.length; i++){
      var str=Object.keys(cart[i])
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
