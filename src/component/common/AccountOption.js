import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import React from "react";
import accPng from "../../assets/user_account.png";
import Login from "../auth/Login";
import { useNavBarStyles } from "../common/Styles/commonStyles";

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
      <IconButton color="inherit" onClick={handleClickOpen}>
        <Avatar src={accPng} className={classes.iconStyle} variant="rounded" />
      </IconButton>
      <Login open={open} handleClose={handleClose} />
    </>
  );
};

export default AccountOption;
