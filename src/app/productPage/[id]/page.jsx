"use client";
import React from "react";
import ProductData from "../../../Data/ProductData.json";

const ProductItem = ({ params }) => {
  console.log("ProductData, Page", ProductData);
  console.log("params", params);

  const productId = +params.id;
  console.log("productId", productId);
  const productDetails = ProductData.find(
    (product) => product.id === productId,
  );

  console.log("productDetails", productDetails);

  return (
    <div>
      <div>
        <p>Product ID: {productDetails.id}</p> <hr />
        <p>Price: {productDetails.price}</p> <hr />
        <h1>Product Name: {productDetails.productname}</h1> <hr />
      </div>
    </div>
  );
};

export default ProductItem;
