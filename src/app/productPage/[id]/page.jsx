"use client";
import React, { useEffect } from "react";
// import ProductData from "../../../Data/ProductData.json";
import { ProductData123 } from "@/constants";
import Product from "@/components/Product";

const ProductItem = ({ params }) => {
  const productId = +params.id;
  console.log("productId", productId);
  const productDetails = ProductData123.find(
    (product) => product.id === productId,
  );
  const productID = productDetails.id;
  const productPrice = productDetails.price;
  const productCompany = productDetails.company;
  const productName = productDetails.productname;
  console.log("productDetails______", productDetails);
  console.log("productDetails__123____", productPrice);

  useEffect(() => {
    dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
    dataLayer.push({
      event: "view_item",
      ecommerce: {
        currency: "USD",
        value: { productPrice },
        items: [
          {
            item_id: { productID },
            item_name: { productName },
            company_name: { productCompany },
            price: { productPrice },
            quantity: 1,
          },
        ],
      },
    });
  });

  console.log("productDetails", productDetails);

  return <Product productDetails={productDetails} />;
};

export default ProductItem;
