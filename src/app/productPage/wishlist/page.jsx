"use client";
import EmptyWishList from "@/components/EmptyWishList";
import WishList from "@/components/wishlist";
import React, { useState } from "react";

const WishListPage = () => {
  const [data, setData] = useState(false);

  return <div>{data ? <WishList /> : <EmptyWishList />}</div>;
};

export default WishListPage;
