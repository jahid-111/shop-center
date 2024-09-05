// components/Layout.js
import NavCategory from "@/components/NavCategory";
import React from "react";

const Layout = ({ children }) => {
  return (
    <section className="max-w-7xl lg:w-10/12 mx-auto py-0 lg:py-10 lg:flex justify-between gap-3 items-start">
      <NavCategory />

      {children}
    </section>
  );
};

export default Layout;
//
