import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaAddressCard,FaPhoneSquareAlt,FaFacebook,FaLinkedinIn,FaInstagram,FaYoutube } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi"
import logo from "../components/images/logo.png"
const Footer = () => {
  return (
    <>
    <Wrapper>
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <img className="footer-logo" src={logo}/>
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
            <p className="footer-gmail"><HiOutlineMail className="footer-email" />CRUNCHYSHIVA@GMAIL.COM</p>
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
footer {
  display:grid;
  margin:5rem 5rem 0 5rem;
  padding: 5rem 2rem 5rem 2rem;
  border-radius:2rem 2rem 0 0;
  background-color: #1f405a;
  h3 {
    color: ${({ theme }) => theme.colors.hr};
    margin-bottom: 1rem;
  }
  
  .footer-logo{
    width:50%;
    height:40%;
    border-radius:2rem;
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
        text-indent: 5px;
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
        border-radius: 25%;
        float:left;
      }

      .footer-addres{
        font-size:14px;
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
@media (max-width: 768px) {
footer {
display: block;
margin: 2rem 0;
padding: 2rem;
text-align: justify;
.footer-logo {
  width: 45%;
  height: auto;
  margin: 0 auto;
}
}
}

.footer-social--icons {
  margin: 2rem 0;
  justify-content: justify;
  
  .icons1, .icons2, .icons3, .icons4 {
    font-size: 3rem;
    border-radius: 50%;
    padding: 0.5rem;
  }
  
  #facebook:hover, #instagram:hover, #youtube:hover, #linkedin:hover {
    background: none;
  }
  
}

.footer-bottom--section {
  padding-top: 2rem;
  
  hr {
    margin: 0 auto;
  }
}
`;

export default Footer; 


