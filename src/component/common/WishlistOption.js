import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import React from "react";
import favPng from "../../assets/favorite.png";
import { useNavBarStyles } from "./Styles/commonStyles";
import { Badge } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const WishlistOption = ({ itemCount }) => {
  const classes = useNavBarStyles();
  const history = useHistory();

  return (
    <Button
      color="inherit"
      focusRipple={true}
      onClick={() => history.push("/wishlist")}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Badge badgeContent={itemCount} color="secondary">
        <Avatar src={favPng} className={classes.iconStyle} variant="rounded" />
      </Badge>
      <div className={classes.mobileOnlyView}>Wishlist</div>
    </Button>
  );
};

export default WishlistOption;
