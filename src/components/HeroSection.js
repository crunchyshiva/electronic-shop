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
            <NavLink to="#">
              <Button>show now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.jpg"
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
  padding: 10rem 0;
  img {
    min-width: 10rem;
    height: 10rem;
    border-radius: 4%;
    border: 3px solid #CF9FFF;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  
  ${'' /* img:hover{
  box-shadow: 2px 2px 10px rgb(41, 170, 235),
  -2px -2px 10px rgb(41, 170, 235);
  transition: transform 0.9s;
  transform-style: preserve-3d;
  -webkit-transform:perspective(400px) rotateY(0); 
  transform:perspective(400px) rotateY(180deg);
  border: none;
} */}
  .hero-section-data {
    p {
      margin: 2rem 0;
      font-weight: bold;
    }
    h2 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
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
  figure {
    position: relative;
    &::after {
      content: "";
      width: 85%;
      height: 85%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 20%;
      top: -3rem;
      z-index: -1;
      border-radius: 4%;
      border: 2px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;