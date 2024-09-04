import Link from "next/link";
import React from "react";

const ProductsAll = ({ products }) => {
  return (
    <div className=" px-10 mx-auto">
      <h2 className=" text-3xl text-center font-semibold my-5">
        {" "}
        Products Total {products.length}
      </h2>
      <div className=" grid grid-cols-4  gap-3 justify-center items-center w-full">
        {products.map((product) => (
          <div
            className=" mx-2 h-auto border shadow-sm shadow-gray-500 rounded-sm "
            key={product.id}
          >
            <div
              className={`relative delay-150 w-[180px] lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform`}
              style={{
                backgroundImage: `url(${product?.thumbnail})`,
              }}
            ></div>

            <div className=" p-1">
              <h2 className="text-sm lg:text-base mt-2 h-12">
                <Link
                  className="text-base font-bold"
                  href={`/product/${product.id}`}
                >
                  {product?.title}
                </Link>{" "}
                <span className="text-[#919090] text-sm">
                  <a href="./category.html">( {product?.category})</a>
                </span>
              </h2>

              <p className="text-[#919090] text-sm line-clamp-3">
                {product?.description}
              </p>

              <p className="text-rose-600 text-sm mt-4">
                <span className="text-[#919090] line-through">
                  ${product.discountPercentage}
                </span>{" "}
                ${product?.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsAll;
