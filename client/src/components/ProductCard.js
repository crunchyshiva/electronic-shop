import React from 'react';

function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>${props.price}</p>
    </div>
  );
}

export default ProductCard;
