import React, { useState } from 'react';
import '../Address_Page/Address.css';

const AddressPage = () => {
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // perform validation here
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="address-container">
    <h1>address details</h1>
      <div className="row">
        <div className="col-sm-8">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <textarea
                className="form-control"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                className="form-control"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode:</label>
              <input
                type="text"
                className="form-control"
                id="pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Place Order
            </button>
          </form>
          {showPopup && (
            <div className="popup">
              <div className="popup-content">
                <h2>Order Placed Successfully!</h2>
                <button className="close-btn" onClick={handlePopupClose}>
                  X
                </button>
              </div>
            </div>
          )}
        </div>
        <div className='pricing-information'>
        <div className="col-sm-4">
        <div className="pricing-details-container">
      <div className="pricing-details-item">
        <label>Product Price:</label>
        {/* <span>${props.productPrice.toFixed(2)}</span> */}
      </div>
      <div className="pricing-details-item">
        <label>Tax:</label>
        {/* <span>${props.tax.toFixed(2)}</span> */}
      </div>
      <div className="pricing-details-item">
        <label>Shipping:</label>
        {/* <span>${props.shipping.toFixed(2)}</span> */}
      </div>
      <div className="pricing-details-item total-price">
        <label>Total Price:</label>
        {/* <span>${props.totalPrice.toFixed(2)}</span> */}
      </div>
      <button className="place-order-button">Place Order</button>
    </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
