import Link from "next/link";
import React, { Suspense } from "react";
import Loading from "./Loading";

const Categories = ({ category }) => {
  console.log(category[0].thumbnail);
  return (
    <div className="grid grid-cols-3 gap-4  justify-center items-center">
      {category?.map((product) => (
        <div key={product.id} className=" border shadow-lg">
          <Suspense fallback={<Loading />}>
            <div
              className="relative delay-150 w-[180px] lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform"
              style={{
                backgroundImage: `url(${product?.thumbnail})`,
              }}
            ></div>
          </Suspense>
          <div className=" p-1">
            <h2 className="text-sm lg:text-base mt-2">
              <Link
                href={`/product/${product?.id}`}
                className="text-base font-bold"
              >
                {product.title}
              </Link>{" "}
              <span className=" font-semibold text-green-400">
                <Link href={`/category/${product?.category}`}>
                  ( {product?.category} )
                </Link>
              </span>
            </h2>
            <p className="text-[#919090] text-sm ">{product?.description}</p>

            <p className="text-rose-600 text-sm mt-4">
              <span className="text-[#919090] line-through">
                ${product?.discountPercentage}
              </span>{" "}
              ${product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
