import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import image from "../../assets/login_banner.png";
import googleIcon from "../../assets/google.jpg";
import facebookIcon from "../../assets/facebook.png";
import phoneIcon from "../../assets/phone.png";

const useStyles = makeStyles((theme) => ({
  contents: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      height: "auto",
    },
  },
  banner: {},
  buttons: {
    display: "flex",
  },
  google: {
    marginRight: theme.spacing(0.5),
  },
  phone: {
    marginLeft: theme.spacing(0.5),
  },
}));

const Login = ({ open, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  return (
    <Dialog fullScreen={fullScreen} scroll="body" open={open}>
      <div className={classes.contents}>
        <div>
          <img className={classes.banner} src={image} />
        </div>
        <Typography className={classes.center}>Sign in with</Typography>
        <div className={classes.buttons}>
          <Button className={classes.google} variant="outlined">
            <Avatar alt="google login" src={googleIcon} /> Google
          </Button>
          <Button variant="outlined">
            <Avatar alt="facebook login" src={facebookIcon} />
            Facebook
          </Button>
          <Button className={classes.phone} variant="outlined">
            <Avatar alt="phone login" src={phoneIcon} /> Phone
          </Button>
        </div>
      </div>
      <DialogActions>
        <Button onClick={handleClose}>Skip</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
