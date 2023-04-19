import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import '../src/card.css';

const CardPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [cart, setCart] = useState({});

  const [items, setItems] = useState([]);

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    console.log(updatedItems, 'updatedItems')
    setItems(updatedItems);
  };

  useEffect(() => {
    // const userId = location?.state?.userId;
    const cartData = location?.state?.cartData
    if (cartData) {
      setCart(cartData)
    } else {
      const userId = '642c4e09f4d1093338494efd';
      if (userId) {
        fetch(`/api/cart?userId=${userId}`)
          .then((res) => res.json())
          .then((response) => setCart(response.data));
      }
    }
  }, []);

  const onPlaceOrder = () => {
    navigate("/shipping",{state:{cartData:cart}});
  }

  return (
    <div className="card-container">
      <h1 className='shpping-heading'>Shopping Cart</h1>
      <div className="card-header">
        <div className="item-name">Item</div>
        <div className="item-price">Price</div>
        <div className="item-quantity">Quantity</div>
        <div className="item-remove">Remove</div>
      </div>
      {cart?.products?.length > 0 ? cart?.products.map((item, index) => (
        <div className="card-item" key={index}>
          <div className="item-name">{item.product_name}</div>
          <div className="item-price">₹{item.discounted_price.toFixed(2)}</div>
          <div className="item-quantity">
            <input
              type="number"
              min="1"
              value={item?.product_qt}
              onChange={(e) => {
                const updatedItems = [...items];
                const index = updatedItems.findIndex((i) => i.id === item.id);
                updatedItems[index].quantity = Number(e.target.value);
                setItems(updatedItems);
              }}
            />
          </div>
          <div className="item-remove">
            <button onClick={() => removeItem(item.product_id)}>Remove</button>
          </div>
        </div>
      )) :
        <div className="card-total">No Product Found</div>}
      {cart?.products?.length > 0 && (
        <div>
          <div className="card-total">
            <div className="total-label">Total:</div>
            <div className="total-value">₹{cart?.total_price}</div>
          </div>
          <div className="order-btn" onClick={onPlaceOrder}>
            <button>Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardPage;
