import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import FastForwardRoundedIcon from "@material-ui/icons/FastForwardRounded";
import "./payment.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import check from "../../assets/check.png";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Payment = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setTimeout(() => {
      setOpen(true);  
    }, 1000);
    
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState("razorpay");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const divStyle = {
    backgroundImage: "url(" + check + ")",
  };
  return (
    <div className="payment-container">
      <center>
        <h1>Delivering To</h1>
      </center>
      <div>
        <span>
          Bhavesh Khandelwal, Tilak chowk Wakeel Line Paratwada - 444805
        </span>
      </div>
      <center>
        <h1>Payment Method</h1>
        <FormControl component="fieldset">
          {/* <FormLabel component="legend">Gender</FormLabel> */}
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="razorpay"
              control={<Radio />}
              label="RazorPay"
            />
            <FormControlLabel value="stripe" control={<Radio />} label="Stripe" />
            <FormControlLabel
              value="cod"
              control={<Radio />}
              label="Cash on delivery"
            />
          </RadioGroup>
        </FormControl>
      </center>
      <Button
        variant="contained"
        className="cart-payment"
        startIcon={<FastForwardRoundedIcon />}
        onClick={handleOpen}
      >
        Proceed to Payment
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <div className="payment-check" style={divStyle}>

          </div>
            <h2 id="transition-modal-title">Payment Successful</h2>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Payment;
