import React from 'react';

const Product = () => {

  const buy = () => {
    alert("You selected this product");
  }

  return (
    <>
      <h1 className="title">This is a Product</h1>
      <button onClick={buy}>Buy</button>
    </>
  )
}

export default Product;