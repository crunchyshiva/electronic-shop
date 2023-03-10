import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "./components/context/productcontex";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import { Container } from "./styles/Container";
import FormatPrice from "./helper/FormatPrice";
// import { MdSecurity } from "react-icons/md";
// import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Free from "./components/images/free-delivery.png";
import Replacement from "./components/images/replacement.png";
import Ebazar from "./components/images/truck.gif";
import Protect from "./components/images/Protect.gif"
import Star from "./components/Star";
const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container className="container">
        <div className="grid grid-three-column">
          {/* product Images  */}
          <div className="product_images">
            <MyImage imgs={image} />
          </div>

          {/* product data  */}
          <div className="product-data">
            <h2>{name}</h2>
            <p>{stars}</p>
            <p>{reviews} reviews</p>
            <p className="product-data-real-price">
              Deal: <FormatPrice price={price} />
            </p>
            <p className="product-data-price">
              M.R.P:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p>Inclusive of all taxes</p>
            <p className="description">{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
              <img src={Free} className="warranty-icon" />;
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <img src={Replacement} className="warranty-icon" />
                <p>7 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <img src={Ebazar} className="warranty-icon" />
                <p> E-bazar Delivered </p>
              </div>

              <div className="product-warranty-data">
                <img src={Protect} className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            {/* <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div> */}
          </div>
          <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding-left: 1px;
  }
  .product_images {
    display: flex;
    gap:1rem;
    align-items: center;
  }
  .product-data {
    margin-top:3rem;
    width:89%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;

    .description{
      text-align:justify;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
    .product-data-warranty {
      width: 100%;
      display: flex;
      gap:2rem;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      ${'' /* margin-bottom: 1rem; */}
      .product-warranty-data {
        text-align: center;
        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 30%;
          width: 65px;
          height: 65px;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }
    .product-data-price {
      font-size:12px;
      font-weight: bold;
      
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
      font-weight: bold;
      font-size:25px;
      
    }
    
    hr {
      max-width: 100%;
      width: 90%;
      height: 0.2rem; 
      border: 0.1rem solid #000;
      color: red;
    }
  }
  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .product-data-info {
      margin-top:4rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      border-style: dotted;
      font-size: 1.8rem;
      span {
        font-weight: bold;
      }
    }
  ${'' /* .page_loading {
    font-size: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  } */}
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 5rem;

    .product-data {
    width:100%;
    gap: 1rem;
    }
  }
`;

export default SingleProduct;
