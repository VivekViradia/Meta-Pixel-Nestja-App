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
  console.log("productData", productID, productName, productPrice);

  return (
    <div>
      {data ? (
        <WishList
          productID={productID}
          productName={productName}
          productPrice={productPrice}
        />
      ) : (
        <EmptyWishList />
      )}
    </div>
  );
};

export default WishListPage;
