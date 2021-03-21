import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addToWishlist } from "../../actions/purchase";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button, CardActions, IconButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: 360,
    width: 300,
    margin: 10,
  },
  media: {
    height: 270,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 35,
  },
});

const ProductCard = ({
  id,
  src,
  title,
  subHeader,
  discountedPrice,
  price,
  discount,
  addToWishlist,
  wishListed,
}) => {
  discountedPrice = parseInt(discountedPrice * 74);
  price = parseInt(price * 74);
  src =
    "https://fakestoreapi.herokuapp.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg";
  // const rowStyle = {
  //   backgroundImage: "url(" + src + ")",
  // };
  const history = useHistory();
  const classes = useStyles();

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

  const handleBuyNow = () => {};

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          onClick={openProduct}
          className={classes.media}
          image={src}
          title=""
        ></CardMedia>
      </CardActionArea>
      <CardContent>
        <Typography
          noWrap
          style={{ display: "inline-block" }}
          variant="p"
          component="p"
        >
          {title}
        </Typography>
      </CardContent>

      <CardActions style={{ marginTop: -25, justifyContent: "space-evenly" }}>
        <Typography variant="body2" color="inherit" component="p">
          <span className="discounted-price">Rs.{discountedPrice}</span>
          <span style={{ marginLeft: 8, color: " #999999" }}>
            <del>{price}</del>
          </span>
        </Typography>
        <IconButton onClick={handleWishlist}>
          <FavoriteBorderOutlinedIcon
            color={wishListed ? "secondary" : "inherit"}
          />
        </IconButton>
        {/* <Button size="small" color="inherit " onClick={handleBuyNow}>
          Buy Now
        </Button> */}
      </CardActions>
    </Card>
  );
};

export default connect(null, { addToWishlist })(ProductCard);
