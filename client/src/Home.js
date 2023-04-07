import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted  from "./components/Trusted";
import FeatureProduct from "./components/FeatureProduct";
const Home = (props) => {
  const data = {
    name: "E-bazar",
  };

  return (
     <>
       <div className="e-container">
       <HeroSection myData={data} />;
        </div>
        <FeatureProduct {...props}/>
      <Services/>
      <Trusted/>
    
   </>
  )
};

export default Home;