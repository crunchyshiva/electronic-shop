import React, { useState, useEffect } from 'react';
import products from './data/Product_data';
import './components/ProductPage.css';
import images from './components/images/hero.jpg';
import { useLocation } from "react-router-dom"


function Products(curElem) {
  const location = useLocation();
  const [allCategory, setAllCategory] = useState([]);
  const [AllproductByCategory, setAllProductByCategory] = useState([]);
  const [productByCategory, setProductByCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch("/api/category")
      .then((res) => res.json())
      .then((response) => setAllCategory(response.data));

    if(location.state.selectedCategory){
      setSelectedCategory(location.state.selectedCategory);
      fetch("/api/category/products")
      .then((res) => res.json())
      .then((response) => {
        setAllProductByCategory(response.data);
        const productByCategory = response.data.length > 0 && response.data.find((item) => item?._id?.product_category === location.state.selectedCategory)
        productByCategory?.products.length > 0 && setProductByCategory(productByCategory.products);
      });
    }

  }, [])

  const filteredProducts = filter
    ? products.filter((p) =>
        p.name.toLowerCase().includes(filter.toLowerCase())
      )
    : products;

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleChangeCategory = (data) => {
    setSelectedCategory(data.product_category);
    const productByCategory = AllproductByCategory.length > 0 && AllproductByCategory.find((item) => item?._id?.product_category === data.product_category)
    productByCategory?.products.length > 0 && setProductByCategory(productByCategory.products);

  };

  return (
    <div className="product-container">
      <div className="sidebar">
        <h2>Categories</h2>
        {allCategory.length > 0 && allCategory.map((item,key) =>
          <label key={key}>
            <input
              type="radio"
              value=""
              checked={item.product_category === selectedCategory}
              onChange={() => handleChangeCategory(item)}
            />
          {item.product_category}
        </label>
        )}
      </div>
      {/* <div className="sidebar">
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
      </div> */}
      <div className="main-content">
        {productByCategory.length > 0 && productByCategory.map((item,key) =>
            <div className="row">
                <div key={key} className="product">
                  <img src={`/images/product/${item.product_master_image}.png`} alt={item.product_name} />
                  <h3>{item.product_name}</h3>
                  <p>{item.discounted_price} ₹</p>
                </div>
            </div> 
        )}
        {/* <div className="row">
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
        </div> */}
      </div>
    </div>
  );
}

export default Products;

