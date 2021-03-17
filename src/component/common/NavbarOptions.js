import { makeStyles } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import AccountOption from "./AccountOption";
import CartOption from "./CartOption";
import LanguageOption from "./LanguageOption";
import { useNavBarStyles } from "./Styles/commonStyles";
import WishlistOption from "./WishlistOption";
import PropTypes from "prop-types";

const NavbarOptions = ({
  handleLanguageChange,
  purchase: { cartItems, wishlistItems },
}) => {
  const classes = useNavBarStyles();

  return (
    <div className={classes.root}>
      <CartOption cartItems={cartItems.length} />
      <div className={classes.desktopOnlyView}>
        <WishlistOption itemCount={wishlistItems.length} />
        <AccountOption />
        <LanguageOption handleLanguageChange={handleLanguageChange} />
      </div>
    </div>
  );
};

NavbarOptions.propTypes = {
  purchase: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  purchase: state.purchase,
});

export default connect(mapStateToProps, {})(NavbarOptions);
