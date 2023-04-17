import React, { useState } from 'react';
import '../Address_Page/Address.css';

const AddressDetails = () => {
  const [username, setUsername] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Select State');
  const [pincode, setPincode] = useState('');
  const [isCashOnDelivery, setIsCashOnDelivery] = useState(false);
   const [showPopup, setShowPopup] = useState(false);

  const states = [    'Andhra Pradesh',    'Arunachal Pradesh',    'Assam',    'Bihar',    'Chhattisgarh',    'Goa',    'Gujarat',    'Haryana',    'Himachal Pradesh',    'Jharkhand',    'Karnataka',    'Kerala',    'Madhya Pradesh',    'Maharashtra',    'Manipur',    'Meghalaya',    'Mizoram',    'Nagaland',    'Odisha',    'Punjab',    'Rajasthan',    'Sikkim',    'Tamil Nadu',    'Telangana',    'Tripura',    'Uttar Pradesh',    'Uttarakhand',    'West Bengal',  ];

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleAddressLine1Change = (e) => {
    setAddressLine1(e.target.value);
  };

  const handleAddressLine2Change = (e) => {
    setAddressLine2(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }
  const handleCashOnDeliveryChange = (e) => {
    setIsCashOnDelivery(e.target.checked);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Handle order placement logic here
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

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
      <form className="address-form">
        <div className="address-form-group">
          <label className="form-label" htmlFor="username">Username</label>
          <input className="address-form-input" type="text" placeholder='Username' id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="address-form-group">
          <label className="form-label" htmlFor="address-line-1">Address Line 1</label>
          <input className="address-form-input" type="text" placeholder='Street, Building name' id="address-line-1" value={addressLine1} onChange={handleAddressLine1Change} />
        </div>
        <div className="address-form-group">
          <label className="form-label" htmlFor="address-line-2">Address Line 2</label>
          <input className="address-form-input" type="text" placeholder='Landmark' id="address-line-2" value={addressLine2} onChange={handleAddressLine2Change} />
        </div>
        <div className="address-form-group">
          <label className="form-label" htmlFor="city">City</label>
          <input className="address-form-input" type="text" placeholder='City name' id="city" value={city} onChange={handleCityChange} />
        </div>
        <div className="address-form-group">
          <label className="form-label" htmlFor="state">State</label>
          <select className="form-select" id="state" value={state} onChange={handleStateChange}>
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
          <input className="address-form-input" type="text" placeholder='Area pincode' id="pincode" value={pincode} onChange={handlePincodeChange} />
        </div>
        
        {/* THIS IS THE CHECK BOX AREA */}
        <div className="checkbox-container">
      <input
        className="checkbox-input"
        type="checkbox"
        id="my-checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label className="checkbox-label" htmlFor="my-checkbox">
        Cash-on-delivery
      </label>
    </div>
        {/* <div className="form-group">
        <input className="form-checkbox" type="checkbox" id="cash-on-delivery" checked={isCashOnDelivery} onChange={handleCashOnDeliveryChange} />
          <label className="form-label" htmlFor="cash-on-delivery">Cash on Delivery</label>
        </div> */}
        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </form>
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
