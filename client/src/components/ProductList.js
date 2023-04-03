import React from "react";
import { useFilterContext } from "./context/filter_context";
import GridView from "./GridView";
// import ListView from "./LIstView";

const ProductList = () => {
  const { filter_products, setGridView } = useFilterContext();

  if (setGridView) {
    return <GridView products={filter_products} />;
  }

  // if (grid_view === false) {
  //   return <ListView products={filter_products} />;
  // }
};

export default ProductList;