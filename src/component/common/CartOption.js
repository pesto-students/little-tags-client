import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import React from "react";
import cartPng from "../../assets/cart.png";
import { useNavBarStyles } from "./Styles/commonStyles";
import { Link } from "react-router-dom";
const CartOption = ({ onClick, cartItems }) => {
  const classes = useNavBarStyles();
  return (
    <Link exact="true" to={`/cart`} className="buy-now-link">
      <IconButton color="inherit" onClick={onClick}>
        <Badge badgeContent={cartItems} color="secondary">
          <Avatar
            variant="rounded"
            src={cartPng}
            className={classes.iconStyle}
          />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default CartOption;
