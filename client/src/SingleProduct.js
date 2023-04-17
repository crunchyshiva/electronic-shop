import { useEffect ,useState} from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom"
import { useProductContext } from "./components/context/productcontex";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import { Container } from "./styles/Container";
import Free from "./components/images/free-delivery.png";
import Replacement from "./components/images/replacement.png";
import Ebazar from "./components/images/truck.gif";
import Protect from "./components/images/Protect.gif"
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";

const SingleProduct = () => {
  const location = useLocation();
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const [productDetails, setProductDetails] = useState({});
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
    if(location?.state?.data){
       setProductDetails(location.state.data)
    }
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
            {/* <MyImage imgs={image} /> */}
            <img src={`/images/product/${productDetails?.product_master_image}.png`} alt={productDetails?.product_name} />
          </div>
          {/* product data  */}
          <div className="product-data">
            <p className="product-name-heading">{productDetails?.product_name}</p>
            <p>{productDetails?.rating}</p>
            <Star stars={productDetails?.rating} reviews={reviews} />
            <p className="product-data-real-price">
              Deal: {productDetails?.discounted_price} 
            </p>
            <p className="product-data-price">
              M.R.P:
              <del>
                {productDetails?.actual_price} 
              </del>
              &nbsp; &nbsp;({
              Math.round(((productDetails?.actual_price - productDetails?.discounted_price)/productDetails?.actual_price)*100)}% Off)
            </p>
            <p>Inclusive of all taxes</p>
            <p className="description">{productDetails?.product_desc}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
              <img src={Free} className="warranty-icon" />
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
                <p>{productDetails?.warranty} Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {productDetails?.availability}</span>
              </p>
              <p>
                ID : <span> {productDetails?.product_id} </span>
              </p>
              <p>
                Brand :<span> {productDetails?.brand} </span>
              </p>
            </div>
            <hr />
           {productDetails.availability === 'In Stock' && <AddToCart product={productDetails} />} 
          </div>      
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding-left: 10rem;
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
     
     ${'' /* PRODUCTS HEADING STYLE */}
    .product-name-heading {
      font-size:2.5rem;
      font-weight: bold;
    }
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
      width: 100%;
      border: 0.1rem solid #000;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center; 
  }

  .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    @media (max-width: 768px) {
  /* styles for screens with a maximum width of 768px */
  .container {
    padding-left: 5rem;
  }
  .product-data {
    width: 100%;
    gap: 1rem;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  /* styles for screens with a minimum width of 768px and a maximum width of 1024px */
  .container {
    padding-left: 7rem;
  }
}

@media (min-width: 1024px) {
  /* styles for screens with a minimum width of 1024px */
  .container {
    padding-left: 10rem;
  }
}

`;

export default SingleProduct;
