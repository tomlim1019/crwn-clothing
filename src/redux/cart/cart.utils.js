export const addItemToCart = (cartItems, newItem) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === newItem.id
  );

  if(existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === newItem.id 
      ? {...cartItem, quantity: cartItem.quantity + 1}
      : cartItem
    );
  }

  return [...cartItems, {...newItem, quantity: 1}];
}

export const decreateItemFromCart = (cartItems, cartItemToDecrease) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToDecrease.id
  );

  if(existingCartItem.quantity === 1){
    return cartItems.filter(cartItem => cartItem.id !== cartItemToDecrease.id)
  }

  return cartItems.map(cartItem => 
    cartItem.id === cartItemToDecrease.id 
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
  );
}
