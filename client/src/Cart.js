import React, { useState ,useEffect} from 'react';
import { useLocation } from "react-router-dom";
import '../src/card.css';

const CardPage = () => {
  const location = useLocation();
  const [items, setItems] = useState([]);

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total.toFixed(2);
  };

  useEffect(() => {
    // const userId = location?.state?.userId;
    const userId = '642c4e09f4d1093338494efd';
    if(userId){
      fetch(`/api/cart?userId=${userId}`)
      .then((res) => res.json())
      .then((response) => setItems(response.data[0].products));
    }
  }, []);

  return (
    <div className="card-container">
      <h1 className='shpping-heading'>Shopping Cart</h1>
      <div className="card-header">
        <div className="item-name">Item</div>
        <div className="item-price">Price</div>
        <div className="item-quantity">Quantity</div>
        <div className="item-remove">Remove</div>
      </div>
      {items.length > 0 && items.map((item) => (
        <div className="card-item" key={item.product_id}>
          <div className="item-name">{item.product_name}</div>
          <div className="item-price">₹{item.discounted_price.toFixed(2)}</div>
          <div className="item-quantity">
            <input
              type="number"
              min="1"
              value={item.product_qt}
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
      ))}
      <div className="card-total">
        <div className="total-label">Total:</div>
        <div className="total-value">₹{calculateTotal()}</div>
      </div>
    </div>
  );
};

export default CardPage;
