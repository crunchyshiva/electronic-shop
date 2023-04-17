import styled from "styled-components";
import Cashback from "./images/cashback.gif";
import Ebazar from "./images/truck.gif";
import Wallet from "./images/wallet.gif";
import Contactless from "./images/contactless.gif";
const Services = () => {
  return (
    <Wrapper>
     <div className="container">
      <div className="grid grid-three-column">
        <div className="services-1">
          <div>
             <img src={Ebazar} alt="truck-icon" className="icon" />
             <h3>Super Fast and Free Delivery</h3>
          </div>
        </div>
        <div className="services-2">
          <div className="services-colum-2">
          <div>
             <img src={Contactless} alt="contactless-icon" className="icon" />
             <h3>Non-contact Shipping</h3>
          </div>
          </div>
          <div className="services-colum-2">
          <div>
             <img src={Cashback} alt="cashback-icon" className="icon" />
             <h3>Money-back Guaranteed</h3>
          </div>
          </div> 
        </div>
        <div className="services-3">
            <div>
              <img src={Wallet} alt="wallet-icon" className="icon" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>
      </div>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  padding: 4rem 0;
  margin-left:2rem;
  .grid {
    gap: 4.8rem;
  }
  .services-1,
  .services-2,
  .services-3 {
    max-width:95%;
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color:#f2eae3;
    text-align: center;
    border-radius: 2rem;
    box-shadow: 0 0.5px 0.5px 0 rgba(0.5, 0, 0, 0.5), 0 3px 10px 0 rgba(0.5, 0, 0, 0.15);
  }
  
  .services-2 {
    gap: 3rem;
    background-color: transparent;
    box-shadow: none;
    .services-colum-2 {
     background-color:#f2eae3;
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: 0 0.5px 0.5px 0 rgba(0.5, 0, 0, 0.5), 0 3px 10px 0 rgba(0.5, 0, 0, 0.15);
      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }
  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }
  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 1rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
`;

export default Services;