import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import React from "react";
import favPng from "../../assets/favorite.png";
import { useNavBarStyles } from "./Styles/commonStyles";

const WishlistOption = () => {
  const classes = useNavBarStyles();
  return (
    <IconButton color="inherit">
      <Avatar src={favPng} className={classes.iconStyle} />
    </IconButton>
  );
};

export default WishlistOption;
