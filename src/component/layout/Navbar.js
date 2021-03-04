import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import { FormattedMessage } from "react-intl";
import Login from "../auth/Login";
import { Avatar, Icon, TextField } from "@material-ui/core";
import SearchBar from "../common/SearchBar";
import iconPng from "../../assets/icon.png";
import cartPng from "../../assets/cart.png";
import searchPng from "../../assets/search.png";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  logoButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    marginLeft: 2,
  },
  searchbar: {
    width: theme.spacing(70),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  iconText: {
    fontSize: 15,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Navbar = ({ handleLanguageChange }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLanguageOptions = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
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

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <Badge badgeContent={0} color="secondary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
        <p>
          <FormattedMessage id="cart" />
        </p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit" onClick={handleClickOpen}>
          <Badge badgeContent={0} color="secondary">
            <AccountCircleOutlinedIcon />
          </Badge>
        </IconButton>
        <p>
          <FormattedMessage id="account" />
        </p>
      </MenuItem>
      <MenuItem onClick={handleLanguageOptions}>
        <IconButton
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <LanguageOutlinedIcon />
        </IconButton>
        <p>
          <FormattedMessage id="language" />
        </p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar color="transparent" position="static">
        <Toolbar className={classes.title}>
          <IconButton
            edge="start"
            className={classes.logoButton}
            color="inherit"
          >
            <Avatar src={iconPng} style={{ marginRight: 4 }} />
            <Typography variant="h6" noWrap>
              OneTagShop
            </Typography>
          </IconButton>

          <div className={classes.searchbar}>
            <SearchBar />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit" size="small">
              <Badge badgeContent={0} color="secondary">
                <Avatar variant="rounded" src={cartPng} />
              </Badge>
              {/* <span className={classes.iconText}>
                <FormattedMessage id="cart" />
              </span> */}
            </IconButton>
            <IconButton color="inherit" onClick={handleClickOpen}>
              <AccountCircleOutlinedIcon fontSize="large" />
              {/* <span className={classes.iconText}>
                <FormattedMessage id="account" />
              </span> */}
            </IconButton>
            <IconButton
              edge="end"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleLanguageOptions}
              color="inherit"
            >
              <LanguageOutlinedIcon />
              <span className={classes.iconText}>
                <FormattedMessage id="language" />
              </span>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton color="inherit" size="small">
              <Avatar src={searchPng} />
            </IconButton>
            <IconButton color="inherit" size="small">
              <Badge badgeContent={0} color="secondary">
                <Avatar src={cartPng} variant="rounded" />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Login open={open} handleClose={handleClose} />
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default Navbar;
