"use client";
import React from "react";
import ProductListing from "@/components/ProductListing";
import { ProductData123 } from "@/constants";
import ReactGA from "react-ga4";

export const ProductPage = () => {
  useEffect(() => {
    // Trigger a custom event for tracking product listing page view
    ReactGA.event({
      category: "view_item_list",
      action: "View",
      label: "Product Listing Page View",
    });
  }, []);

  return <ProductListing productData={ProductData123} />;
};

export default ProductPage;
