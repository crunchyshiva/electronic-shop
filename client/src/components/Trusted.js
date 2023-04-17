import styled from "styled-components";
import Google from "./images/Google.gif";
import Microsoft from "./images/microsoft.gif";
import Apple from "./images/Apple.gif";
import Twitter from "./images/Twitter.gif";
import Spotify from "./images/spotify.gif";
const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3 className="brand-section-heading">Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src={Google}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src={Microsoft}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src={Twitter}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src={Apple}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src={Spotify}
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 10rem 10rem 10rem;
  margin: 0 5rem 5rem 5rem;
  border-radius: 2rem;
  background-color: #f2eae3;

  .brand-section-heading {
    text-align: center;
    text-transform: capitalize;
    font-size: 3rem;
    font-weight: bold;
  }

  img {
    min-width: 7rem;
    height: 6rem;
    border-radius: 50%;
  }

  .brand-section-slider {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  /* Media query for mobile screens */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    
    .brand-section-slider {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      justify-items: center;
    }

    img {
      width: 100%;
      height: auto;
    }

    .brand-section-heading {
      font-size: 2rem;
    }

    .brand-section-slider {
      margin-top: 2rem;
    }

    .slide {
      width: 6rem;
      height: 5rem;
      margin-top:2rem;
    }

    .slide img {
      ${'' /* padding:1rem; */}
      border-radius: 50%;
    }
  }

  /* Media query for tablet screens */
  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    .brand-section-slider {
      justify-content: space-around;
      margin-top: 4rem;
    }

    .brand-section-heading {
      font-size: 4rem;
    }

    img {
      min-width: 10rem;
      height: 9rem;
    }

    .slide {
      width: 7rem;
      height: 7rem;
    }
  }

  /* Media query for desktop screens */
  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    .brand-section-heading {
      font-size: 5rem;
    }

    .slide {
      width: 9rem;
      height: 9rem;
    }
  }
`;

export default Trusted;