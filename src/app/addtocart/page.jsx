"use client";
import Cart from "@/components/Cart";
import EmptyCart from "@/components/empty-cart";
import { useSearchParams } from "next/navigation";
import React from "react";

const CartPage = () => {
  const searchParams = useSearchParams();
  const productID = searchParams.get("productID");
  const productName = searchParams.get("productName");
  const productPrice = searchParams.get("productPrice");
  return (
    <Cart
      productID={productID}
      productName={productName}
      productPrice={productPrice}
    />
  );
  // return <EmptyCart />;
};

export default CartPage;
