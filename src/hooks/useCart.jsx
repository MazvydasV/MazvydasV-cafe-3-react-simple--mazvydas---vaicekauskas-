import React from 'react';
import CartContext from 'contexts/cart-context';

const useCart = () => {
  const cartContext = React.useContext(CartContext);

  return cartContext;
};

export default useCart;
