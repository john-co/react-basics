import React, { useState } from 'react';

const Product = ({ name, price, onShowProduct, onCalculateTotal}) => {
  // Declare a new state variable called "quantity"
  const [quantity, setQuantity] = useState(0);

  const buy = () => {
    // alert("You selected this product");
    setQuantity(quantity + 1);
    onCalculateTotal(price);
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

const Total = ({totalCash}) => {
  return(
    <h3>Total Cash: {totalCash}</h3>
  )
}

const ProductForm = ({index,onCreateProduct}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const createProduct = (event) => {
    event.preventDefault();
    // alert("Name: " + name + " - Price: " + price);
    const product = { id: index, name, price};
    onCreateProduct(product);

    // Reset the form
    setName("");
    setPrice("");
  }

  return (
    <form>
      <label>Product Name</label>
      <input type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}/>
      <br></br>

      <label>Product Price</label>
      <input type="number"
      value={price}
      onChange={(e) => setPrice(e.target.value)}/>
      <br></br>

      <button onClick={createProduct}>Create</button>
      <hr/>
    </form>
  )
}

const ProductList = () => {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([
    {id: 1, name: "Android", price: 150},
    {id: 2, name: "Apple", price: 170},
    {id: 3, name: "Nokia", price: 65},
  ]);

  const calculateTotal = (price) => {
    setTotal(total + parseInt(price));
  }

  const showProduct = (name) => {
    alert("You selected " + name);
  }

  const addProduct = (product) => {
    // [1,2,3]
    //setProducts([...products, 4]) => [1,2,3,4]
    //setProducts([...products, 8]) => [1,2,3,4,8]
    setProducts([...products, product]);
  }

  return (
    <div>
      <ProductForm index={products.length + 1} onCreateProduct={addProduct}/>

      {products.map((p) => (
        <Product
          key={p.id}
          name={p.name}
          price={p.price}
          onCalculateTotal={calculateTotal}
          onShowProduct={showProduct}/>
      ))}

      <Total totalCash={total}/>
    </div>
  )
}

export default ProductList;