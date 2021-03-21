import React from "react";
import { connect } from "react-redux";
import ProductCard from "../product-list/ProductCard";
import "./wishlist.css";
// import WishlistProductCard from "./WishlistProductCard";

const Wishlist = ({ purchase: { wishlistItems, cartItems } }) => {
  const renderWishlistItems = wishlistItems.map((item) => {
    const wishListedIndex = wishlistItems.findIndex(
      (wish_item) => wish_item.id === item.id
    );
    const wishListed = wishListedIndex >= 0 ? true : false;
    const cartIndex = cartItems.findIndex(
      (cart_item) => cart_item.id === item.id
    );
    const addedToBag = cartIndex >= 0 ? true : false;

    return (
      <ProductCard
        id={item.id}
        src={item.image}
        title={item.title}
        subHeader={item.category}
        discountedPrice={item.price}
        price={item.price * 2}
        discount={item.price}
        key={item.id}
        wishListed={wishListed}
        addedToBag={addedToBag}
      />
    );
  });
  return <div className="wishlist-container">{renderWishlistItems}</div>;
};

const mapStateToProps = (state) => ({
  purchase: state.purchase,
});
export default connect(mapStateToProps, {})(Wishlist);
