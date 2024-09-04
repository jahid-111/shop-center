import React from "react";

import { getData } from "@/lib/data";
import ProductsAll from "@/components/ProductsAll";

const Product = () => {
  const data = getData();
  const { products } = data;
  return (
    <div className=" bg-red-100">
      <ProductsAll products={products} />
    </div>
  );
};

export default Product;
