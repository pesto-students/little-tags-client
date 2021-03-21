import CartProductCard from "../cart-product-card/CartProductCard";
import Button from "@material-ui/core/Button";
import FastForwardRoundedIcon from "@material-ui/icons/FastForwardRounded";
import "./cart.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart, addToWishlist } from "../../actions/purchase";
import ProductCard from "../product-list/ProductCard";
import { Typography } from "@material-ui/core";

const Cart = ({ purchase: { cartItems, wishlistItems } }) => {
  const renderCartItems = cartItems.map((item) => {
    const wishListedIndex = wishlistItems.findIndex(
      (wish_item) => wish_item.id === item.id
    );
    const wishListed = wishListedIndex >= 0 ? true : false;
    const cartIndex = cartItems.findIndex(
      (cart_item) => cart_item.id === item.id
    );
    const addedToBag = cartIndex >= 0 ? true : false;

    return (
      <ProductCard
        id={item.id}
        src={item.image}
        title={item.title}
        subHeader={item.category}
        discountedPrice={item.price}
        price={item.price * 2}
        discount={item.price}
        key={item.id}
        wishListed={wishListed}
        addedToBag={addedToBag}
      />
    );
  });

  return (
    <div className="cart-order-summary">
      {cartItems.length === 0 ? (
        <div style={{ marginTop: "10%", margin: 5 }}>
          <Typography>Your cart is empty</Typography>
          <div>Add items to it now</div>
          <Link exact="true" to={`/`} className="buy-now-link">
            <Button
              // variant="contained"
              className="cart-payment"
              startIcon={<FastForwardRoundedIcon />}
            >
              Shop now
            </Button>
          </Link>
        </div>
      ) : (
        <div>
          <center>
            <h1>Cart Summary</h1>
          </center>
          {renderCartItems}
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
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  purchase: state.purchase,
});

export default connect(mapStateToProps, { addToCart })(Cart);
