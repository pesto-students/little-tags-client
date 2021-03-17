import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import React from "react";
import favPng from "../../assets/favorite.png";
import { useNavBarStyles } from "./Styles/commonStyles";
import { Badge } from "@material-ui/core";

const WishlistOption = ({ itemCount }) => {
  const classes = useNavBarStyles();
  return (
    <Button color="inherit" focusRipple={true}>
      <Badge badgeContent={itemCount} color="secondary">
        <Avatar src={favPng} className={classes.iconStyle} variant="rounded" />
      </Badge>
    </Button>
  );
};

export default WishlistOption;
