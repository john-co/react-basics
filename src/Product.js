import React, { useState } from 'react';

const Product = ({ name, price}) => {
  // Declare a new state variable called "quantity"
  const [quantity, setQuantity] = useState(0);

  const buy = () => {
    // alert("You selected this product");
    setQuantity(quantity + 1);
  }

  return (
    <>
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={buy}>Buy</button>
      <h3>Quantity: {quantity}</h3>
      <hr/>
    </>
  )
}

const Total = () => {
  return(
    <h3>Total Cash:</h3>
  )
}
const ProductList = () => {
  return (
    <div>
      <Product name="Android" price={150}/>
      <Product name="Apple" price={170}/>
      <Product name="Nokia" price={65}/>
      <Total />
    </div>
  )
}

export default ProductList;