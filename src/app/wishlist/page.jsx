"use client";
import EmptyWishList from "@/components/EmptyWishList";
import WishList from "@/components/wishlist";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const WishListPage = () => {
  const [data, setData] = useState(true);

  const searchParams = useSearchParams();
  const productID = searchParams.get("productID");
  const productName = searchParams.get("productName");
  const productPrice = searchParams.get("productPrice");
  const company = searchParams.get("company");
  console.log("productData", productID, productName, productPrice);

  useEffect(() => {
    dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
    dataLayer.push({
      event: "wishlist",
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
    <div>
      {data ? (
        <WishList
          productID={productID}
          productName={productName}
          productPrice={productPrice}
          company={company}
        />
      ) : (
        <EmptyWishList />
      )}
    </div>
  );
};

export default WishListPage;
