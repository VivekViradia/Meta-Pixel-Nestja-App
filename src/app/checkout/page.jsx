"use client";
import CheckOut from "@/components/CheckOut";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const CheckoutPage = () => {
  const useParams = useSearchParams();
  const productID = useParams.get("productID");
  const productName = useParams.get("productName");
  const productPrice = useParams.get("productPrice");
  const company = useParams.get("company");
  console.log(productID, productName, productPrice);

  useEffect(() => {
    dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
    dataLayer.push({
      event: "check_out",
      ecommerce: {
        currency: "USD",
        value: { productPrice },
        items: [
          {
            item_id: { productID },
            item_name: { productName },
            affiliation: { company },
            discount: 2.22,
            price: { productPrice },
            quantity: 1,
          },
        ],
      },
    });
  });

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
