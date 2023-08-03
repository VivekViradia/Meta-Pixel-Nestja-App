"use client";
import React, { useEffect } from "react";
import ProductListing from "@/components/ProductListing";
import { ProductData123 } from "@/constants";
import { usePathname } from "next/navigation";

export const ProductPage = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);
  useEffect(() => {
    window.dataLayer.push({
      event: "Product Listing",
      pagePath: "/productpage",
      pageName: "Product Listing",
    });
  }, []);
  return <ProductListing productData={ProductData123} />;
};

export default ProductPage;
