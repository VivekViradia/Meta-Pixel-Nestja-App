"use client";
import React from "react";

const Product = ({ productDetails }) => {
  console.log("Product Details", productDetails);
  return (
    <div>
      <div>
        <form>
          <p>Product ID: {productDetails.id}</p> <hr />
          <p>Price: {productDetails.price}</p> <hr />
          <h1>Product Name: {productDetails.productname}</h1> <hr />
        </form>
        <button type='button' className='border border-gray-700'>
          Add to Wish List
        </button>
        <br />
        <br />
        <button type='button' className='border border-gray-700'>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
