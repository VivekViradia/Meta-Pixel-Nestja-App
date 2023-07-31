"use client";
import React from "react";
// import ProductData from "../../../Data/ProductData.json";
import { ProductData123 } from "@/constants";
import Product from "@/components/Product";

const ProductItem = ({ params }) => {
  console.log("params", params);

  const productId = +params.id;
  console.log("productId", productId);
  const productDetails = ProductData123.find(
    (product) => product.id === productId,
  );

  console.log("productDetails", productDetails);

  return <Product productDetails={productDetails} />;
};

export default ProductItem;
