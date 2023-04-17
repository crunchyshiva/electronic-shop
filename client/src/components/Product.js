import React from "react";
import { NavLink } from "react-router-dom";
// import FormatPrice from "../helper/FormatPrice";

const Product = (curElem) => {
  const {product_category,product_category_img} = curElem;
  return (
    <NavLink to='/products' state={{selectedCategory:product_category}}>
      <div className="card">
        <figure>
          <img src={`/images/product/${product_category_img}.png`} alt={product_category} />
        </figure>
         <figcaption className="category-name">{product_category}</figcaption>
      </div>
    </NavLink>
  );
};

export default Product;