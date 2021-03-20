import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import React from "react";
import cartPng from "../../assets/cart.png";
import { useNavBarStyles } from "./Styles/commonStyles";
import { Link } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const CartOption = ({ onClick, cartItems }) => {
  const classes = useNavBarStyles();
  const ownClasses = useStyles();

  return (
    <Link exact="true" to={`/cart`}>
      <Button color="inherit" onClick={onClick}>
        <Badge badgeContent={cartItems} color="secondary">
          <Avatar
            // style={{ }}
            variant="square"
            src={cartPng}
            className={classes.iconStyle}
          />
        </Badge>
      </Button>
    </Link>
  );
};

export default CartOption;
