import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import SearchBar from "../common/SearchBar";
import iconPng from "../../assets/icon.png";
import NavbarOptions from "../common/NavbarOptions";
import DrawerOption from "../common/DrawerOption";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {},
  title: {},
  iconText: {
    fontSize: 15,
  },
  search: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),

    width: 600,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: 10,
      marginBottom: 5,
    },
  },

  sectionDesktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  sectionMobile: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  row1: {
    display: "flex",
    width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   display: "none",
    // },
  },

  home: {
    "text-decoration": "none",
    color: "black",
  },
}));

const Navbar = ({ handleLanguageChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar color="transparent" position="static">
        <Toolbar className={classes.sectionDesktop}>
          <div style={{ alignSelf: "flex-start" }}>
            <DrawerOption />
          </div>

          <Link exact="true" to={"/"} className={classes.home}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
            >
              <Avatar
                src={iconPng}
                style={{ marginRight: 4, width: 32, height: 32 }}
              />
              <Typography variant="h6" noWrap className={classes.title}>
                OneTagShop
              </Typography>
            </IconButton>
          </Link>
          <div className={classes.search}>
            <SearchBar />
          </div>
          <div className={classes.grow} />

          <NavbarOptions handleLanguageChange={handleLanguageChange} />
        </Toolbar>
        <Toolbar className={classes.sectionMobile}>
          <div className={classes.row1}>
            <div style={{ alignSelf: "flex-start" }}>
              {/* <DrawerOption /> */}
            </div>
            <div className={classes.grow} />
            <Link exact="true" to={"/"} className={classes.home}>
              <IconButton
                edge="center"
                className={classes.menuButton}
                color="inherit"
              >
                <Avatar
                  src={iconPng}
                  style={{ marginRight: 4, width: 32, height: 32 }}
                />
                <Typography variant="h6" noWrap className={classes.title}>
                  OneTagShop
                </Typography>
              </IconButton>
            </Link>
            <div className={classes.grow} />

            <NavbarOptions />
          </div>
          <div className={classes.search}>
            <SearchBar />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
