"use client";
import React, { useEffect } from "react";
// import ProductData from "../../../Data/ProductData.json";
import { ProductData123 } from "@/constants";
import Product from "@/components/Product";
import ReactGA from "react-ga4";

const ProductItem = ({ params }) => {
  console.log("params", params);

  const productId = +params.id;
  console.log("productId", productId);
  const productDetails = ProductData123.find(
    (product) => product.id === productId,
  );
  const productname = productDetails.productname;
  const productID = productDetails.id;

  useEffect(() => {
    // Trigger a custom event for tracking product page view
    ReactGA.event({
      category: "Product",
      action: "View",
      label: { productname }, // or any other relevant label
      value: { productID }, // or any other relevant value
    });
  }, [productID, productname]);

  console.log("productDetails", productDetails);

  return <Product productDetails={productDetails} />;
};

export default ProductItem;
