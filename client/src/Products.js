import React, { useState } from 'react';
import products from './data/Product_data';
import './components/ProductPage.css';
import images from './components/images/hero.jpg'

function App() {
  const [filter, setFilter] = useState('');

  // const products = [
  //   { 
  //     name: 'Product 1',
  //     price: 100, 
  //     img: 'iron.png' 
  //   },
  //   { 
  //     name: 'Product 2', 
  //     price: 200, 
  //     img: 'img2.jpg' 
  //   },
  //   { 
  //     name: 'Product 3', 
  //     price: 300, 
  //     img: 'img3.jpg' 
  //   },
  //   { 
  //     name: 'Product 4', 
  //     price: 400, 
  //     img: 'img4.jpg' 
  //   },
  //   { 
  //     name: 'Product 5', 
  //     price: 500, 
  //     img: 'img5.jpg' 
  //   },
  //   { 
  //     name: 'Product 6', 
  //     price: 600, 
  //     img: 'img6.jpg' 
  //   },
  // ];

  const filteredProducts = filter
    ? products.filter((p) =>
        p.name.toLowerCase().includes(filter.toLowerCase())
      )
    : products;

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="product-container">
      <div className="sidebar">
        <h2>Filters</h2>
        <label>
          <input
            type="radio"
            value=""
            checked={!filter}
            onChange={handleChange}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            value="low"
            checked={filter === 'low'}
            onChange={handleChange}
          />
          Low to high price
        </label>
        <label>
          <input
            type="radio"
            value="high"
            checked={filter === 'high'}
            onChange={handleChange}
          />
          High to low price
        </label>
      </div>
      <div className="main-content">
        <div className="row">
          {filteredProducts.slice(0, 2).map((product) => (
            <div key={product.name} className="product">
              <img src={images} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price} ₹</p>
            </div>
          ))}
        </div>
        <div className="row">
          {filteredProducts.slice(2, 4).map((product) => (
            <div key={product.name} className="product">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price} ₹</p>
            </div>
          ))}
        </div>
        <div className="row">
          {filteredProducts.slice(4, 6).map((product) => (
            <div key={product.name} className="product">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price} ₹</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

