import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import {states} from '../common/constant'

import '../Address_Page/Address.css';

const AddressDetails = () => {
  const location = useLocation();
  const [address, setAddress] = useState({});
  const [userId, setUserId] = useState('');
  const [cartData, setCartData] = useState({});
  const [showPopup, setShowPopup] = useState(false);


  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]:e.target.value
    })
  };

  const handlePlaceOrder = () =>{
    const data = {
      userId:userId,
      products:[
        ...cartData.products
      ],
      total_price:cartData.total_price,
      shipping_address:{
        addres_line_1:address?.addres_line_1,
        addres_line_2:address?.addres_line_2,
        city:address?.city,
        state:address?.state,
        pincode:address?.pincode
      },
      payment_type: address?.isCashOnDelivery ? 'Cash on Delivery':'Online'
    }
    fetch("/api/order",{
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((response) => 
      setShowPopup(true)
    );
    // Handle order placement logic here
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const userId = location?.state?.cartData?.userId;
    const cartData = location?.state?.cartData;
    if(userId){
      setUserId(userId);
      setCartData(cartData)
    }
  }, []);
  return (
    <div>
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <h2 className='popup-msg'>Order Placed Successfully!</h2>
            <span className="popup-button" onClick={handleClosePopup}>
              X
            </span>
          </div>
        </div>
      )}

      <div className="address-details-container">
        <div className="address-form-container">
          <h2 className="address-form-header">Shipping Address</h2>
          
            <div className="address-form-group">
              <label className="form-label" htmlFor="address-line-1">Address Line 1</label>
              <input className="address-form-input" type="text" placeholder='Street, Building name' name="addres_line_1" value={address?.addressLine1} onChange={(e) => handleChange(e)} />
            </div>
            <div className="address-form-group">
              <label className="form-label" htmlFor="address-line-2">Address Line 2</label>
              <input className="address-form-input" type="text" placeholder='Landmark' name="addres_line_2" value={address?.addressLine2} onChange={(e) => handleChange(e)} />
            </div>
            <div className="address-form-group">
              <label className="form-label" htmlFor="city">City</label>
              <input className="address-form-input" type="text" placeholder='City name' name="city" value={address?.city} onChange={handleChange} />
            </div>
            <div className="address-form-group">
              <label className="form-label" htmlFor="state">State</label>
              <select className="form-select" name="state" value={address?.state} onChange={handleChange}>
                <option disabled>Select State</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="address-form-group">
              <label className="form-label" htmlFor="pincode">Pincode</label>
              <input className="address-form-input" type="text" placeholder='Area pincode' name="pincode" value={address?.pincode} onChange={handleChange} />
            </div>

            {/* THIS IS THE CHECK BOX AREA */}
            <div className="checkbox-container">
              <input
                className="checkbox-input"
                type="checkbox"
                name="isCashOnDelivery"
                checked={address?.isCashOnDelivery}
                onChange={(e) => setAddress({...address,[e.target.name]:(e.target.checked)})}
              />
              <label className="checkbox-label" htmlFor="my-checkbox">
                Cash-on-delivery
              </label>
            </div>
            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          {/* </form> */}
        </div>
        <div className="order-summary-container">
          <h2 className="order-summary-header">Order Summary</h2>
          <div className="price-details-container">
            <div className="price-detail-container">
              <span className="price-detail-label">Sub Total</span>
              <span className="price-detail-value">₹200.00</span>
            </div>
            <div className="price-detail-container">
              <span className="price-detail-label">Discount</span>
              <span className="price-detail-value">₹100.00</span>
            </div>
            <div className="price-detail-container">
              <span className="price-detail-label">Tax&Charges</span>
              <span className="price-detail-value">₹10.00</span>
            </div>
            <div className="price-detail-container">
              <span className="price-detail-label">Grand Total</span>
              <span className="price-detail-value">₹110.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
