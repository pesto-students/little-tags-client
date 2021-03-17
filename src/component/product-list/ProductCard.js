import React from "react";
import "./ProductCard.css";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { useHistory } from "react-router-dom";
import { CardActionArea, IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import { addToWishlist } from "../../actions/purchase";

const ProductCard = ({
  id,
  src,
  title,
  subHeader,
  discountedPrice,
  price,
  discount,
  addToWishlist,
}) => {
  const rowStyle = {
    backgroundImage: "url(" + src + ")",
  };
  const history = useHistory();

  const openProduct = () => {
    history.push(`/product/${id}`);
  };

  const handleWishlist = () => {
    addToWishlist({
      id,
      src,
      title,
      subHeader,
      discountedPrice,
      price,
      discount,
    });
  };

  return (
    <div className="container">
      <CardActionArea className="action-area" onClick={openProduct}>
        <div className="row" style={rowStyle}></div>
        <div className="product-title">{title}</div>
        <div>{subHeader}</div>
      </CardActionArea>
      <div className="price-container">
        <span className="discounted-price">Rs.{discountedPrice}</span> &nbsp;
        <span>
          <del>Rs.{price}</del>
        </span>
        {/* &nbsp; */}
        <span className="discount">(Rs.{discount} off)</span>&nbsp;
        <IconButton onClick={handleWishlist}>
          &nbsp;
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        &nbsp;
      </div>
    </div>
  );
};

export default connect(null, { addToWishlist })(ProductCard);
