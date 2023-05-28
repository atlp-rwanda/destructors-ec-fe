
 const totalCartItems = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  export default totalCartItems;