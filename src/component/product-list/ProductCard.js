import React from "react";
import "./ProductCard.css";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  src,
  title,
  subHeader,
  discountedPrice,
  price,
  discount,
}) => {
  const rowStyle = {
    backgroundImage: "url(" + src + ")",
  };

  return (
    <>
      <Link exact="true" to={`/product/${id}`} className="container">
        <div className="row" style={rowStyle}></div>
        <div className="product-title">{title}</div>
        <div>{subHeader}</div>
        <div className="price-container">
          <span className="discounted-price">Rs.{discountedPrice}</span> &nbsp;
          <span>
            <del>Rs.{price}</del>
          </span>
          &nbsp;
          <span className="discount">(Rs.{discount} off)</span> &nbsp;
          <FavoriteBorderOutlinedIcon />
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
