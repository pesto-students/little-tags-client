import React from "react";
import "./wishlist.css";
import WishlistProductCard from "./WishlistProductCard";

const Wishlist = () => {
  return (
    <div className="wishlist-container">
      <WishlistProductCard />
      <WishlistProductCard />
      <WishlistProductCard />
      <WishlistProductCard />
      <WishlistProductCard />
      <WishlistProductCard />
      <WishlistProductCard />
      <WishlistProductCard />
    </div>
  );
};

export default Wishlist;
