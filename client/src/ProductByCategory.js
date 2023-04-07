import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ProductByCategory = () => {
  const location = useLocation();
  const [productByCategory, setProductByCategory] = useState([]);

  useEffect(() => {
    setProductByCategory(location.state.data);
    console.log(location.state.data, 'props');
  }, [])

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="grid grid-three-column">
          {productByCategory.length > 0 && productByCategory.map((item, key) => (
            <div className="card" key={key}>
              <figure>
                <img src={`/images/product/${item?.product_master_image}.png`} alt='product_master_image' />
                <figcaption className="caption">{item?.product_name}</figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>


  );
};


const Wrapper = styled.section`    
  padding: 7rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .container {
    max-width: 130rem;
    border-radius: 2rem;
  }

  .product-heading{
    font-size: 3.8rem;
      font-weight: 600;
      text-align:center;
      margin-bottom: 4rem;
      text-transform: capitalize;
  }
  figure {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    border-radius: 2rem;
    padding:1.5rem;
    
    ${'' /* transition: all 0.5s linear; */}
    
    
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transition: all 0.3s linear;
      transform: scale(1.2);
      
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      height: 20rem;
      border-radius: 2rem;
      transition: all 0.3s linear;
    }
    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }
  .card {
    max-width:90%;
    height: 28.5rem;
    background-color: #fff;
    border-radius: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    .card-data {
      padding: 0 2rem;
    }
    .card-data-flex {
      ${'' /* margin: rem 0; */}
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;




export default ProductByCategory;