import React from "react";

const Products = ({ products }) => {
  return (
    <div className="">
      Products {products.length}
      <div className=" grid grid-cols-4 justify-center items-center w-full">
        {products.map((product) => (
          <div key={product.id}>
            <div
              className={`relative delay-150 w-[180px] lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform`}
              style={{
                backgroundImage: `url(${product?.thumbnail})`,
              }}
            ></div>
            <h2 className="text-sm lg:text-base mt-2">
              <a className="text-base font-bold" href="./productPage.html">
                {product?.title}
              </a>
              <span className="text-[#919090]">
                <a href="./category.html">( {product?.category})</a>
              </span>
            </h2>
            <p className="text-[#919090] text-sm ">{product?.description}</p>

            <p className="text-rose-600 text-sm mt-4">
              <span className="text-[#919090] line-through">$205.00</span>{" "}
              $195.00
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
