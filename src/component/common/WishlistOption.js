import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import React from "react";
import favPng from "../../assets/favorite.png";
import { useNavBarStyles } from "./Styles/commonStyles";
import { Badge } from "@material-ui/core";

const WishlistOption = ({ itemCount }) => {
  const classes = useNavBarStyles();
  return (
    <IconButton color="inherit">
      <Badge badgeContent={itemCount} color="secondary">
        <Avatar src={favPng} className={classes.iconStyle} />
      </Badge>
    </IconButton>
  );
};

export default WishlistOption;
