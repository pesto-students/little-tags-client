import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  center: {
    display: "flex",
    justifyContent: "center",
  },
  contents: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    margin: theme.spacing(10),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Login = ({ open, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const classes = useStyles();

  return (
    <Dialog fullScreen={fullScreen} open={open}>
      <DialogTitle className={classes.center}>Sign in</DialogTitle>
      <DialogContent className={classes.contents}>
        <Button className={classes.button} variant="outlined">
          <Avatar alt="google login" src="../../assets/cart.png" /> Google
        </Button>
        <Button className={classes.button} variant="outlined">
          <Avatar alt="facebook login" src="../../assets/cart.png" />
          Facebook
        </Button>
        <Button className={classes.button} variant="outlined">
          <Avatar alt="phone login" src="../../assets/cart.png" /> Phone
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Skip</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
