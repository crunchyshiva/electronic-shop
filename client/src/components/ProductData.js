import React from 'react';
import ProductCard from './ProductCard';

function ProductData() {
  const products = [
    {
      id: 1,
      title: "Product 1",
      price: 10.99,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Product 2",
      price: 20.99,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Product 3",
      price: 15.99,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 4,
      title: "Product 4",
      price: 25.99,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 5,
      title: "Product 5",
      price: 19.99,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 6,
      title: "Product 6",
      price: 14.99,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 7,
      title: "Product 7",
      price: 12.99,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 8,
      title: "Product 8",
      price: 16.99,
      image: "https://via.placeholder.com/300x200",
    }
  ];

  return (
    <div className="products">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductData;
