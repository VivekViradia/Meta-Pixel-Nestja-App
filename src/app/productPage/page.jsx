"use client";
import React from "react";
import ProductListing from "@/components/ProductListing";
import { ProductData123 } from "@/constants";
import { usePathname } from "next/navigation";

export const ProductPage = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);

  return <ProductListing productData={ProductData123} />;
};

export default ProductPage;
