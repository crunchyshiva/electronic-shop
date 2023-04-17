import styled from "styled-components";
import {GrLocation,} from "react-icons/gr";
import {HiOutlineMailOpen} from "react-icons/hi";
import {FaPhoneAlt,FaWhatsapp,FaLinkedinIn,FaYoutube,FaInstagram,FaFacebook} from "react-icons/fa";
import {BiPhoneCall} from "react-icons/bi";
const Contact = () => {
  const Wrapper = styled.section`
    padding: 5rem 0 5rem 0;
    
    .container {
padding-left: 0.7rem;
padding-right: 3rem;
margin-top: 5rem;
background: #d3d1d0;
}

/* Contact icons */
#contact-icons {
text-align: center;
width: 100%;
font-size: 3rem;
}

/* First card */
.column {
background-color: #f1f1f1;
width: 100%;
min-width: 200px;
padding: 8px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.column h3 {
text-align: center;
}

.column p {
text-align: center;
margin-top: 1rem;
}

/* Social media icons */
.contact-social--icons {
justify-content: space-between;
display: flex;
gap: 1rem;
}

.contact-social--icons .icons1,
.contact-social--icons .icons2,
.contact-social--icons .icons3,
.contact-social--icons .icons4 {
background-color: white;
border: 2px dashed white;
transition: 0.6s;
padding: 5px;
font-size: 4.5rem;
position: relative;
border-radius: 27%;
cursor: pointer;
}

.contact-social--icons .icons1 {
color: blue;
}

.contact-social--icons .icons2 {
color: #c82a10;
}

.contact-social--icons .icons3 {
color: #ff0000;
}

.contact-social--icons .icons4 {
color: #3a5795;
}

.contact-social--icons #facebook:hover {
color: white;
background: blue;
}

.contact-social--icons #instagram:hover {
color: white;
background: #f09433;
background: -moz-linear-gradient(
45deg,
#f09433 0%,
#e6683c 25%,
#dc2743 50%,
#cc2366 75%,
#bc1888 100%
);
background: -webkit-linear-gradient(
45deg,
#f09433 0%,
#e6683c 25%,
#dc2743 50%,
#cc2366 75%,
#bc1888 100%
);
background: linear-gradient(
45deg,
#f09433 0%,
#e6683c 25%,
#dc2743 50%,
#cc2366 75%,
#bc1888 100%
);
}

.contact-social--icons #youtube:hover {
color: white;
background: #ff0000;
}

.contact-social--icons #linkedin:hover {
color: white;
background: #3a5795;
}
      
/* Contact form style */
.contact-form {
  width: 100%;
  max-width: 50rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  .contact-inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 2rem;
    
    label {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    
    input[type="text"],
    input[type="email"],
    input[type="number"],
    textarea {
      width: 100%;
      padding: 1rem;
      font-size: 1.2rem;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      
      &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary};
      }
    }
    
    textarea {
      resize: vertical;
      min-height: 8rem;
    }
    
    input[type="submit"] {
      margin-top: 1rem;
      padding: 1rem 2rem;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary};
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.2s;
      
      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
}
@media screen and (max-width: 768px) {
    padding: 2rem 0;
    
    .container {
      padding: 0.7rem;
      margin-top: 2rem;
    }
    
    #contact-icons {
      font-size: 2rem;
    }
    
    .column {
      padding: 4px;
    }
    
    .column h3 {
      font-size: 1.2rem;
    }
    
    .column p {
      font-size: 1rem;
      margin-top: 0.5rem;
    }
    
    .contact-social--icons .icons1,
    .contact-social--icons .icons2,
    .contact-social--icons .icons3,
    .contact-social--icons .icons4 {
      font-size: 2.5rem;
    }
    
    .contact-form {
      max-width: 100%;
      
      .contact-inputs {
        padding: 0 1rem;
        
        label {
          font-size: 1rem;
        }
        
        input[type="text"],
        input[type="email"],
        textarea {
          font-size: 1rem;
          border-radius: 0.3rem;
        }
        
        input[type="submit"] {
          padding: 1rem;
          font-size: 1rem;
          border-radius: 0.3rem;
        }
      }
    }
}

  `;

  return <Wrapper>
  
     <div className="container grid grid-two-column">
     <div className="company-details">
        <h2>Contact Us</h2>
        <div class="container grid grid-three-column">
  <div className="column" >
  <GrLocation id="contact-icons" className="location-icon"/>
    <h3>Visit address</h3>
    <p>HABIBPUR CHHARRA (ALIGARH) UTTER PRADESH</p>
      <a
       href="https://www.google.com/maps/place/Bablu+Kirana+Store/@27.9458054,78.4053669,17z/data=!3m1!4b1!4m6!3m5!1s0x3974c5b9c7e2fc67:0x76dfbec88f2d4e7b!8m2!3d27.9458054!4d78.4075609!16s%2Fg%2F11rzqytv6t"              
        target="_blank">
        <h3>Track Location</h3>   
      </a>
  </div>
  <div className="column">
  <HiOutlineMailOpen id="contact-icons" className="location-icon"/>
    <h3>Send Us an Email</h3>
    <p>crunchyshiva@gmail.com</p><p> freddypathak@gmail.com</p>
  </div>
  <div className="column">
  <FaPhoneAlt id="contact-icons" className="location-icon"/>
    <h3>Contact number</h3>
    <p className="contact-call"><BiPhoneCall/>:9368208516</p>
    <p className="whatsapp"><FaWhatsapp/>:9012886503</p>
   </div>
   <div className="contact-social">
            <h3>Follow Us</h3>
            <div className="contact-social--icons">
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
  </div>
 </div>
 
  <div className="contact-form">
        <p>Please use the form below to get in touch with our customer service team.</p>
    <form
      action="https://formspree.io/f/mjvdgagd"
      method="POST"
      className="contact-inputs">
      <input
        type="text"
        placeholder="username"
        name="username"
        required
        autoComplete="off"
      />

      <input
        type="email"
        name="Email"
        placeholder="Email"
        autoComplete="off"
        required
      />

      <input
        type="number"
        name="Mobile Number"
        placeholder="Contact Number"
        autoComplete="off"
        required
      />

      <textarea
        name="Message"
        cols="30"
        rows="10"
        required
        autoComplete="off"
        placeholder="Enter you message"></textarea>

      <input type="submit" value="send" />
    </form>
  </div>
</div>

<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"></iframe>
  </Wrapper>;
};

export default Contact;
