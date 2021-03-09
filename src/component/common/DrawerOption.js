import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import React from "react";
import menuPng from "../../assets/menu.png";
import { useNavBarStyles } from "./Styles/commonStyles";

const DrawerOption = () => {
  const classes = useNavBarStyles();
  return (
    <IconButton color="inherit" className={classes.mobileOnlyView}>
      <Avatar src={menuPng} className={classes.iconStyle} />
    </IconButton>
  );
};

export default DrawerOption;
