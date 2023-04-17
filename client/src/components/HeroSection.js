import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h2> {name} </h2>
            <p>
            “We are delighted that you have decided to join us. 
            On behalf of myself and all of the team, we would 
            like to extend our warmest welcome and best wishes.”
            </p>
            <NavLink to="#" >
              <button className="nav-button">SHOP NOW</button>
            </NavLink>
          </div>
          
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero1.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
   .hero-section-image img {
    min-width: 10rem;
    height: 45rem;
    border-radius: 4%;
  }
  .hero-section-data {
    p {
      margin: 1rem 0 0 2rem;
      font-weight: bold;
      text-align:justify;
    }
    h2 {
      text-transform: capitalize;
      font-weight: bold;
      margin: 0 0 1rem 2rem;
    }
    .intro-data {
      margin-bottom: 0;
    }
   .nav-button{
    margin:2rem 0 0 2rem;
    background-color: #008CBA;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
  }
`;

export default HeroSection;