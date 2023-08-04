"use client";
import React from "react";
import Link from "next/link";

const Product = ({ productDetails }) => {
  console.log("Product Details", productDetails);
  return (
    <div>
      <div>
        <form>
          <p>Product ID: {productDetails.id}</p> <hr />
          <p>Price: {productDetails.price}</p> <hr />
          <h1>Product Name: {productDetails.productname}</h1> <hr />
          <h1>Company: {productDetails.company}</h1> <hr />
        </form>
        <div>
          <Link
            href={{
              pathname: `/wishlist/`,
              query: {
                productID: productDetails.id,
                productName: productDetails.productname,
                productPrice: productDetails.price,
                company: productDetails.company,
              },
            }}
          >
            <button type='button' className='border border-gray-700'>
              Add to Wish List
            </button>
          </Link>
        </div>

        <br />
        <br />
        <div>
          <Link
            href={{
              pathname: `/addtocart/`,
              query: {
                productID: productDetails.id,
                productName: productDetails.productname,
                productPrice: productDetails.price,
                company: productDetails.company,
              },
            }}
          >
            <button type='button' className='border border-gray-700'>
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
