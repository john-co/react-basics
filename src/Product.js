import React, { useState } from 'react';

const Product = () => {
  // Declare a new state variable called "quantity"
  const [quantity, setQuantity] = useState(0);

  const buy = () => {
    // alert("You selected this product");
    setQuantity(quantity + 1);
  }

  return (
    <>
      <h3>This is a Product</h3>
      <button onClick={buy}>Buy</button>
      <h3>Quantity: {quantity}</h3>
    </>
  )
}

export default Product;