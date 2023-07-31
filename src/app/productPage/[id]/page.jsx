"use client";
import React from "react";
// import ProductData from "../../../Data/ProductData.json";
import { ProductData123 } from "@/constants";
import Product from "@/components/Product";

const ProductItem = ({ params }) => {
  // const { products } = ProductData;
  // console.log("ProductData, Page", products);
  console.log("params", params);

  const productId = +params.id;
  console.log("productId", productId);
  const productDetails = ProductData123.find(
    (product) => product.id === productId,
  );

  console.log("productDetails", productDetails);

  return (
    // <div>
    //   <div>
    //     <form>
    //       <p>Product ID: {productDetails.id}</p> <hr />
    //       <p>Price: {productDetails.price}</p> <hr />
    //       <h1>Product Name: {productDetails.productname}</h1> <hr />
    //     </form>
    //     <button type='button'>Add to Cart</button>
    //   </div>
    // </div>
    <Product productDetails={productDetails} />
  );
};

export default ProductItem;
