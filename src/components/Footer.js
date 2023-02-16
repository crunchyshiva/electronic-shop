import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaAddressCard,FaPhoneSquareAlt,FaFacebook,FaLinkedinIn,FaInstagram,FaYoutube } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi"
const Footer = () => {
  return (
    <>
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <Button className="btn hireme-btn">
              <NavLink to="/"> Get Started </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* footer section */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3 className="footer-logo">E-bazar</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input type="email" name="email" placeholder="YOUR E-MAIL" />

              <input type="submit" value="subscribe" />
            </form>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
              <a
                  href="https://www.facebook.com/profile.php?id=100024552923562"
                  target="_blank">
                <FaFacebook className="icons1" id="facebook" />
                </a>
              </div>
              <div>
              <a
                  href="https://www.instagram.com/crunchy_shiva/"
                  target="_blank">
                <FaInstagram className="icons2" id="instagram" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/channel/UC1dJlbGkExn7-nHqmVOzRwg"
                  target="_blank">
                  <FaYoutube className="icons3" id="youtube" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/shivam-pathak-9b8921202/"
                  target="_blank">
                  <FaLinkedinIn className="icons4" id="linkedin" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-contact">
          <FaPhoneSquareAlt className="footer-call" />
            <h3 className="footer-cal">9368208516</h3>
            <div className="crunchy">
            <p className="footer-gmail"><HiOutlineMail className="footer-email" />crunchyshiva@gmail.com</p>
          </div><br />
          <div className="footer-adress">
          <FaAddressCard className="footer-address" />
            <p className="footer-addres">HABIBPUR CHHARRA (ALIGARH) UTTER PRADESH </p>
          </div>
          </div>
        </div>
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column ">
            <p>
              @{new Date().getFullYear()} . All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  </>
);
};

const Wrapper = styled.section`
.iSIFGq {
  margin: 0;
}
.contact-short {
  max-width: 60vw;
  margin: auto;
  padding: 3rem 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  transform: translateY(50%);
  .grid div:last-child {
    justify-self: end;
    align-self: center;
  }
}
footer {
  display:grid;
  padding: 11rem 0 9rem 0;
  background-color: #1f405a;
  h3 {
    color: ${({ theme }) => theme.colors.hr};
    margin-bottom: 1rem;
  }
  .footer-logo{
    font-size: 40px;
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to right, #f32170,
                    #ff6b08, #cf23cf, #eedd44);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    animation: mymove 5s infinite;
    @keyframes mymove {
  50% {text-shadow: 10px 20px 30px purple;}
}
  }
  p {
    color: ${({ theme }) => theme.colors.white};
  }
  .footer-social--icons {
    display: flex;
    gap: 1rem;
 
      .icons1 {      
        color:blue;
        background-color:white;
        border: 2px dashed white;
        transition: .6s;
        padding:5px;
        font-size:4.5rem;
        position: relative;
        border-radius: 27%;
        cursor: pointer; 
      }

      .icons2 {      
        color:#c82a10;
        background-color:white;
        border: 2px dashed white;
        transition: .6s;
        padding:5px;
        font-size:4.5rem;
        position: relative;
        border-radius: 27%;
        cursor: pointer; 
      }

      .icons3 {      
        color:#ff0000;
        background-color:white;
        border: 2px dashed white;
        transition: .6s;
        padding:5px;
        font-size:4.5rem;
        position: relative;
        border-radius: 27%;
        cursor: pointer;
      }

      .icons4 {      
        color:#3A5795;
        background-color:white;
        border: 2px dashed white;
        transition: .6s;
        padding:5px;
        font-size:4.5rem;
        position: relative;
        border-radius: 27%;
        cursor: pointer;
      }

      #facebook:hover{
        color:white;
        background: blue; 
      }

      #instagram:hover{
        color:white;
          background: #f09433; 
          background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
          background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
          background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
      }

      #youtube:hover{
        color:white;
          background: #ff0000; 
      }

      #linkedin:hover{
        color:white;
        background: #3A5795; 
      }
  }
  .footer-call{
        color:white;
        background-color:green;
        font-size:2.5rem;
        position: relative;
        border-radius: 25%;
        float:left;
      }
      
      .footer-cal{
        font-size:18px;
        text-indent: 8px;
        ${'' /* text-align:center; */}
      }

      .footer-email{
        color:#e379b0;
        background-color:white; 
        font-size:2.5rem;
        position: relative;
        border-radius: 25%;
        float:left;
      }

      .footer-gmail{
        font-size:14px;
        text-indent: 5px;
        ${'' /* text-align:center; */} 
      }

      .footer-address{
        color:#947185;
        background-color:white; 
        font-size:2.5rem;
        position: relative;
        border-radius: 25%;
        float:left;
      }

      .footer-addres{
        font-size:14px;
        text-indent: -6px;
        text-align:center;
      }
}
.footer-bottom--section {
  padding-top: 3rem;
  hr {
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.hr};
    height: 0;
  }
}
@media only screen and (max-width: 820px) {
  .contact-short {
    max-width: 80vw;
    margin: 4.8rem auto;
    transform: translateY(0%);
    text-align: center;
    .grid div:last-child {
      justify-self: center;
    }
  }
  footer {
    padding: 9rem 0 9rem 0; 
  }
  
  .footer-bottom--section {
    padding-top: 4.8rem;
  }
}
`;

export default Footer; 


