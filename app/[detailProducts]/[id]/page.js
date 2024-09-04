import { getData } from "@/lib/data";
import Image from "next/image";
import React from "react";

const Prod = ({ params: { id } }) => {
  const data = getData();
  const { products } = data;
  const details = products.find((product) => product.id == id);

  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
            <Image
              src={details?.thumbnail}
              className="w-[400px] h-[500px] mx-auto object-cover"
              alt=""
              width={200}
              height={200}
            />

            <div className="flex gap-4 mt-4">
              {details?.images.map((image) => (
                <ul key={image}>
                  <li>
                    <Image
                      src={details?.thumbnail}
                      className="w-[100px] h-[100px] mx-auto border object-cover"
                      alt=""
                      width={300}
                      height={300}
                    />
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {details?.title}
            </h1>
            <span className="text-[#919090] my-3">{details.category}</span>

            <div className="mt-3 flex items-center justify-start gap-1">
              {details?.reviews?.map((customer, i) => (
                <div key={i}>
                  <Image
                    src="/assets/svg/star.svg"
                    alt={customer.rating}
                    width={20}
                    height={20}
                  />
                </div>
              ))}
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3 ">
                <span className="me-5 font-semibold text-rose-600 opacity-60 line-through">
                  {details?.discountPercentage}{" "}
                </span>
                <span className="font-bold text-2xl">${details?.price}</span>
              </p>
            </div>
            <div>
              <p className="leading-7">{details?.description}</p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - $ {details.price}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Prod;
