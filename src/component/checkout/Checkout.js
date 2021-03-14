import React from "react";
import "./checkout.css";
import Button from "@material-ui/core/Button";
import FastForwardRoundedIcon from "@material-ui/icons/FastForwardRounded";
import CartProductCard from "../cart-product-card/CartProductCard";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

const Checkout = () => {
  return (
    <div className="cart-container">
      <div className="cart-order-container">
        <h1 className="order-heading">Order Details</h1>
        <CartProductCard />
        <CartProductCard />
        <CartProductCard />
      </div>
      <div className="cart-other-details-container">
        <div className="cart-address-container">
          <h1 className="order-heading">Address Details</h1>
          <div>
            <span className="deliver-to"> Deliver to:</span> 
            <span> Bhavesh Khandelwal, Tilak chowk Wakeel Line Paratwada - 444805 </span>
          </div>
          <Button
            variant="contained"
            className="cart-payment"
            startIcon={<HomeRoundedIcon />}
          >
            Change Address
          </Button>
        </div>

        <div className="cart-price-container">
          <h1 className="order-heading">Price Details</h1>
          <div className="cart-price-details">
            <div className="cart-subtotal-container">
              <span>Subtotal</span>
              <span>7800</span>
            </div>
            <div className="cart-discount-container">
              <span>Discount</span>
              <span>2800</span>
            </div>
            <div className="cart-delivery-container">
              <span>Delivery Charges</span>
              <span>FREE</span>
            </div>
            <div className="cart-total-container">
              <span>Total</span>
              <span>5000</span>
            </div>
          </div>
          <Button
            variant="contained"
            className="cart-payment"
            startIcon={<FastForwardRoundedIcon />}
          >
            Proceed to Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
