import { makeStyles } from "@material-ui/core";
import React from "react";
import AccountOption from "./AccountOption";
import CartOption from "./CartOption";
import LanguageOption from "./LanguageOption";
import { useNavBarStyles } from "./Styles/commonStyles";
import WishlistOption from "./WishlistOption";

const NavbarOptions = ({ handleLanguageChange }) => {
  const classes = useNavBarStyles();

  return (
    <div className={classes.root}>
      <CartOption />
      <div className={classes.desktopOnlyView}>
        <WishlistOption />
        <AccountOption />
        <LanguageOption handleLanguageChange={handleLanguageChange} />
      </div>
    </div>
  );
};

export default NavbarOptions;
