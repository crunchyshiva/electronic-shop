import { useProductContext } from "./context/productcontex";
import styled from "styled-components";
import Product from "./Product";
import Loader from "./images/loader.gif"

const FeatureProduct = (props) => {
  const { isLoading, featureProducts } = useProductContext();
  const {categoryData} = props;

  if (isLoading) {
    return <img  className="img-loader" src={Loader} alt="loader" />
  }
  return (
    <Wrapper className="section">
      <div className="container">
        <div className="product-heading">Top Categories</div>
        <div className="grid grid-four-column">
          {categoryData.length > 0 && categoryData.map((curElem) => {
            return <Product key={curElem?._id} {...curElem} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`    
  padding: 5rem ;
  margin-left:5.5rem;
  margin-right:5.5rem;
  background-color: #f2eae3;
  border-radius:2rem;
  .container {
    max-width: 110rem;
    border-radius: 1rem;
  }

  .product-heading{
    font-size: 3.8rem;
      font-weight: 600;
      text-align:center;
      margin-bottom: 2rem;
      text-transform: capitalize;
  }
  figure {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    border-radius: 2rem;  
    &:hover img {
      transition: all 0.3s linear;
      transform: scale(1.2);
    }
    img {
      max-width: 84%;
      margin-top: 1.5rem;
      margin-bottom: 1rem;
      height: 20rem;
      border-radius: 2rem;
      transition: all 0.3s linear;
    }
  }


  .card {
    ${'' /* margin-bottom: 0.5rem; */}
    max-width:90%;
    height: 25.5rem;
    background-color: #fff;
    border-radius: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .card figcaption {
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-top:0.7rem;
    color: #333; 
    text-align:center;
    }
    
`;

export default FeatureProduct;