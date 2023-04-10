// use local storage to manage cart data
const addToDb = (cart) => {
  console.log(cart)
  let shoppingCart = JSON.parse(localStorage.getItem('job-cart'));
  
  let storedCart = []
  
  if(shoppingCart){
    const alreadyAdded = storedCart?.find(d => d.id ==  cart.id)
    console.log(alreadyAdded)
    if(alreadyAdded){
      return alert('already added')
    }
    else{
      const remaining = [...storedCart , cart]
      localStorage.setItem('job-cart', JSON.stringify(remaining))
    }
  }
  else{
    // const remaining = cart
    storedCart.push(cart)
    // console.log(json)
    localStorage.setItem("job-cart", JSON.stringify(storedCart))
  }
  // add quantity
 /*  const quantity = shoppingCart[id];
  if (!quantity) {
    shoppingCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  localStorage.setItem("job-cart", JSON.stringify(shoppingCart)); */
};

const removeFromDb = (id) => {
  const shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("job-cart", JSON.stringify(shoppingCart));
  }
};

const getShoppingCart = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("job-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("job-cart");
};

export { addToDb, removeFromDb, getShoppingCart, deleteShoppingCart };
