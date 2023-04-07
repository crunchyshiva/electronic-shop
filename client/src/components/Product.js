import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helper/FormatPrice";

const Product = (curElem) => {
  const {product_category,product_category_img} = curElem._id;
  const {products} = curElem;
  return (
    <NavLink to='/category/products' state={{data:products}}>
      <div className="card">
        <figure>
          <img src={`/images/product/${product_category_img}.png`} alt={product_category} />
          <figcaption className="caption">{product_category}</figcaption>
        </figure>
      </div>
    </NavLink>
  );
};

export default Product;