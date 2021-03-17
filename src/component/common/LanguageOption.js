import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import React from "react";
import { FormattedMessage } from "react-intl";
import langPng from "../../assets/language.png";
import { useNavBarStyles } from "./Styles/commonStyles";

const LanguageOption = ({ handleLanguageChange }) => {
  const classes = useNavBarStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleLanguageOptions = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const menuId = "primary-language-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          handleLanguageChange("en");
          handleMenuClose();
        }}
      >
        English
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleLanguageChange("hi");
          handleMenuClose();
        }}
      >
        हिन्दी
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Button
        // edge="end"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleLanguageOptions}
        color="inherit"
      >
        <Avatar className={classes.iconStyle} src={langPng} />
        <span className={classes.iconText}>
          <FormattedMessage id="language" />
        </span>
      </Button>
      {renderMenu}
    </>
  );
};

export default LanguageOption;
