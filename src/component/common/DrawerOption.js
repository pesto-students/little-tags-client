import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import React from "react";
import menuPng from "../../assets/menu.png";
import { useNavBarStyles } from "./Styles/commonStyles";
import Button from "@material-ui/core/Button";

const DrawerOption = () => {
  const classes = useNavBarStyles();
  return (
    <Button color="inherit" className={classes.mobileOnlyView}>
      <Avatar src={menuPng} className={classes.iconStyle} />
    </Button>
  );
};

export default DrawerOption;
