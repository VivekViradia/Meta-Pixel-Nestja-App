"use client";
import Cart from "@/components/Cart";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const CartPage = () => {
  const searchParams = useSearchParams();
  const productID = searchParams.get("productID");
  const productName = searchParams.get("productName");
  const productPrice = searchParams.get("productPrice");
  const company = searchParams.get("company");

  useEffect(() => {
    dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
    dataLayer.push({
      event: "add_to_cart",
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
    <Cart
      productID={productID}
      productName={productName}
      productPrice={productPrice}
      company={company}
    />
  );
  // return <EmptyCart />;
};

export default CartPage;
