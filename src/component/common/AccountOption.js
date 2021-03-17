import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import React from "react";
import accPng from "../../assets/user_account.png";
import Login from "../auth/Login";
import { useNavBarStyles } from "../common/Styles/commonStyles";
import { Button } from "@material-ui/core";

const AccountOption = () => {
  const classes = useNavBarStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button color="inherit" onClick={handleClickOpen}>
        <Avatar src={accPng} className={classes.iconStyle} variant="rounded" />
      </Button>
      <Login open={open} handleClose={handleClose} />
    </>
  );
};

export default AccountOption;
