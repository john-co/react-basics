import React, { useState } from 'react';

const Product = ({ name, price, onShowProduct}) => {
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
      <button onClick={() => onShowProduct(name)}>Show</button>
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
  const showProduct = (name) => {
    alert("You selected " + name);
  }

  return (
    <div>
      <Product
      name="Android"
      price={150}
      onShowProduct={showProduct}/>

      <Product
      name="Apple"
      price={170}
      onShowProduct={showProduct}/>

      <Product
      name="Nokia"
      price={65}
      onShowProduct={showProduct}/>

      <Total />
    </div>
  )
}

export default ProductList;