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
  const productPrice = productDetails.price;
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
            item_id: "SKU_12345",
            item_name: "Stan and Friends Tee",
            affiliation: "Google Merchandise Store",
            coupon: "SUMMER_FUN",
            discount: 2.22,
            index: 0,
            item_brand: "Google",
            item_category: "Apparel",
            item_category2: "Adult",
            item_category3: "Shirts",
            item_category4: "Crew",
            item_category5: "Short sleeve",
            item_list_id: "related_products",
            item_list_name: "Related Products",
            item_variant: "green",
            location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
            price: 9.99,
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
