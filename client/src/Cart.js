import React, { useState } from 'react';
import '../src/card.css';

const CardPage = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Product 1', price: 20, quantity: 1 },
    { id: 2, name: 'Product 2', price: 40, quantity: 1 },
    { id: 3, name: 'Product 3', price: 70, quantity: 1 },
  ]);

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total.toFixed(2);
  };

  return (
    <div className="card-container">
      <h1 className='shpping-heading'>Shopping Cart</h1>
      <div className="card-header">
        <div className="item-name">Item</div>
        <div className="item-price">Price</div>
        <div className="item-quantity">Quantity</div>
        <div className="item-remove">Remove</div>
      </div>
      {items.map((item) => (
        <div className="card-item" key={item.id}>
          <div className="item-name">{item.name}</div>
          <div className="item-price">₹{item.price.toFixed(2)}</div>
          <div className="item-quantity">
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => {
                const updatedItems = [...items];
                const index = updatedItems.findIndex((i) => i.id === item.id);
                updatedItems[index].quantity = Number(e.target.value);
                setItems(updatedItems);
              }}
            />
          </div>
          <div className="item-remove">
            <button onClick={() => removeItem(item.id)}>Remove</button>
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
