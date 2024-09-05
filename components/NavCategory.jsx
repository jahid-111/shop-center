import { getData } from "@/lib/data";
import Link from "next/link";
import React from "react";

const NavCategory = () => {
  const data = getData();
  const categories = data?.products.map((product) => product.category);
  const navCategories = [...new Set(categories)];

  const capitalFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className=" w-auto h-auto  text-start">
      {navCategories.map((category, i) => (
        <div
          key={i}
          className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4"
        >
          <Link
            href={`/category/${category}`}
            className="hover:border-b border-black block h-6 box-border mt-4"
          >
            {capitalFirstLetter(category)}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavCategory;
