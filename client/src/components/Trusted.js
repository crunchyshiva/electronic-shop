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
        <h3>Trusted By 1000+ Companies</h3>
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
  padding: 7rem 0;
  background-color:#CF9FFF;
  .brand-section {
    padding: 10rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }
  img {
    min-width: 9rem;
    height: 8rem;
  }
  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  
  }
  .slide img{
    border-radius:50%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;