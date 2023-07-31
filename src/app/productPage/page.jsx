"use client";
import React from "react";
import ProductListing from "@/components/ProductListing";
import { ProductData123 } from "@/constants";

export const ProductPage = () => {
  return <ProductListing productData={ProductData123} />;
};

export default ProductPage;
