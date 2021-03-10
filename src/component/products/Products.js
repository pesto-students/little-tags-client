import React from "react";
import "./products.css";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

export default function Products(props) {
  const rowStyle = {
    backgroundImage: "url(" + props.src + ")",
  };

  return (
    <>
      <Link exact="true" to={"#"} className="container">
        <div className="row" style={rowStyle}></div>
        <div className="product-title">{props.title}</div>
        <div>{props.subHeader}</div>
        <div className="price-container">
          <span>Rs.{props.discountedPrice}</span> &nbsp;
          <span>
            <del>Rs.{props.price}</del>
          </span>
          &nbsp;
          <span className="discount">(Rs.{props.discount} off)</span> &nbsp;
          <FavoriteBorderOutlinedIcon />
        </div>
      </Link>
    </>
  );
}
