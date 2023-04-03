import React from 'react';
import "./components/About.css";
import { useProductContext } from "./components/context/productcontex";
const About = () => {

  const { myName } = useProductContext();

  return (
    <>
    {myName}
    <div className="about-us-container e-container">
    <div className='about-us'>
    <h2>About Us</h2>
    </div>
      <div className="about-us-content">
        <div className="about-us-image">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="electronic store" />
        </div>
        <div className="about-us-text">
          <p>We are an online electronic store that provides the latest and greatest in technology. We strive to provide our customers with the best products and services available. Our team of experts is always on hand to help you find the perfect product for your needs.</p><br />
          <p>We are committed to providing our customers with the highest quality products and services. We take pride in our customer service and strive to make sure that each customer is satisfied with their purchase. We are dedicated to providing our customers with the best possible experience.</p><br />
          <p>We are always looking for ways to improve our products and services. We are constantly researching new technologies and products to ensure that our customers have access to the latest and greatest in technology. We are committed to providing our customers with the best possible experience.</p>
        </div>
      </div>
    </div>
    <div className="about-us-content1">
      <div className="example">
          <img src="./images/shivam.jpg" alt="electronic store" />
          <div className="content">
          <div className="mytext">
          <div className="image-text">
          <h3>Shivam Pathak</h3>
          <p>CEO & Founder</p>
          <p>Crunchyshiva@gmail.com</p>
          </div>
          </div>
        </div>
        </div>
        <div className='second-para'>
          <p>As the founder and CEO of an online electronic store, I am committed to providing customers with the highest quality products and services. 
          We strive to create an enjoyable shopping experience for our customers, while also ensuring that our products are competitively priced and delivered in a timely manner. <br />
          My team and I are dedicated to providing excellent customer service and making sure that our customers are satisfied with their purchases. We are constantly looking for
          ways to improve our store and make sure that our customers have the best possible experience.</p>
        </div>
      </div>
    </>
  );
};

export default About;