"use client";
import CheckOut from "@/components/CheckOut";
import { useSearchParams } from "next/navigation";
import React from "react";

const CheckoutPage = () => {
  const useParams = useSearchParams();
  const productID = useParams.get("productID");
  const productName = useParams.get("productName");
  const productPrice = useParams.get("productPrice");
  const company = useParams.get("company");
  console.log(productID, productName, productPrice);

  return (
    <CheckOut
      productID={productID}
      productName={productName}
      productPrice={productPrice}
      company={company}
    />
  );
  //   return <div>Vivek Checkout</div>;
};

export default CheckoutPage;
