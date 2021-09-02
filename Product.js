import React from 'react';

const Product = () => {
  const greenButton = {
    backgroundColor: "yellow",
    color: "red",
    padding: "5px 15px",
  }

  const buy = () => {
    alert("You selected this product");
  }

  return (
    <>
      <h1 style ={{color: "red"}}>This is a Product</h1>
      <button style={greenButton}onClick={buy}>Buy</button>
    </>
  )
}

export default Product;