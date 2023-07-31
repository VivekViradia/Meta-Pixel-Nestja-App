"use client";
import React from "react";
// import { ProductData123 } from "@/constants";
import { ProductData123 } from "@/constants";

const DemoPage = () => {
  console.log("ProductData123", ProductData123);

  return (
    <>
      <div>DemoPage</div>
      <div>
        {ProductData123.map((pro) => (
          <h1>{pro.id}</h1>
        ))}
      </div>
    </>
  );
};

export default DemoPage;
