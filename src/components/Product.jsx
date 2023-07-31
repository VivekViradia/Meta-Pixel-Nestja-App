"use client";
import React from "react";

const Product = ({ productDetails }) => {
  return (
    <div>
      <div>
        <form>
          <p>Product ID: {productDetails.id}</p> <hr />
          <p>Price: {productDetails.price}</p> <hr />
          <h1>Product Name: {productDetails.productname}</h1> <hr />
        </form>
        <button type='button'>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
