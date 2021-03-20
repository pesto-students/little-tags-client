import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import React, { useState } from "react";
import menuPng from "../../assets/menu.png";
import { useNavBarStyles } from "./Styles/commonStyles";
import Button from "@material-ui/core/Button";
import DrawerItems from "./DrawerItems";
import { SwipeableDrawer } from "@material-ui/core";

const DrawerOption = () => {
  const classes = useNavBarStyles();
  const [open, setDrawerState] = useState(false);

  const toggleDrawer = () => {
    setDrawerState(!open);
  };

  return (
    <Button
      color="inherit"
      onClick={toggleDrawer}
      className={classes.mobileOnlyView}
    >
      <Avatar src={menuPng} className={classes.iconStyle} />
      <SwipeableDrawer
        anchor={"left"}
        open={open}
        onClick={toggleDrawer}
        onClose={null}
        onOpen={null}
      >
        <DrawerItems />
      </SwipeableDrawer>
    </Button>
  );
};

export default DrawerOption;
