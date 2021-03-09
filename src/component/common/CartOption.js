import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import React from "react";
import cartPng from "../../assets/cart.png";
import { useNavBarStyles } from "./Styles/commonStyles";

const CartOption = ({ onClick }) => {
  const classes = useNavBarStyles();
  return (
    <IconButton color="inherit" onClick={onClick}>
      <Badge badgeContent={0} color="secondary">
        <Avatar variant="rounded" src={cartPng} className={classes.iconStyle} />
      </Badge>
    </IconButton>
  );
};

export default CartOption;
