import CartProductCard from "../cart-product-card/CartProductCard";
import Button from "@material-ui/core/Button";
import FastForwardRoundedIcon from "@material-ui/icons/FastForwardRounded";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = () => {

  return (
    <div className="cart-order-summary">
      <center>
        <h1>Cart Summary</h1>
      </center>
      <CartProductCard />
      <CartProductCard />
      <CartProductCard />
      <Link exact="true" to={`/checkout`} className="buy-now-link">
      <Button
            variant="contained"
            className="cart-payment"
            startIcon={<FastForwardRoundedIcon />}
          >
            Proceed to Checkout
          </Button>
          </Link>
    </div>
  );
};

export default Cart;
