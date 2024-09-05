import Categories from "@/components/Categories";
import { getData } from "@/lib/data";
import React from "react";

const Category = ({ params: { category } }) => {
  const data = getData();

  const filteredProducts = data.products.filter(
    (product) => product.category === category
  );
  return (
    <div>
      <Categories category={filteredProducts} />
    </div>
  );
};

export default Category;
