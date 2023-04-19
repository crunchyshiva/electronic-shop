import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { useNavigate } from "react-router-dom";
import { Button } from "../styles/Button";

const AddToCart = ({ product }) => {
  const navigate = useNavigate();

  const { colors } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    setAmount(amount + 1) 
  };

  async function addToCart(product){
    const data = {
      userId:'642c4e09f4d1093338494efd',
      product:{
        product_id:product.product_id,
        product_name:product.product_name,
        product_category:product.product_category,
        product_qt:amount,
        actual_price:product.actual_price,
        total_amount:product.discounted_price * amount,
        discounted_price:product.discounted_price,
        discount:product.discount,
        product_desc:product.product_desc,
        product_image:product.product_master_image
      }
    }
    await fetch("/api/cart",{
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((response) => {
      navigate("/cart",{state:{userId:'642c4e09f4d1093338494efd',cartData:response.cart}});
    });
  }
  return (
    <Wrapper>
      <div className="colors">
        <p>
          Color:
          {colors.length > 0 && colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      {/* add to cart  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <Button className="btn" onClick={() => addToCart(product)}>Add To Cart</Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart;